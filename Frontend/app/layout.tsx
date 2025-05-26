import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Movie App",
  description: "Find any movie you love!",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap", // improves CLS
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
