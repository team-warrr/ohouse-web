import { ReactNode } from "react";

import ImageUploadHeader from "@/shared/components/image-upload-header";
import Content from "./content";
import Footer from "./footer";
import CommonHeader from "./header";

function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

Layout.Header = CommonHeader;
Layout.ImageUploadHeader = ImageUploadHeader;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
