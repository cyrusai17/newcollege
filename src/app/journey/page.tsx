'use client';

import React from 'react';
import Link from 'next/link';

export default function Journey() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            The Lumina Journey
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            A transformative path from awakening to illumination
          </p>
          <Link 
            href="/" 
            className="bg-white/10 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors inline-block"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Journey Stages Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Awakening */}
              <Link href="/journey/awakening" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100 hover:border-purple-300 transition-all h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors">
                      <span className="text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900">Awakening</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Identify your purpose and connect with mentors who can guide your journey.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium">
                    <span>Explore</span>
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Immersion */}
              <Link href="/journey/immersion" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100 hover:border-indigo-300 transition-all h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                      <span className="text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-900">Immersion</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Engage deeply with your college and work on real-world projects that matter.
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium">
                    <span>Explore</span>
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Synthesis */}
              <Link href="/journey/synthesis" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100 hover:border-purple-300 transition-all h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors">
                      <span className="text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900">Synthesis</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Integrate knowledge across disciplines and connect with peers from other colleges.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium">
                    <span>Explore</span>
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Creation */}
              <Link href="/journey/creation" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100 hover:border-indigo-300 transition-all h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                      <span className="text-xl">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-900">Creation</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Launch initiatives and implement solutions to real-world challenges.
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium">
                    <span>Explore</span>
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Illumination */}
              <Link href="/journey/illumination" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100 hover:border-purple-300 transition-all h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors">
                      <span className="text-xl">5</span>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900">Illumination</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Graduate as a recognized contributor with a clear vision for your future.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium">
                    <span>Explore</span>
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Story Card */}
              <Link href="/journey/story" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100 hover:border-indigo-300 transition-all h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                      <span className="text-xl">📖</span>
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-900">Maya's Journey</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Follow Maya's transformative path from graduate to grounded changemaker.
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium">
                    <span>Read Story</span>
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Journey Overview</h2>
            <p className="text-xl text-gray-700 mb-8 text-center">
              The Lumina journey is not linear — it's a spiral of growth and discovery.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">Key Principles</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Each stage builds on the previous, but you may revisit earlier stages as needed</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Progress is measured by contribution and growth, not time spent</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Community support is available at every stage of your journey</span>
                </li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">Support Systems</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Personal mentors who guide your growth and development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Peer groups for collaboration and mutual support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Resources and tools to help you navigate each stage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of recent graduates committed to creating meaningful impact in their careers and communities.
          </p>
          <Link 
            href="/join" 
            className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
} 