import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./../globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AvtoSalom",
  description: "Avtomobillarni sotib olish va sotish uchun eng yaxshi joy",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
