import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../style/menu.css";
import "../../style/home.css";
import "../../style/logo.css";
import "../../style/needs.css";
import "../../style/column.css";
import "../../style/form.css";
import "../../style/sites.css";
import "../../style/footer.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greese Gilbert Vijay",
  description: "Created by Vijay",
  icons:['/favicon.ico']
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={inter.className}>{children}</body>
    </html>
  );
}
