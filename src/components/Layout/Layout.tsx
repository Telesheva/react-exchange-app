import * as React from "react";
import "./Layout.scss";
import Navbar from "../common/Navigation/Navbar/Navbar";
import Footer from "../common/Navigation/Footer/Footer";

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
