import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexaGenesis Biosciences — Precision Medicine at the Molecular Scale",
  description:
    "NexaGenesis Biosciences applies epigenetic reprogramming and AI-driven target biology to build a new class of precision therapeutics — advancing four clinical programs across oncology and rare disease.",
  openGraph: {
    title: "NexaGenesis Biosciences",
    description:
      "Clinical-stage epigenomics. Four programs. Two FDA Breakthrough Therapy Designations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
