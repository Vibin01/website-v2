import { Suspense } from "react";
import { RoleSelector } from "./RoleSelector";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="px-[5%]">
      <RoleSelector />
      </div>
    </Suspense>
  );
}