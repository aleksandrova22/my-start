import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { ServerComponentAccountButton } from "@/components/account-button-rsc";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header> 
          <ServerComponentAccountButton />
        </Header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
