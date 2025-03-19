import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import My from "../../public/Screenshot 2025-03-03 171133.png"
import My2 from "../../public/Screenshot 2025-03-03 173935.png"


const playfair = Playfair_Display({ subsets: ["latin"] });
const primaryColor = "#cdbdd2";
const bgcolor = "#b49dbd"
const secondaryColor = "text-[#663f58]";
export { secondaryColor, primaryColor,bgcolor };



export default function DocsPage() {

  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <DefaultLayout>
      <div>
        <section className="max-w-full mx-auto px-6 py-0">
          {/* Title */}
          <div className="relative w-full h-72">
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm"
              style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtRefjY5nawVXGJOUneohPFudtHHFXUEMCP9AQwcF9sVggEtYw72s_QeY82THEQoSJy4&usqp=CAU')" }}
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white/30">
              <h1 className={`${playfair.className} text-5xl font-serif font-bold`}>About Us</h1>
            </div>
          </div>


          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-12">
            {/* Left - Text Content */}
            <div>
              <h3 className= {`${playfair.className} text-4xl  font-semibold mb-4 text-center ${secondaryColor}`}>
                We are here to help you go places in style
              </h3>
              <p className= {`${playfair.className} leading-relaxed text-xl text-center`}>
                Our goal is to help you look and feel confident as you take on the world,
                whether it be for a casual weekend getaway or a formal occasion.
                <br />
               
                We strive to make fashion accessible to everyone, no matter your budget.
                We are dedicated to curating a wide range of high-quality, stylish products
                that cater to different tastes and preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center animate-fadeIn delay-300 py-8">
                <button className={`${playfair.className} py-3 px-8 rounded-lg shadow-lg  transform hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center gap-2 text-3xl text-center ${secondaryColor} font-bold`}>
                  CONTACT US →
                </button>
              </div>

            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <Image
                src={My} // Replace with your image URL
                alt="Fashion Model"
                width={800}
                height={500}
                className="rounded-lg shadow-lg object-cover hover: broder 2px solid border-purple-700"
              />
            </div>
          </div>
        </section>

        <section>
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

        <section className="container mx-auto px-6 py-12">
          {/* Responsive Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Images */}
            <div className="flex gap-4 justify-center">
              <div className=" transform rotate-[-10deg] shadow-lg">
                <Image
                  src="https://cdn.shopify.com/s/files/1/1018/4207/files/1_ae200211-d954-4dcd-8dff-0996f70a9f27_400x400.jpg?v=1737095593"
                  alt="Fashion Model"
                  width={300}
                  height={350}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className=" transform rotate-3 shadow-lg">
                <Image
                  src={My2}
                  alt="Fashion Items"
                  width={300}
                  height={450}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="text-center md:text-left">
              <h2 className={`${playfair.className} text-5xl font-bold ${secondaryColor}`}>We are here to assist you</h2>
              <p className={`${playfair.className} mt-4  text-xl`}>
                For specific shipping-related information and any additional questions, refer to our Shipping FAQs or reach out to our customer service team.
              </p>

              {/* FAQ Section */}
              <div className="mt-6 space-y-4">
                {[
                  "Do you offer any guarantees or warranties on the quality of your products?",
                  "How do you ensure the quality of your products?",
                  "How do I care for and wash the clothing items?",
                ].map((question, index) => (
                  <button
                    key={index}
                    className= {`${playfair.className} ${bgcolor} w-full px-6 py-3 text-left  text-white rounded-lg  transition flex justify-between items-center text-xl`} 
                    style={{background:bgcolor}}
                  >
                    {question}
                    <span className="text-xl">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section className={`${playfair.className} flex flex-col lg:flex-row items-center w-full rounded-2xl h-full max-h-full max-w-7xl mx-auto `} style={{background:primaryColor}}>
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex h-full">
            <div className="relative w-full max-w-md h-full max-h-full">
              <Image
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGB4YGRgYGBcgGBoaGBcYGhodHR0aHSggIBslHRUaITEiJSkrLi4uGh8zODMtNygtMC0BCgoKDg0OGxAQGy0lICYtLS0vLy0tLS0tNS0tLS0tLTItLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xABAEAABAgMHAQQIBgEDBAIDAAABAgMAESEEBQYSMUFRYRMiMnFCUoGRscHR8BQjM2Kh4QdDcvEVJILCkrI0Y6L/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBBQAG/8QAMREAAgIBBAECBAQFBQAAAAAAAQIAAxEEEiExQSJhEzJRcUKx4fAjgZGhwQUUM0PR/9oADAMBAAIRAxEAPwB3uS/W7QJeFY1SfiDuI1vq6EuJNOtNQeQeYqW778KXUKR4goSlzPT26e2LvSqcXUWEjM7OpQaawNUZXTzKkKyL8Wx2UB8Fcj2jpzlDpfN0pcSadaagjQg7GE+0NlskOUlXNoFD5K5HtHTr06gEYad3Q65b1we/3+/3xqBEW320N0FVfD++kcVW4rm22hRWpWVAGp9g3HGnuiw8HYPTZx2rwC3zzIpRPUDlXJiXU6/Hpr/rH6vWV6Rd1nJ8L9f0iNdF2ZpOu1nUJnMV3PMF32ErSULE0nb5jqOYK4kuQ2Yl9kEsEzcbAq0TqtA9TlO2o3EA7beASEhsdo4v9NCT4v3T2T1jhMxzzPm77bNTZ8UHOevb29sfrIybxXZTkdzO0/JMxNU8qcqp6ECXerpzKc3DlgDj3aWkkrUCE5T3U7ZU6mY3MTLowehxCl2pQWtwSUqcsg2S2NvPf2mYF5p2yvJadUSkn8t2slpFAk7hYFJb/FRJ4z1NwjAiv5vPv9v8jz3CmIrCwFJ7FdQKEmZB3BmPDpStSaRph+/jZyUueCffTqUmk1p5Fajfz8Qa33oloZRVwkmUwQARSfXX+DAMWpzPnJmTqCaeX9/KkUUajYcH5TKNO6rX8O/lT48/eXm04FJCkkKSRMEaEHQiPVomIrrCeI+y7pmWSap3QdyBxyPaOtiNOBQCkkFJEwRoQdCIv9xINZpGobjlT0fr+sTMVYenNxtIVMSWg+FadwfkdjFXru8tuhKQpTSyQhRMlNkapUdlJ16iRrOPoRaARFfY2w2RN9nUVUkaGXzqawFlYsHvJg/GIOZv+0ZkLU6S4hARmkO8E80rrOs4dLgv5Np7q0yWOPCfoekVvcrKn1BAGuh+94eP+ps2RSGGwFPKICiBpOU/4+UKryDgReY2os4G0dS6lAmSBHMu0nFVY0xW8lSmgCJb8jmXH31htgYiYQYx4qxYKttK8+DyPvrCm+yey7ZCczRMnEDVtW5HTeX0hPRbyTrr90nWHvATL2V12SVsgScRmGcg1CwnYDnSR4mRHZWli7X6j9Ne1LZWMeFMXSKWLQsKzAFp31gfClc/S4Vvoa1U8BYitr5wa2pAessjqcuxnqK6HkfAx3wni0tkMWmYGiFqNU7SWTttmOm/MJVmpIS05B6b6/eOv0td2baRg+V/yJYqXNiI1Uo6CvWdP+Y0nzP2CfwjheV4NstlxwgJHvJ2AHrHYRQQF5nMJOdqjmaXteDdnbLrpoPeTsEjk/3QRTt/X47bHsxFNEIE5JTP4UEz6RHAEdsQ3o9bXqghImEomSEjqdzyd9NBB3DeG5d5QmdaxKqNqm4+X852qKhpF3P85/tPcLXSRJSqq5h4W7kQVcAn3CAt5W78OptlpIU84RlSqiSJ97vaClZwcZWlxMwQpJE6EEEGciDukyof+I6lapX6BI7bTY24yu8O3c7bHi+7MIJnXVR+kWIyyECQEpRu0ylIkkSHSI962gtsuLGqUKUPMJJHwhgAAwJl1zWtuaVJ/lTGKnHFWRg/loMlkemsaj/ak0luoH1RNTw1htdqclokeJXECrOQZrUc6jUAzM+SqGjCOLFWYlLwKmFGZMu82TvTVJ4+zA7E8yZSC3qlnXXYEMIDbaZJHvPUwBx9YGFMFa6OaNZfEtcu6B8SdhBi03s022HcwWF/phBBLhOgT9doi3Vda1OfibTV00Qj0Wk65U9eTqYnzjmVHB4EX8GYl/Ajs3kdioAkghWR9PX1XgNDQKEgZUIc7L/kGxKQFKUptR1QQDl6TmJ+6OF+3G3akZVjveircGKqtN3NpWpPazkSJiZFOCNRFFdxI4k7jZDeFLgcNoSop7qTMHk7Rb/4jK2SBMgfDXzlvKBwS00kmiUJ1O6ug3l5VPQVhavK9XH3A00CCZUHop5MtPKHNZ/11f1lRJc5cxzuO0qW2SupCjI8jn+ZeyI9/XehaDMTB1H06xEftjN32fO6o8AarWs6JSNyfcNTIRAw7ipFtCm1p7F9NS3mmCnZSFUzCoB4PsilCEwuYKXFLNy8GLFjt7ljtCXUAKKTKuigdUngkbjf3G4Ljvlq1NB1o0NCD4kq3Soc/HWKtxDc5mTKYMCLlvS0WV0lleVRSQQRMKABlMbqGo/sgpuqIOROxeqf6iB4sHR8H2P7/S3MRX+WiGGEh20rFEHwoSfTcOyemp/mEv8A6SqwHtqOoV+qoIAUgnUpA9Cew09lTuGAyWu0aUVlwzccV+ope+bgjjTSVILynQiYNI5D2ktJUUUA1gff3/8APb+8hsJC0JWTMK7yZHVJ4ltrvXpChiy8krzWRAC1E9817ktJbhXTbfiON7doyX0WNSiwn9RQBKWCT3gkjWWpAnlmfZAZs6Wk90kzE8w3J3J9sH3DFPwvXnP09vv7+38+uxNosRSrTyPrdOivj8Ys4aCyHBkMyJbnSVdekL1ocSlR7wNZZk7joDudJ7+8wSruOBDWk6hsjvz9PvMs5yTJMueBwJbq6fWLRwIFCzSVMTUSkHYGXurM05hWwlhcuFLzyZJHgRx1PJMH7+xazZFhlNVCWaXoz0T5yr0pzHTrr+Gnqi9Zq0+F/t6+gc5943iOVpaCgQRAKxX6HADORNZTrLnygzY7RmFdY8tmTicgGIF4WZyxOOFlvN2nh4Srf2H5CJWErgUFds7NTiqkmHdyzhWonG7bIGkPBUcjubNdB7P458qwsYlwqh+spK2MTcVtPgNusCa2yTQ1ynUAaHQUPG0ScO3si0tzEgoeJG4I1kNZdNR5aK+IVbnowscZlO3thVbKwVIKkggmUxMTqJ7TG8Yy+/YHk2uyrUponU6pO7bn10Ii7bZYErEiJwg33cq7OpS20hSFUWg+FSeD9doy2kOMr3NXHRh+6r2bca/FWb9M1fYH+md1J4SJifAl6Mikfim6s8rQyApJHeA3l8FDTkaQm2dxyxrFrsaiW5jO2TVP7V9KmS+sjQkQ7XTfrJR27X6CyEus+kyvlKfV/b6NNU5SmHgg12Dj8o+t2qcEd+JGwziksAIdzKZFEkAlbcvRIGqdgPR2mnwx7fbHba5mVNKR4EahCTv1cVzsNKVgre+HgVB1gJUFaj0SIJ3JcoaTmXVWvlCV0Nzt8N2zWPPk+0sN2nT+Mi+s/wBB7wZhu77MlS21pzPZZtpUcqSTwrdX8Q0psymhJadBOaQSNp6aEEwt3opp1wNAELqUqTqkgT91IZsOX4OxSH1ZVk5ACe8QKV+ulY6BU1HAnJtsctuYyHe91ptDYKVSUKoWNUn7oRANu+H2lhq0Akp8JAmQNyjdaDKamz3t0mYAh0vG7JfmsSBlVOyh9YE26ytWlvKqh22UlXTrBZFg57mo46M72K2JcTNJBoDQzEjoQd0mRkehFCCBpeiJtkdIVbO24xaEIcXkBUcq/QVm1UoaZjIApNDrQyUl2fapsUnQjQwaEg4aebAM+Ybyu02d9TZmEieU8p29u0YpXdMjpsZe2LTx5hXPNxAnyPpFWqsXZrkvwqoJ88dDSE21beR1EsuIRwteQsrqHlthbREjupEzqD06+/cXFZbQhxCVtqCkqEwRpFL2EgIKAuR2BlI+2NbvvNbQ7MKWGVyLjKVEd3co6EbfKJXTdCSzbxLPfeXbFlpo5bODJxwGrn7EH1eVb+WpxmxoQkIQlISmgAFIi3Ha2XGUqs5HZS7stuQRsobwRz9CfKUoYqgDiAzEnJihet4OOuBtHedOgHhbHJlqr7HIKBVnuuzl54zWfLO4uWifuQEcnnLNdNn7V05nFaD03FcDpydvcIqq12q1XragTVRMkpE8jaeAPue8UjFQ2r2ZQ9niF74vh21kWhxQOYEJCScraZ+BIIBB0zHVXlKBqHFJUlaFFC0nMlSdUnkfMbw6Wr/HyrOwFNSWqX5iDPve0bjYgU6gkFOdalUTlOVRUHdKuFD3ESImDCXVlPMnIPmWfhTEaLcgtOgJtCRVOyx66OnI28ohYhuPKSoCnTURXbbqkKStCilaTNKhqk8j7rFrYSxKi2t9m6EpfSO8BoseskfEbRVVdu9LSmm8qYs3NerlmdzJrPxo2cA3HDg+9xDqi8F278uylTbP+q9KSxOuRAPp8q0G20A8Q4flNSRTWm3UQCua93bI7mEyD4kHRY5HCx97xLqtMM7wJ3UddUmR/wAg6+h/WW3YbE0w2ltoZUASlKnUmdTPcnWE3EFw/hj2rY/7cmakgT7Encf/AKydvR8oarHfDTjPbpWA3KZJlSWoVwRxFdYlxQ5a1dm1mSzmkAKKdIOp4T021NZARqCxwJFpKrWsO7r8Wf33Blut5WoNNzkaST4l9OiduvlDlhbB6WwHHgFOGstk9B9YkYTwulgdosBTh346CDl9XomzNZyMyicqEDxLWdEj67R1K61pXJ7ntTqd38Kn5fz+84XzeIs6JJkFHcjutpJlnUBrLZIqoiQ3Ipa+W3EuFS1Z8xJS5susya1Cq1BqPKU7zu672PwzjdtcQXXCFvzUBkUR3EpJ0yAAAeZ3MVriVFks7TrQeTa1LUMnZqEm0iffUagKkSJb+U4le8s3tOewDcCK9336togA6n29Nfv+YtbA14qeQVnTSfPyl5RVVzYdGX8RbF9mwDSfic6AamY298MLONrQ5Jm7LLJAoFqEz58ewBXnD1ITloocS3wqNgYqVFkv1dTaAknYEfIj4Rsb4vqyVdSl9A1oJ090/IKjP9whm8jwZbUK2ILlUlX4mzd10VIFAsD58GI+FcfMWs5FfkvTlkVoTxXQ9D7CYb4aCGHtNB+kCYexGm0DKqjg1TpM7y4V0+yVtDCVp5EKeKLhUlX4hiihVSR6Utx1ifhrEaXwErIS5oCaBctlcKHO3UQrLUn6iMwDyIAv7D62Vl5j/wAkymlQOoI3Bhes6FIzPWLM25LKtlA/M7xUKLOjYCgKCYn0Ai33GwoEEVGoOohNxBhwhQeZ7q0mdN/PkdIa9a3DI7mhuMGM+FrqKWSqRaSoJUlhRn2UkyInMmRlOUzI78THaiAmFMRBwlK+64nVB26jkfCG15lKxNNDAKPhcGJLEH1SuMQWFSVB1BkpJmD97RutLdrT2jZk6nxDcED4QxXpZswIIivbwQ5Zne0bMiNeCOvSK2QWLDI3CP2Fr/WhKkvmSUUzHSZ0A9lYn29aHyCkUBzCYkVHk9On/EJtttzbi0qT3wKg7TOpl5/z5VL2C29Y419mG2ibVT5MI2llLqS26Jg6HrtXY9Yg3bblWRfY2jvNqMkL56K4V8fOCgUFjrHG0MpcSW3RmSaV28/rDqNQCNj/AMjCdIQtFnBFJKSd4SMRYGbdCiN9RsYKWS2u2JYadOdhZAC1EzT0V14O/nqyluk6EHQjTpFoYj0tE9cGfNl83OuzOFC/CaBR89/PmItrZXRUs0veB84vrE2G27SghSROUU9eF2KszhaUo5Roo1l5nYffki2rHI6gMuOROF1Xm7ZVdrZzmSoTW2ag9ZCVR7P5MyyL1dfHa/iynPXKkkAbSABpKUQ0WPIsGXu3J2n16ezWUa2u67OVEqbSSZEnvCZIGwVKE4i8wbK13taipRKlEy/a2nZKRsP+TFzYTws1YmwEgFZHeVvEjDGHWrG0EIAzS7yuTv7IMhMW117eT3HqvkzPhCPjLCU8z7CRMjvo2WBXbQ7gioJnWoLxHnwhjIGGDCIzPn95uWk5TlXUH1VdZcUIqKRrZ31NrS4hRSpJmCPvSLKxphPNmfs6Rml30bLGvv3BFQajUg1q6mkxOU5V1SfVV1/gioiF0KHBiCMS1sI4sbto7F0BD4Gk6OAekjrynbyjTEeHAQVJHX76xU7a1JUFJUUqSZpUkyKSNCDzFt4Kxam1DsX5JtAHkl0DVSRseU7aimlNN2fS0povKHIiS+ytM2pqOZQmkEgLI0JGkxzDphLCuSTrtV7cAcDiGRq5GgvPlE4Ktt7AQQREJInR1X+pPcoXGPr7zi86ltBUoySkfYHJOkoSrReYClW18hKgP+3QdLO2dHVDd1eqU66HYSM45DrIS6QVNIBICEBRQ6MpQpSVA5tFJAlKZFROcV7fBzrDlpQMylFTVmRLLmNFKWgjxTG80gECRlliK5mdtokCnjiQbwtqrQM7ilNsTKkj/VeKjrvIKlrXQ5QuRMF7huAZDabQkN2doZw2Bxud1LPUkzlrBfDmF1OLD9pqrVKdk+/egqamUc/8u27sbKhlJlnJUZeqjKP/ALLSf/GHpSKl3HuA5wIr3fZ3L4tZU5NNlaMsqfCAK5RzsSd5z4EWjY7nQylIaQAiWg1NKH7nELBlxiz2JpuUiUTWd5rE1b9ZS6CDH4ggmSaCUug4PTKOY57uWPMZUuBnzNQzqKgmoBp7K+caqVQjLNVPKWn8/SJDq5ivinIDSc/5/wCeY4uuJkNNdBqRKkvd8YVHZMTcbYSS6C/Z0ht9O2gXL0ZbiXuqRBL/ABpi02pssun81sbmqkgyIP7kmQPIKTuYPAS1FCBI6yBrPzpFVvufg75StFELWhyQ0yuktL9lSfYOIp09hDYMnuQD1CXcROErE+H1IUX2BXVSBSctxwocw5pMerSCJGOlgHg9QAcGLGGcTJdCUOqkoUSuXHoqHy21EM6hOhFf4I5B3HWEbFGHVIUX2BX0kbKl8CNjHbDGJwQG3SZAyCj40HhQ+wfhKVag5HKxvzdSTiG4jMPMnK4moI+9Il4WxQVns3BlWnUT/kT9H4Qd8QrL5EciFXEtwZvzGjlcTUEaxYCtqxZGeDHh9pLomJT2hRv67QQQRWOWEr8UVFtw5HRqNiBSYHxhutVl7ZGozS1lrAKxrOD1FglDgyknXlWZwgzLZNRx1H0hiu63CQKTMGJeJbjnMFMjCU2tdmXuUTqPmOsK1WmFg3L3KUfEs2w2yCyVhQ6wiXdeAICgZgwyWG2RyCCpwY0jMKONpUktuAKQaV2/qBtleXYl5VqUqzmgUSTknsoGhTwdoKtrCoxQEsixNJpLz+UW0ajjY/UQ6ScpIUMySFJNZjSsJeMMMB4FaR3vjBVhRsKtM1nJ8y39UfDy0YFpStOZBBSRPy/qLwSvBiepQSQpkltacyeDqP8Ab9/SM/Ez9IHzSSfaQYtW/wDCzb9fCrkQpr/x8ufjT/8AE/WAagHqCawepYwj2UA8K4hbtrAdQQFaLTulW/31HQwah4IIyIwHMwxgMezjwmCmzyEXGmEcxVabOkZ5d9v0XBqfb1FQa8zeiYW8Y4tasDc1d91QORvc9TwmBsC7fVBbGOZUCm9xOU5EHxJV6quv8EVESrrsbjrqWmZ5woKKx/pkHY+t/fsi3M1arbaluCinPGQJJApQDpKm++sXXhTDTdlbCUCajqdyYmqqz6j1FqueYeswJCRqZfzBNqSEzOscMobE597+ISsUYtVMstJJdNANh+4y2+MMb1nAhcscCd8Y4nl+S2AtxYkE7S0mr9vx26DcL4XyntnyVuqqVK1++kd8MYey/munO4qqlHX76Q3NoAhoVVjAMDAnjbYEVN/mwEuMjbsXJeYW3P5Rb0or3/L13lTCLQE5uwXNQ3LaxJfwB9kLt5UwW6jPYLSHGQSQBlBTrIgpmNPKNmVlRzAgaSE6mkt/PeFL/G185202ckFTA7pn4mSO4tPIFEkbEVrDi+QDPNWYKSCOkx5T/qOOwwZSjZE6LRKQnOY09tNqxwWmpVKQ6a76z00nXiJ/ZgAqFTKc5n+OIGPKzlFT3pEaASHrEeUZDBm6+QKabazOm+38xV2O057eAPEEMN+SlvKVKm8pRY14W9DLa3nDlbSmZnOoOgHKjOQFJzitcJNLt15h1YolZtDg2SQMrSPMSSP/ABMOoQs0Te3AWXYI3jQRFvS822EZlnWiUgEqUToEpFSSaACpjqmJkxaQaGErE+FzPtmO6vcbKHBG8GlX6LOEfjltsLdV3GqlbaTp2qgSkEn2DkynB1SJwKuGGJ5W+kSMJ4jl+S9NMtQdUbTB9X/gw6OJlIGRB8Kh4VDp16Qr4kw/m/Nb7riag89D0MQMO4hKAptY7k5KbNSk7y4HB/uU9imk7l6jgN0IYiuHN+Y33XE1BGs47YYxMVHsnu64NRsrqPpBpLqSkKBzNnRW6eivr9hdxNh4Od9FFioI1ilHW5YDLngxwtlkQ8iY8WxhFxBcM5gisbXNipLDa0PzStI0FSvbujnptrpE+572Xa2yp1ISZ90Csk7DqeTG1hlOD1AUFeJWykrs6zSaTqPveGW6rxBAIMx8Ohidfl0ZgTKEpYXZlzFRuORCNTpg4yO49HxLIavJKElSlBKQJknSUd8P36i0krE6UTPYaT8z8Kczq+8rYq0FKRMNjY6k9fpDphSz5AJQrTabb6m7mO2eo9rSFCRqDC6tK7CvtEArYPiSNUVnNP7ekHWVUjqtIIkaxZjwYqaM2tp1KVtKmFffujeULiricbdzMOZG1KmtH893gHcf3DCIwAiZjE+drvt67E4LXZCS0TJbZNUn1F+/ur67zrdWGsQNWxkOtmvpJ3Sdwfv5E1pi/DS7AsvMpz2ddFINQAfQV+zg+j5UhesVtcsaxarKpXZEyUkmqT6jg03oTqD1mZKrdv2gsrVtgz6DjIEYZv1u2MJdbInLvJB8J3EQMbYtRYWp0U6r9NH/ALK/aIuLrt3Qtwxmb4yxU1YWsxkp1Q/LbnUnk8JHMU/d13Wm87SXFkqUozUrYDgcAcfOOt13babztJccUVKJ7ytkjhPEuNvOLtw3h9FnQlttNdzzCQDYdzdQfm5M54Yw43ZkBDae9uYZzlZTMkTO8eFwMioqdzKUJmKsSqJ7FoBTittQkcq+m8ESXOB1PcscCaYoxQoqLLIzOHTgdT06bx5hnDuSbjk1OKqpR1JjfDdwBvvr7y1VUo6kw0ITKHABRGAADAnNzuiBzjpBiVbHKy4iE7pWOJrbCz4B6l2mAAyZsi2qGh98SHFofQpCgO8CCDoQRWBS1RzS4QYno1dlTc8iU2adLBkcGVffd1vXY+CCsMhRU06kTWyTqCDRSDuk0PQ6tly43bWgdsnLy40FLaNNSACto18Kh1mYdbRZEWlqSgDsRFc3z/jQpXns6ig7SMvdx7I6jUCwBk6M5JVq24janElmKZC2WeRlq+0OkpEzFBEa8sW2RABbX2xAqlqa0Dfxqk2ka1KoQnML3lOWdR66n3lUSrD/AI8tLxHbuqI6mfumTL2QsaRvpPG2z6SDft/vW95LbaQTOaGm/wBNBPpEyGdcvTIAEqT1i08CYbFjYymrizmcVyeB0GgjbDOE2bKnuJGY6q3Ptidaba446bLYwFPD9Rw/psA7q5Xwn3xWiLSMmBjHJm97Xz2akstIL1pX4Gk//ZZ9FI5MLl83si7JuOuJtV5KGv8ApWYEeFCeZb6neQoeeIMSsXahbNjV2tpX+valVUVbhJrpwKDqaxWVmbL6y46ohAqpR1P1Jn/MIZy5xFkluJNszTlrcU/aFnLm7ylGqidAOSf4i9LnGVhtM8wSkCfTYewU9kVVcl3KtC0nLkaR4EbDqeVHmLSu9vKkCKkpCr7xoXAkxQnCVim4VBXbsUWON+hhzjxxAIrB4HRmjiIOHsRZTKUtltnT2ffuMoc7NaklIIM0HTlPQ9Ph5QrYowzmPatd1Y4gRct+qbVkc7qhqD4Ve/7+UVlLVHenUeCG7jjeuHW3VBREiIn2CwBtMhG92PEthSqA1SDqE7T+m2kTBFVdwcZEUwI7kK02cGFm+biz6CsOeWB9qfG2g35/qPWXBBDqrLmIVjw+ptVQYbrssmUCJMpSmDI8xNs6QRMQFV4ce822rbyOp0RQTOgiKu3T3kI53+9kZVL7qIS3r0Mom1bsMAdTaUB5jmbzSDLMCeJwTQqYBGhE4qVVqWpYNSduYs67SUtISrUJE/OVY3SMxyDMuUeIoYgvX8QVWZo/lDuvOc8toPxVtoK6V1f10uWNQdZUQ2ZEE1AIM8qwaET0JH9vjLYSkJSJJFABpSAuKr6Qw2W8occcEgg6SNJqlsONToNyFRlyKVy0BMXqtv8A72w5UKCf+5aAOUVklwJOrdZE6pJkdcxjXPdVovK0FxxRUSe8s6AcDjy2842wrci3FZQSM1FHgHUDYnrF03FdLdmbShtMhL3xXVSTy3UgVPrPbguRuzNhCBLk8xOVfrbCwhdM9M2wPB6HmO8Ab7uou6RSVDDBjMA8SLiy/VL/ACWxmcV7kA7nrwI8w3h8NDMrvLNSTUkxPui4Et1I725g0luUaMKMCaMAcTxtMo9WY3lAm02wqnk8CfErmegHn/OukKstCDJmgZm6jvEC1Pcn76RvbLSE01JEx6suZ/ekQVOpHeUqvO/sG3xjhuCTLEbAnqRM1B/27+ZO0eOjy9mn9xxXbEgcDjc/fWOJvIHp8fv7nCzVmPW2HLjekvLyINqQDCvc703AekNCVR2NErLVgyLUkF8ia9iOI2DYjIXseXr+Hsa1AkFRCARtm3ipjgZiJNK3LUpTdnX2bSJh600kmXiQ1OhXyrRPnSFPFOL2bOybLYfy2BMKcB/MeVoqSjWXrOHXQdV60/5AXaLKmzrCGENJCSy0CntSCQP9qNJjY8kiSY64t9cz9EpA+CR9zJrCzFzmIJJM6JC31EzCUjU+ikfe2p6mGm4LnLpSJENjQHUnk9fh7yYNwXQXCAAck5+Z5PvoNp8kmLRumxoZSkEhMzITIEzwJ6npFlNW0ZPcYq4k+5LsSgASkBBlb6EjQAc6wGtFuyLCeR8NfjAK+cTITmQFTUBofh5dYXe5DTDkmNKrxbzhE5E0HBPHnEmKKtt7O55hSsoM5TqJH4iLbwxfAtLCXJjN4Vj9w19hofbB1Pu4hCGVoBhYxHhhDwJAkrmGdKo9UJw2FK6s1+rYT2D08yTIGveG3th8uh3M0gnis4HW7D6HVhZFRWJS3wlOVOg35/qJmVKSWHZlK7rQF8CdrZaSaAjL/J5n00jWzWf0lewfM/T7GWZj0leYHzPXp9iVOOZbaWMccAbV6mLSCJGsQ1JU2ZzpsfkesTCYh3ja0pQrMQBKpOw5+g1JgK2IPEwGcL2AcbUOlRFY2xTjSimhG0/hD6L2SRLKpKzTIqWYA6E13Hu0MDr3uYO95On8iOtWRauHirE+Gcr1FvD63FuhSgABoAIsdp2gheue5yiGVKABKcPVAowJOST3K0xHf4s6cqZKdV4U7AGk1bynoNzQdFe6LrW+4XFkqUo1UdT5ccUoBQRl0XW5aHM65qKjMk6n3e6nkItTD1xhsCYrE9NX4mnnc2HJ6m2HLmDYBlDSw0TQAnyje7LGF7iQ1G/T2a16GD7LaUiQEhDHvA65i2fEH2a7jOa6DiOtpsre3dP8ROdcEoWr8vHs/EZT06+UJDuxgAkmSlIymRjUxEsdozJHeJ4nKkeW61BCTWRkZRQSVXLRwBnjoLyi0khKQJuLOgHX7r5TgLe94o/TaMm0aH1juo9T8JRHvC95Nhls01WfXVuT0GgHSflGs12FaZrOVO6vjLrt098c13LnMLE5IdW7MIOVKAVKcV4Uz0l16DX3QvrvlCSQskLGsgT7jKJuJ77ShAZaASkeFP8A7q5MJKpmpqTDK6d3Jh7tvENvYgT6KVHqYh/9ZcUZAS8j/UQUsk7QYum6FEgkRStCjxBLsY4YQSZTOsOzRpCch78M2CEzMMVxXh27eeUqlJ8xx74aLULfDB5E8yNjd4hExTf+RbweFoUH6yMmWwJtBBEs9dVmeu0pRb9pckIqzHKFvKAKcwBpPaNsQsvEUwyIq4dvZTSFtraQ604K50hSv/EkgyM5661ES7nuztVBKU5UT03Pn0H96mJNgww8sgkd2HayWVqyMl14hKUivJOwA3J4ga6gvJmBcTo2hmxsF545UpHtJ2SkbqPEVXiS/wB22ulxQIQnwIGjaZ8+saTV8hEy+LztF6WlLbaTKZDbY0QndRPPKvYItLDmEGrLZy0UhwrH5ilAd6ew4SNvfCrrscTwBeV3duLlvNhl5f5qf0nvW/av93XfQ1qRF52hxZmZzFCPL7+5wTxvgxVkUXWQV2c6iUyifPTrELDyfxB7NShnA7hJquXoHlUqg6kA6yjQwsGDM5BwYNadKiBvOQ6xaFxpasDDTrboeK//AMhKZyQAJgpmBPJM5j+4aCUKTdkcs7qXUjI4gzCpA/waGDdlcCwXGEyUBmdYBNANVtblAme7qiZlNJIUmxWrMNRjmWbY7ShxAWhQUk6ERJQIrW6LcthXa2cdo0auMjWUtUAb6nKKEAkbgOTt8Jcs61sEKIGhoQeCNRORHv4h9d28Y8xgUHkdSRbbXOgokb8/1GWWzekr2D5n5D7Am7LxQ+jMiikkZknVJB0PSmsG7O+FDg7j72jm3sxPMubCqAvU7TjDHkRLZawgGo5roByfkN/hMATxAm1stYQCZ/0OT8hvCxbLQpxUhqK10T+5X7/hoORtarSpapDXWvo/uV+74aDprY7J2vdTMNg95W6yPlF1NPgQiQgyYMsdjcW4VorI6qnXp089oa7veCxSihRSTqDwfrvEyz2QJAAEpRFvOwEycaOV1O+yh6quR8ItNOBle5P8fccN1JrTYiO6mpjW7LeHQTIpWkyUDsfPcRLPlBJbnhuDAesjkdRfuC40tpFKwxMMZqDT4/1GzDBVSVPvXp8YkuuhAyp13MSanU/hWConNxXZqSUHvp32IOqT+008iJwUs94JcSVJ2MlJOqVSnI++Y5BBhdeciAbWpCs6SAoCVfCpPqq6cHVJ6EgxVXbTg9TbKtw47jXaLVKK+xTeCnnw2nwt6/7j9B8TE+/cRAISG/1F0kZTRyevQinwiHc1jAGZXmSY6+nH44qtMHJhe5cwSJwMxDehSsoHiqFDgaZfr1lxBJ+1lABHd9Xn/d9B7eIXbStLB7d096f5aZTJPrS6bdfKUI1FvxDtWM5k6w3WEAOv5hMTSgyzE/e5lAXEOIpnIiRIoEjwJ8/WV8IF3hfL1oUQJgHWs1EdVcdBIRMue4iZEiCq03lp7OIOsF0qcOZUyTUkwx2bDiZVTDBYbtCRpBBNniwACDmLbVwo9URKLKGklRolOp3/ANqevw+BW0EAHYChI1n6o69dvMiFS97alXeXRpNEpHpkUkP27E+wTJiO+/8AAkai+TOFrvFTomEVUcqEjTXafG/2IcsPWMtMpSqU9TLkwFwvYFqV+IdEiRJCQJBKdgBtBLE9/IsbJcVVRohO6lfTcmGU1Cpdx7gO+ftJNvvdhDiGXHAlxzwpO9ZDymaCepjR67EqMymK6wFZlv2lVttHfMzknurTN0CR3U/8RaNstrbTZccUEoSJkn7qTxDkYkZMUD5kG1Kas7anXCEoSJk/AAbk6AbxUV+3u/edpS22k5ZybbGw3Uojfk7aDr2xZiB28XghsENgyQjk6FR6112BkNatf+OmmbMpTDjfZ2lVZqMwtPCD03TrvWEXXeBM+Y+0O4Pws3Ym5CSnVfqL56DhIhiUY9hKxViVRUbLZQVuGYUobcgEfyfZrpFyx5jSQokXHF/KcBslmMyrurV03A6UqfZzCFfOHl2eS0EqTSZE5g/e8NeH2EJQdS5ouYkpJ4lsPjBUpBoRMGkuYLftPESctyYLwziBFqSGLTIO6JWaZ+Af3dd/PXy87rcs6wtBKSkzCk6pPI++QZgyhWvZlJdWbPmUEekBQkTmkVqBoD56jVlwni9LwFntRqaIcPOyV/JXsNZE3I4YYaarY4M7NZn5qYk3aZTU2miXtypv1V0mW9JiY6xMOWp/tz2YKic2dJpLKO9Ocq6DLqaS7wEEL6uVTSsyZynOmxBpKVQesesvJtQUlyQtBTlClHK27QCTmUD8wgZZmhFKTiW2kocjr8o4E5yJ3c1FqspkfSGokdjyDsfgdGO6L0S+nMk5Vp8Sd0n5pMTcK4cSG1l9WZ5yRVKUkTA7oAoNBPmFbENzO2R4OtmXBGihwfpDdnxV5+aMr1Azt8RudvCSSSMpGs/COs9/LWF+2PqWqQofFXYeurrLTjQR4ziVotzNHJVRImvTpHOyNrfMpFKTVRnVXSfAiWunDbccyrhRu8Tax2bte6n9MHvK3WfpDPZWAkAASlGtkswQAAJSiRHSRAowJDZYXOTPY8WuUaKXEW2WgJBWoyAhdtm3gdw6qt3J6mtptCUJKlGQHx+sRmryUoAylPavygahK7QvMoSSPCnjqesMDVhAAEoyuoDlu4VtngQq66EjKn2mB7rkeLdiFabQAI4p5ggYmlpflCtfd9hug7yzoPmekc8QX5l7qaqP8dTAGw2RS1ZlEkmpJiqjT7uW6mlscCFLoZUo51mZOp+QHyh2syEtt9o7Qegjnr5dfYOYHXXZEtJDjgmfQb56np/xyYnPkAds+QdwDpTTySOIdZaW9K9fnA64kO0LEjaHzJAqlG6uPJOwG8LDzTlrdLiqToBslOwET3XV2tydcgNBz1PyG0NN23aEARTRRsGT3MJge68PBMiRDHZrGBoIlNtR2CYpzAzNENxpalZQagUmT6o+p2HyBjutcup+mpPAG5hMxBfqUgKUcwn3ED0z6x6U+HnE11pHpXuGi55M2vq8kymqaGxQDc9Adak95XUyqaD7iuxVocDzokkeBOwA0p8Bt7yeF0Xa7anA69QTmE7CHhSm2GypRCUJEyT969I9TQE9R7m2WZ4m1ofQy2VLUEoSKk/x7TpKKevF1287SVqCkspOUDoD4Rtm9Yj6QTvK3O3q8UpzN2Rs1PyGxcV7kj/+my77tQ0nOqTbTaZAbJSNPvcwf/J9oj5vtOtz2ZuzMlxwhCEj2ADQD4ACEHE19u29wJSClkKkhG6jyeVS9iQZbkmRiK+VW1eRM0spPcQPEs7E/uP8CftYsO3EGgFrA7SUgNkDgfMwq+8KMCeALnA6mmGcPJs6cxE3DvwOBBK87tQ+mSu6oVSseJJGhBiaYWsRX04V/hbL3n1UKho3P/3l/wDEViAbnbMecKMTjbsV2nL+DSAp/N2ZdChUUlIbLrUjSR0Ohm4LmTZ0es4fEr5DpHO6cHMN2dTTgzrXVbnpBW2UmoCT799YywWpxlwWa0maj+k9s6BseHBxvB25Iwsyvg5ab3xdBWe1akl4D2LHqq+RhWvG8FuyYaSQpXdcmfDsoTH/ACZ+81f17uLWLNZhNaqKUNByAfidvPTo3hVKGh2S8r6a9pXKonVJT6m3O8bUpAy38oFpBbj+ciWS5ksoylKaAkkylQECeoAqJCfyhZxLh6pdaABrmRSWpoOTLbfWHS772zTbKOzdRRaJCaZqNUy8TZJnMD3GoXL0trlreNmsxNf1nAZgD1AfVEjXeZ2hgyDmFgMMAfaccN44KEJZtKS4gGWec1oRKlNVgGXUDmkMN5XQCEvMKCkkZkqSZgg7jkQExDgXK2F2ckrSO8D6XJHWAuE8UOWRRQsFbBPfb3Qd1JnoeU79DWKabw4gujVHDS1sJX7OTa1KStIlImYIG4zTO/NPKG5+wtOpOcA5hInemhB2ivrTYEPIS/Z1Ag95Kkn7kRpKDWGcQEnsnaLHuV5dekG9eOVi2XyIIvfCy2HJyzo1BG4+o4gzd0gkZeIa5oUnLKYO23mOIWr1u1TJzo8J6QJHxPZo+m/8LSahUYsxCsVrCxShGoje02gJBUoyAgTeQMY5jhQM5zxPLRaEoSVKMgNYB9qu1KBIyoHhT8z1+EaKKrSsUkgaD5nrDBY7KltM+IJK9vqbuZZZngTtYbGEjSJ2WIiXaT0Ea5yf+Yjs1pz6RMFP1g+02gCFG/r7I7qaqP8AHU/SMjIVp6wzczCcCBLFYiozVUnUmGu7LIhtPaLFPRTyeT0+/LIyKtScAKPMFeswsiSAbQ+RMjupOw5PAhdtNoctbm4bB9/U9OBGRkHpUB5meI1XTdwQkUgwhMZGRWYszoI8WsAfz08z0jIyFWsVUkTwiliO/wCSSlJJCqS3Wdh/t6f2YG3Jh5Tiu2fqToOBsI8jIXplG3ee4x+OI2Wa0MpaLgWjs0zmoEFNNaiK8vi3u3o8WkEt2Vs94/eqzxt755GQZO4hTEHk4jfcl1JSlKUpCG0ig+JJ53JhI/yFiIqtCWkKCrOlIzJGuck94+yUh58iMjIOw4GBPP8ASDrlvJLLqVpSlQlXyMpkcKoPsxZFltaXUhaDMH3g8EbGMjIh1CjG6bSxziC78vZWYWezjM+ugArknv5yrXTU7T3s9wuXZJ5Q7VtY/OUkEraJMyf3NzNd6TjIyMACgAeZ4sScxibcSpIUkgpMiCDSR0M4Xr+tnbn8M0gOkqHsUNAOorM7CfWWRkeAxk/SG54HvNrDdyrCvI8AS4AEujwnfJXQzPt90Fx1jyMj2cjMXjHER8YWz8S+iz2ZM3kzCnUkjKk0UiY1HPFBro0YbuJFlaCEivpK3J+kZGQjUsQdnidDRoNu/wAwmsRT+NbYw7aSWE+GiljRauR0Gk99qSjIyC0i8kzNc5wFj7/iy7S2w4VE/mKBCPRTISnL1jv5J4gxfl0T7yaKFaRkZHXXiRjibXBiZSFBp4HNOQI3/uHhp9DqZGoOxjIyE2qAeItxg8RRv261Mq7Rs92evHRXSBS+0fIzSkNhpPrGRkMTDDce45HJWMFgsYSBSN7wckJR5GQu8/wzCr+YSIh2evu+sdA59/YjyMjgy4z/2Q==" // Replace with your actual image URL
                alt="Makeup Products"
                width={500}
                height={600}
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left p-6">
            <h2 className= {`${playfair.className} text-2xl lg:text-4xl font-semibold ${secondaryColor} py-5`}>
              Sign up to get a discount
            </h2>
            <p className="text-xl mt-2">
              We strive to make fashion accessible to everyone, no matter your
              budget. We are dedicated to curating a wide range of high-quality
              products.
            </p>

            {/* Email Subscription Form */}
            <div className="mt-4 flex flex-col sm:flex-row items-center ">
              <input
                type="email"
                placeholder="Your email address"
                className={`${playfair.className}  text-xl w-full sm:w-auto px-4 py-2 border rounded-md  focus:outline-none ${secondaryColor}`}
              />
              <button className= {`${playfair.className}  sm:py-2 sm:ml-3 px-4 py-2 text-xl  text-white rounded-md `} style={{background:bgcolor}}>
                Subscribe
              </button>
            </div>
          </div>
        </section>

      <section>
      <div className= {`${playfair.className} flex flex-col items-center justify-center p-6 space-y-6 ${secondaryColor}`}>
      {/* Header */}
      <div className= {`${playfair.className} flex justify-between w-full max-w-full px-4 ${secondaryColor}`}>
        <h2 className="text-3xl font-semibold ">@fabricnfusion</h2>
        <a href="#" className="text-lg  hover:underline">
          follow --&gt;
        </a>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-full px-4 w-full">
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
              className="w-[300px] h-[300px] object-cover transform transition duration-300 hover:scale-105 rounded-xl"
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
