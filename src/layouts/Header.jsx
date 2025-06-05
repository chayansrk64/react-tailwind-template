import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "../component/MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = 3; // Replace with dynamic cart count
  const wishlistItems = 5; // Replace with dynamic wishlist count
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <FaBars size={24} />
          </button>

          {/* Logo */}
          <a href="/" className="text-white font-bold text-xl uppercase">
            SARKER SHOP
          </a>

          {/* Icons (Mobile) */}

          {/* <div className="md:hidden flex space-x-4 items-center">
            <a href="/search" className="text-gray-300 hover:text-white">
              <FaSearch size={30} />
            </a>
            <a
              href="/cart"
              className="relative text-gray-300 hover:text-white"
            >
              <FaShoppingCart size={30} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems}
                </span>
              )}
            </a>
            <a
              href="/wishlist"
              className="relative text-gray-300 hover:text-white"
            >
              <FaHeart size={30} />
              {wishlistItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistItems}
                </span>
              )}
            </a>
            <a href="/login" className="hover:text-green-600 bg-green-600 px-3 py-2 rounded text-white">
              Login
            </a>
          </div> */}

          


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Shop", "Blog", "Hot Deal"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="relative text-gray-300 hover:text-white"
              >
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 transform -translate-x-1/2 scale-x-0 hover:scale-x-100"></span>
              </a>
            ))}
          </div>

          {/* Icons (Desktop) */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="/search" className="text-gray-300 hover:text-white">
              <FaSearch size={20} />
            </a>
            <a
              href="/cart"
              className="relative text-gray-300 hover:text-white"
            >
              <FaShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems}
                </span>
              )}
            </a>
            <a
              href="/wishlist"
              className="relative text-gray-300 hover:text-white"
            >
              <FaHeart size={20} />
              {wishlistItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistItems}
                </span>
              )}
            </a>
            <a href="/login" className="text-gray-300 hover:text-white">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}

{/*       
      <div ref={menuRef} className={`md:hidden bg-gray-900 text-white shadow-md rounded-lg py-2 slide-in-left ${isMenuOpen ? 'open' : ''}`}>
        <div className="flex justify-end px-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white">
            <FaTimes size={30} />
          </button>
        </div>
        <a
          href="/"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Home
        </a>
        <a
          href="/shop"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Shop
        </a>
        <a
          href="/blog"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Blog
        </a>
        <a
          href="/hot-deal"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Hot Deal
        </a>
      </div> */}



    </nav>
  );
};

export default Header;