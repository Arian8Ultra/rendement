import React from "react";

export default async function AdminPage() {
  return (
    <div>
      {/* a navigation to mails and images pages of admin shown by 2 sqaures in the middle of the page */}
      <div className='flex flex-col gap-6 w-full relative'>
        <h1 className='text-5xl text-white text-center bg-black/60 p-10'>
          Admin Page
        </h1>
        <div className='flex justify-center gap-6'>
          <a href='/admin/mail' className='bg-white p-10 rounded-xl shadow-md'>
            Mails
          </a>
          <a href='/admin/image' className='bg-white p-10 rounded-xl shadow-md'>
            Images
          </a>
        </div>
      </div>
    </div>
  );
}
