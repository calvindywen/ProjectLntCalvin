import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link to="/about" className="flex items-center py-5 px-2">
                <span className="font-bold text-xl">TokoHappy</span>
              </Link>
            </div>
            
            {user && (
              <div className="hidden md:flex items-center space-x-1">
                <Link to="/about" className="py-5 px-3 hover:text-blue-200">About</Link>
                <Link to="/products" className="py-5 px-3 hover:text-blue-200">Products</Link>
              </div>
            )}
          </div>
          
          {user && (
            <div className="hidden md:flex items-center space-x-4">
              <span className="py-2">Welcome, {user.username}</span>
              <Link to="/cart" className="py-2 px-3 bg-blue-700 hover:bg-blue-800 rounded-md">
                Cart ({totalItems})
              </Link>
              <button 
                onClick={logout}
                className="py-2 px-3 bg-red-500 hover:bg-red-600 rounded-md"
              >
                Logout
              </button>
            </div>
          )}
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        {user && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="block px-3 py-2 hover:bg-blue-700 rounded">About</Link>
            <Link to="/products" className="block px-3 py-2 hover:bg-blue-700 rounded">Products</Link>
            <Link to="/cart" className="block px-3 py-2 hover:bg-blue-700 rounded">Cart ({totalItems})</Link>
            <button 
              onClick={logout}
              className="w-full text-left px-3 py-2 text-red-200 hover:bg-red-600 hover:text-white rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;