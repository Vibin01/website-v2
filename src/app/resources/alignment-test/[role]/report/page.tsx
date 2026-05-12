import { redirect } from "next/navigation";
import { verifySession } from "@/lib/security/tokens";
import ReportClient from "./ReportClient";

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

  return <ReportClient role={role} />;
}