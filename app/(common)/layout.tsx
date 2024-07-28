import { ReactNode } from "react";
import Header from "@/shared/components/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
