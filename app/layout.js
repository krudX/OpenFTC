import { Inter, Architects_Daughter } from "next/font/google";
import "./globals.css";
import "./contentGrid.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--ff-main",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--ff-alt",
  weight: ["400"],
});

export const metadata = {
  title: "Open Landing Page",
  description: "FigmaToCode - Open Landing Page",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/logo.svg",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${architects_daughter.variable}`}>
        <div className="page-wrapper relative content-grid">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
