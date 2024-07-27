import { login, signup } from "@/features/auth/email/actions";
import Message from "@/features/auth/email/components/Message";

const EmailLoginForm = () => {
	return (
		<form className="flex flex-col m-4 gap-2">
			<div className="flex flex-col">
				<input
					id="email"
					name="email"
					type="email"
					required
					className="text-[#424242] rounded-t border border-[#dbdbdb] px-[15px] pt-[13px] pb-[14px]"
					placeholder="이메일"
				/>
				<input
					id="password"
					name="password"
					type="password"
					required
					className="text-[#424242] rounded-b border border-[#dbdbdb] px-[15px] pt-[13px] pb-[14px] -mt-[1px]"
					placeholder="비밀번호"
				/>
			</div>
			<div className="flex gap-5">
				<button formAction={login}>Log in</button>
				<button formAction={signup}>Sign up</button>
			</div>
			<Message />
		</form>
	);
};

export default EmailLoginForm;
