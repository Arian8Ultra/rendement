import React from "react";
import axios, { AxiosRequestConfig } from "axios";
import { PrismaClient } from "@prisma/client";
import AddCategoryForm from "@/components/Admin/AddCategoryForm";
export default async function AddCategoryPage() {
  const prisma = new PrismaClient();
  return (
    <div className="flex justify-start items-start flex-col">
      <h1 className="text-5xl text-center p-10">Add Category</h1>
      <AddCategoryForm/>
    </div>
  );
}
