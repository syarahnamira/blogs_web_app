"use client"

import FormComponent from "@/components/formComponent";

export default function AddUserPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="mb-4">Create New User</h1>
        <div>
          <FormComponent />
        </div>
      </main>
    </>
  );
}
