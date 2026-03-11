import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, JetBrains_Mono, Pacifico } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

export const metadata: Metadata = {
  title: "ATHENA MEA — Market Entry Advisory for India & the Middle East",
  description: "Strategic market entry, executive search & consulting for global businesses expanding into India and the Middle East.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${pacifico.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}

      </body>
    </html>
  );
}
