import type { Metadata } from "next";
import { formular } from "./fonts";
import "./styles/globals.scss";

export const metadata: Metadata = {
  title: "Portfolio Fozlul Karim",
  description: "A civil engineer portfolio page showcasing my work and expertise.",
  keywords: "civil engineering, portfolio, Fozlul Karim, engineering, construction, projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={formular.className}>{children}</body>
    </html>
  );
}
