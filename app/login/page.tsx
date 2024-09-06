"use client";

import Logo from "@/shared/components/ohouse-logo";
import View from "@/shared/components/view";
import { getEnvironment } from "@webviewkit/environment";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const navigateToLoginScreen = () => {
    const url = `ohouseapp://login`;

    window.location.replace(url);
  };

  const kakaoLogin = () => {
    if (isMobile) {
      navigateToLoginScreen();
      return;
    }

    signIn("kakao", { callbackUrl });
  };

  const naverLogin = () => {
    if (isMobile) {
      navigateToLoginScreen();
      return;
    }

    signIn("naver", { callbackUrl });
  };

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const environment = getEnvironment(userAgent);

    if (environment.os.name === "Android" || "iOS") {
      setIsMobile(true);
    }
  }, []);

  return (
    <View>
      <div className="flex flex-col items-center justify-end">
        <div className="flex flex-col items-center gap-10">
          <Logo />
          <div className="flex flex-col gap-2">
            <button onClick={kakaoLogin}>
              <Image alt="kakao" src="/kakao.png" width={319} height={40} />
            </button>
            <button onClick={naverLogin}>
              <Image alt="naver" src="/naver.png" width={319} height={40} />
            </button>
          </div>
          <h6 className="text-gray-400">로그인에 문제가 있으신가요?</h6>
        </div>
        <h6 className="fixed bottom-2 text-gray-500">비회원 주문 조회하기</h6>
      </div>
    </View>
  );
};

export default LoginPage;
