import { useRouter } from "next/navigation";
import { Blog, Category, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function Page({
  params,
}: {
  params: { slug: string[]; };
}) {
  const blogs = (await prisma.blog.findMany({
    where: {
      categoryId: params.slug?.[1],
    },
  })) as Blog[];
  return (
    <div className="">
      {blogs?.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id} className="p-4 border-b">
            <h1 className="text-2xl">{blog.title}</h1>
            <p>{blog.body?.slice(0, 200)}</p>
          </div>
        ))
      ) : (
        <h1>No blogs found</h1>
      )}
      <div className="">
      </div>
    </div>
  );
}
