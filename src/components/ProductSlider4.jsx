import { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch, FiX } from "react-icons/fi";

const products = [
  {
    name: "Apple Iphone 16",
    price: "850$",
    type: "Mobile Phones",
    images: [
      "HomeImages/AppleProducts/IPHONE 16 ULTRAMARINE.png",
      "HomeImages/AppleProducts/IPHONE 16 WHITE.png",
      "HomeImages/AppleProducts/IPHONE 16 TEAL.png",
      "HomeImages/AppleProducts/IPHONE 16 BLACK.png",
    ],
  },
  {
    name: "Apple Ipad 10th gen",
    price: "330$",
    type: "Tablets",
    images: [
      "HomeImages/AppleProducts/IPAD 10 SILVER.png",
      "HomeImages/AppleProducts/IPAD 10 YELLOW.png",
      "HomeImages/AppleProducts/IPAD 10 PINK.png",
      "HomeImages/AppleProducts/IPAD 10 BLUE.png",
    ],
  },
  {
    name: "Apple Watch Series 10",
    price: "380$",
    type: "Wearable",
    images: [
      "HomeImages/AppleProducts/APPLE WATCH SERIES 10 BLACK.png",
      "HomeImages/AppleProducts/APPLE WATCH SERIES 10 ROSEGOLD.png",
      "HomeImages/AppleProducts/APPLE WATCH SERIES 10 SILVER.png",
    ],
  },
  {
    name: "Samsung Galaxy s25 ultra",
    price: "1300$",
    type: "Mobile Phones",
    images: [
      "HomeImages/SamsungProducts/S25 ULTRA TITANIUM BLACK.png",
      "HomeImages/SamsungProducts/S25 ULTRA TITANIUM GRAY.png",
      "HomeImages/SamsungProducts/S25 ULTRA TITANIUM SILVERBLUE.png",
      "HomeImages/SamsungProducts/S25 ULTRA TITANIUM WHITESILVER.png",
    ],
  },
  {
    name: "Infinix Note 50 pro plus",
    price: "430$",
    type: "Mobile Phones",
    images: [
      "HomeImages/InfinixProducts/InfinixNote50ProRacing.png",
      "HomeImages/InfinixProducts/InfinixNote50ProTitininium.png",
      "HomeImages/InfinixProducts/InfinixNote50ProPurple.png",
    ],
  },
  {
    name: "SAMSUNG Galaxy Zfold",
    price: "1470$",
    type: "Mobile Phones",
    images: [
      "HomeImages/SamsungProducts/SamsungGalaxyZfoldNavy.png",
      "HomeImages/SamsungProducts/SamsungGalaxyZfoldSilver.png",
    ],
  },
];

export default function ProductSlider4() {
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
      <h2 className="text-4xl mb-6 text-gray-600">Latest Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
              <button
                className="cursor-pointer bg-lime-500 duration-300 text-white px-4 py-2 rounded-xl mt-2 hover:bg-black"
                onClick={() => handleAddToCart(product.name)}
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between">
              <button
                className="cursor-pointer bg-lime-500 duration-300 text-white px-4 py-2 rounded-xl flex items-center justify-center hover:bg-black"
                onClick={() => handleAddToCart(product.name)}
              >
                <FiShoppingCart size={20} />
              </button>
              <button
                className="cursor-pointer bg-black text-white duration-300 px-4 py-2 rounded-xl flex items-center justify-center hover:bg-lime-500"
                onClick={() => handleQuickView(product)}
              >
                <FiSearch size={20} />
              </button>
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
                  <button className="bg-black text-white px-6 py-2 duration-300 cursor-pointer rounded-full hover:bg-lime-500 transition">
                    Add to Cart
                  </button>
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
