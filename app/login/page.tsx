import { login, signup } from "@/app/login/actions";
import React from "react";

const LoginPage = ({ searchParams }: { searchParams: { message: string } }) => {
	return (
		<form className="flex flex-col m-4 gap-2">
			<label htmlFor="email">Email:</label>
			<input id="email" name="email" type="email" required className="text-black" />
			<label htmlFor="password">Password:</label>
			<input id="password" name="password" type="password" required className="text-black" />
			<div className="flex gap-5">
				<button formAction={login}>Log in</button>
				<button formAction={signup}>Sign up</button>
			</div>
			{searchParams?.message && (
				<p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
					{searchParams.message}
				</p>
			)}
		</form>
	);
};

export default LoginPage;
