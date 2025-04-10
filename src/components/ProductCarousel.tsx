'use client';

import { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Smart Watch',
    image: '/images/watch.jpg',
    price: '₹2,999',
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    image: '/images/earbuds.jpg',
    price: '₹1,299',
  },
  {
    id: 3,
    name: 'Sneakers',
    image: '/images/sneakers.jpg',
    price: '₹2,199',
  },
  {
    id: 4,
    name: 'Backpack',
    image: '/images/backpack.jpg',
    price: '₹999',
  },
];

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % products.length);
  const prev = () => setIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Featured Products</h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-0 text-2xl px-2 text-gray-600 hover:text-gray-900"
        >
          ‹
        </button>

        <div className="flex flex-col items-center space-y-2">
          <Image
            src={products[index].image}
            alt={products[index].name}
            width={200}
            height={200}
            className="rounded"
          />
          <h3 className="text-lg font-semibold">{products[index].name}</h3>
          <p className="text-blue-600 font-bold">{products[index].price}</p>
        </div>

        <button
          onClick={next}
          className="absolute right-0 text-2xl px-2 text-gray-600 hover:text-gray-900"
        >
          ›
        </button>
      </div>
    </div>
  );
}
