
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Playfair_Display } from "next/font/google";

import { useState } from "react";
import { Type, Upload, Palette, EyeOff, Trash2 } from "lucide-react";
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
                        <div className="row-span-5 ">
                            <div className={`${secondaryColor} rounded-xl pb-8 shadow-lg ${playfair.className}`} style={{ background: lightcolor }}>
                                {/* Back Button */}
                                <Link href="/pricing">
                                <button className="mb-2">
                                    <span className="text-white text-2xl font-bold pl-4">←</span>
                                </button>
                                </Link>

                                {/* Header */}
                                <div className="bg-white text-center text-lg font-semibold p-2 rounded-md ">
                                    Technique Type
                                </div>

                                {/* Boxes */}
                                <div className="mt-4 space-y-4 flex justify-center flex-col align-middle ">
                                    <div className={`${secondaryColor} h-56 w-60 mx-8 rounded-md shadow-md justify-center flex text-cente ${playfair.className}`} style={{ background: primaryColor }}></div>
                                    <div className={`${secondaryColor} h-56 w-60 mx-8  rounded-md shadow-md justify-center flex text-cente ${playfair.className}`} style={{ background: primaryColor }}></div>
                                </div>
                            </div>
                        </div>



                        <div className="col-span-3 row-span-5">
                            <div className="flex flex-col items-center p-4">
                                <h1 className={`${secondaryColor} text-5xl font-bold mb-4 ${playfair.className}`}>
                                    Customization Block Print
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
                                    <button className={`p-2 ${selectedTab === "plant" ? "text-purple-700" : "text-gray-700"}`} onClick={() => setSelectedTab("plant")}>
                                        Plant
                                    </button>
                                    <button className={`p-2 ${selectedTab === "print" ? "text-purple-700" : "text-gray-700"}`} onClick={() => setSelectedTab("print")}>
                                        Print
                                    </button>
                                    <button className={`p-2 ${selectedTab === "pattern" ? "text-purple-700" : "text-gray-700"}`} onClick={() => setSelectedTab("pattern")}>
                                        Pattern
                                    </button>
                                    <button className={`p-2 ${selectedTab === "flower" ? "text-purple-700" : "text-gray-700"}`} onClick={() => setSelectedTab("flower")}>
                                        Flower
                                    </button>
                                </div>

                                <div className="mt-4">
                                    {selectedTab === "plant" && (
                                        <input type="text" value={customText} onChange={(e) => setCustomText(e.target.value)} placeholder="Enter your text..." className="w-full p-2 border rounded-lg" />
                                    )}
                                    {selectedTab === "print" && <input type="file" className="w-full p-2 border rounded-lg" />}
                                    {selectedTab === "pattern" && (
                                        <div className="grid grid-cols-4 gap-2">
                                            {COLORS.map((color) => (
                                                <button key={color} onClick={() => setSelectedColor(color)} className={`w-full aspect-square rounded-lg ${selectedColor === color ? "ring-4 ring-purple-500" : ""}`} style={{ backgroundColor: color }} />
                                            ))}
                                        </div>
                                    )}
                                    {selectedTab === "flower" && <p className="text-center">Flower customization options will go here.</p>}
                                </div>

                                <div className="flex items-center justify-center gap-5 pt-4">
                                    <button className={`w-32 h-10 rounded-lg shadow-md transition-transform transform hover:scale-105 ${secondaryColor} ${playfair.className}`} style={{ background: lightcolor }}>
                                        Preview
                                    </button>
                                    <button className={`w-32 h-10 rounded-lg shadow-md transition-transform transform hover:scale-105 ${secondaryColor} ${playfair.className}`} style={{ background: lightcolor }}>
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