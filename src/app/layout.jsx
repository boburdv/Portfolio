import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Boburbek Portfolio",
  description: "Frontend developer portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className} flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
