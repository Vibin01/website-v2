"use server";

import prisma from "@/lib/db/prisma";
import { generateOtp, hashOtp } from "@/lib/security/otp";
import { createSession } from "@/lib/security/tokens";
import { sendOTPEmail } from "@/lib/email";
import { Role } from "@prisma/client";


export async function registerUserAction(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const role = String(formData.get("role") || "") as Role;

  if (!name || name.length < 2) {
    return { error: "Name must be at least 2 characters." };
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return { error: "Invalid email address." };
  }

  if (!role) {
    return { error: "Role is required." };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email,
      role,
    },
  });


  // ✅ Existing but not verified: send OTP again
  const user =
    existingUser ||
    (await prisma.user.create({
      data: {
        name,
        email,
        role,
      },
    }));

  const otp = generateOtp();
  const otpHash = hashOtp(otp);
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  await prisma.otpVerification.create({
    data: {
      userId: user.id,
      otpHash,
      expiresAt,
    },
  });

  try {
    await sendOTPEmail(email, otp);
  } catch (err) {
    console.error("Failed to send OTP email:", err);
  }

  return {
    success: true,
    userId: user.id,
    verified: false,
  };
}

export async function verifyOtpAction(userId: string, otp: string) {
  const otpHash = hashOtp(otp);
  const record = await prisma.otpVerification.findFirst({
    where: { userId, verifiedAt: null },
    orderBy: { createdAt: 'desc' }
  });

  if (!record) return { error: "No active OTP request found." };
  if (record.attemptCount >= 5) return { error: "Maximum attempts reached. Please request a new OTP." };
  if (record.expiresAt < new Date()) return { error: "OTP has expired." };

  if (record.otpHash !== otpHash) {
    await prisma.otpVerification.update({
      where: { id: record.id },
      data: { attemptCount: record.attemptCount + 1 }
    });
    return { error: "Incorrect OTP." };
  }

  await prisma.otpVerification.update({
    where: { id: record.id },
    data: { verifiedAt: new Date() }
  });

  await prisma.user.update({
    where: { id: userId },
    data: { verifiedAt: new Date() }
  });

  const user = await prisma.user.findUnique({ where: { id: userId }});
  
let journey = await prisma.assessmentJourney.findFirst({
  where: {
    userId,
    role: user!.role,
  },
});

if (!journey) {
  journey = await prisma.assessmentJourney.create({
    data: {
      userId,
      role: user!.role,
      status: "IN_PROGRESS",
    },
  });
}

  await createSession(userId);
  return { success: true };
}
