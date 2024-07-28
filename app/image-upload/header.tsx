"use client";

import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Navbar maxWidth={"full"} className={"border-b-1 border-gray-200 flex justify-between"}>
      <NavbarContent justify="start">
        <NavbarItem as={Link} href={""} onClick={handleClick} className={"cursor-pointer"}>
          <Image
            src={"/left-arrow.svg"}
            alt={"go-back-icon"}
            width={20}
            height={20}
            className={"cursor-pointer"}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            href="/"
            variant="light"
            className={"cursor-pointer text-[17px] font-semibold"}
          >
            올리기
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
