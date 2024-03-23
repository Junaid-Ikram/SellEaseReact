// ThankYou.js

import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h2 className="mb-4 text-3xl font-semibold">Thank You for Your Order!</h2>
      <p className="mb-4 text-gray-800">
        Your order has been successfully placed. We appreciate your business!
      </p>
      <p className="text-gray-600">
        You will receive an email confirmation shortly. If you have any questions, please
        contact our customer support.
      </p>

      <div className="mt-8">
        <Link to="/home" className="px-4 py-2 text-white bg-blue-500">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
