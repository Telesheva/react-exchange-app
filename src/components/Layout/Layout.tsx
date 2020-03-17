import * as React from "react";
import "./Layout.scss";
import { Navbar, Footer } from "../common/index";

export interface LayoutComponentProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutComponentProps) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
