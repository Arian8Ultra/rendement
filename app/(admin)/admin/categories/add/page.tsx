import AddCategoryForm from "@/components/Admin/AddCategoryForm";

export const dynamic = 'force-dynamic'

export default async function AddCategoryPage() {
  return (
    <div className="flex justify-start items-start flex-col">
      <h1 className="text-5xl text-center p-10">Add Category</h1>
      <AddCategoryForm/>
    </div>
  );
}
