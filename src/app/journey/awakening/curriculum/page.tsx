'use client';

import React from 'react';
import Link from 'next/link';

export default function AwakeningCurriculum() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Awakening Curriculum
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A comprehensive guide to discovering your purpose and identifying the world challenge you wish to address
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/journey/awakening" 
              className="bg-white/20 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Back to Awakening
            </Link>
            <Link 
              href="/journey" 
              className="bg-white/20 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Journey Overview
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
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Curriculum Overview</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Awakening curriculum is designed to help you discover your purpose and identify the world challenge you wish to address. Through a combination of self-reflection, community engagement, and guided exploration, you'll develop a clear vision for your journey at Lumina Universalis.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <p className="text-purple-900 italic">
                  "The awakening phase is not about choosing a path, but about recognizing the path that has already chosen you."
                </p>
              </div>
            </div>

            {/* Modules */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Curriculum Modules</h3>
              
              {/* Module 1 */}
              <div className="mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">1</div>
                    <h4 className="text-xl font-semibold text-purple-900">Self-Discovery</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Explore your values, passions, and strengths to identify what truly matters to you.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Learning Objectives</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Identify your core values and how they shape your worldview</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Recognize your unique strengths and how they can be applied to world challenges</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Develop a personal mission statement that guides your journey</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Activities</h5>
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
                          <span>Strengths assessment and reflection</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Personal narrative writing and sharing</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Resources</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Guided meditation recordings</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Self-discovery workbooks</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>One-on-one coaching sessions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 2 */}
              <div className="mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-4">2</div>
                    <h4 className="text-xl font-semibold text-indigo-900">World Challenges</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Explore global challenges and identify which ones resonate most deeply with your purpose.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Learning Objectives</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Understand the interconnected nature of global challenges</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Identify the specific challenge that aligns with your purpose</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Develop a preliminary understanding of potential solutions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Activities</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Challenge mapping and systems thinking exercises</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Case studies of successful interventions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Challenge selection and justification</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Resources</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Global challenges database</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Expert interviews and panel discussions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Systems thinking tools and frameworks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 3 */}
              <div className="mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">3</div>
                    <h4 className="text-xl font-semibold text-purple-900">College Selection</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Explore the colleges of Lumina Universalis and identify which one aligns with your chosen challenge.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Learning Objectives</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Understand the focus and approach of each college</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Identify the college that best supports your chosen challenge</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Connect with potential mentors and peers in your chosen college</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Activities</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>College exploration workshops</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Mentor matching sessions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>College selection presentation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Resources</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>College profiles and case studies</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Mentor directory</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>College selection rubric</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 4 */}
              <div className="mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-4">4</div>
                    <h4 className="text-xl font-semibold text-indigo-900">Community Connection</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Build relationships with fellow seekers and establish your support network for the journey ahead.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Learning Objectives</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Connect with peers working on similar challenges</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Establish relationships with mentors and advisors</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Develop collaborative skills for the journey ahead</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Activities</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Community building workshops</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Peer learning circle formation</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Collaborative project planning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Resources</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Community platform access</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Collaboration tools and guidelines</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Community events calendar</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Assessment & Completion</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6">
                  The Awakening phase is considered complete when you have:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Developed a clear personal mission statement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Identified a specific world challenge to address</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Selected a college that aligns with your challenge</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Connected with mentors and peers in your chosen college</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Created a preliminary plan for your Immersion phase</span>
                  </li>
                </ul>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-purple-900 mb-4">Completion Ceremony</h4>
                  <p className="text-gray-700 mb-4">
                    Upon completing the Awakening phase, you'll participate in a ceremony where you'll share your purpose, chosen challenge, and preliminary plan with the community. This marks your official transition to the Immersion phase.
                  </p>
                  <p className="text-purple-900 italic">
                    "The completion of the Awakening phase is not an end, but a beginning - the first step on your journey to creating meaningful change in the world."
                  </p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Ready to Begin Your Awakening?</h3>
              <p className="text-gray-700 mb-6">
                The Awakening curriculum is designed to be completed at your own pace, typically over 4-6 weeks. Connect with our community to start your journey of self-discovery and purpose.
              </p>
              <Link 
                href="/join" 
                className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
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