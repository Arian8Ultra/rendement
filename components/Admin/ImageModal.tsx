"use client";
import { Modal } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ImageModal = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  const DeleteImage = async () => {
    const res = await fetch(`/api/image?id=${searchParams.get("imageId")}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    // if the status is 200, then redirect to the gallery page
    if (res.status === 200) {
      router.push(path.replace(`?imageId=${searchParams.get("imageId")}`, ""));
      router.refresh();
    }
  };
  return (
    <Modal
      open={searchParams.get("imageId") !== null}
      onClose={() =>
        router.push(path.replace(`?imageId=${searchParams.get("imageId")}`, ""))
      }
    >
      <div className="bg-white p-4 w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl flex flex-col gap-5">
        <Image
          src={`/uploads/${searchParams.get("imageId")}`}
          alt=""
          className="rounded-xl object-contain h-fit"
          width={1000}
          height={1000}
        />

        <button
          onClick={() => {
            DeleteImage();
          }}
          className="bg-red-500 text-white p-2 rounded-xl"
        >
          Delete Image
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
