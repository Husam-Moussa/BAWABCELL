import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiShoppingCart, FiSearch, FiX, FiFilter } from "react-icons/fi";
import Navbar from "./Navbar";
import { useCart } from "./CartContext"; // add this

// Mock product data (unchanged)
const mockProducts = [
{
id:1,
name: "Apple Iphone 16 (128gb)",
price: "938$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 BLACK.png",
"HomeImages/AppleProducts/Iphone16-3.png",
"HomeImages/AppleProducts/Iphone16-2.png",
],
},
{
id:2,
name: "Apple Iphone 16 (128gb)",
price: "938$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 WHITE.png",
"HomeImages/AppleProducts/iphone 16_white pdpimage position_1b en-me_large_8.png",
"HomeImages/AppleProducts/iphone\_16\_white\_pdp\_image\_position\_2\_\_en-me\_large\_8.png",
],
},
{
id:3,
name: "Apple Iphone 16 (128gb)",
price: "938\$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 TEAL.png",
"HomeImages/AppleProducts/iphone\_16\_teal\_pdp\_image\_position\_1b\_\_en-me\_large\_12.png",
"HomeImages/AppleProducts/iphone\_16\_teal\_pdp\_image\_position\_2\_\_en-me\_large\_12.png",
],
},
{
id:4,
name: "Apple Iphone 16 (128gb)",
price: "938\$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 ULTRAMARINE.png",
"HomeImages/AppleProducts/iphone\_16\_ultramarine\_pdp\_image\_position\_1b\_\_en-me\_large\_13.png",
"HomeImages/AppleProducts/iphone\_16\_ultramarine\_pdp\_image\_position\_2\_\_en-me\_large\_13.png",
],
},
{
id:5,
name: "Apple Iphone 16 pro (128gb)",
price: "1231\$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 PRO BLACK.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_black\_titanium\_pdp\_image\_position\_1b\_\_en-me\_large\_20.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_black\_titanium\_pdp\_image\_position\_2\_\_en-me\_large\_20.png",


],


},
{
id:6,
name: "Apple Iphone 16 pro (128gb)",
price: "1231$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 PRO DESSERT.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_desert\_titanium\_pdp\_image\_position\_1b\_\_en-me\_large\_17.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_desert\_titanium\_pdp\_image\_position\_2\_\_en-me\_large\_1\_10.png",
],
},
{
id:7,
name: "Apple Iphone 16 pro (128gb)",
price: "1231$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 PRO TITANIUM.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_natural\_titanium\_pdp\_image\_position\_1b\_\_en-me\_large\_large\_18.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_natural\_titanium\_pdp\_image\_position\_2\_\_en-me\_large\_large\_19.png",
],
},
{
id:8,
name: "Apple Iphone 16 pro (128gb)",
price: "1231$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 PRO WHITE.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_white\_titanium\_pdp\_image\_position\_1b\_\_en-me\_large\_1\_11.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_white\_titanium\_pdp\_image\_position\_2\_\_en-me\_large\_1\_11.png",
],
},
{
id:9,
name: "Apple Iphone 16 pro (128gb)",
price: "1231$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 PRO TITANIUM.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_white\_titanium\_pdp\_image\_position\_1b\_\_en-me\_large\_1\_11.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_white\_titanium\_pdp\_image\_position\_2\_\_en-me\_large\_1\_11.png",
],
},
{
id:10,
name: "Apple Iphone 16 pro max(128gb)",
price: "1231$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 PRO BLACK.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_black\_titanium\_pdp\_image\_position\_1b\_\_en-me\_large\_20.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_black\_titanium\_pdp\_image\_position\_2\_\_en-me\_large\_20.png",


],


},
{
id:11,
name: "Apple Iphone 16 pro max(128gb)",
price: "1231$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 PRO DESSERT.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_desert\_titanium\_pdp\_image\_position\_1b\_\_en-me\_large\_17.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_desert\_titanium\_pdp\_image\_position\_2\_\_en-me\_large\_1\_10.png",
],
},
{
id:12,
name: "Apple Iphone 16 pro max(128gb)",
price: "1231\$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 PRO TITANIUM.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_natural\_titanium\_pdp\_image\_position\_1b\_\_en-me\_large\_large\_18.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_natural\_titanium\_pdp\_image\_position\_2\_\_en-me\_large\_large\_19.png",
],
},
{
id:13,
name: "Apple Iphone 16 pro max(128gb)",
price: "1231\$",
type: "Mobile Phones",
images: [
"HomeImages/AppleProducts/IPHONE 16 PRO WHITE.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_white\_titanium\_pdp\_image\_position\_1b\_\_en-me\_large\_1\_11.png",
"HomeImages/AppleProducts/iphone\_16\_pro\_white\_titanium\_pdp\_image\_position\_2\_\_en-me\_large\_1\_11.png",
],
},

