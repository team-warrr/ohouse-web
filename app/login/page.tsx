import EmailLoginForm from "@/features/auth/email/components/EmailLoginForm";
import Logo from "@/shared/components/Logo";

const LoginPage = () => {
	return (
		<div>
			<Logo width={90} />
			<EmailLoginForm />
		</div>
	);
};

export default LoginPage;
