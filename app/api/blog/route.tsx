import { Blog, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const { title, body, categoryId, coverImage } = (await request.json()) as {
    title: string;
    body: string;
    categoryId: string;
    coverImage: string;
  };

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      return new Response(JSON.stringify({ message: "Category not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        body,
        category:{
          connect:{
            id: categoryId,
          }
        },
        coverImage,
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
  } catch (error) {
    console.log(error);
    
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

  // await prisma.blog.create({
  //   data:{
  //     body: body,
  //     coverImage: coverImage,
  //     title: title,
  //     categoryId: categoryId,
  //   }
  // });

  // try {
  //   const blog = await prisma.blog.create({
  //     data: {
  //       title,
  //       body,
  //       categoryId,
  //       coverImage,
  //     } as Blog,
  //   });
  //   return new Response(
  //     JSON.stringify({ message: "Blog added successfully" }),
  //     {
  //       status: 200,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // } catch (error) {
  //   return new Response(
  //     JSON.stringify({ message: "Blog could not be added" + error }),
  //     {
  //       status: 500,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // }
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
  } catch (error) {
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
