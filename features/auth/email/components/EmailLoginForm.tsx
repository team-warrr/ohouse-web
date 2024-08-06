import { login, signup } from "@/features/auth/email/actions";
import Message from "@/features/auth/email/components/Message";

const EmailLoginForm = () => {
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
			<Message />
		</form>
	);
};

export default EmailLoginForm;
