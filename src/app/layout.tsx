import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Quicksand({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Léo Bournizien",
  description: "Portfolio présentant mes compétences et projets",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
