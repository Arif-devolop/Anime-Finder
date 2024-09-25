import { Baloo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const gabarito = Baloo_2({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeListWeb",
  description: "website anime indonesia",
  "google-site-verification": "sgK21-O-reHWCFzHSIfmJx8u5awejouG6zoBKGRHrs8"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="sgK21-O-reHWCFzHSIfmJx8u5awejouG6zoBKGRHrs8" />
      </head>
      <body className={`${gabarito.className} bg-color-dark max-w-[1600px] flex flex-col mr-auto ml-auto`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
