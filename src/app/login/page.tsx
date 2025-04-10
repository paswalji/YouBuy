'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      
      <main className="min-h-[70vh] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-sm bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Sign In
          </button>
          <div className="text-center text-sm mt-4 space-y-1">
            <p>
              Don’t have an account?{' '}
              <Link href="/register" className="text-indigo-600 hover:underline">Register</Link>
            </p>
            <p>
              <Link href="#" className="text-indigo-600 hover:underline">Forgot Password?</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
