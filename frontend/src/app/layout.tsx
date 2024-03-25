import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getGlobalPageDate } from "@/data/loaders";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resumidor de Video",
  description: "Resumidor de Video para voce nao perder tempo",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalPageDate();

  console.log(globalData);

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header data={globalData.header} />
        <div>{children}</div>
        <Footer data={globalData.footer} />
      </body>
    </html>
  );
}
