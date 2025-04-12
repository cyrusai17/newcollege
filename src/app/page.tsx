'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lumina Universalis
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            The World's First Postgraduate Experience for Meaning, Mastery, and Mission
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Not a gap year. Not a bootcamp. Not a job.<br />
            Something more human. More future-facing. More alive.
          </p>
          <Link 
            href="/join" 
            className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">What It Is</h2>
            <p className="text-xl text-gray-700 mb-12 text-center">
              Lumina Universalis is not a university.<br />
              It's what comes after college — a sanctuary for those who don't want to sleepwalk into the system, 
              but want to wake up to their potential and purpose.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">A New Model</h3>
                <p className="text-gray-700 mb-4">
                  A self-directed, community-powered experience that helps young adults:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Find direction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Build useful skills</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Heal and grow emotionally</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Engage with world-changing projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Discover what truly matters to them</span>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">The Vision</h3>
                <p className="text-gray-700 italic mb-6">
                  "College gave me credentials. Lumina gave me clarity and a meaningful career."
                </p>
                <p className="text-gray-700 mb-4">
                  Lumina Universalis is:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A bridge between education and meaningful careers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A network connecting graduates with mentors and professionals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A launchpad for careers that are both meaningful and financially sustainable</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A DAO-governed mission engine, powered by shared values</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 italic">
                  It's not about earning a degree — it's about becoming someone you respect and launching into a career that matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Experience Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Core Experience Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🌱 Integration</h3>
                <p className="text-gray-700">
                  Heal from burnout, isolation, academic pressure. Reconnect with self and purpose.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🎯 Direction</h3>
                <p className="text-gray-700">
                  Explore paths (impact, creativity, innovation) and define a personal mission.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🛠️ Real-World Mastery</h3>
                <p className="text-gray-700">
                  Work on DAO-supported global projects. Learn by doing, not by testing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🤝 Community</h3>
                <p className="text-gray-700">
                  Live and work alongside peers on the same journey. Think global, act local.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🔄 Give Back</h3>
                <p className="text-gray-700">
                  Mentorship, teaching, building — each participant contributes back to the next wave.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">💼 Career Launch</h3>
                <p className="text-gray-700">
                  Connect with professionals leading meaningful lives. Graduate with a job that matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Process</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Apply to Join: Invitation-based cohort system</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Choose Your Path: Join a track aligned with real-world issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Connect with Mentors: Learn from professionals leading meaningful lives</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cycle Through Projects: 4–12 week sprints on real missions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Earn Proof of Contribution: Onchain credentials and reputation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Graduate with a Job: Transition into meaningful, financially sustainable careers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Available Tracks</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Healing: Mental health, spiritual growth</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Earth: Climate + regeneration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Systems: Governance, economic redesign</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technology: Ethical AI, digital identity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-8">Who It's For</h2>
            <p className="text-xl text-gray-700 mb-12">
              Recent college graduates who are ready to bridge the gap between academic knowledge and meaningful careers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Perfect For</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recent grads asking: "Is this it?"</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Seekers burned out by academia or hustle culture</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>People with degrees but no direction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Builders, artists, changemakers with raw potential</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Those seeking careers that align with their values and purpose</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Example Tracks</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mission Ready: Build your portfolio, find purpose-aligned work</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>System Breaker: Audit and redesign broken societal systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Community Catalyst: Learn to lead from love and organize local action</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Creative Pathfinder: Launch projects that merge art, tech, and impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't settle into the world. Shape it.</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of recent graduates committed to creating meaningful impact in their careers and communities.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our goal: Every participant graduates with a job that is meaningful and financially sustainable.
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
