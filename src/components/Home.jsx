import React, { useEffect, useRef, useState } from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaDollarSign, FaApple } from "react-icons/fa";
import ProductSlider from './ProductSlider';
import ProductSlider2 from './ProductSlider2';
import ProductSlider3 from './ProductSlider3';
import { SiSamsung } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Navbar from './Navbar';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
useEffect(() => {
    AOS.init({ duration: 800, once:false }); // 'once' makes animation trigger only once
  }, []);
 
const [fade, setFade] = useState(true);
const [subTextIndex, setSubTextIndex] = useState(0);
const scrollRef = useRef(null);
const animationRef = useRef(null);

const subTexts = [
"Discover the latest gadgets and innovations at unbeatable prices",
"Upgrade your tech game with cutting-edge devices and accessories",
"Your one-stop shop for all things tech"
];

const features = [
{ icon: <TbTruckDelivery className="text-lime-500 text-xl sm:text-2xl" />, text: "Delivery all over Lebanon" },
{ icon: <IoWalletOutline className="text-lime-500 text-xl sm:text-2xl" />, text: "Safe Payment & COD" },
{ icon: <BiSupport className="text-lime-500 text-xl sm:text-2xl" />, text: "24/7 Support" },
{ icon: <FaDollarSign className="text-lime-500 text-xl sm:text-2xl" />, text: "Best Prices in Town" }
];

// Subtext Fader
useEffect(() => {
const interval = setInterval(() => {
setFade(false);
setTimeout(() => {
setSubTextIndex((prev) => (prev + 1) % subTexts.length);
setFade(true);
}, 500);
}, 3000);
return () => clearInterval(interval);
},[]);

// Infinite Scroll Logic (Slower Speed)
useEffect(() => {
const container = scrollRef.current;
const scrollSpeed = 0.02; // Slower scroll speed, you can adjust this value further

const scroll = () => {
if (container) {
container.scrollLeft += scrollSpeed;
if (container.scrollLeft >= container.scrollWidth / 2) {
// Reset scroll position when it's about to end
container.scrollLeft = 0.02;
}
}
animationRef.current = requestAnimationFrame(scroll);
};

animationRef.current = requestAnimationFrame(scroll);
return () => cancelAnimationFrame(animationRef.current);

}
,[]);

