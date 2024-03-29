import { Inter } from "next/font/google";
import "../../style/globals.css";

export const FONT_DEFAULT = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata = {
  title: "USA Website",
  description: "Daniyal Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${FONT_DEFAULT.variable}`}>{children}</body>
    </html>
  );
}
