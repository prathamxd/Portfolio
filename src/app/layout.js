import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import favicon from '../../public/favicon.ico'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pratham Luker",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={favicon} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
