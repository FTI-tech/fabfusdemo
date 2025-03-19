import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import { useState } from "react";
import { LucideIcon, Star, Code, Sparkles, Shield } from "lucide-react";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";



const playfair = Playfair_Display({ subsets: ["latin"] });
const primaryColor = "#663f58";
const secondaryColor = "text-[#663f58]";
export { secondaryColor, primaryColor };


export default function DocsPage() {


  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });



  return (
    <DefaultLayout>
      <div>
        <section className="w-full  bg-white text-center">
          {/* Header */}
          <div className="relative w-full h-72">
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm"
              style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtRefjY5nawVXGJOUneohPFudtHHFXUEMCP9AQwcF9sVggEtYw72s_QeY82THEQoSJy4&usqp=CAU')" }}
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white/30">
              <h1 className={`${playfair.className} text-5xl font-serif font-bold`}>Contact US</h1>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center py-10 px-5">
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="https://www.simplycopper.com/shop/images/index.png" alt="Returns" className="h-16 w-16 mb-3" />
              <h2 className={`${playfair.className} text-2xl sm:text-2xl font-bold py-3`}>
                Returns & Exchanges
              </h2>
              <p className="text-gray-600 text-xl py-3">
                We strive to make fashion accessible to everyone, no matter your budget.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="https://th.bing.com/th/id/OIP.hWEHUaUfyzy7h6oxMMhPigHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain" alt="Fast Shipping" className="h-16 w-16 mb-3" />
              <h2 className={`${playfair.className} text-2xl sm:text-2xl font-bold py-3`}>
                Fast Shipping
              </h2>
              <p className="text-gray-600 text-xl py-3">
                We strive to make fashion accessible to everyone, no matter your budget.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/EL/CE/AC/33326747/download-3--500x500.png" alt="Support 24/7" className="h-16 w-16 mb-3" />
              <h2 className={`${playfair.className} text-2xl sm:text-2xl font-bold py-3`}>
                Support 24/7
              </h2>
              <p className="text-gray-600 text-xl py-3">
                We strive to make fashion accessible to everyone, no matter your budget.
              </p>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="flex flex-col lg:flex-row items-center justify-center px-5 py-10 lg:py-20">
            {/* Left Side - Text */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="text-center">


                <h2 className={`${playfair.className} text-3xl lg:text-6xl font-bold text-center  ${secondaryColor}`} style={{ color: secondaryColor }} >
                  Get in touch<br /> with our support team
                </h2>
                <p className={`${playfair.className}  text-sm lg:text-base mt-4 max-w-3xl text-center `}>
                  With our versatile product range and commitment to affordability, we are here to help you
                  go places in style, without any compromises. So why not browse our collections today and
                  let us help you achieve your fashion goals with ease!
                </p>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              className="lg:w-1/2 mt-10 lg:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <form className="flex flex-col space-y-6">
                <input
                  type="text"
                  placeholder="Your name"
                  className={`${playfair.className} border-b text-2xl border-gray-400 focus:outline-none  placeholder-gray-400 py-2  ${secondaryColor}`} style={{ color: secondaryColor }}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className={`${playfair.className} border-b text-2xl border-gray-400 focus:outline-none  placeholder-gray-400 py-2  ${secondaryColor}`} style={{ color: secondaryColor }}
                />
                <textarea
                  placeholder="Your text"
                  className={`${playfair.className} border-b text-2xl border-gray-400 focus:outline-none  placeholder-gray-400 py-2  ${secondaryColor}`} style={{ color: secondaryColor }} >
                </textarea>

                {/* Submit Button */}
                <button className={`${playfair.className} text-3xl text-white w-52  py-2 px-6 rounded-md  transition `} style={{ background: primaryColor }} >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center justify-center p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between w-full max-w-full px-4">
              <h2 className={`${playfair.className}  text-3xl font-semibold  ${secondaryColor}`} style={{ color: secondaryColor }} >@fabricnfusion</h2>
              <a href="#" className={`${playfair.className}hover:underline text-lg   ${secondaryColor}`} style={{ color: secondaryColor }} >
                follow --&gt;
              </a>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-full px-4">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBbq8D9DsEZWnPBDRYqydqtt3Kr9528Eb-A&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILcCVRl59HdL2YXxWTkEfLel7zfJtzKwBwyxyeOHCgywkWAFWyOX_MnYFP0nClucutok&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgToNuhFBH7qzhvLyX5ncgWrnPLDq4S86NApxnC2HGVdyPvuLsUyftmQuIJaLSfaTX_aE&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VxLIvDGFZxWlmnFTV2xWSLAlqAuN5gUf2_Bs0RLcdIqPh09oF8e9OuGqd6SjPR1vyTQ&usqp=CAU",
              ].map((src, index) => (
                <div key={index} className="overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Fashion Image ${index + 1}`}
                    width={400} // Bigger size
                    height={500} // Taller image
                    className="w-full h-[400px] object-cover transform transition duration-300 hover:scale-105 rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>
    </DefaultLayout>
  );
}
