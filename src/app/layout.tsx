import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import "animate.css";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"], variable: "--font-roboto" });
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Pemerintah Kota Administrasi Jakarta Timur",
  description: "Pemerintah Kota Administrasi Jakarta Timur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.variable, roboto.variable)}>
        {children}
      </body>
    </html>
  );
}
