import Layout from "@/shared/components/layout";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer />
    </Layout>
  );
}
