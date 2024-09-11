import AddCategoryForm from "@/components/Admin/AddCategoryForm";
import DeleteCategoryButton from "@/components/Admin/DeleteCategoryButton";
import { Category } from "@prisma/client";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export default async function CategoriesPagePage() {
  const categories = (await prisma.category.findMany()) as Category[];
  return (
    <div>
      <div className="grid grid-cols-3 w-full items-end">
        <Link href="/admin/categories/add">
          <button className="bg-green-500 text-white p-4 rounded-xl flex items-center justify-center gap-4">
            <div className="text">
              Add Category
            </div>
            <BiPlus />
          </button>
        </Link>
        <h1 className="text-5xl text-center p-10">Categories</h1>
        <div className=""></div>
      </div>
      <table className="w-full bg-white shadow-md my-6 rounded-xl overflow-hidden">
        <thead>
          <tr className="*:p-4">
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold">
              Name
            </th>
            <th className="py-2 px-4 bg-gray-800 text-white font-semibold"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {categories.map((category) => (
            <tr className="*:p-4" key={category.id}>
              <td className="py-2 px-4 border-b">{category.name}</td>
              {/*  a delete button */}
              <td className="py-2 px-4 border-b">
                <DeleteCategoryButton id={category.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
