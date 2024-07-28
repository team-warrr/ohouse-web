"use client";
import Image from "next/image";

import { ChangeEvent, useRef, useState } from "react";

import View from "@/shared/components/view";

export default function UploadImagePage() {
  const [imageUrl, setImageUrl] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  };

  return (
    <View>
      <div
        className={"relative flex justify-center items-center w-full aspect-square bg-gray-200"}
        onClick={handleClick}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="preview-image"
            width={0}
            height={0}
            className={"w-full h-full"}
          />
        ) : (
          <div className={"flex flex-col gap-[5px] justify-center items-center"}>
            <Image src={"/camera.svg"} width={24} height={24} alt={"camera-icon"} />
            <div className="font-semibold text-gray-500">사진 올리기</div>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className={"border-1w-full h-full absolute hidden"}
          onChange={handleFileChange}
        />
      </div>
    </View>
  );
}
