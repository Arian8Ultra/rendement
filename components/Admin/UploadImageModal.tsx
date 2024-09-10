"use client";
import { Modal } from "@mui/material";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { TbOctagonPlus } from "react-icons/tb";

const UploadImageModal = () => {
  const [file, setFile] = React.useState<File>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const Upload = async () => {
    const formData = new FormData();
    formData.append("file", file as File);
    const res = await fetch("http://localhost:3000/api/upload/image", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if(data){
        setFile(undefined)
    }
    console.log(data);
  };
  return (
    <Modal
      open={searchParams.has("upload")}
      onClose={() => router.push("/admin/gallery")}
    >
      <div
        className="bg-white p-4 w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl flex
       flex-col gap-5"
      >
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="rounded-xl"
            onClick={() => inputRef.current?.click()}
          />
        ) : (
          <div
            className="flex p-20 outline-dashed outline-neutral-600 text-neutral-500 rounded-xl text-center items-center justify-center"
            onClick={() => inputRef.current?.click()}
          >
            <input
              type="file"
              ref={inputRef}
              hidden
              className="hidden"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
            <p>Click to upload image</p>
            <TbOctagonPlus className="text-5xl" />
          </div>
        )}

        <button
          onClick={() => {
            if (file) {
              Upload();
              router.push("/admin/gallery");
              router.refresh();
            }
          }}
          className="bg-green-500 text-white p-2 rounded-xl"
        >
          Upload
        </button>
      </div>
    </Modal>
  );
};

export default UploadImageModal;
