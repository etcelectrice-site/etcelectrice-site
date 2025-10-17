import "../styles/globals.css";
import * as React from "react";
import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";

export const metadata = {
  ...
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
