import type { Metadata } from "next";
import { DM_Serif_Display, Open_Sans } from "next/font/google";
import "./globals.css";

/**
 * Brand guideline specifies Maragsa Display (display) + Open Sans (body).
 * Maragsa is a commercial Adobe font; we use DM Serif Display as a faithful
 * substitute (matches Maragsa's high stroke contrast and sharp terminals).
 * To swap to licensed Maragsa later: replace the import below and update
 * the --font-display token in globals.css.
 */
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M.O.T.M. Vaultage® — Reclaim Your Peace with Angela Harper, LCPC",
  description:
    "Licensed Clinical Professional Counselor Angela Harper guides you toward lasting clarity through a holistic approach to mental wellness. Connect. Cultivate. Commit.",
  // Pre-launch: keep out of search engines while testing.
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${openSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
