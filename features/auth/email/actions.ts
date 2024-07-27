"use server";

import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function login(formData: FormData) {
	const supabase = createClient();

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		redirect(encodeURI("/login?message=로그인 중 오류가 발생하였습니다"));
	}

	redirect("/user");
}

export async function signup(formData: FormData) {
	const supabase = createClient();
	const origin = headers().get("origin");

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { error } = await supabase.auth.signUp({
		...data,
		options: {
			emailRedirectTo: `${origin}/auth/confirm`,
		},
	});

	if (error) {
		console.error(error);
		redirect(encodeURI("/login?message=회원 가입 중 오류가 발생하였습니다"));
	}

	redirect(encodeURI("/login?message=이메일을 확인해주세요."));
}
