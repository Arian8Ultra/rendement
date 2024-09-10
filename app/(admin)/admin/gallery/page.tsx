import fs from "fs/promises";
import Image from "next/image";
import Link from "next/link";
export default async function GalleryPage() {
  // get files from uploads folder
  const images = await fs.readdir("./public/uploads/");
  return (
    <div className="flex flex-wrap gap-5">
      <div className="flex col-span-full p-5 w-full">
        <Link href="/admin/gallery?upload">
          <button className="bg-green-500 text-white p-2 rounded-xl">
            Upload Image
          </button>
        </Link>
      </div>
      
      {/* {images} */}
      {images.map((image) => (
        <Link href={`/admin/gallery?imageId=${image}`} key={image}>
          <Image
            src={`/uploads/${image}`}
            width={200}
            height={200}
            alt={""}
            key={image}
            className="aspect-video rounded-xl object-cover md:w-[200px] w-full"
          />
        </Link>
      ))}
    </div>
  );
}
