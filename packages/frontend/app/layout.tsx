import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import Header from "@/components/header";
import { Rainbow } from "@/service/rainbow-kit-provider";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body className={montserrat.className}>
        <Rainbow>
          <Providers>
            <main className="text-foreground bg-[#1C1C1C]">
              {children}
            </main>
          </Providers>
        </Rainbow>
      </body>
    </html>
  );
}
