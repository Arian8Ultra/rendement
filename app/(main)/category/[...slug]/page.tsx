import { useRouter } from "next/navigation";
import { Blog, Category, PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
const prisma = new PrismaClient();
export default async function Page({ params }: { params: { slug: string[] } }) {
  const blogs = (await prisma.blog.findMany({
    where: {
      categoryId: params.slug?.[1],
    },
  })) as Blog[];

  const category = (await prisma.category.findUnique({
    where: {
      id: params.slug?.[1],
    },
  })) as Category;
  return (
    <div className="bg-black h-screen">
      <div
        className={`${
          category.mobileLayout == "row"
            ? "flex flex-col gap-5"
            : "grid md:grid-cols-4 grid-cols-1 gap-5"
        } md:p-5 p-2 w-full`}
      >
        {blogs?.length > 0 ? (
          blogs.map((blog) =>
            category.mobileLayout != "row" ? (
              <Link href={`/blog/${blog.id}`} key={blog.id}>
                <div className="p-4 border-b  w-full rounded-xl relative aspect-video overflow-hidden">
                  <Image
                    src={"/uploads/" + blog.coverImage}
                    alt="cover image"
                    className="aspect-video w-auto h-fit md:h-1/3 md:w-fit mx-auto object-cover rounded-xl absolute"
                    layout="fill"
                  />

                  <div className="absolute bottom-0 w-full max-h-[1/2] bg-white/50 right-0 left-0 p-5 backdrop-blur-lg">
                    <h1 className="text-2xl">{blog.title}</h1>
                  </div>
                  {/* <h1 className="text-2xl">{blog.title}</h1>
            <p>{blog.body?.slice(0, 200)}</p> */}
                </div>
              </Link>
            ) : (
              <Link href={`/blog/${blog.id}`} key={blog.id}>
                <div className="p-4 border-b  w-full rounded-xl relative overflow-hidden flex gap-5 shadow-lg bg-white/50 backdrop-blur-md">
                  <Image
                    src={"/uploads/" + blog.coverImage}
                    alt="cover image"
                    className="aspect-square md:aspect-video mx-auto object-cover rounded-xl"
                    width={200}
                    height={200}
                  />

                  <div className="bottom-0 w-full max-h-[1/2] right-0 left-0 p-5 ">
                    <h1 className="text-2xl">{blog.title}</h1>

                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: blog.body }}
                    />
                  </div>
                </div>
              </Link>
            )
          )
        ) : (
          <h1>No blogs found</h1>
        )}
        <div className=""></div>
      </div>
    </div>
  );
}
