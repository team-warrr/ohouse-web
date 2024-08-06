import Image, { ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "alt">;

const Logo = ({ ...props }: LogoProps) => {
	return <Image src="/logo.png" alt="Logo" width={100} height={100} {...props} />;
};

export default Logo;
