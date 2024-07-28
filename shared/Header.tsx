"use client";

import ImageUploadHeader from "@/app/image-upload/header";
import CommonHeader from "./components/header";

export default function Header() {
  const url = window.location.href.split("/").at(-1);

  switch (url) {
    case "image-upload":
      return <ImageUploadHeader />;
    default:
      return <CommonHeader />;
  }
}
