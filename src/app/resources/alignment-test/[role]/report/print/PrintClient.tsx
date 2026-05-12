"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getReportAction } from "@/server/actions/assignment-action";
import PhasePrintDocument from "./PhasePrintDocument";
import OverallPrintDocument from "./OverallPrintDocument";

type Role = "candidate" | "recruiter" | "employer";

export default function PrintClient({ role }: { role: Role }) {
  const searchParams = useSearchParams();

  const mode = (searchParams.get("mode") || "single") as "single" | "full";
  const phase = searchParams.get("phase") || "uncertainty";

  const [report, setReport] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadReport() {
      const res = await getReportAction({
        role: role as any,
        mode,
        phase,
      });

      if (res.success) {
        setReport(res.report);
        setUser(res.user);

        setTimeout(() => {
          window.print();
        }, 600);
      }
    }

    loadReport();
  }, [role, mode, phase]);

  if (!report) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-bold">
        Preparing report...
      </div>
    );
  }

  return (
    <>
<style jsx global>{`
  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    background: #e5e5e5 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  @page {
    size: A4 portrait;
    margin: 0;
  }

  @media print {
    .no-print,
    header,
    nav,
    footer {
      display: none !important;
    }

    html,
    body {
      background: white !important;
      
      margin: 0 !important;
      padding: 0 !important;
    }

    #print-root {
      display: block !important;
      
      margin: 0 !important;
      padding: 0 !important;
      background: #fafdff !important;
    }
  }
`}</style>
      <div className="no-print flex justify-end bg-[#e5e5e5] p-4">
        <button
          onClick={() => window.print()}
          className="rounded-md bg-[#0668E1] px-6 py-3 text-white"
        >
          Print / Download
        </button>
      </div>

      {mode === "single" ? (
        <PhasePrintDocument report={report} user={user} />
      ) : (
        <OverallPrintDocument report={report} user={user} />
      )}
    </>
  );
}