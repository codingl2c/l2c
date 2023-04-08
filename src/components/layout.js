import React, { useEffect } from "react";
import Header from "./header";
import Footer from "@/components/footer";
import AOS from "aos";

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
