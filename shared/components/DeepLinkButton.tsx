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
  const handleClick = () => {
    const url = `myapp://${path}`;

    window.location.replace(url);
  };

  return (
    <Button style={style} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}
