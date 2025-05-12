import { FaLinkedin, FaInstagram, FaWhatsapp, FaBars } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAndScroll = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between" data-aos="fade-in">
        {/* Logo */}
        <div>
          <Link to="/home">
            <h2 className="text-4xl text-lime-500 overflow-hidden">
              BAWAB<span className="text-black">CELL</span>
            </h2>
          </Link>
        </div>

        {/* Hamburger + Cart (Mobile Only) */}
        <div className="lg:hidden flex items-center gap-4">
          <Link to="/cart" className="relative text-2xl hover:text-lime-500 transition duration-300">
            <FiShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-lime-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
                {totalItems}
              </span>
            )}
          </Link>
            <button onClick={toggleMenu} className="text-2xl text-gray-600">
            <FaBars />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-6">
          {['home', 'shop', 'contact'].map((section) => (
            <h2 key={section}>
              <Link
                to={`/${section}`}
                className="text-2xl text-gray-600 hover:text-lime-500 transition duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </h2>
          ))}
        </div>

        {/* Cart + Support (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-6 text-gray-600">
          <Link to="/cart" className="relative text-2xl hover:text-lime-500 transition duration-300">
            <FiShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-lime-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
                {totalItems}
              </span>
            )}
          </Link>
           <a href="https://wa.me/+96103903800" target='blank'>
          <button className="bg-black text-white p-3 rounded-full flex items-center text-md cursor-pointer gap-2 hover:opacity-80">
            
            <FaWhatsapp className="text-md" />
            Whatsapp Support
          </button>
          </a>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4 overflow-hidden">
          <button onClick={toggleMenu} className="text-3xl text-gray-600 overflow-hidden hover:text-lime-500">
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-center gap-8 mt-6">
          {['home', 'shop', 'contact'].map((section) => (
            <Link
              key={`/${section}`}
              to={`/${section}`}
              onClick={() => setIsOpen(false)}
              className="text-2xl text-gray-600 overflow-hidden hover:text-blue-400 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-4">
             <a href="https://wa.me/+96103903800" target='blank'>
            <button className="bg-black text-white p-3 rounded-full flex items-center text-md cursor-pointer gap-2 hover:opacity-80">
              <FaWhatsapp className="text-md" />
              Whatsapp Support
            </button>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
