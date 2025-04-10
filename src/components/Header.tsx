'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search } from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <Link href="/" className="text-xl font-bold text-indigo-600">ShopEase</Link>

        <div className="flex-1 max-w-md w-full">
          <div className="flex items-center border rounded-lg px-2">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-2 py-1 outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
          <Link href="/register" className="text-gray-700 hover:text-indigo-600">Register</Link>
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
