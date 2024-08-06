"use client";

import Logo from "@/shared/components/Logo";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

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
		<div>
			<Logo />
			<button onClick={kakaoLogin}>카카오 로그인</button>
			<button onClick={naverLogin}>네이버 로그인</button>
		</div>
	);
};

export default LoginPage;
