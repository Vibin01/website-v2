import { redirect } from "next/navigation";
import { verifySession } from "@/lib/security/tokens";
import AssessmentTestClient from "./AssignmentTestClient";

type Role = "candidate" | "recruiter" | "employer";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ role: Role }>;
  searchParams: Promise<{
    mode?: "single" | "full";
    phase?: string;
  }>;
}) {
  const userId = await verifySession();

  const { role } = await params;
  const { mode = "single", phase = "uncertainty" } = await searchParams;

  if (!userId) {
    redirect(`/resources/alignment-test/register?mode=${mode}&phase=${phase}`);
  }

  return <AssessmentTestClient role={role} mode={mode} phase={phase} />;
}