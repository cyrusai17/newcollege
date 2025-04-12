'use client';

import React from 'react';
import Link from 'next/link';

export default function JourneyStory() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            The Journey of Maya: From Graduate to Grounded Changemaker
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            A real story of transformation at Lumina Universalis
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/journey" 
              className="bg-white/10 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors inline-block"
            >
              Back to Journey
            </Link>
            <Link 
              href="/join" 
              className="bg-white text-purple-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors inline-block"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-purple-900 mb-8 text-center">The Journey Map</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="py-4 px-6 text-left text-purple-900">Stage</th>
                    <th className="py-4 px-6 text-left text-purple-900">Emotion</th>
                    <th className="py-4 px-6 text-left text-purple-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">🎓 Disorientation</td>
                    <td className="py-4 px-6">Confusion, burnout</td>
                    <td className="py-4 px-6">Search for meaning, apply</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">💌 Invitation</td>
                    <td className="py-4 px-6">Curiosity, hope</td>
                    <td className="py-4 px-6">Accept, onboard</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">🔮 Unlearning</td>
                    <td className="py-4 px-6">Healing, introspection</td>
                    <td className="py-4 px-6">Workshops, journaling, mentorship</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">🛠️ Doing</td>
                    <td className="py-4 px-6">Clarity, confidence</td>
                    <td className="py-4 px-6">DAO project, real-world contribution</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">🌀 Reflection</td>
                    <td className="py-4 px-6">Gratitude, belonging</td>
                    <td className="py-4 px-6">Retreat, storytelling, milestone</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">🪂 Launch</td>
                    <td className="py-4 px-6">Purpose, momentum</td>
                    <td className="py-4 px-6">Launch into world with support & direction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 1: The Disorientation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h2 className="text-3xl font-bold text-purple-900">Stage 1: The Disorientation (Month 0)</h2>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Who she is:</h3>
              <p className="text-gray-700 mb-4">
                Maya just graduated from a top university with a degree in economics. She's ambitious, curious, and high-performing… but also <span className="font-semibold">exhausted</span>, <span className="font-semibold">directionless</span>, and <span className="font-semibold">disillusioned</span>.
              </p>
              <p className="text-gray-700 mb-4">
                Everyone around her is:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Taking consulting jobs they don't care about</li>
                <li>Burning out in startups</li>
                <li>Or "traveling to find themselves" — but without structure or guidance</li>
              </ul>
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-purple-900 italic">
                  "I want to do something meaningful… but what does that even mean?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 2: The Invitation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <span className="text-2xl">💌</span>
              </div>
              <h2 className="text-3xl font-bold text-indigo-900">Stage 2: The Invitation (Month 1)</h2>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 mb-6">
                She receives an invite to <span className="font-semibold">Lumina Universalis</span> — not a school, not a company, not a cult — but something in between:
              </p>
              <div className="bg-indigo-100 p-6 rounded-lg mb-6">
                <p className="text-indigo-900 italic text-lg">
                  "You've finished learning. Now start becoming.<br />
                  Join a global cohort of thinkers, builders, and seekers ready to heal the world — and themselves."
                </p>
              </div>
              <p className="text-gray-700">
                It's <span className="font-semibold">invitation-only</span>, with just 111 spots.<br />
                She applies. Gets accepted. And says yes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 3: The Unlearning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h2 className="text-3xl font-bold text-purple-900">Stage 3: The Unlearning (Month 2–3)</h2>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-6">
                Maya enters <span className="font-semibold">her cohort</span>, hosted digitally and in optional in-person hubs.<br />
                The first weeks aren't about grinding — they're about <span className="font-semibold">slowing down</span>.
              </p>
              <p className="text-gray-700 mb-4">
                She:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Learns to meditate</li>
                <li>Unpacks limiting beliefs about success</li>
                <li>Has 1:1 sessions with mentors who've walked the path</li>
                <li>Participates in open salons on "what matters," "what's real," "what's broken"</li>
              </ul>
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-purple-900 italic">
                  "Maybe I'm not lost. Maybe the world just trained me to be numb."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 4: The Doing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h2 className="text-3xl font-bold text-indigo-900">Stage 4: The Doing (Month 3–6)</h2>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 mb-6">
                Now grounded, she chooses her <span className="font-semibold">pathway</span>:<br />
                <span className="font-semibold">Systems + Economic Justice.</span> She joins a project inside the DAO working on a UBI pilot in Ghana.
              </p>
              <p className="text-gray-700 mb-4">
                She's:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Working with a team of 5 fellows</li>
                <li>Designing distribution models</li>
                <li>Co-authoring a proposal that will be voted on by the DAO</li>
                <li>Attending weekly live talks from people like Rutger Bregman, Grace Blakeley, and Vitalik</li>
              </ul>
              <p className="text-gray-700 mb-4">
                She earns:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Onchain credentials</li>
                <li>LUMA tokens for her contributions</li>
                <li>A glowing testimonial from her mentor and project lead</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 5: The Reflection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <span className="text-2xl">🌀</span>
              </div>
              <h2 className="text-3xl font-bold text-purple-900">Stage 5: The Reflection (Month 6)</h2>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-6">
                Her cohort closes with a <span className="font-semibold">group rite-of-passage retreat</span> (virtual or physical).
              </p>
              <p className="text-gray-700 mb-4">
                They reflect:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Who have I become?</li>
                <li>What have I given?</li>
                <li>What will I carry forward?</li>
              </ul>
              <p className="text-gray-700">
                She's not "graduating." She's <span className="font-semibold">initiated</span> — into a life of conscious contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 6: The Launch */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <span className="text-2xl">🪂</span>
              </div>
              <h2 className="text-3xl font-bold text-indigo-900">Stage 6: The Launch (Month 7–12)</h2>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 mb-6">
                Maya now has:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>A portfolio of real-world work</li>
                <li>A DAO-based network of 100+ aligned peers and mentors</li>
                <li>A sense of internal clarity she never got from college</li>
              </ul>
              <p className="text-gray-700 mb-6">
                She joins a climate tech startup, funded by the DAO.<br />
                She still votes on proposals.<br />
                She now mentors incoming Lumina cohorts.
              </p>
              <div className="bg-indigo-100 p-4 rounded-lg">
                <p className="text-indigo-900 italic">
                  "The most important thing I learned at Lumina wasn't how to get a job.<br />
                  It was how to live with integrity, energy, and awe."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
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