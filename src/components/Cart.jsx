import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useCart } from "./CartContext";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cart = () => {
  const { cart, addToCart, removeFromCart, decrementFromCart, clearCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <section className="w-full px-4 py-10">
      <Navbar />
      <div className="flex justify-between items-center mb-6 mt-20" data-aos="fade-right">
        <h2 className="text-2xl text-gray-600">
          Your Cart ({cart.length} items)
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-4/5 min-h-[200px] flex justify-center items-center">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-2xl">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-gray-50 rounded-2xl p-4 transition-all duration-300 hover:shadow-2xl flex flex-col w-full"
                  style={{ minHeight: "360px" }}
                  data-aos="fade-up"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="cursor-pointer w-full h-46 object-contain transition-all duration-300 transform group-hover:scale-105 sm:h-64 md:h-48 lg:h-72"
                  />
                  <div className="mt-3">
                    <h3 className="text-xl sm:text-2xl text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm sm:text-xl text-gray-900 mt-2">
                      {product.price}
                    </p>
                    <h4 className="text-sm sm:text-xl text-gray-500 mt-2">
                      {product.type}
                    </h4>

                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        className="bg-gray-300 px-2 rounded"
                        onClick={() => decrementFromCart(product.id)}
                      >-</button>
                      <span className="text-xl">{product.quantity}</span>
                      <button
                        className="bg-gray-300 px-2 rounded"
                        onClick={() => addToCart(product)}
                      >+</button>
                    </div>
                  </div>

                  {/* Remove from Cart button */}
                  <div className="mt-3 mx-auto w-full">
                    <button
                      className="
                        hidden lg:flex group-hover:flex 
                        bg-red-500 text-white duration-300 
                        cursor-pointer px-4 py-2 rounded-lg 
                        w-full mt-4 justify-center items-center
                        transition-all hover:bg-black
                      "
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <span className="group-hover:hidden flex items-center">
                        <FiX size={20} className="mr-2" />
                        Remove
                      </span>
                      <span className="hidden group-hover:flex items-center">
                        <FiX size={24} />
                      </span>
                    </button>

                    <button
                      className="
                        flex lg:hidden 
                        bg-red-500 text-white duration-300 
                        cursor-pointer px-4 py-2 rounded-lg 
                        w-full mt-4 justify-center items-center
                       
                      "
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <FiX size={20} className="mr-2" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Summary Section */}
        <div className="w-full lg:w-1/5 bg-white p-4 rounded-2xl shadow-lg" data-aos="fade-up">
          <h3 className="text-4xl text-gray-700 mb-4">Cart Summary</h3>
          <div className="flex flex-col space-y-4">
            {cart.map((product) => (
              <div key={product.id} className="flex justify-between items-center">
                <p className="text-gray-700 text-2xl">{product.name}</p>
                <p className="text-gray-600 text-xl">
                  ${product.price} x {product.quantity}
                </p>
              </div>
            ))}
           <div className="flex justify-between items-center mt-4 border-t pt-4">
  <p className="text-2xl text-gray-900">Total:</p>
  <p className="text-2xl text-gray-900">
    {/* Ensure price is treated as a number */}
    ${cart.reduce((total, product) => {
      const price = parseFloat(product.price); // Ensure the price is a number
      if (!isNaN(price)) {
        return total + price * product.quantity; // Sum up the price
      }
      return total; // If price is invalid, don't add anything
    }, 0).toFixed(2)} {/* Format the total to 2 decimal places */}
  </p>
</div>
<a href="https://wa.me/+96103903800?text=I%20want%20to%20order" target="_blank">
            <button className="bg-lime-500 duration-300 hover:bg-black cursor-pointer text-white w-full py-2 rounded-lg mt-4">
              Checkout
            </button>
            </a>
            <button
              onClick={clearCart}
              className="bg-red-500 duration-300 cursor-pointer hover:bg-black text-white py-2 rounded-lg mt-2"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
