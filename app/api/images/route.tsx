import fs from "node:fs/promises";
export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  const images = await fs.readdir("./uploads/");

  return new Response(JSON.stringify(images), {
    headers: {
      "content-type": "application/json",
    },
    status: 200,
  });
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
