import AddCategoryForm from "@/components/Admin/AddCategoryForm";
import DeleteBlogButton from "@/components/Admin/DeleteBlogButton";
import DeleteCategoryButton from "@/components/Admin/DeleteCategoryButton";
import { Blog, Category, PrismaClient } from "@prisma/client";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

const prisma = new PrismaClient();
export default async function CategoriesPagePage() {
  const blogs = (await prisma.blog.findMany()) as Blog[];
  return (
    <div>
      <div className="grid grid-cols-3 w-full items-end">
        <Link href="/admin/blogs/add">
          <div className="text-white bg-green-500 rounded-full p-2 hover:bg-opacity-40 w-fit flex gap-2">
            Add Blog
            <BiPlus className="text-2xl" />
          </div>
        </Link>
        <h1 className="text-5xl text-center p-10">Blogs</h1>
        <div className=""></div>
      </div>
      <table className="w-full bg-white shadow-md my-6 rounded-xl overflow-hidden">
        <thead>
          <tr className="*:p-4">
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold">
              Title
            </th>
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold">
              Category
            </th>
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {blogs.map((blog) => (
            <tr className="*:p-4" key={blog.id}>
              <td className="py-2 px-4 border-b">{blog.title}</td>
              <td className="py-2 px-4 border-b">
                {prisma?.category
                  ? (
                      prisma.category.findUnique({
                        where: { id: blog.categoryId || "" },
                      }) as unknown as Category
                    )?.name
                  : "No category"}
              </td>
              {/*  a delete button */}
              <td className="py-2 px-4 border-b">
                <DeleteBlogButton id={blog.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
