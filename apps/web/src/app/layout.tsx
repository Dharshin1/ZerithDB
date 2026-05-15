import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ZerithDB — Build apps with zero backend",
  description:
    "Local-first, peer-to-peer, CRDT-powered browser-native database platform. Build full-stack apps with ZERO backend. The browser is the server.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-accent/20 selection:text-accent">

        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 rounded-md border border-border bg-muted px-4 py-2 text-sm"
        >
          Toggle Theme
        </button>

        {children}
      </body>
    </html>
  );
}
