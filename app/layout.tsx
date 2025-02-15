import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrew Marchment | Frontend Developer",
  description: "Andrew Marchment's professional frontend developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamPro.className}`}>
      <body>
        <a className="skip-to-main" href="#main">
          Skip to main content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
