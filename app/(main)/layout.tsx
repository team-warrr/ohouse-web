import Header from "@/shared/components/header";

const title = "이미지 업로드";

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
