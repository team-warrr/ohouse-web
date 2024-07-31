import Layout from "@/shared/layouts/layout";

const title = "이미지 업로드";

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function ImageUploadLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Layout.ImageUploadHeader />
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer />
    </Layout>
  );
}
