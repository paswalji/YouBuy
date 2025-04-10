'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCarousel from '@/components/ProductCarousel';
import ProductGrid from '@/components/ProductGrid';
import {
  Flame, Star, Tag, Monitor, Shirt,
  Leaf, BookOpen, Gamepad2
} from 'lucide-react';
import React from 'react';

const categories = [
  { name: 'Best Sellers', icon: <Star /> },
  { name: 'On Sale', icon: <Tag /> },
  { name: 'Hot Deals', icon: <Flame /> },
  { name: 'Electronics', icon: <Monitor /> },
  { name: 'Fashion', icon: <Shirt /> },
  { name: 'Eco Friendly', icon: <Leaf /> },
  { name: 'Books', icon: <BookOpen /> },
  { name: 'Gaming', icon: <Gamepad2 /> },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-lg font-semibold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {categories.map((category) => (
              <div key={category.name} className="p-3 flex flex-col items-center bg-gray-100 rounded-md hover:bg-indigo-100 transition-all">
                <div className="text-indigo-600 mb-1">
                  {React.cloneElement(category.icon, { className: 'w-4 h-4' })}
                </div>
                <p className="text-xs text-center font-medium text-gray-700">{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        <ProductCarousel />
        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
}
