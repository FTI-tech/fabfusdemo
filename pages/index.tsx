import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import myImage from "@/public/Screenshot 2025-03-02 190823.png";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";


const playfair = Playfair_Display({ subsets: ["latin"] });
const primaryColor = "#b49dbd";
const secondaryColor = "text-[#663f58]";
export { secondaryColor, primaryColor };




const categories = [
  {
    title: "Cosmetic",
    image: "https://images8.alphacoders.com/702/702152.jpg", // Online image
    link: "/cosmetic",
  },
  {
    title: "Dress",
    image: "https://static.vecteezy.com/system/resources/previews/048/630/959/non_2x/model-in-evening-gown-presenting-an-and-sophisticated-look-with-a-refined-background-free-photo.jpg", // Online image
    link: "/dress",
  },
  {
    title: "Accessories",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSztMdx2NtdeTIe7K08KzbKcThfiAPprSCw&s", // Online image
    link: "/accessories",
  },
  {
    title: "Jewelry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7t07B6VpvTMLW5vWE_DndEx8RJVOCa1Rn2wjd8mXM9S3ZghPfVNf267o7zANziDDJUrg&usqp=CAU", // Online image
    link: "/jewelry",
  },
];


const products = [
  {
    id: 1,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Dress",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHHyDfdYtF_Fbj4YkLm5_L1-f5lmH-2qdLQ&s",
  },
  {
    id: 2,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "New Arrival",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvPnjKpX1qchB6EowiXdJnGE74M_fxrWNbg&s",
    discount: "-20%",
  },
  {
    id: 3,
    title: "Luxury Cosmetic Set",
    price: "$120",
    category: "Cosmetic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8g0Sttj5Ngt0sbKesAiFUT3xRFG_-Uty_Jy7pJAmNQ6DSzr28miEuoT-JRWf8zXBiEbo&usqp=CAU",
  },
  {
    id: 4,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Other",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcASeqGVWNtaAVfAt6jnb4NfAQSN6Nw8l0Uw&s",
  },
  {
    id: 5,
    title: "Pink Gown",
    price: "$400",
    category: "Dress",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjV_p4g-S2SxFTCwrq3ISWQ1HWv8D2izZunJaU2QkwHZrI6d3rYtoy5CP4xijLNjgAh4&usqp=CAU",
  },
  {
    id: 6,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Dress",
    image: "https://i.pinimg.com/736x/d7/6e/ef/d76eefa80b6755d09e67fb9103a2e3a0.jpg",
  },
  {
    id: 7,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "New Arrival",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVNsFUehEV8axEoaDcjwOlCiJsTNuY-BvdI6zTGckMgttOTlJkacUo8a3EpR7Gx6vTwo&usqp=CAU",
    discount: "-20%",
  },
  {
    id: 8,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "New Arrival",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMVth9YZ9SLptZDchhaV0PtHRa9LiqoR8Ge1DDrJTjavQPXW55aos7Ie1hDwd_Utb6J4&usqp=CAU",

  },
  {
    id: 9,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "New Arrival",
    image: "https://st2.depositphotos.com/6786128/12218/i/450/depositphotos_122188384-stock-photo-beautiful-girl-in-a-purple.jpg",

  },
  {
    id: 10,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "New Arrival",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUEgOKQwhaAYs5hth7rFA9sfPbrUUF9t9rQC73-ScAQdNyWhZgIpP147DlLjqkfOD78g&usqp=CAU",

  },
  {
    id: 11,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Other",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2dIf5LrK2b3sGc9IVVyZ3Yb8bbOTOrBgfU_F5P-_Ox5jP7BoXtWAbzHKrFEDyphvzO4&usqp=CAU",
  },
  {
    id: 12,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Other",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlTdwgoCqrMEx_Iyoj1rlqZlDTerLdGIRcw&s",
  },
  {
    id: 12,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Other",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3gROLpexNN2r71JjTlq45VppI356zDR9hTg&s",
  },

];

const categories1 = ["New Arrival", "Dress", "Cosmetic", "Other"];



