const title = "기록 챌린지";

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
