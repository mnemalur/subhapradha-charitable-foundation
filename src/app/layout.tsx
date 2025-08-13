import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subhapradha Charitable Organization (SCO)",
  description: "Serving communities through compassionate charitable initiatives, education, and sustainable development programs. Join SCO in making a difference.",
  keywords: "charity, charitable organization, SCO, community service, donation, education, healthcare, women empowerment, environmental conservation",
  authors: [{ name: "Subhapradha Charitable Organization" }],
  openGraph: {
    title: "Subhapradha Charitable Organization (SCO)",
    description: "Serving communities through compassionate charitable initiatives and sustainable development programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