export default function IndexPage() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [selectedCategory, setSelectedCategory] = useState("New Arrival");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = products.filter((product) => product.category === selectedCategory);
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <DefaultLayout>
      <div>
        <Image src={myImage} alt="Description" width={2000} height={300} />
      </div>

      <section className="px-4 py-8">
        <h2 className={`${secondaryColor} text-center text-4xl font-semibold  mb-6 underline ${playfair.className}`} >Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={600}
                height={400}
                className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                unoptimized // Required for external images without Next.js optimization
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {category.title}
                <span className="text-sm">View All →</span>
              </div>
            </a>
          ))}
        </div>
      </section>


      <div className= {`${playfair.className} flex flex-col lg:flex-row items-center justify-center  px-6 lg:px-16 py-10 lg:py-20 rounded-lg relative`} style={{background:primaryColor}}>
        {/* Left Text Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`${playfair.className} text-3xl lg:text-5xl font-bold text-gray-900`}>
            Look and feel confident as you take on the world.
          </h2>
          <p className={`${playfair.className} text-1xl lg:text-1xl mt-4 max-w-lg text-black`}>
            With our versatile product range and commitment to affordability, we are here to help you
            go places in style, without any compromises. So why not browse our collections today and
            let us help you achieve your fashion goals with ease!
          </p>

          <a href="#" className={`${playfair.className} font-semibold mt-4 inline-block hover:underline text-3xl  ${secondaryColor}`}>
            Discover More →
          </a>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
  className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Background Shape */}
  <div className="absolute -z-10  w-[550px] h-[200px] rounded-lg right-0"></div>

  {/* Fashion Image */}
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPD4Q4mIO5Seqv2z2gIskc-kKdhAPqt8aHLe26148D2Fp_CZearUTc5juFgdE6F1yiTV4&usqp=CAU"
    alt="Fashion Model"
    width={550} // Increased width
    height={200} // Increased height
    className="rounded-2xl object-cover"
  />
</motion.div>

      </div>

      <section className="px-4 py-8 max-w-full mx-auto">
        <h2 className={`${playfair.className} text-center text-3xl font-semibold mb-6 underline ${secondaryColor}`}>
          Check Our Selection
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories1.map((category1) => (
            <button
              key={category1}
              onClick={() => {
                setSelectedCategory(category1);
                setVisibleCount(6); // Reset count on category change
              }}
              className={`px-4 py-2 border rounded-full text-lg transition ${selectedCategory === category1
                  ? " text-white"
                  : " {`${secondaryColor}`}"
                }`}
                style={{background:primaryColor}}
            >
              {category1}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="relative  p-4 rounded-lg shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={500}
                className="w-full h-[300px] object-cover rounded-md"
                unoptimized
              />
              {product.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                  {product.discount}
                </span>
              )}
              <h3 className= {`${playfair.className} mt-4 text-lg font-semibold ${secondaryColor}`}>{product.title}</h3>
              {product.oldPrice ? (
                <p className=  {`${playfair.className}  ${secondaryColor}`}>
                  <span className="text-red-500 font-bold">{product.price}</span>{" "}
                  <span className="line-through">{product.oldPrice}</span>
                </p>
              ) : (
                <p className="text-gray-600 font-bold">{product.price}</p>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleProducts.length < filteredProducts.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="px-6 py-2  text-white rounded-lg shadow-md  transition"
            >
              View More →
            </button>
          </div>
        )}
      </section>

      <section className="px-4 py-12 max-w-8xl mx-auto">
        {/* Service Features */}
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

        {/* Instagram Section */}
        <h2 className={`${secondaryColor} text-center text-4xl font-semibold  mb-6 underline ${playfair.className}`}>Instagram</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQrnmN8AZk-J6UPrK2Sf4E-Ta49pZmkk-fg&s" alt="Fashion" width={300} height={200} className="w-74 h-56 rounded-lg" />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavjs2Md3nJKU9BPEuF66Rwt4MXVMTYer3zw&s" alt="Model" width={300} height={200} className="w-74 h-56 rounded-lg" />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXVDbQ9Ks4PTIOSbMstm9XcH4C7vXAWykS5j7HaBx3WJyGjrWEsDeHyCZQkzbZbGnbok&usqp=CAU" alt="Gown" width={300} height={200} className="w-74 h-56 rounded-lg" />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-scOmSz8dyZ6-53AcXlcaXkcH01kQPS2YNveI4_NALKCe8mmXiN8COKpJeYUXBscLCCM&usqp=CAU" alt="Makeup" width={300} height={200} className="w-74  h-56 rounded-lg" />
        </div>
      </section>
    </DefaultLayout>
  );
}
