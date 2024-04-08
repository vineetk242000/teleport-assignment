"use client";
import "../styles/globals.css";
import { Header } from "@/components/shared/header";
import Sidebar from "@/components/shared/sidebar";
import Footer from "@/components/shared/footer";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <html lang="en">
      <body>
        <Header openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
        <div className="flex justify-between">
          <Sidebar open={openSideNav} setOpen={setOpenSideNav} />
          <div
            className={`${openSideNav ? "md:w-10/12" : "md:w-[95%]"} relative top-24 mb-24 w-full md:top-32 md:mb-32`}
          >
            <div className="">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
