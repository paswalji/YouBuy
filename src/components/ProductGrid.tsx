'use client';

import Image from 'next/image';

const gridProducts = [
  {
    id: 101,
    name: 'Bluetooth Speaker',
    image: '/images/speaker.jpg',
    price: '₹1,499',
  },
  {
    id: 102,
    name: 'Fitness Band',
    image: '/images/band.jpg',
    price: '₹999',
  },
  {
    id: 103,
    name: 'Gaming Mouse',
    image: '/images/mouse.jpg',
    price: '₹699',
  },
  {
    id: 104,
    name: 'T-Shirt',
    image: '/images/tshirt.jpg',
    price: '₹499',
  },
  {
    id: 105,
    name: 'Sunglasses',
    image: '/images/sunglasses.jpg',
    price: '₹799',
  },
  {
    id: 106,
    name: 'Water Bottle',
    image: '/images/bottle.jpg',
    price: '₹299',
  },
];

export default function ProductGrid() {
  return (
    <div className="mt-10 px-2 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">More Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gridProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-48"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-blue-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
