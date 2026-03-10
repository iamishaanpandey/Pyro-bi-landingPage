import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PyroBI — Conversational Business Intelligence",
  description:
    "Ask questions in plain English. Get production-grade SQL, interactive charts, and AI-driven executive summaries instantly. From CSV to board-ready dashboard in seconds.",
  keywords: "business intelligence, NLP analytics, conversational BI, DuckDB, AI dashboards",
  openGraph: {
    title: "PyroBI — Conversational Business Intelligence",
    description:
      "The AI-powered platform that turns natural language into interactive data dashboards.",
    type: "website",
    url: "https://pyro-bi.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