{
id: 15,
name: "Apple Ipad pro 11(128gb)",
price: "1497\$",
type: "Tablets",
images: [
"HomeImages/AppleProducts/ipad\_pro\_11\_m4\_wifi\_space\_black\_pdp\_image\_position\_1b\_\_en-me.png",
"HomeImages/AppleProducts/ipad\_pro\_13\_m4\_2.png",
"HomeImages/AppleProducts/ipad\_pro\_11\_m4\_wifi\_space\_black\_pdp\_image\_position\_2\_\_en-me.png",
"HomeImages/AppleProducts/ipad\_pro\_13\_m4\_4.png",
],
},
{
id: 16,
name: "Apple Ipad pro 11(128gb)",
price: "1497\$",
type: "Tablets",
images: [
"HomeImages/AppleProducts/ipad\_pro\_13\_m4\_wifi\_silver\_pdp\_image\_position\_1b\_\_en-me.png",
"HomeImages/AppleProducts/ipad\_pro\_13\_m4\_2.png",
"HomeImages/AppleProducts/ipad\_pro\_13\_m4\_wifi\_silver\_pdp\_image\_position\_2\_\_en-me.png",
"HomeImages/AppleProducts/ipad\_pro\_13\_m4\_4.png",
],
},
{
id: 17,
name: "Apple macbook pro m3",
price: "1497\$",
type: "Laptops",
images: [
"HomeImages/AppleProducts/MACBOOK PRO M3.png",
"HomeImages/AppleProducts/MACBOOK PRO M3 2.png",
"HomeImages/AppleProducts/MACBOOK PRO M3 3.png",
],
},
{
id: 18,
name: "Apple macbook air 15",
price: "1497\$",
type: "Laptops",
images: [
"HomeImages/AppleProducts/macbook\_air\_15\_in\_m3\_space\_gray\_pdp\_image\_position\_1\_\_en-ae\_2.png",
"HomeImages/AppleProducts/macbook\_air\_15\_in\_m3\_space\_gray\_pdp\_image\_position\_2\_\_en-ae\_2.png",
"HomeImages/AppleProducts/macbook\_air\_15\_in\_m3\_space\_gray\_pdp\_image\_position\_3\_\_en-ae\_2.png",
],
},
{
id: 19,
name: "Apple airtag",
price: "1497\$",
type: "accessories",
images: [
"HomeImages/AppleProducts/meen\_airtag\_1.png",
"HomeImages/AppleProducts/meen\_airtag\_2.png",
],
},
{
id: 20,
name: "Apple ipad air 13",
price: "1497\$",
type: "Tablets",
images: [
"HomeImages/AppleProducts/ipad\_air\_13\_m2\_wifi\_purple\_pdp\_image\_position\_1b\_\_en-ae\_1.png",
"HomeImages/AppleProducts/ipad\_air\_13\_m2\_wifi\_purple\_pdp\_image\_position\_1\_\_en-ae\_1.png",
"HomeImages/AppleProducts/ipad\_air\_13\_m2\_wifi\_purple\_pdp\_image\_position\_2\_\_en-ae\_1.png",
],
},
{
id: 21,
name: "Apple ipad air 13",
price: "1497\$",
type: "Tablets",
images: [
"HomeImages/AppleProducts/ipad\_air\_11\_m2\_wifi\_blue\_pdp\_image\_position\_1b\_\_en-ae\_2.png",
"HomeImages/AppleProducts/ipad\_air\_11\_m2\_wifi\_blue\_pdp\_image\_position\_1\_\_en-ae\_2.png",
"HomeImages/AppleProducts/ipad\_air\_11\_m2\_wifi\_blue\_pdp\_image\_position\_2\_\_en-ae\_2.png",
],
},
{
id: 22,
name: "Apple ipad air 13",
price: "1497\$",
type: "Tablets",
images: [
"HomeImages/AppleProducts/ipad\_air\_11\_m2\_wifi\_starlight\_pdp\_image\_position\_1b\_\_en-ae\_3.png",
"HomeImages/AppleProducts/ipad\_air\_11\_m2\_wifi\_starlight\_pdp\_image\_position\_1\_\_en-ae\_1\_3.png",
"HomeImages/AppleProducts/ipad\_air\_11\_m2\_wifi\_starlight\_pdp\_image\_position\_2\_\_en-ae\_3.png",
],
},
{
id: 23,
name: "Apple ipad 10",
price: "1497\$",
type: "Tablets",
images: [
"HomeImages/AppleProducts/ipad\_10.9\_inch\_wi-fi\_yellow\_pdp\_image\_position-1b\_en\_1.png",
"HomeImages/AppleProducts/ipad\_10.9\_inch\_wi-fi\_yellow\_pdp\_image\_position-1a\_en\_1.png",
],
},
{
id: 24,
name: "Apple ipad 10",
price: "1497\$",
type: "Tablets",
images: [
"HomeImages/AppleProducts/ipad\_a16\_wifi\_silver\_pdp\_image\_position\_1\_\_en-ae\_4.png",
"HomeImages/AppleProducts/ipad\_10.9\_inch\_wi-fi\_silver\_pdp\_image\_position-1a\_en\_1.png",
],
},
{
id: 25,
name: "Apple ipad 10",
price: "1497\$",
type: "Tablets",
images: [
"HomeImages/AppleProducts/ipad\_10.9\_inch\_wi-fi\_blue\_pdp\_image\_position-1b\_en.png",
"HomeImages/AppleProducts/ipad\_10.9\_inch\_wi-fi\_blue\_pdp\_image\_position-1a\_en.png",
],
},
{
id: 26,
name: "Apple watch se",
price: "1497\$",
type: "Wearable",
images: [
"HomeImages/AppleProducts/apple\_watch\_se\_40mm\_gps\_starlight\_aluminum\_starlight\_sport\_band\_pdp\_image\_position-1\_\_en-me\_1.png",
"HomeImages/AppleProducts/apple\_watch\_se\_40mm\_gps\_starlight\_aluminum\_starlight\_sport\_band\_pdp\_image\_position-2\_\_en-me\_1.png",
],
},
{
id: 27,
name: "Apple watch se",
price: "1497\$",
type: "Wearable",
images: [
"HomeImages/AppleProducts/apple\_watch\_se\_40mm\_gps\_midnight\_aluminum\_sport\_band\_midnight\_pdp\_image\_position\_1\_\_en-me.png",
"HomeImages/AppleProducts/apple\_watch\_se\_40mm\_gps\_midnight\_aluminum\_sport\_band\_midnight\_pdp\_image\_position\_2\_\_en-me.png",
],
},
{
id: 28,
name: "Apple watch series 10",
price: "1497\$",
type: "Wearable",
images: [
"HomeImages/AppleProducts/APPLE WATCH SERIES 10 BLACK.png",
"HomeImages/AppleProducts/apple\_watch\_series\_10\_46mm\_gps\_jet\_black\_aluminum\_sport\_band\_black\_pdp\_image\_position\_2\_\_en-me\_medium\_1.png",
],
},
{
id: 29,
name: "Apple watch series 10",
price: "1497$",
type: "Wearable",
images: [
"HomeImages/AppleProducts/APPLE WATCH SERIES 10 ROSEGOLD.png",
"HomeImages/AppleProducts/apple\_watch\_series\_10\_42mm\_gps\_rose\_gold\_aluminum\_sport\_band\_light\_blush\_pdp\_image\_position\_2\_\_en-me-min\_medium.png",
],
},
{
id: 30,
name: "Apple watch series 9",
price: "1497\$",
type: "Wearable",
images: [
"HomeImages/AppleProducts/applewatchseries9.png",
"HomeImages/AppleProducts/applewatchseries9-2.png",
"HomeImages/AppleProducts/applewatchseries9-3.png",
],
},
{
id: 31,
name: "Apple tv",
price: "1497$",
type: "accessories",
images: [
"HomeImages/AppleProducts/appletv1.png",
"HomeImages/AppleProducts/appletv2.png",
"HomeImages/AppleProducts/appletv3.png",
],
},
{
id: 32,
name: "Apple airpods 4",
price: "1497$",
type: "wearable",
images: [
"HomeImages/AppleProducts/airpods-4-1.png",
"HomeImages/AppleProducts/airpods-4-2.png",
"HomeImages/AppleProducts/airpods-3.png",
],
},

];

