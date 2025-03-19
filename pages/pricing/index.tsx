
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shirt, Upload, Type, Palette } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from 'next/link';


const COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#D4A5A5",
  "#9B59B6",
  "#3498DB",
];


const playfair = Playfair_Display({ subsets: ["latin"] });
const primaryColor = "#b49dbd";
const secondaryColor = "text-[#663f58]";
const lightcolor = "#cdbdd2"
export { secondaryColor, primaryColor, lightcolor };




export default function DocsPage() {
  const [selectedTab, setSelectedTab] = useState("text");
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [customText, setCustomText] = useState("");

  return (
    <DefaultLayout >
      <div className="pb-8 ">
        <div className={`${secondaryColor} px-4 py-4  rounded-xl ${playfair.className}`} style={{ background: primaryColor }}>
          <div className="grid grid-cols-5 grid-rows-5 gap-4 ">
            <div className="row-span-5">
              <div className={`${secondaryColor} relative flex justify-center items-center h-full ${playfair.className}`} style={{ background: primaryColor }}>
                <div className={`${secondaryColor} relative w-72 h-96  rounded-tr-full rounded-br-full flex justify-center items-center border-l-8 border-yellow-900 ${playfair.className}`} style={{ background: primaryColor }}>
                  <div className="absolute w-56 h-96 rounded-tr-full rounded-br-full border-2 border-yellow-900 flex flex-col justify-between">
                  <Link href="/1img">
                    <div className="absolute left-0 top-0 transform">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50ud6gXP8tDy2bY4FbRZrrED59ptbbr_Hg&s" alt="T-shirt" className="w-20 h-20 border-2 border-white rounded-full p-1" />
                    </div>
                    </Link>
                    <Link href="/2img">
                    <div className="absolute left-24 top-12 transform">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50ud6gXP8tDy2bY4FbRZrrED59ptbbr_Hg&s" alt="T-shirt" className="w-20 h-20 border-2 border-white rounded-full p-1" />
                    </div>
                    </Link>
                    <Link href="3img">
                    <div className="absolute left-36 top-36 transform">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50ud6gXP8tDy2bY4FbRZrrED59ptbbr_Hg&s" alt="T-shirt" className="w-20 h-20 border-2 border-white rounded-full p-1" />
                    </div>
                    </Link>
                    <Link href="4img">
                    <div className="absolute left-24 bottom-12 transform">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50ud6gXP8tDy2bY4FbRZrrED59ptbbr_Hg&s" alt="T-shirt" className="w-20 h-20 border-2 border-white rounded-full p-1" />
                    </div>
                    </Link>
                    <Link href="5img">
                    <div className="absolute left-0 bottom-0 transform">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50ud6gXP8tDy2bY4FbRZrrED59ptbbr_Hg&s" alt="T-shirt" className="w-20 h-20 border-2 border-white rounded-full p-1" />
                    </div>
                    </Link>
                  </div>
                </div>
                <p className="absolute text-white text-2xl font-semibold left-16">Tie & Dye</p>
              </div>
            </div>



            <div className="col-span-3 row-span-5">
              <div className="flex flex-col items-center p-4">
                <h1 className={`${secondaryColor} text-5xl font-bold mb-4 ${playfair.className}`}>
                  Customization T-Shirt
                </h1>
                <div className="pt-10">
                  <div className="py-4 px-4 border border-black">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50ud6gXP8tDy2bY4FbRZrrED59ptbbr_Hg&s"
                      className="border border-gray-300 w-96 h-96 object-contain"
                      alt="T-Shirt"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="row-span-3 col-start-5">
              <div className={`${secondaryColor} flex justify-center items-center py-4 px-4 ${playfair.className}`} style={{ background: lightcolor }}>
                <div className={`${secondaryColor} relative  py-4 px-2 rounded-2xl shadow-xl ${playfair.className}`} style={{ background: primaryColor }}>
                  <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                    3D
                  </div>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50ud6gXP8tDy2bY4FbRZrrED59ptbbr_Hg&s"
                    alt="Custom T-shirt Design"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="row-span-2 col-start-5 row-start-4">
              <div className="row-span-2 col-start-5 row-start-4 p-4 bg-white rounded-lg shadow-lg">
                <div className="flex justify-around border-b pb-2">
                  <button className={`p-2 ${selectedTab === "text" ? "text-purple-700" : "text-gray-700"}`} onClick={() => setSelectedTab("text")}>
                    <Type className="w-6 h-6" />
                  </button>
                  <button className={`p-2 ${selectedTab === "upload" ? "text-purple-700" : "text-gray-700"}`} onClick={() => setSelectedTab("upload")}>
                    <Upload className="w-6 h-6" />
                  </button>
                  <button className={`p-2 ${selectedTab === "color" ? "text-purple-700" : "text-gray-700"}`} onClick={() => setSelectedTab("color")}>
                    <Palette className="w-6 h-6" />
                  </button>
                </div>
                <div className="mt-4">
                  {selectedTab === "text" && (
                    <input type="text" value={customText} onChange={(e) => setCustomText(e.target.value)} placeholder="Enter your text..." className="w-full p-2 border rounded-lg" />
                  )}
                  {selectedTab === "upload" && <input type="file" className="w-full p-2 border rounded-lg" />}
                  {selectedTab === "color" && (
                    <div className="grid grid-cols-4 gap-2">
                      {COLORS.map((color) => (
                        <button key={color} onClick={() => setSelectedColor(color)} className={`w-full aspect-square rounded-lg ${selectedColor === color ? "ring-4 ring-purple-500" : ""}`} style={{ backgroundColor: color }} />
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center gap-5 pt-4">
                  <button
                    className={`w-32 h-10 rounded-lg shadow-md transition-transform transform hover:scale-105 ${secondaryColor} ${playfair.className}`}
                    style={{ background: lightcolor }}
                  >
                    Preview
                  </button>
                  <button
                    className={`w-32 h-10 rounded-lg shadow-md transition-transform transform hover:scale-105 ${secondaryColor} ${playfair.className}`}
                    style={{ background: lightcolor }}
                  >
                    Next
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}