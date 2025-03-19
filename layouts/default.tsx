import { Link } from "@heroui/link";

import { Head } from "./head";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Navbar } from "@/components/navbar";
import { Playfair_Display } from "next/font/google";



const playfair = Playfair_Display({ subsets: ["latin"] });
const primaryColor = "#b49dbd";
const secondaryColor = "text-[#663f58]";
export { secondaryColor,primaryColor };


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen ">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-full px-6 flex-grow pt-16">
        {children}
      </main>
      
      <footer className={`${playfair.className}py-16 text-2xl  ${primaryColor}`} style={{background:primaryColor}}>
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Logo & Social Media */}
        <div className="flex flex-col items-center md:items-start py-12">
          <h2 className={`${playfair.className}mb-2 text-3xl font-cursive ${secondaryColor}`} >
            Fabric <span className="font-light">Fusion</span>
          </h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className={`${secondaryColor} `} >
              <FaInstagram size={35} />
            </a>
            <a href="#" className={`${secondaryColor}`} >
              <FaFacebook size={35} />
            </a>
            <a href="#" className={`${secondaryColor}`} >
              <FaTwitter size={35} />
            </a>
            <a href="#" className={`${secondaryColor}`} >
              <FaYoutube size={35} />
            </a>
          </div>
        </div>

        {/* Info Links */}
        <div className={`${secondaryColor} ${playfair.className} py-12`}>
          <h3 className={`${secondaryColor} ${playfair.className} text-3xl font-semibold`}>Info</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-2xl">
            <li><a href="#" className="hover:text-purple-900">Our Story</a></li>
            <li><a href="#" className="hover:text-purple-900">About Us</a></li>
            <li><a href="#" className="hover:text-purple-900">FAQ’s</a></li>
            <li><a href="#" className="hover:text-purple-900">Contact Us</a></li>
          </ul>
        </div>

        {/* Shop Links */}
        <div className={`${secondaryColor} ${playfair.className} py-12`}>
          <h3 className={`${secondaryColor} ${playfair.className} text-3xl font-semibold`}>Shop</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-2xl">
            <li><a href="#" className="hover:text-purple-900">Party Wear</a></li>
            <li><a href="#" className="hover:text-purple-900">Office Wear</a></li>
            <li><a href="#" className="hover:text-purple-900">Wedding</a></li>
            <li><a href="#" className="hover:text-purple-900">Local Designers</a></li>
            <li><a href="#" className="hover:text-purple-900">Dresses</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div className={`${secondaryColor} ${playfair.className} py-12`}>
          <h3 className={`${secondaryColor} ${playfair.className} text-3xl font-semibold`}>Help</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-1xl">
            <li><a href="#" className="hover:text-purple-900">Customer Service</a></li>
            <li><a href="#" className="hover:text-purple-900">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-purple-900">Shipping Information</a></li>
            <li><a href="#" className="hover:text-purple-900">Terms of Service</a></li>
          </ul>
        </div>

      </div>
    </footer>
      
    </div>
  );
}
