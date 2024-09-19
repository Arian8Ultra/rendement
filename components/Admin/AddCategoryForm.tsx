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
        const layout = e.currentTarget.layout.value;
        console.log(title);

        const requestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: title,
            enName: title
              ?.toLowerCase()
              ?.replace(/\s/g, "-")
              ?.replace(/[^a-zA-Z0-9-]/g, ""),

              layout:layout
          }),
        };

        console.log(requestOption);

        // @ts-ignore
        fetch("/api/category", requestOption)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            router.push("/admin/categories");
          })
          .catch((error) => {
            alert("Category could not be added" + error);
          });
      }}
      className="flex flex-col gap-4 items-center"
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="enName">Title</label>
        <input
          type="text"
          name="enName"
          id="enName"
          required
          className="outline rounded-lg outline-1 outline-gray-400 p-2 placeholder:text-gray-400"
          placeholder="Title"
        />
      </div>


      <div className="flex flex-col gap-5 w-full">
        <label htmlFor="layout">Layout</label>
        <select
          name="layout"
          id="layout"
          required
          className="outline rounded-lg outline-1 outline-gray-400 p-2 placeholder:text-gray-400"
        >
          <option value="row">Row</option>
          <option value="grid">Grid</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded-2xl hover:bg-opacity-70 flex gap-3 w-full items-center justify-center"
      >
        Add
        <MdAdd className="text-2xl" />
      </button>
    </form>
  );
};

export default AddCategoryForm;
