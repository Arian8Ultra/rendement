import { Prisma, PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();
  return new Response(JSON.stringify(categories), {
    headers: { "content-type": "application/json" },
  });
}
