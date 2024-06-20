import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  // description: "...",
};
export default async function ProjectsPage() {
  return (
    // underDevelopment
    <main className='bg-black min-h-screen'>
      <div className='flex items-center justify-center h-full'>
        {/* nice way to say that this page is under development */}
        <h1 className='text-white text-4xl md:text-7xl font-bold'>
          🚧Page is under development
        </h1>
      </div>
    </main>
  );
}
