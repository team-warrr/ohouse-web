import Layout from "@/shared/layouts/layout";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer />
    </Layout>
  );
}
