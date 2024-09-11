"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Editor from "../../../../../components/Editor/Editor";
import dynamic from "next/dynamic";
import { Category } from "@prisma/client";
import SelectImageModal from "@/components/Admin/SelectImageModal";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const CustomEditor = dynamic(() => import("@/components/Editor/Editor"), {
  ssr: false,
});
export default function AddBlogPagePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const searchParams = useSearchParams();

  const getCategories = async () => {
    const res = await axios.get("/api/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const addBlog = async () => {
    try {
      await axios.post("/api/blog", {
        title,
        body: content,
        categoryId: category,
        coverImage: searchParams.get("image"),
      });
      alert("Blog added successfully");
    } catch (error) {
      console.error(error);
      alert("Blog could not be added");
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <SelectImageModal />
      <div className="grid grid-cols-2 gap-5 md:w-1/2 mx-auto w-full">
        <input
          type="text"
          placeholder="Title"
          className="p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* a select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="" className="p-2">
            Select category
          </option>
          {categories.map((category: Category) => (
            <option key={category.id} value={category.id} className="p-2">
              {category.name}
            </option>
          ))}
        </select>
        {/* a button for opening selectImageModal */}
        <Link href="/admin/blogs/add?selectImage=true">
          <button className="bg-green-500 text-white p-2 rounded">
            Select Cover Image
          </button>
        </Link>
      </div>

      {searchParams.get("image") && (
        <Image
          src={"/uploads/" + searchParams.get("image")}
          alt="cover image"
          className="aspect-video w-auto h-fit md:h-1/3 md:w-fit mx-auto object-cover rounded-xl"
          width={1000}
          height={1000}
        />
      )}

      <div className="">
        <CustomEditor content={content} setContent={setContent} />
      </div>

      <button
        onClick={addBlog}
        className="bg-green-500 text-white p-2 rounded md:w-1/4 mx-auto"
      >
        Add Blog
      </button>
    </div>
  );
}
