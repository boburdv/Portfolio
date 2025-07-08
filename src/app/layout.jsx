import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Boburning portfolio sahifasi",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="uz">
      <body className="bg-body bg-no-repeat bg-cover h-full flex flex-col font-source-sans font-normal">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
