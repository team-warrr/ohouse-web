const title = "행운 출첵";

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
