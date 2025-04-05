import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mb-2 text-sm h-12 overflow-hidden">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center">
            <button 
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              className="px-2 py-1 bg-gray-200 rounded-l text-gray-700"
            >
              -
            </button>
            <input 
              type="number" 
              min="1" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-12 text-center border-t border-b border-gray-200 py-1"
            />
            <button 
              onClick={() => setQuantity(prev => prev + 1)}
              className="px-2 py-1 bg-gray-200 rounded-r text-gray-700"
            >
              +
            </button>
          </div>
        </div>
        <button 
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;