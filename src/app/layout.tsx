import { Montserrat, Josefin_Sans } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Header from "@/page-sections/header";
import Footer from "@/page-sections/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: true,
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  preload: true,
  // weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Rrotten",
  description: "Menu Restaurant Rrotten",
};

export const viewport = {
  themeColor: "#080c11",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <Header fontClass={josefinSans.className} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
