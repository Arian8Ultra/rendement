"use client";
import React from "react";
interface Props {
  handleSubmit: ({
    body,
    subject,
    userEmail,
    userPhone,
  }: {
    body: string;
    subject: string;
    userEmail: string;
    userPhone: string;
  }) => void;
}
const UserContactUsForm = ({ handleSubmit }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const subject = e.currentTarget.subject.value;
        const userEmail = e.currentTarget.userEmail.value;
        const userPhone = e.currentTarget.userPhone.value;
        const body = e.currentTarget.body.value;
        const requestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: {
            body: body,
            subject: subject,
            userEmail: userEmail,
            userPhone: userPhone,
          },
        };
        // @ts-ignore
        fetch("/api/mail", requestOption)
          .then((res) => res.json())
          .then((data) => {
            alert(data.message);
          });
      }}
      className='grid grid-cols-2 items-center justify-center p-16 gap-4 *:rounded-md bg-slate-50/20 w-full md:w-1/3 mx-auto rounded-lg backdrop-blur-3xl'
    >
      <input
        type='text'
        name='subject'
        placeholder='Subject'
        className='p-2 col-span-1 ring-1 ring-gray-300 resize-none bg-opacity-50 bg-white text-white placeholder:text-white'
      />
      <div className=''></div>
      <input
        type='email'
        name='userEmail'
        placeholder='Email'
        className='p-2 col-span-1 ring-1 ring-gray-300 resize-none bg-opacity-50 bg-white text-white placeholder:text-white'
      />
      <input
        type='tel'
        name='userPhone'
        placeholder='Phone'
        className='p-2 col-span-1 ring-1 ring-gray-300 resize-none bg-opacity-50 bg-white text-white placeholder:text-white'
      />
      <textarea
        name='body'
        placeholder='Message'
        className='p-2 col-span-2 h-40 ring-1 ring-gray-300 resize-none bg-opacity-50 bg-white text-white placeholder:text-white'
      />
      <button type='submit' className='p-2 bg-black text-white'>
        Send
      </button>
    </form>
  );
};

export default UserContactUsForm;
