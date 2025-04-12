'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-indigo-900">Lumina Universalis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/journey" className="text-gray-700 hover:text-indigo-900 transition-colors">
              The Journey
            </Link>
            <Link href="/tracks" className="text-gray-700 hover:text-indigo-900 transition-colors">
              Tracks
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-indigo-900 transition-colors">
              Community
            </Link>
            <Link href="/join" className="bg-indigo-900 text-white px-4 py-2 rounded-full hover:bg-indigo-800 transition-colors">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/journey" 
                className="text-gray-700 hover:text-indigo-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                The Journey
              </Link>
              <Link 
                href="/tracks" 
                className="text-gray-700 hover:text-indigo-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tracks
              </Link>
              <Link 
                href="/community" 
                className="text-gray-700 hover:text-indigo-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                href="/join" 
                className="bg-indigo-900 text-white px-4 py-2 rounded-full hover:bg-indigo-800 transition-colors inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 