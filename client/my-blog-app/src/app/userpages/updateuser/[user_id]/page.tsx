"use client";

import FormUpdateComponent from "@/components/formUpdate";
import { usePathname } from "next/navigation";

export default function EditUserPage() {
  const path = usePathname();
  const parts = path.split("/")
  const user_id = parts.pop()

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="mb-4">Update New User</h1>
        <div>
          <FormUpdateComponent id={Number(user_id)} />
        </div>
      </main>
    </>
  );
}
