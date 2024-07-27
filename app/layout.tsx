import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/app/lib/next-auth/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "오늘의 집 클론 코딩",
	description: "오늘의 집 클론 코딩으로 웹뷰 실습하기",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex justify-center min-h-screen bg-white`}>
				<div className="max-w-[300px]">{children}</div>
			</body>
		</html>
	);
}