return ( <div className="relative w-full overflow-x-hidden min-h-screen flex flex-col items-center bg-white px-4"> <Navbar/> <Slider/>

{/* Main Title */}

  <h1 className="text-gray-600 text-3xl mt-5 sm:text-4xl md:text-5xl lg:text-8xl mb-4 text-center"data-aos="fade-right">
    Welcome <span className='ml-2'>to</span> <span className='text-lime-500 ml-2'>Bawab</span><span className='text-black'>Cell</span>
  </h1>

{/* Fading Subtext */}

  <div className="mt-2 mb-3 text-center"data-aos="fade-in">
  <h2 className={`text-gray-600 sm:text-lg md:text-2xl px-4 py-2 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>

      {subTexts[subTextIndex]}
    </h2>
  </div>

  <div className="w-full mt-3 overflow-x-hidden flex justify-center px-4 sm:px-6 lg:px-8">
  <div className="relative w-full max-w-screen-xl h-16 sm:h-20 md:h-24"data-aos="fade-in">
    {/* Main Scrolling Container */}
    <div
      ref={scrollRef}
      className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 whitespace-nowrap animate-marquee will-change-transform"
    >
      {[...Array(30)].map((_, index) => (
        <div
          key={`main-${index}`}
          className="flex items-center gap-2 min-w-max text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl"
        >
          {features[index % features.length].icon}
          <span>{features[index % features.length].text}</span>
        </div>
      ))}
    </div>
  </div>
</div>




<section className="flex flex-col">
  <div className="flex flex-col mt-3">
    <h2 className="flex text-gray-600 text-4xl mt-1 justify-center"data-aos="fade-right">Popular Categories</h2>

    {/* Responsive container */}
    <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-10 mt-10 justify-center sm:justify-start"data-aos="zoom-in">
      {/* Category Items */}
      <div className="flex flex-col cursor-pointer items-center w-24 sm:w-auto">
        <Link to="/shop">
        <img src="HomeImages/PopulerImages/Mobile.png" alt="" className="w-full sm:w-3xs transition-transform duration-300 ease-in-out hover:scale-110" />
        </Link>
      <h2 className="text-center text-lg sm:text-2xl text-gray-600 mt-3">Mobile Phones</h2>
        
      </div>

      <div className="flex flex-col cursor-pointer items-center w-24 sm:w-auto">
        <img src="HomeImages/PopulerImages/Tablets.png" alt="" className="w-full sm:w-3xs transition-transform duration-300 ease-in-out hover:scale-110" />
        <h2 className="text-center text-lg sm:text-2xl text-gray-600 mt-3">Tablets</h2>
       
      </div>

      <div className="flex flex-col cursor-pointer items-center w-24 sm:w-auto">
        <img src="HomeImages/PopulerImages/Wearble.png" alt="" className="w-full sm:w-3xs transition-transform duration-300 ease-in-out hover:scale-110" />
        <h2 className="text-center text-lg sm:text-2xl text-gray-600 mt-3">Wearable</h2>
        
      </div>

      <div className="flex flex-col cursor-pointer items-center w-24 sm:w-auto">
        <img src="HomeImages/PopulerImages/Gaming.png" alt="" className="w-full sm:w-3xs transition-transform duration-300 ease-in-out hover:scale-110" />
        <h2 className="text-center text-lg sm:text-2xl text-gray-600 mt-3">Gaming</h2>
      
      </div>

      <div className="flex flex-col cursor-pointer items-center w-24 sm:w-auto">
        <img src="HomeImages/PopulerImages/Accesories.png" alt="" className="w-full sm:w-3xs transition-transform duration-300 ease-in-out hover:scale-110" />
        <h2 className="text-center text-lg sm:text-2xl text-gray-600 mt-3">Accessories</h2>
        
      </div>

    </div>
  </div>
</section>


  <section>
    <ProductSlider3/>
  </section>
  <section className="w-full max-w-7xl mx-auto mt-16 lg:mt-8">
  <div className="flex items-center gap-2 mb-6 justify-center">
    <FaApple className="text-8xl"data-aos="fade-in" />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* iPhone 16 Series Card */}
    <div className="bg-gray-50 rounded-2xl p-6 pt-10 flex flex-col items-center text-center cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg relative overflow-hidden"data-aos="fade-left">
      <img
        src="HomeImages/AppleProducts/IPHONE 16 PRO BLACK.png"
        alt="iPhone 16"
        className="-mt-10 w-full sm:w-5xl transform transition-transform duration-300 ease-in-out group-hover:scale-110 z-0"
      />
      <div className="z-10 -mt-8">
        <h3 className="text-5xl text-black">iPhone 16 Series</h3>
        <p className="text-gray-500 text-3xl mt-1">Starting from 920$</p>
        <a
          href="#"
          className="text-gray-600 text-2xl mt-2 inline-block underline duration-300 decoration-gray-800 hover:decoration-gray-300"
        >
          Check Now
        </a>
      </div>
    </div>

    {/* iPad, MacBook, and Watch Cards */}
    <div className="grid grid-cols-1 gap-4 pl-4 w-full"data-aos="fade-right">
      {/* iPad Card */}
      <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg relative overflow-hidden h-44 md:h-48">
        <div className="z-10">
          <h3 className="text-3xl md:text-4xl text-black">Apple iPads</h3>
          <p className="text-gray-500 text-2xl mt-1">Starting from 360$</p>
          <a
            href="#"
            className="text-gray-600 text-xl mt-2 inline-block underline duration-300 decoration-gray-800 hover:decoration-gray-300"
          >
            Check Now
          </a>
        </div>
        <img
          src="HomeImages/AppleProducts/Ipad 11 pro.png"
          alt="iPad"
          className="w-40 md:w-48 transform transition-transform duration-300 ease-in-out group-hover:scale-110 z-0"
        />
      </div>

      {/* MacBook Card */}
      <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg relative overflow-hidden h-44 md:h-48">
        <div className="z-10">
          <h3 className="text-3xl md:text-4xl text-black">MacBook Pro</h3>
          <p className="text-gray-500 text-2xl mt-1">Starting from 1299$</p>
          <a
            href="#"
            className="text-gray-600 text-xl mt-2 inline-block underline duration-300 decoration-gray-800 hover:decoration-gray-300"
          >
            Check Now
          </a>
        </div>
        <img
          src="HomeImages/AppleProducts/MACBOOK PRO M3.png"
          alt="MacBook"
          className="w-40 md:w-48 transform transition-transform duration-300 ease-in-out group-hover:scale-110 z-0"
        />
      </div>
      {/* Watch Card */}
      <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg relative overflow-hidden h-44 md:h-48">
        <div className="z-10">
          <h3 className="text-3xl md:text-4xl text-black">Apple Watches</h3>
          <p className="text-gray-500 text-2xl mt-1">Starting from 385$</p>
          <a
            href="#"
            className="text-gray-600 text-xl mt-2 inline-block underline duration-300 decoration-gray-800 hover:decoration-gray-300"
          >
            Check Now
          </a>
        </div>
        <img
          src="/HomeImages/PopulerImages/Wearble.png"
          alt="Watch"
          className="w-36 md:w-44 transform transition-transform duration-300 ease-in-out group-hover:scale-110 z-0"
        />
      </div>
    </div>
  </div>
</section>
<section>
  <ProductSlider />
</section>
  <section className="w-full max-w-7xl mx-auto mt-16 lg:mt-8">
  <div className="flex items-center gap-2 mb-6 justify-center">
    <SiSamsung className="text-8xl" data-aos="fade-in" />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"data-aos="fade-left">
    {/*S Series Card */}
    <div className="bg-gray-50 rounded-2xl p-6 pt-10 flex flex-col items-center text-center cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg relative overflow-hidden">
      <img
        src="HomeImages/SamsungProducts/S25 ULTRA TITANIUM BLACK.png"
        alt="iPhone 16"
        className="-mt-10 w-full sm:w-5xl transform transition-transform duration-300 ease-in-out group-hover:scale-110 z-0"
      />
      <div className="z-10 -mt-8">
        <h3 className="text-5xl text-black">Samsung s25 ultra</h3>
        <p className="text-gray-500 text-3xl mt-1">Starting from 1210$</p>
        <a
          href="#"
          className="text-gray-600 text-2xl mt-2 inline-block underline duration-300 decoration-gray-800 hover:decoration-gray-300"
        >
          Check Now
        </a>
      </div>
    </div>

    {/* Tab, Buds, and Watch */}
    <div className="grid grid-cols-1 gap-4 pl-4 w-full"data-aos="fade-right">
      {/* iPad Card */}
      <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg relative overflow-hidden h-44 md:h-48">
        <div className="z-10">
          <h3 className="text-3xl md:text-4xl text-black">Samsung Tablets</h3>
          <p className="text-gray-500 text-2xl mt-1">Starting from 360$</p>
          <a
            href="#"
            className="text-gray-600 text-xl mt-2 inline-block underline duration-300 decoration-gray-800 hover:decoration-gray-300"
          >
            Check Now
          </a>
        </div>
        <img
          src="HomeImages/SamsungProducts/Samsung tab s10.png"
          alt="iPad"
          className="w-40 md:w-48 transform transition-transform duration-300 ease-in-out group-hover:scale-110 z-0"
        />
      </div>

      {/* Buds Card */}
      <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg relative overflow-hidden h-44 md:h-48">
        <div className="z-10">
          <h3 className="text-3xl md:text-4xl text-black">Samsung Galaxy Buds</h3>
          <p className="text-gray-500 text-2xl mt-1">Starting from 1299$</p>
          <a
            href="#"
            className="text-gray-600 text-xl mt-2 inline-block underline duration-300 decoration-gray-800 hover:decoration-gray-300"
          >
            Check Now
          </a>
        </div>
        <img
          src="HomeImages/SamsungProducts/GalaxyBuds3.png"
          alt="MacBook"
          className="w-40 md:w-48 transform transition-transform duration-300 ease-in-out group-hover:scale-110 z-0"
        />
      </div>
      {/* Watch Card */}
      <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg relative overflow-hidden h-44 md:h-48">
        <div className="z-10">
          <h3 className="text-3xl md:text-4xl text-black">Samsung galaxy watch</h3>
          <p className="text-gray-500 text-2xl mt-1">Starting from 450$</p>
          <a
            href="#"
            className="text-gray-600 text-xl mt-2 inline-block underline duration-300 decoration-gray-800 hover:decoration-gray-300"
          >
            Check Now
          </a>
        </div>
        <img
          src="HomeImages/SamsungProducts/GALAXY WATCH 6 CLASSIC.webp"
          alt="Watch"
          className="w-36 md:w-44 transform transition-transform duration-300 ease-in-out group-hover:scale-110 z-0"
        />
      </div>
    </div>
  </div>
</section>
<section>
  <ProductSlider2 />
</section>



<section className="bg-black text-white py-10 px-6 md:px-20 w-screen">
  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
    
    {/* Logo + Description */}
    <div className="md:max-w-md">
      <h2 className="text-6xl text-lime-500">
        Bawab<span className="text-white">Cell</span>
      </h2>
      <p className="text-white mt-4 text-base leading-relaxed">
        Your trusted source for the latest mobile phones, tablets, wearables, and accessories.
      </p>
    </div>

    {/* Socials */}
    <div className="flex flex-col items-start md:items-end">
      <h3 className="text-4xl mb-4">Follow Us</h3>
      <div className="flex items-center space-x-5 text-3xl text-gray-300">
        <FaWhatsapp className="hover:text-lime-500 transition duration-300 cursor-pointer" />
        <FaTiktok className="hover:text-lime-500 transition duration-300 cursor-pointer" />
        <FaInstagram className="hover:text-lime-500 transition duration-300 cursor-pointer" />
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-lime-500 mt-10 pt-4 text-center text-lg text-white">
    © 2025 Husam — All rights reserved.
  </div>
</section>



</div>

  );
};
export default Home;
