import ImageUploadHeader from "../../shared/components/image-upload-header";

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
      <ImageUploadHeader />
      {children}
    </>
  );
}
