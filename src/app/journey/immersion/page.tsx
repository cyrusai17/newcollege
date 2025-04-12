'use client';

import React from 'react';
import Link from 'next/link';

export default function Immersion() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Immersion
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Dive deep into your chosen college, working on real-world projects while building foundational knowledge
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/journey/awakening" 
              className="bg-white/20 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Previous: Awakening
            </Link>
            <Link 
              href="/journey" 
              className="bg-white/20 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Back to Journey
            </Link>
            <Link 
              href="/journey/synthesis" 
              className="bg-white text-purple-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors"
            >
              Next: Synthesis
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
              <h2 className="text-3xl font-bold text-purple-900 mb-6">The Immersion Phase</h2>
              <p className="text-lg text-gray-700 mb-6">
                After awakening to your purpose, you'll dive deep into your chosen college, working on real-world projects while building foundational knowledge. This is where theory meets practice, where knowledge becomes wisdom through direct experience.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <p className="text-purple-900 italic">
                  "Immersion is where theory meets practice, where knowledge becomes wisdom through direct experience."
                </p>
              </div>
            </div>

            {/* Key Components */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Key Components</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-900 mb-4">Project-Based Learning</h4>
                  <p className="text-gray-700 mb-4">
                    You'll engage in hands-on projects that address real-world challenges, applying your learning in meaningful contexts.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Real-world problem solving</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Iterative design and development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Impact measurement and evaluation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-900 mb-4">Community Engagement</h4>
                  <p className="text-gray-700 mb-4">
                    You'll build relationships with organizations and communities in your field, learning from their experiences and contributing your skills.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Partnership development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Community needs assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Collaborative problem-solving</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-900 mb-4">Skill Development</h4>
                  <p className="text-gray-700 mb-4">
                    You'll develop practical skills through mentorship, peer learning, and hands-on experience in your chosen field.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Technical skills workshops</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Leadership and communication</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Systems thinking and analysis</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-900 mb-4">Knowledge Building</h4>
                  <p className="text-gray-700 mb-4">
                    You'll build foundational knowledge in your field through a combination of self-directed learning, mentorship, and collaborative exploration.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Curated learning resources</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Expert-led seminars</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Peer learning circles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* College-Specific Immersion */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">College-Specific Immersion</h3>
              <p className="text-lg text-gray-700 mb-6">
                Each college at Lumina Universalis offers unique immersion experiences tailored to its focus area. Here are examples from each college:
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-900 mb-4">College of Earth</h4>
                  <p className="text-gray-700 mb-4">
                    Students work on regenerative agriculture projects, climate resilience initiatives, and ecosystem restoration efforts in collaboration with local communities and environmental organizations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Sample Projects</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Urban food forest implementation</li>
                        <li>• Watershed restoration</li>
                        <li>• Carbon sequestration initiatives</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Key Skills</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Permaculture design</li>
                        <li>• Environmental monitoring</li>
                        <li>• Community engagement</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-900 mb-4">College of Mind</h4>
                  <p className="text-gray-700 mb-4">
                    Students develop mental health interventions, digital well-being tools, and consciousness exploration practices in collaboration with mental health professionals and research institutions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Sample Projects</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Digital detox applications</li>
                        <li>• Mindfulness programs for schools</li>
                        <li>• Mental health accessibility tools</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Key Skills</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Therapeutic techniques</li>
                        <li>• UX research and design</li>
                        <li>• Program evaluation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-900 mb-4">College of Systems</h4>
                  <p className="text-gray-700 mb-4">
                    Students work on governance innovations, economic alternatives, and civic technology projects in collaboration with local governments, NGOs, and community organizations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Sample Projects</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Participatory budgeting platforms</li>
                        <li>• Cooperative business models</li>
                        <li>• Community decision-making tools</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-900 mb-2">Key Skills</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Policy analysis</li>
                        <li>• Stakeholder engagement</li>
                        <li>• Systems mapping</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Immersion Timeline</h3>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-200"></div>
                <div className="space-y-8 pl-6">
                  <div className="relative">
                    <div className="absolute left-[-1.5rem] w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-purple-900">Month 1-2: Foundation Building</h4>
                      <p className="text-gray-700">Establishing your learning path, connecting with mentors, and beginning foundational projects.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[-1.5rem] w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-purple-900">Month 3-4: Deep Dive</h4>
                      <p className="text-gray-700">Engaging in more complex projects, building relationships with external organizations, and developing specialized skills.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[-1.5rem] w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-purple-900">Month 5-6: Integration</h4>
                      <p className="text-gray-700">Connecting insights across projects, collaborating with peers from other colleges, and preparing for the synthesis phase.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Voices from Immersion</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-purple-900 italic mb-4">
                    "During my immersion in the College of Earth, I worked with a local community to implement a permaculture garden. The hands-on experience taught me more about sustainable agriculture than any textbook ever could."
                  </p>
                  <p className="text-purple-900 font-semibold">— Elena, College of Earth</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="text-indigo-900 italic mb-4">
                    "The immersion phase in the College of Systems allowed me to work directly with a city government on participatory budgeting. I learned how to navigate complex bureaucracies while maintaining my vision for more democratic decision-making."
                  </p>
                  <p className="text-indigo-900 font-semibold">— David, College of Systems</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Ready to Dive Deep?</h3>
              <p className="text-gray-700 mb-6">
                The immersion phase is where your journey truly begins to take shape. Connect with our community to start your deep dive into real-world impact.
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