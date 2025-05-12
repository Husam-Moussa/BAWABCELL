import React from 'react';
import Navbar from './Navbar';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Contact = () => {
  useEffect(() => {
      AOS.init({ duration: 800, once:false }); // 'once' makes animation trigger only once
    }, []);
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <section className="mt-20 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="flex flex-col w-full lg:w-1/2"data-aos="fade-left">
            <h2 className="text-5xl md:text-7xl ">
              <span className="text-lime-500">Bawab</span>
              <span className="text-black">Cell</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-2xl mt-6 leading-relaxed">
              Established in 1999 in the heart of Tyre, Lebanon, our mobile store has been a trusted destination for mobile technology for over two decades. From the early days of mobile communication to the latest in smartphone innovation, we’ve proudly grown alongside the industry—providing our customers with reliable products, expert advice, and exceptional service.
              <br /><br />
              Whether you're looking for the newest smartphones, accessories, or repair services, we are committed to delivering quality and value. Our long-standing presence in the community reflects our dedication to customer satisfaction and staying ahead of technological trends.
            </p>
             <div className="flex items-center space-x-5 text-3xl mt-5 text-gray-600"data-aos="fade-in">
        <a href="https://wa.me/+96103903800" target='blank'>
           <FaWhatsapp className="hover:text-lime-500 transition duration-300 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/bawab_cell?igsh=MW9sbHpzanU2ZXMyYQ==" target='blank'>
 <FaInstagram className="hover:text-lime-500 transition duration-300 cursor-pointer" />
        </a>
        <a href="https://www.tiktok.com/@bawab_cell" target='blank'>
 <FaTiktok className="hover:text-lime-500 transition duration-300 cursor-pointer" />
        </a>
       
       
       
      </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2"data-aos="fade-right">
            <img
              src="HomeImages/About.jpg"
              alt="About BawabCell"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

     <section className="bg-black mt-5 text-white py-10 px-6 md:px-20 w-screen">
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
        <a href="https://wa.me/+96103903800" target='blank'>
           <FaWhatsapp className="hover:text-lime-500 transition duration-300 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/bawab_cell?igsh=MW9sbHpzanU2ZXMyYQ==" target='blank'>
 <FaInstagram className="hover:text-lime-500 transition duration-300 cursor-pointer" />
        </a>
        <a href="https://www.tiktok.com/@bawab_cell" target='blank'>
 <FaTiktok className="hover:text-lime-500 transition duration-300 cursor-pointer" />
        </a>
       
       
       
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

export default Contact;
