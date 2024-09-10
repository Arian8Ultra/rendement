"use client";
import { Modal } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { use } from "react";
interface Props {
  images: string[];
}
const SelectImageModal = (props: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  return (
    <Modal open={true} onClose={() => router.push(path)}>
      <div className="flex flex-wrap gap-2 p-2">
        {props.images.map((image, index) => (
          <div key={index} className="w-1/4 h-1/4">
            <Image
              src={image}
              alt="image"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SelectImageModal;
