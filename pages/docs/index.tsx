import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import { useState } from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import myImage from "@/public/Screenshot 2025-03-02 190823.png";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";


const playfair = Playfair_Display({ subsets: ["latin"] });
const primaryColor = "#b49dbd";
const bgcolor = "#cdbdd2";
const secondaryColor = "text-[#663f58]";
export { secondaryColor, primaryColor, bgcolor };




type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description?: string;
  images?: string[]; // Make images optional
  image?: string; // Allow single image property
  oldPrice?: string;
  discount?: string;
  colors?: string[];
  sizes?: string[];
};


const products = [
  {
    id: 1,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Women",
    description:
      "Get ready to elevate your denim game with our stylish and versatile high-waisted jeans. These jeans are designed to flatter your figure and provide a comfortable fit that accentuates your curves.",
    images: [
      "https://cdn.shopify.com/s/files/1/0800/4863/products/Beautiful_Dresses_6f1be265-31d1-4202-a3d3-391bd1cd775b_1400x.jpg?v=1530714243",
      "https://i.pinimg.com/originals/35/ae/49/35ae49d0686830db0b88ddc59da52dc5.jpg",
      "https://i.pinimg.com/originals/ef/b6/58/efb6582ede00824d357fd0c34cb3448b.jpg",
    ],
    colors: ["#d991ba"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Women",
    description: "Elegant silk dress for any occasion.",
    images: [
      "https://cdn.shopify.com/s/files/1/0800/4863/products/Beautiful_Dresses_6f1be265-31d1-4202-a3d3-391bd1cd775b_1400x.jpg?v=1530714243",
      "https://cdn.shopify.com/s/files/1/0800/4863/products/Beautiful_Dresses_6f1be265-31d1-4202-a3d3-391bd1cd775b_1400x.jpg?v=1530714243",
      "https://cdn.shopify.com/s/files/1/0800/4863/products/Beautiful_Dresses_6f1be265-31d1-4202-a3d3-391bd1cd775b_1400x.jpg?v=1530714243",
    ],
    colors: ["#d991ba"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Women",
    description: "Elegant silk dress for any occasion.",
    images: [
      "https://cdn.shopify.com/s/files/1/0800/4863/products/Beautiful_Dresses_6f1be265-31d1-4202-a3d3-391bd1cd775b_1400x.jpg?v=1530714243",
      "https://cdn.shopify.com/s/files/1/0800/4863/products/Beautiful_Dresses_6f1be265-31d1-4202-a3d3-391bd1cd775b_1400x.jpg?v=1530714243",
      "https://cdn.shopify.com/s/files/1/0800/4863/products/Beautiful_Dresses_6f1be265-31d1-4202-a3d3-391bd1cd775b_1400x.jpg?v=1530714243",
    ],
    colors: ["#d991ba"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcASeqGVWNtaAVfAt6jnb4NfAQSN6Nw8l0Uw&s",
  },
  {
    id: 5,
    title: "Pink Gown",
    price: "$400",
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjV_p4g-S2SxFTCwrq3ISWQ1HWv8D2izZunJaU2QkwHZrI6d3rYtoy5CP4xijLNjgAh4&usqp=CAU",
  },
  {
    id: 6,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Women",
    image: "https://i.pinimg.com/736x/d7/6e/ef/d76eefa80b6755d09e67fb9103a2e3a0.jpg",
  },
  {
    id: 7,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVNsFUehEV8axEoaDcjwOlCiJsTNuY-BvdI6zTGckMgttOTlJkacUo8a3EpR7Gx6vTwo&usqp=CAU",
    discount: "-20%",
  },
  {
    id: 8,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMVth9YZ9SLptZDchhaV0PtHRa9LiqoR8Ge1DDrJTjavQPXW55aos7Ie1hDwd_Utb6J4&usqp=CAU",

  },
  {
    id: 9,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Women",
    image: "https://st2.depositphotos.com/6786128/12218/i/450/depositphotos_122188384-stock-photo-beautiful-girl-in-a-purple.jpg",

  },
  {
    id: 10,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUEgOKQwhaAYs5hth7rFA9sfPbrUUF9t9rQC73-ScAQdNyWhZgIpP147DlLjqkfOD78g&usqp=CAU",

  },
  {
    id: 11,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2dIf5LrK2b3sGc9IVVyZ3Yb8bbOTOrBgfU_F5P-_Ox5jP7BoXtWAbzHKrFEDyphvzO4&usqp=CAU",
  },
  {
    id: 12,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlTdwgoCqrMEx_Iyoj1rlqZlDTerLdGIRcw&s",
  },
  {
    id: 13,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3gROLpexNN2r71JjTlq45VppI356zDR9hTg&s",
  },
  {
    id: 14,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Women",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/h/k/g/l-lw-9102-b-tilton-original-imagjup95gdv5cec.jpeg?q=90&crop=false",
  },
  {
    id: 15,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYE-lSQ24VkTu8b1HKC22qCxQnBhraFesqZIy4n6hjyzrSrAAijh-o5mumTnduPESA-aI&usqp=CAU",
  },



  {
    id: 1,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Men",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0KJKnBUE_rH9F12tDjslft2IKXK_mTjKLQ&s",
  },
  {
    id: 2,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Men",
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/11/466323076/OH/XZ/ED/236189094/product-jpeg-500x500.jpg",
    discount: "-20%",
  },
  {
    id: 3,
    title: "Luxury Cosmetic Set",
    price: "$120",
    category: "Men",
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/11/466380568/MM/EO/TP/236189094/product-jpeg-500x500.jpg",
  },
  {
    id: 4,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKm0psYuaqX5vRZiM9LxygWAbzCFyaCtkxQ&s",
  },
  {
    id: 5,
    title: "Pink Gown",
    price: "$400",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjGZvvZUQ8xGUDUT_x6k13dXYQtWVX0PXMg&s",
  },
  {
    id: 6,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRow5FxzSiEboTYcKl1mH1x3u-arkbe-4uz6Q&s",
  },
  {
    id: 7,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSL1OOxKh7pTDO7KMftsE0b0VcYdLPVHDZLG5qG7vjWjhf9ablB096uRix5bzG3JVPnQ&usqp=CAU",
    discount: "-20%",
  },
  {
    id: 8,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxXLC9utu1nVfMyhnSx0-5LxTz3ROtIEH0A&s",

  },
  {
    id: 9,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS67-hJR-jThPr3jEjrSIjYWJNwye7dpOEPw&s",

  },
  {
    id: 10,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzzzH7lltjbkRC2vNXYg8DixVpWB1BJiaddd6kbIrOfHAR5LeKqYyTnf61kIsrpdb_iU&usqp=CAU",

  },
  {
    id: 11,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Men",
    image: "https://www2.hm.com/content/dam/global_campaigns/season_01/men/ms21lh14/MS21LH14-Jersey-2x3.jpg",
  },
  {
    id: 12,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6HkGC4mNdUwuTbsqvEABplUGQjCYlzeRoA&s",
  },
  {
    id: 13,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Men",
    image: "https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875300014-18.jpg",
  },
  {
    id: 14,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kUPTxU5ImnBt9kBhRUwmKE2sEVlpx5rRa9pJtRGhzHHJpbhqnDmdTbo7K280eB7X0FI&usqp=CAU",
  },
  {
    id: 15,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIjpgpNSdeR6inStjGpGNBD3xZkuDlpdRHKAEdcmkVGYoE7SJVcxT2FE0FtTc4Gh10zY&usqp=CAU",
  },



  {
    id: 1,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Girls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvhG2OreqX88CBnc6Pj-nV8SvdDeU05QOJg&s",
  },
  {
    id: 2,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Girls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfvSaf2FOIf9a-LLTF3R5FXIdKq7aVE9yXw&s",
    discount: "-20%",
  },
  {
    id: 3,
    title: "Luxury Cosmetic Set",
    price: "$120",
    category: "Girls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyyJ_egPLSvnItV1w0hoSBZQDQjRHPzTmQ0t4NIi7vhzVy2KYI9cPSTMOEy2gJXuliwg&usqp=CAU",
  },
  {
    id: 4,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Girls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrp-EweBBxnAy3aW2mmy9ehXiG-4DTNLkDEA&s",
  },
  {
    id: 5,
    title: "Pink Gown",
    price: "$400",
    category: "Girls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvxX9ORG4ab6bYDVdWvA9XoTrWfcKsTtHkw&s",
  },
  {
    id: 6,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Girls",
    image: "https://5.imimg.com/data5/ECOM/Default/2023/10/354181019/EC/OJ/ZX/24473342/1697716579535-sku-33146-0-500x500.jpg",
  },
  {
    id: 7,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Girls",
    image: "https://m.media-amazon.com/images/I/71gXO41mPEL._AC_UY1100_.jpg",
    discount: "-20%",
  },
  {
    id: 8,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Girls",
    image: "https://fashiondream.co.in/cdn/shop/files/063A4322-front_64c80129-faf5-4ec3-a4d4-2909f33f1c57.jpg?v=1736167481&width=533",

  },
  {
    id: 9,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Girls",
    image: "https://images.meesho.com/images/products/156769628/ltlo3_512.webp",

  },
  {
    id: 10,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Girls",
    image: "https://rukminim2.flixcart.com/image/850/1000/kx7vc7k0/kids-dress/m/d/z/13-14-years-girls-dress-4jstar-original-imag9praemhgtutz.jpeg?q=90&crop=false",

  },
  {
    id: 11,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Girls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbI4Z5qob1U6ccK_lG68JE9MXgJ1g5DalIxXhvRjGsRqFe0YYHdJ_AYZkbHpbbnT76XY&usqp=CAU",
  },
  {
    id: 12,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Girls",
    image: "https://www.fancydresswale.com/cdn/shop/products/Black-1_9cd9880b-a928-4316-b332-63c04e7a13fd_1024x1024.jpg?v=1622864344",
  },
  {
    id: 13,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Girls",
    image: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013357017_437Wx649H_202206071629081.jpeg",
  },
  {
    id: 14,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Girls",
    image: "https://canary.contestimg.wish.com/api/webimage/5b275bfc53ed316b503a29fb-large.jpg",
  },
  {
    id: 15,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Girls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4kUEwWbGxqZ38NsDgZuRxZOHKEuICtpIs96DbLcxfwQILx0u6kOpSqc96KzYsgPdMEA&usqp=CAU",
  },



  {
    id: 1,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Boys",
    image: "https://i.etsystatic.com/11463421/r/il/2007e2/3546997770/il_fullxfull.3546997770_6da9.jpg",
    discount: "-20%",
  },
  {
    id: 2,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Boys",
    image: "https://images.meesho.com/images/products/220651139/rpgxo_512.webp",
    discount: "-20%",
  },
  {
    id: 3,
    title: "Luxury Cosmetic Set",
    price: "$120",
    category: "Boys",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWft4DII-pxBaytT3GrV6lT_l_6xPHu4ciw&s",
    discount: "-100%",
  },
  {
    id: 4,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Boys",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStI75hoI2zsyoZTfSxwpFylDKanf793F5Oj5zgeFD6SJn1DFrxx1aEx3xJ2rIVJs4COZ8&usqp=CAU",
  },
  {
    id: 5,
    title: "Pink Gown",
    price: "$400",
    category: "Boys",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcn8vVIZbjSBUguR-lKzA-v8BXo0s6KQI7tBM285yB_NOLcpBhNnEn8yO-urhANqMkHvo&usqp=CAU",
  },
  {
    id: 6,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "Boys",
    image: "https://cdn.shopify.com/s/files/1/0271/1820/7064/products/product-image-1179783905_grande.jpg",
  },
  {
    id: 7,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Boys",
    image: "https://blog.g3fashion.com/wp-content/uploads/2021/03/2-4.jpg",
    discount: "-20%",
  },
  {
    id: 8,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Boys",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-t-shirt/v/q/f/6-7-years-kids-full-sleeves-tshirt-a275-anku-original-imah5g56v6y2pkgq.jpeg?q=90&crop=false",

  },
  {
    id: 9,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Boys",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-t-shirt/j/t/v/11-12-years-kids-rndf-patta-grey-11-12-yy-clothing-original-imagpzjbzbfa6fnw.jpeg?q=20&crop=false",

  },
  {
    id: 10,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "Boys",
    image: "https://rukminim2.flixcart.com/image/300/400/xif0q/kids-t-shirt/d/x/d/15-16-years-new-jf-4311-supersquad-original-imaghrcqa9xwecfc.jpeg?q=90&crop=false",

  },
  {
    id: 11,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Boys",
    image: "https://www.jiomart.com/images/product/500x630/rvzkd2pyyz/tarsier-boys-longsleeve-cotton-t-shirt-folding-3-4-yr-product-images-rvzkd2pyyz-0-202210211028.jpg",
  },
  {
    id: 12,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Boys",
    image: "https://m.media-amazon.com/images/I/81wIWdJvlEL._AC_UY1100_.jpg",
  },
  {
    id: 13,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Boys",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKU0O7hmPTQXZ4ZdpD39QPDch6irpPwEPJ4g&s",
  },
  {
    id: 14,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Boys",
    image: "https://www.okboss.co.in/assets/img/home/boysrow1/kids%20wedding%20prince%20party%20dress.jpg",
  },
  {
    id: 15,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "Boys",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-uI0nU3xshwHe7e7EdPQzF2Gz0J92VPouw&s",
  },



  {
    id: 1,
    title: "Long Draped Silk Dress",
    price: "$400",
    category: "kids",
    image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B2-1688389726.jpg",
  },
  {
    id: 2,
    title: "Long Draped Silk Dress",
    price: "$320",
    oldPrice: "$400",
    category: "kids",
    image: "https://www.fancydresswale.com/cdn/shop/products/G32-1_1024x1024.jpg?v=1647005398",
    discount: "-20%",
  },
  {
    id: 3,
    title: "Luxury Cosmetic Set",
    price: "$120",
    category: "kids",
    image: "https://images-cdn.ubuy.co.in/6613cb75a323b407bd014d6e-kaoayi-kids-clothing-for-boy-spring.jpg",
  },
  {
    id: 4,
    title: "Stylish Hat & Outfit",
    price: "$250",
    category: "kids",
    image: "https://fcity.in/images/products/228958977/xpgr4_512.jpg",
  },
  {
    id: 5,
    title: "Pink Gown",
    price: "$400",
    category: "kids",
    image: "https://i.pinimg.com/736x/2f/7b/59/2f7b593001feb77669829eb44ff5bc9c.jpg",
  },

];

const categories1 = ["Women", "Men", "Girls", "Boys", "kids",];



export default function DocsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Women");
  const [visibleCount, setVisibleCount] = useState(20);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => product.category === selectedCategory);
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleAddToCart = () => {
    if (selectedProduct) {
      console.log(`Added ${quantity} of ${selectedProduct.title} to cart.`);
      alert(`Added ${quantity} of ${selectedProduct.title} to cart.`);
    }
  };

  return (
    <DefaultLayout>
      <div>
        <section className="px-4 py-8 max-w-full mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories1.map((category1) => (
              <button
                key={category1}
                onClick={() => {
                  setSelectedCategory(category1);
                  setVisibleCount(20);
                }}
                className={`px-4 py-2 border rounded-full text-lg transition ${selectedCategory === category1 ? "text-white" : `${secondaryColor}`
                  }`}
                style={{ background: primaryColor }}
              >
                {category1}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div
            className={`${playfair.className} grid py-4 px-4 grid-cols-1 rounded-2xl sm:grid-cols-2 md:grid-cols-5 gap-6`}
            style={{ background: bgcolor }}
          >
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="relative p-4 rounded-lg shadow-lg border cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.images?.[0] || "/fallback-image.jpg"} // Use first image or fallback
                  alt={product.title}
                  width={400}
                  height={500}
                  className="w-[400px] h-[300px] object-cover rounded-md"
                  unoptimized
                />

                {product.discount && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                    {product.discount}
                  </span>
                )}
                <h3 className={`${playfair.className} mt-4 text-lg font-semibold ${secondaryColor}`}>
                  {product.title}
                </h3>
                {product.oldPrice ? (
                  <p className={`${playfair.className} ${secondaryColor}`}>
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
                className="px-6 py-2 text-white rounded-lg shadow-md"
                style={{ background: primaryColor }}
              >
                View More →
              </button>
            </div>
          )}
        </section>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 right-4 text-gray-600 text-2xl"
              >
                &times;
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Images */}

                {/* Product Images */}
                <div className="border">
                  <Image
                    src={selectedImage || selectedProduct.images?.[0] || "/fallback-image.jpg"}
                    alt={selectedProduct.title}
                    width={400}
                    height={500}
                    className="rounded-md cursor-pointer"
                    onClick={() => setSelectedImage(selectedProduct.images?.[0] || null)}
                    // Show enlarged view
                  />

                  <div className="flex gap-2 mt-2">
                    {(selectedProduct?.images || []).map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={selectedProduct?.title || "Product image"}
                        width={100}
                        height={100}
                        className="cursor-pointer border rounded-md"
                        onClick={() => setSelectedImage(img)} // Change image on click
                      />
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div>
                  <h2 className={`${playfair.className} text-2xl font-bold`}>{selectedProduct.title}</h2>
                  <p className="text-lg font-semibold">{selectedProduct.price}</p>
                  <p className="mt-2 text-gray-600">{selectedProduct.description}</p>
                  <div className="mt-4">
                    <p className="font-semibold">Color:</p>
                    <div className="flex gap-2 mt-2">
                      {selectedProduct.colors?.map((color, index) => (
                        <span key={index} style={{ backgroundColor: color }} className="w-6 h-6 rounded-full border inline-block cursor-pointer"></span>
                      ))}

                    </div>
                  </div>

                  {/* Size Selection */}
                  <div className="mt-4">
                    <p className="font-semibold">Size:</p>
                    <div className="flex gap-2 mt-2">
                      {selectedProduct.sizes?.map((size, index) => (
                        <span key={index} className="px-3 py-1 border rounded-md cursor-pointer">
                          {size}
                        </span>
                      ))}

                    </div>
                  </div>
                  {/* Quantity Selection */}
                  <div className="mt-4">
                    <p className="font-semibold">Quantity:</p>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="border px-3 py-1 rounded-md w-16"
                    />
                  </div>

                  {/* Add to Cart */}
                  <button
                    className="mt-6 bg-[#b49dbd] text-white px-6 py-2 rounded-lg shadow-md"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
