"use client";

import { useRef, useState } from "react";
import { Briefcase, Building2, User } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Role } from "@/domain/assessment/types";
import {
  registerUserAction,
  verifyOtpAction,
} from "@/server/actions/auth-actions";
import { getAssessmentStatusAction } from "@/server/actions/assignment-action";

const personalEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "rediffmail.com",
  "protonmail.com",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isPersonalEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  return personalEmailDomains.includes(domain);
}

export function RoleSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode") || "single";
  const phase = searchParams.get("phase") || "uncertainty";

  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [step, setStep] = useState<"REGISTER" | "OTP">("REGISTER");
  const [userId, setUserId] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const roles = [
    {
      id: "candidate" as Role,
      title: "For Candidate",
      description: "Decide with confidence",
      icon: User,
      bgLight: "bg-blue-50",
    },
    {
      id: "recruiter" as Role,
      title: "For Recruiter",
      description: "Drive hiring with clarity",
      icon: Briefcase,
      bgLight: "bg-blue-50",
    },
    {
      id: "employer" as Role,
      title: "For Employer",
      description: "Decide with clarity",
      icon: Building2,
      bgLight: "bg-gray-100",
    },
  ];

  const routeAfterLogin = async (role: Role) => {
    const status = await getAssessmentStatusAction(role as any);

    if (status.success) {
      const phaseReports = (status.phaseReports || {}) as Record<string, any>;

      if (
        mode === "single" &&
        (status.completedPhases as string[])?.includes(phase) &&
        phaseReports[phase]
      ) {
        router.push(
          `/resources/alignment-test/${role}/report?mode=single&phase=${phase}`,
        );
        return;
      }

      if (mode === "full" && status.overallReport) {
        router.push(`/resources/alignment-test/${role}/report?mode=full`);
        return;
      }
    }
router.push(`/resources/alignment-test/${selectedRole}?mode=${mode}&phase=${phase}`);
    
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!selectedRole) {
      setError("Please select a role.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (
      (selectedRole === "recruiter" || selectedRole === "employer") &&
      isPersonalEmail(email)
    ) {
      setError("Recruiters and employers must use an official email.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("role", selectedRole);

    const res = await registerUserAction(formData);

    if (res.error) {
      setError(res.error);
      setLoading(false);
      return;
    }

    if (res.success) {
      setUserId(res.userId!);
      setStep("OTP");
    }

    setLoading(false);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;

    const nextOtp = [...otpValues];
    nextOtp[index] = value;
    setOtpValues(nextOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpString = otpValues.join("");

    if (!userId || !selectedRole || otpString.length !== 6) return;

    setLoading(true);
    setError("");

    const res = await verifyOtpAction(userId, otpString);

    if (res.error) {
      setError(res.error);
      setLoading(false);
      return;
    }

    if (res.success && selectedRole) {
      await routeAfterLogin(selectedRole);
    }

    setLoading(false);
  };

  if (step === "OTP") {
    return (
      <div className="flex flex-row items-center justify-around py-[5%]">
        <div className="flex flex-1 justify-center">
          <svg width="220" height="260" viewBox="0 0 100 120">
            <path
              d="M50 0 L100 20 L100 60 C100 90 75 110 50 120 C25 110 0 90 0 60 L0 20 Z"
              fill="#26374a"
            />
            <path
              d="M50 10 L90 26 L90 60 C90 84 70 102 50 110 C30 102 10 84 10 60 L10 26 Z"
              fill="white"
            />
            <path
              d="M30 60 L45 75 L80 30"
              fill="none"
              stroke="#0f62fe"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-1">
          <div className="rounded-md border border-[#D3E6FF] bg-white p-md shadow-[0_4px_40px_5px_#0668E10A]">
            <h2 className="mb-md text-h5 font-bold">OTP Verification</h2>

            <p className="mb-xs text-xl font-medium">
              Enter the OTP sent to your email.
            </p>

            {error && (
              <div className="mb-sm text-center text-lg font-medium text-red-500">
                {error}
              </div>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-md">
              <div className="flex justify-between gap-sm">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="h-[46px] w-[60px] rounded-full border-2 border-[#9F9F9F] text-center text-xl font-semibold text-primary outline-none focus:border-primary"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={loading || otpValues.join("").length < 6}
                className="w-full rounded-sm bg-primary px-md py-xs text-xl font-medium text-white disabled:opacity-60"
              >
                {loading ? "Verifying..." : "Verify"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-[5%]">
      <div className="flex-1">
        <h1 className="text-base font-bold">Start Your</h1>
        <h2 className="mb-md text-h2 font-extrabold text-primary">
          Alignment Journey
        </h2>

        <p className="text-base font-medium">
          Choose how you want to get started.
          <br />
          Your experience will adapt based on your role.
        </p>

        <div className="mt-md max-w-[420px] space-y-4">
          {roles.map((role) => {
            const Icon = role.icon;
            const active = selectedRole === role.id;

            return (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`flex cursor-pointer items-center gap-sm rounded-md border-[1.5px] p-sm transition-all ${
                  active
                    ? "border-primary shadow-[0_4px_20px_rgba(15,98,254,0.12)]"
                    : "border-[#ECF5FF] bg-white hover:border-blue-300"
                }`}
              >
                <div
                  className={`flex h-[52px] w-[52px] items-center justify-center rounded-full ${role.bgLight}`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      active ? "text-primary" : "text-gray-600"
                    }`}
                  />
                </div>

                <div>
                  <h3
                    className={`text-base font-bold ${
                      active ? "text-primary" : ""
                    }`}
                  >
                    {role.title}
                  </h3>
                  <p className="text-xl font-medium">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedRole && (
        <div className="flex-1">
          <div className="rounded-sm border border-[#D3E6FF] bg-white p-md shadow-[0px_4px_40px_5px_#0668E10A] md:max-w-[80%]">
            <h3 className="mb-md flex items-center gap-xs text-h5 font-bold">
              {roles.find((r) => r.id === selectedRole)?.title} Alignment Test
            </h3>

            <div className="mb-md rounded-sm border border-[#B2D0F6] bg-[#EEF6FF] p-sm text-xl font-medium text-primary">
              Understand how your decisions align across real hiring situations.
            </div>

            {error && (
              <div className="mb-sm text-md font-medium text-red-500">
                {error}
              </div>
            )}

            <form className="space-y-xs" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-sm border border-[#C5C4C4] px-sm py-xs text-[15px] font-medium outline-none focus:border-primary"
                required
              />

              <input
                type="email"
                placeholder={
                  selectedRole === "candidate"
                    ? "Email"
                    : "Official company email"
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-sm border border-[#C5C4C4] px-sm py-xs text-[15px] font-medium outline-none focus:border-primary"
                required
              />

              <div className="pt-md">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-sm bg-primary px-md py-xs text-xl font-medium text-white disabled:opacity-70"
                >
                  {loading
                    ? "Checking..."
                    : selectedRole === "candidate"
                      ? "Register for Free"
                      : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
