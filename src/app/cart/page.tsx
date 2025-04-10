'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const initialCartItems: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 129.99,
    image: '/images/headphones.jpg',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 89.99,
    image: '/images/smartwatch.jpg',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 49.99,
    image: '/images/speaker.jpg',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>(initialCartItems);

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">Your cart is empty 🛒</div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-6 bg-white p-4 rounded-xl shadow-md">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-sm text-red-500 mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6 text-right">
            <p className="text-lg font-semibold">Total: ₹{total}</p>
            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
