import type { Metadata } from "next";
import { Anton, Space_Grotesk, Crimson_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suffer.xyz"),
  title: "$SUFFER | Through Suffering, Strength",
  description: "Through suffering, strength. $SUFFER on Solana.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "$SUFFER | Through Suffering, Strength",
    description: "Through suffering, strength. $SUFFER on Solana.",
    images: [{ url: "/images/suffer_logo.jpeg", width: 512, height: 512, alt: "$SUFFER" }],
    type: "website",
    siteName: "$SUFFER",
  },
  twitter: {
    card: "summary_large_image",
    title: "$SUFFER | Through Suffering, Strength",
    description: "Through suffering, strength. $SUFFER on Solana.",
    images: [{ url: "/images/suffer_logo.jpeg", width: 512, height: 512, alt: "$SUFFER" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${spaceGrotesk.variable} ${crimsonText.variable} ${jetbrainsMono.variable}`}
    >
      <body style={{ background: "#000" }}>{children}</body>
    </html>
  );
}
