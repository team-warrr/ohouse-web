"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { getEnvironment } from "@webviewkit/environment";
import { CSSProperties, ReactNode, useEffect, useState } from "react";

type DeepLinkButtonPropsType = {
  style?: CSSProperties;
  className?: string;
  path: string;
  children: ReactNode;
} & ButtonProps;

export default function DeepLinkButton({
  style,
  className,
  children,
  path,
  ...props
}: DeepLinkButtonPropsType) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const {
      os: { name: osName },
      isWebView,
    } = getEnvironment(userAgent);

    if ((osName === "Android" || "macOS" || "iOS") && !isWebView) {
      setShowButton(true);
    }
  }, []);

  const handleClick = () => {
    const intentUrl = `intent://ohouse-web.vercel.app/${path}#Intent;scheme=https;package=com.ohouseapp;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.ohouseapp;end;`;

    window.location.replace(intentUrl);
  };

  return (
    showButton && (
      <Button style={style} className={className} onClick={handleClick} {...props}>
        {children}
      </Button>
    )
  );
}
