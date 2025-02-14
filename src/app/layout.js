import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"

 });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable,"bg-background text-foreground")}>{children}</body>
      <FireFliesBackground/>
    </html>
  );
}
