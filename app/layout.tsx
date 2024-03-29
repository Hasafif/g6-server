import { PropsWithChildren } from "react";
import AuthProvider from "./context/AuthProvider";
<<<<<<< HEAD
import "./main.css";
import { Metadata } from "next";
import Header from "@/components/Header";
import Notify from "@/components/notification";
=======
import "@/app/styles/main.css";
import { Metadata } from "next";
import Header from "@/components/Management/Header";
>>>>>>> 9d52956 (v1.1)

export const metadata: Metadata = {
  title: "G6 Research Platform",
};

export default function RootLayout({children}:PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
        </AuthProvider>
          <main>{children}</main>
      </body>
    </html>
  );
}
