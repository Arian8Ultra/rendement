'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { TbTrash } from 'react-icons/tb';
interface Props {
    id: string
}
const DeleteCategoryButton = ({ id }: Props) => {
    const router = useRouter()
  return (
    <button
      className="text-white bg-red-500 rounded-full p-2 hover:bg-opacity-40"
      onClick={async () => {
        const res =await fetch("/api/category", {
          method: "DELETE",
          body: JSON.stringify({ id }),
        });
        if (res.status === 200) {
          alert("Category deleted successfully")
            router.refresh()
        } else {
          alert("Category could not be deleted")
        }
      }}
    >
      <TbTrash className="text-2xl" />
    </button>
  )
}

export default DeleteCategoryButton