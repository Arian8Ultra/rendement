import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(req: Request) {
  const { id, name, enName,layout } = await req.json();
  console.log(name);

  const prisma = new PrismaClient();
  try {
    const category = await prisma.category.create({
      data: {
        name,
        enName,
        layout:layout,
        mobileLayout:layout,
      },
    });
    return new Response(
      JSON.stringify({ message: "Category added successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Category could not be added" + error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(request: Request) {
  const { id, name, enName,layout } = await request.json();
  const prisma = new PrismaClient();
  try {
    const category = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
        enName,
        layout:layout,
        mobileLayout:layout,
      },
    });
    return new Response(
      JSON.stringify({ message: "Category updated successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Category could not be updated" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const prisma = new PrismaClient();
  try {
    // update blogs that have this category
    const blogs = await prisma.blog.findMany({
      where: {
        categoryId: id,
      },
    });
    for (const blog of blogs) {
      await prisma.blog.update({
        where: {
          id: blog.id,
        },
        data: {
          categoryId: null,
        },
      });
    }
    const category = await prisma.category.delete({
      where: {
        id,
      },
    });
    return new Response(
      JSON.stringify({ message: "Category deleted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Category could not be deleted" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PATCH(request: Request) {}
