// CartView.js

import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import L1 from '../resources/L1.jpg';
import M1 from '../resources/M1.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CartView = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cart/get');
       
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0);
  };

 

  const handleRemoveItem = async (productId) => {
    try {
      // Send request to remove the cart item by ID
      await axios.delete(`http://localhost:3001/cart/remove/${productId}`);
      
      // Update the comparison to use the correct property (_id)
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
      alert('Item removed from cart');
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  
  const gotohome = () => {
     
    navigate('/home')
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="mb-8 text-3xl font-semibold">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Browse products</Link></p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.productId.id} className="flex items-center p-4 mb-4 border rounded shadow">
              <img src={item.image} alt={item.productId.name} className="object-cover w-16 h-16 mr-4 rounded-md" />

              <div>
                <h3 className="text-lg font-semibold">{item.productId.name}</h3>
                <p className="text-gray-600">{item.productId.description}</p>
                <p className="font-semibold text-gray-800">${item.productId.price}</p>

                <div className="flex items-center mt-4">
                  <label className="mr-2 font-semibold text-gray-800">Quantity:</label>
                  <div className="w-16 p-2 border rounded-md"> {item.quantity}</div>
                    
              
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                 
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <h3 className="mb-2 text-xl font-semibold">Total Price:</h3>
            <p className="text-2xl font-semibold">${calculateTotalPrice()}</p>
          </div>

          <div className="mt-8">
            <Link to="/checkout" className="px-4 py-2 text-white bg-blue-500">
              Proceed to Checkout
            </Link>
            <button className="px-4 py-2 ml-4 text-white bg-blue-500" onClick={gotohome}>Cancel</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default CartView;