const Shop = () => {
const { cart, addToCart } = useCart();

// Log cart whenever it updates
useEffect(() => {
console.log(cart); // This will log the updated cart whenever cart changes
}, [cart]);

const [hoveredIndex, setHoveredIndex] = useState(null);
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [showQuickView, setShowQuickView] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const [selectedImageIndex, setSelectedImageIndex] = useState(0);
const [animateModal, setAnimateModal] = useState(false);
const [selectedTypes, setSelectedTypes] = useState([]);
const [loading, setLoading] = useState(false);
const [showFilter, setShowFilter] = useState(false);
const [filteredProducts, setFilteredProducts] = useState(mockProducts);

const productTypes = [...new Set(mockProducts.map((p) => p.type))];

const handleMouseEnter = (index) => {
setHoveredIndex(index);
};

const handleMouseLeave = () => {
setHoveredIndex(null);
setCurrentImageIndex(0);
};

const handleAddToCart = (product) => {
addToCart({
...product,
price: parseFloat(product.price),
});
};

useEffect(() => {
let interval;
if (hoveredIndex !== null) {
interval = setInterval(() => {
setCurrentImageIndex((prev) => prev + 1);
}, 500);
}
return () => clearInterval(interval);
}, [hoveredIndex]);

useEffect(() => {
setLoading(true);
const timer = setTimeout(() => {
const filtered =
selectedTypes.length === 0
? mockProducts
: mockProducts.filter((p) => selectedTypes.includes(p.type));
setFilteredProducts(filtered);
setLoading(false);
}, 400);
return () => clearTimeout(timer);
}, [selectedTypes]);

const toggleFilterType = (type) => {
setSelectedTypes((prev) =>
prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
);
};

useEffect(() => {
const filtered =
selectedTypes.length === 0
? mockProducts
: mockProducts.filter((product) => selectedTypes.includes(product.type));
setFilteredProducts(filtered);
}, [selectedTypes]);

return ( <div className="overflow-x-hidden"> <Navbar /> 
<section className="w-full px-4 py-10">
 <div className="flex justify-between items-center mb-6 mt-20"> <h2 className="text-2xl text-gray-600">
Showing {mockProducts.length} products </h2>
<button
className="lg:hidden flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-xl text-gray-600"
onClick={() => setShowFilter(!showFilter)}
> <FiFilter size={20} />
Filters </button> </div>


    <div className="flex flex-col lg:flex-row gap-6">
      <div
        className={`w-full lg:w-1/5 overflow-hidden transition-all duration-500 ease-in-out ${
          showFilter ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } lg:max-h-full lg:opacity-100`}
      >
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="text-3xl mb-4 text-gray-700">Filter by Type</h3>
          {productTypes.map((type) => (
            <div key={type} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => toggleFilterType(type)}
                  className="form-checkbox h-4 w-4 text-lime-500"
                />
                <span className="ml-2 text-gray-600 text-xl">{type}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-4/5 min-h-[200px] flex justify-center items-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-lime-500"></div>
            <p className="mt-4 text-gray-500">Loading products...</p>
          </div>
        ) : mockProducts.length === 0 ? (
          <p className="text-gray-500 text-lg">No products match your selected filters.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
            {mockProducts.map((product, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-4 transition-all duration-300 hover:shadow-2xl flex flex-col w-full"
                style={{ minHeight: "360px" }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={
                    hoveredIndex === index
                      ? product.images[currentImageIndex % product.images.length]
                      : product.images[0]
                  }
                  alt={product.name}
                  className="cursor-pointer w-full h-46 object-contain transition-all duration-300 transform group-hover:scale-105 sm:h-64 md:h-48 lg:h-72"
                />
                <div className="mt-3">
                  <h3 className="text-xl sm:text-2xl text-gray-900">{product.name}</h3>
                  <p className="text-sm sm:text-xl text-gray-900 mt-2">{product.price}$</p>
                  <h4 className="text-sm sm:text-xl text-gray-500 mt-2">{product.type}</h4>
                </div>

                {/* Button always visible on smaller screens, visible on hover for larger screens */}
               <div className="mt-3 mx-auto w-full">


<button
className={`bg-lime-500 text-white px-4 py-2 rounded-lg w-full duration-300 mt-4 flex justify-center items-center hover:bg-black transition-all ease-in-out cursor-pointer opacity-0 group-hover:opacity-100 transform group-hover:scale-105 ${hoveredIndex === index || window.innerWidth < 1024 ? 'opacity-100 scale-100' : ''}`}
onClick={() => handleAddToCart(product)}

>


<FiShoppingCart size={20} className="mr-2" />


  </button>
</div>


              </div>
            ))}
          </div>
        )}
      </div>
    </div>
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

export default Shop; 

