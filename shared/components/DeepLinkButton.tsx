"use client";

import { Button } from "@nextui-org/react";
import { CSSProperties, PropsWithChildren } from "react";

type DeepLinkButtonPropsType = {
  style?: CSSProperties;
  className?: string;
  path: string;
} & PropsWithChildren;

export default function DeepLinkButton({
  style,
  className,
  children,
  path,
}: DeepLinkButtonPropsType) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const url = `https://ohouse-web.vercel.app/${path}`;

    window.location.href = url;
  };

  return (
    <Button style={style} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}
