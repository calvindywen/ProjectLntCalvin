import React from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4 my-8 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-500">Your cart is empty. Let's go shopping!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 my-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
              <div className="flex items-center mb-2 sm:mb-0">
                <img 
                  src={item.images[0]} 
                  alt={item.title} 
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-600 text-sm">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="font-semibold mr-4">${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-end">
          <div className="text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
      
      <CheckoutForm />
    </div>
  );
};

export default Cart;
