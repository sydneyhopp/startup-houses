import { Geist, Geist_Mono, DM_Serif_Text} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Code, Coffee, Chaos",
  description: "BAIP Journalism 390 Project!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={dmSerifText.className}
      >
        {children}
      </body>
    </html>
  );
}
