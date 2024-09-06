"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Logo from "@/shared/components/logo";
import View from "@/shared/components/view";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const kakaoLogin = () => {
    signIn("kakao", { callbackUrl });
  };

  const naverLogin = () => {
    signIn("naver", { callbackUrl });
  };

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
