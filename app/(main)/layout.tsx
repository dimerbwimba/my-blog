import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NavBar } from "../_components/navbar";
import Footer from "../_components/footer";
import SideBar from "../_components/side_bar";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Explore Wise Tips",
    template: "%s"
  },
  alternates:{
    canonical:"https://explorewisetips.com"
  },
  description: "Explore Wise Tips: Your key to savvy travel advice. Unlock unforgettable journeys with expert tips and destination guides. Explore the world wisely!",
  twitter: {
    card: "summary_large_image"
  },
  openGraph:{
    url:"https://explorewisetips.com",
    
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" relative">
       
          <Toaster position="bottom-right" />
          <NavBar />
          <div className=" py-6"></div>
          <SideBar />
          {children}
          <Footer />

        </div>
      </body>
    </html>
  );
}
