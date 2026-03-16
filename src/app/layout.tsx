import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comet",
  description:
    "Capture locally, transmit globally. A desktop note-taking app with local storage and Nostr publishing.",
  metadataBase: new URL("https://comet.md"),
  openGraph: {
    title: "Comet",
    description:
      "A desktop note-taking app that combines private local storage with the power to publish directly to the Nostr network.",
    url: "https://comet.md",
    siteName: "Comet",
    images: [{ url: "/demo.png", width: 3040, height: 1882 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comet",
    description:
      "A desktop note-taking app that combines private local storage with the power to publish directly to the Nostr network.",
    images: ["/demo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900 h-full`}
      >
        {children}
      </body>
    </html>
  );
}
