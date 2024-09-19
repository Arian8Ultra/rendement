import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import prisma from "@/prisma/prisma";

export const dynamic = 'force-dynamic'
interface MailRequest {
  body: string;
  subject: string;
  userEmail: string;
  userPhone: string;
}

export const POST = (req: Request) => {
  try {
    const { body, subject, userEmail, userPhone } = req.body as unknown as MailRequest;
    console.log(body, subject, userEmail, userPhone);

    prisma.mail.create({
      data: {
        body: body,
        subject: subject,
        userEmail: userEmail,
        userPhone: userPhone,
      },
    });
    return Response.json({
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error(error);
    return Response.json({
      message: "An error occurred while sending your message!" + error,
    });
  }
};
