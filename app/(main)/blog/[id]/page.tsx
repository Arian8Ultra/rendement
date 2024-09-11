import { Blog, PrismaClient } from "@prisma/client";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

const prisma = new PrismaClient();

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const blog = (await prisma.blog.findUnique({
    where: {
      id: id,
    },
  })) as Blog;

  return {
    title: blog.title,
  };
}

export default async function BlogPagePage({
  params,
}: {
  params: { id: string };
}) {
  const blog = (await prisma.blog.findUnique({
    where: {
      id: params.id,
    },
  })) as Blog;
  return (
    <div className="flex flex-col gap-5 md:w-9/12 w-full p-10 mx-auto">
      <Image
        src={"/uploads/" + blog.coverImage}
        alt="cover image"
        width={2000}
        height={2000}
        className="aspect-video w-full rounded-xl"
      />
      <h1 className="text-5xl font-bold">{blog.title}</h1>

      <div className="w-full" dangerouslySetInnerHTML={{ __html: blog.body }} />
    </div>
  );
}
