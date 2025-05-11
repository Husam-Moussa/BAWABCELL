import { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch, FiX } from "react-icons/fi";

const products = [
  {
    name: "Samsung s25+",
    price: "980$",
    type: "Mobile Phones",
    images: [
      "HomeImages/SamsungProducts/S25+-1.png",
      "HomeImages/SamsungProducts/S25+-2.png",
      "HomeImages/SamsungProducts/S25+-3.png",
    ],
  },
  {
    name: "Samsung Case",
    price: "15$",
    type: "Accessories",
    images: [
      "HomeImages/SamsungProducts/Case1.png",
      "HomeImages/SamsungProducts/Case2.png",
      "HomeImages/SamsungProducts/Case4.png",
    ],
  },
  {
    name: "Samsung Galaxy Watch 7",
    price: "160$",
    type: "Wearable",
    images: [
      "HomeImages/SamsungProducts/samsung-galaxy-watch-7-1.png",
      "HomeImages/SamsungProducts/samsung-galaxy-watch-7-2.png",
      "HomeImages/SamsungProducts/samsung-galaxy-watch-7-3.png",
    ],
  },
  {
    name: "Samsung Galaxy SmartTag",
    price: "15$",
    type: "Accessories",
    images: [
      "HomeImages/SamsungProducts/Smarttag-1.png",
      "HomeImages/SamsungProducts/Smarttag-2.png",
      "HomeImages/SamsungProducts/Smarttag-3.png",
    ],
  },
  {
    name: "Samsung 25W Battery Pack",
    price: "38$",
    type: "Accessories",
    images: [
      "HomeImages/SamsungProducts/Battery1.png",
      "HomeImages/SamsungProducts/Battery2.png",
      "HomeImages/SamsungProducts/Battery3.png",
    ],
  },
  {
    name: "Samsung Galaxy Buds 3",
    price: "80$",
    type: "Wearable",
    images: [
      "HomeImages/SamsungProducts/GalaxyBuds3.png",
      "HomeImages/SamsungProducts/Buds-3.png",
      "HomeImages/SamsungProducts/Buds-2.png",
    ],
  },
];

export default function ProductSlider3() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [addedProducts, setAddedProducts] = useState({});
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [animateModal, setAnimateModal] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    let count = 0;
    const id = setInterval(() => {
      count = (count + 1) % products[index].images.length;
      setCurrentImageIndex(count);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setCurrentImageIndex(0);
  };

  const handleAddToCart = (productName) => {
    setAddedProducts((prev) => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setShowQuickView(false);
      setSelectedProduct(null);
    }, 300);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    if (showQuickView) {
      setTimeout(() => setAnimateModal(true), 10);
    }
  }, [showQuickView]);

  return (
    <section className="w-full mt-10 px-4 py-10">
      <h2 className="text-4xl mb-6 text-gray-600" data-aos="fade-right">Samsung Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-aos="fade-up">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative bg-gray-50 rounded-2xl p-4 transition-all duration-300 hover:shadow-2xl flex flex-col w-full"
            style={{ minHeight: "360px" }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={hoveredIndex === index ? product.images[currentImageIndex] : product.images[0]}
              alt={product.name}
              className="cursor-pointer w-full h-46 object-contain transition-all duration-300 transform group-hover:scale-105 sm:h-64 md:h-48 lg:h-72"
            />
            <div className="mt-3">
              {/* Product Name on its own line */}
              <h3 className="text-xl sm:text-2xl text-gray-900">{product.name}</h3>

              {/* Price on its own line, aligned to the left */}
              <p className="text-sm sm:text-xl text-gray-900 mt-2">{product.price}</p>

              {/* Category on its own line */}
              <h4 className="text-sm sm:text-xl text-gray-500 mt-2">{product.type}</h4>
            </div>

            {/* Add to Cart button visible only on mobile and iPad screens, hidden on lg screens */}
            <div className="mt-3 lg:hidden block mx-auto">
              
            </div>

            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between">
              
             
            </div>
          </div>
        ))}
      </div>

      {showQuickView && selectedProduct && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center">
          <div
            className={`bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6 relative transition-all duration-300 transform ${animateModal ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 cursor-pointer duration-300 text-gray-400 hover:text-black transition"
            >
              <FiX size={28} />
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col md:w-1/2">
                <img
                  src={selectedProduct.images[selectedImageIndex]}
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <div className="flex gap-3 overflow-x-auto">
                  {selectedProduct.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => handleImageClick(index)}
                      className={`w-16 h-16 object-cover rounded-md cursor-pointer transition ${selectedImageIndex === index ? "" : " hover:border-gray-600"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl mb-2">{selectedProduct.name}</h2>
                  <p className="text-2xl text-gray-600 mb-4">{selectedProduct.type}</p>
                  <p className="text-3xl text-black mb-6">{selectedProduct.price}</p>
                </div>

                <div className="flex gap-4">
                  
                  <button
                    className="border bg-lime-500 text-white border-gray-300 px-6 py-2 rounded-full duration-300 hover:bg-black cursor-pointer"
                    onClick={closeQuickView}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
