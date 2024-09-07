import { Blog } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const { title, body,categoryId } = (await request.json()) as {
    title: string;
    body: string;
    categoryId: string;
  };

  try {
    const blog = await prisma.blog.create({
      data: {
        title,
        body,
        categoryId,
      },
    });
    return new Response(
      JSON.stringify({ message: "Blog added successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  catch (error) {
    return new Response(
      JSON.stringify({ message: "Blog could not be added" + error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    try {
        const blog = await prisma.blog.delete({
        where: {
            id,
        },
        });
        return new Response(
        JSON.stringify({ message: "Blog deleted successfully" }),
        {
            status: 200,
            headers: {
            "Content-Type": "application/json",
            },
        }
        );
    }
    catch (error) {
        return new Response(
        JSON.stringify({ message: "Blog could not be deleted" + error }),
        {
            status: 500,
            headers: {
            "Content-Type": "application/json",
            },
        }
        );
    }
}

export async function PATCH(request: Request) {}
