import React from "react";
export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full relative h-full bg-black/60 rounded-xl justify-center items-center">
      <h1 className="text-5xl text-white text-center p-10 items-center justify-center my-auto h-fit">
        Admin Panel
      </h1>
    </div>
  );
}
