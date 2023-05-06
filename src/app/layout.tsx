import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedButton from "@/components/FixedButton";
import Providers from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Website",
  description: "Movie Website by Norimboyev Erkin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
        <FixedButton />
      </body>
    </html>
  );
}
