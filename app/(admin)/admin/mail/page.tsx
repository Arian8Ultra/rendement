import { PrismaClient } from "@prisma/client";
import React from "react";
const prisma = new PrismaClient();

export default async function EmailsPage() {
  const mails = await prisma.mail.findMany();
  return (
    <div>
      {/* a table of mails */}
      <table className="w-full bg-white shadow-md my-6 rounded-xl overflow-hidden">
        <thead>
          <tr className="*:p-4">
            {/* <th className="py-2 px-4 bg-gray-800 text-white font-semibold">
              Id
            </th> */}
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold">
              Subject
            </th>
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold">
              Email
            </th>
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold">
              Phone
            </th>
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold">
              Message
            </th>
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {mails.map(
            (mail: {
              id: string;
              subject: string;
              body: string;
              createdAt: Date;
              userEmail: string;
              userPhone: string | null;
            }) => (
              <tr className="*:p-4" key={mail.id}>
                {/* <td className="py-2 px-4 border-b">{mail.id}</td> */}
                <td className="py-2 px-4 border-b">{mail.subject}</td>
                <td className="py-2 px-4 border-b">{mail.userEmail}</td>
                <td className="py-2 px-4 border-b">{mail.userPhone}</td>
                <td className="py-2 px-4 border-b">{mail.body}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(mail.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
