'use client';

import React from 'react';
import Link from 'next/link';

export default function Awakening() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Awakening
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The first step on your journey to healing, reimagining, and rebuilding the world
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/journey" 
              className="bg-white/20 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Back to Journey
            </Link>
            <Link 
              href="/journey/immersion" 
              className="bg-white text-indigo-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-colors"
            >
              Next: Immersion
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">The Awakening Phase</h2>
              <p className="text-lg text-gray-700 mb-6">
                The journey at Lumina Universalis begins with a moment of clarity - a recognition of your purpose and the world challenge you wish to address. This is not merely about choosing a path, but about recognizing the path that has already chosen you.
              </p>
              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <p className="text-indigo-900 italic">
                  "The awakening phase is not about choosing a path, but about recognizing the path that has already chosen you."
                </p>
              </div>
            </div>

            {/* Key Components */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Key Components</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-900 mb-4">Purpose Discovery</h4>
                  <p className="text-gray-700 mb-4">
                    Through guided workshops, reflection sessions, and one-on-one mentoring, you'll explore your deepest values, passions, and the unique contribution you wish to make to the world.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Values clarification exercises</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Life purpose mapping</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Personal narrative development</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-900 mb-4">Challenge Identification</h4>
                  <p className="text-gray-700 mb-4">
                    You'll explore the world's greatest challenges and identify which one resonates most deeply with your purpose and skills.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Global challenge mapping</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Systems thinking introduction</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Impact potential assessment</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-900 mb-4">Community Connection</h4>
                  <p className="text-gray-700 mb-4">
                    You'll connect with mentors who align with your vision and join communities of fellow seekers working on similar challenges.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mentor matching</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Community circles</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Collaborative visioning</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-900 mb-4">College Selection</h4>
                  <p className="text-gray-700 mb-4">
                    Based on your purpose and the challenge you wish to address, you'll identify which college(s) will best support your journey.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>College exploration sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Interdisciplinary mapping</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Learning path design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Awakening Timeline</h3>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-200"></div>
                <div className="space-y-8 pl-6">
                  <div className="relative">
                    <div className="absolute left-[-1.5rem] w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-indigo-900">Week 1-2: Initial Orientation</h4>
                      <p className="text-gray-700">Introduction to Lumina Universalis, its philosophy, and the journey ahead.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[-1.5rem] w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-indigo-900">Week 3-4: Purpose Discovery</h4>
                      <p className="text-gray-700">Workshops and reflection sessions to explore your values and purpose.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[-1.5rem] w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-indigo-900">Week 5-6: Challenge Mapping</h4>
                      <p className="text-gray-700">Exploring global challenges and identifying your focus area.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[-1.5rem] w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-indigo-900">Week 7-8: Community Building</h4>
                      <p className="text-gray-700">Connecting with mentors and fellow seekers, joining communities.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[-1.5rem] w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-indigo-900">Week 9-10: College Selection</h4>
                      <p className="text-gray-700">Exploring colleges and designing your learning path.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[-1.5rem] w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-indigo-900">Week 11-12: Transition to Immersion</h4>
                      <p className="text-gray-700">Finalizing your purpose statement and preparing for the next phase.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Voices from the Awakening</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="text-indigo-900 italic mb-4">
                    "The awakening phase helped me understand that my passion for environmental justice wasn't just a hobby - it was my life's calling. The mentors and community I found here gave me the confidence to pursue it."
                  </p>
                  <p className="text-indigo-900 font-semibold">— Maya, College of Earth</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-purple-900 italic mb-4">
                    "I came to Lumina with a vague sense that I wanted to help people, but left the awakening phase with a clear vision of how I could contribute to mental health accessibility through technology."
                  </p>
                  <p className="text-purple-900 font-semibold">— James, College of Mind</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Ready to Begin Your Awakening?</h3>
              <p className="text-gray-700 mb-6">
                The first step is to connect with our community and share your vision for a better world.
              </p>
              <Link 
                href="/join" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
              >
                Join the Movement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 