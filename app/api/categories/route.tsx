import prisma from "@/prisma/prisma";



export async function GET(request: Request) {
  const categories = await prisma.category.findMany();
  return new Response(JSON.stringify(categories), {
    headers: { "content-type": "application/json" },
  });
}
