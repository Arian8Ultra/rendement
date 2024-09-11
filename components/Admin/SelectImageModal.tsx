"use client";
import { Modal } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const SelectImageModal = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const res = await axios.get("/api/images");
    setImages(res.data);
  };

  useEffect(() => {
    if (searchParams.get("selectImage") === "true") getImages();
  }, [searchParams]);

  return (
    <Modal
      open={searchParams.get("selectImage") === "true"}
      onClose={() => router.push(path)}
    >
      <div className="flex flex-wrap gap-2 p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] max-w-full rounded-2xl bg-white h-fit">
      <h1 className="w-full text-center text-3xl">
        Select Image
      </h1>
        {images.map((image, index) => (
            <Image
            key={index}
              src={"/uploads/" + image}
              alt="image"
              className="md:w-1/3 w-full object-cover hover:opacity-65 rounded-xl aspect-video cursor-pointer"
              width={1000}
              height={1000}
              onClick={() => {
                router.push(path + "?selectImage=false&image=" + image);
              }}
            />
        ))}
      </div>
    </Modal>
  );
};

export default SelectImageModal;
