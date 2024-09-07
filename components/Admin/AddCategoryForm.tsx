"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdAdd } from "react-icons/md";
const AddCategoryForm = () => {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.currentTarget.enName.value;
        console.log(title);

        const requestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: title,
            enName: title?.toLowerCase()?.replace(/\s/g, "-")?.replace(/[^a-zA-Z0-9-]/g, ""),
          }),
        };

        console.log(requestOption);

        // @ts-ignore
        fetch("/api/category", requestOption)
          .then((res) => res.json())
          .then((data) => {
            alert(data.message);
            router.refresh();
          })
          .catch((error) => {
            alert("Category could not be added" + error);
          })
      }}
      className="flex gap-4 items-center"
    >
      <input
        type="text"
        name="enName"
        id="enName"
        required
        className="outline rounded-lg outline-1 outline-gray-400 p-2 placeholder:text-gray-400"
        placeholder="Title"
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <MdAdd className="text-2xl" />
      </button>
    </form>
  );
};

export default AddCategoryForm;
