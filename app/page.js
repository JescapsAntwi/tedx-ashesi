'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getPageContent } from '@/lib/api'

export default function Home() {
  const [pageContent, setPageContent] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchContent() {
      try {
        const content = await getPageContent('home')
        setPageContent(content)
      } catch (err) {
        console.error('Failed to fetch page content:', err)
        setError('Failed to load page content. Please try again later.')
      }
    }
    fetchContent()
  }, [])

  return (
    <>
      <section className="relative h-screen px-4 md:px-8 pt-24">
        <div className="relative h-full rounded-[2rem] overflow-hidden">
          <Image
            src="/campus-night.jpg"
            alt="Ashesi University at night"
            fill
            className="object-cover"
            priority
          />
          
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-red-600">TEDx</span>
                <br />
                AshesiUniversity
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ideas worth spreading at Ashesi University
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="/events"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Explore Events
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          {error ? (
            <div className="text-red-600 text-center">{error}</div>
          ) : pageContent ? (
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
          ) : (
            <div className="text-center">Loading content...</div>
          )}
        </div>
      </section>

      {/* Special Event Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative w-full md:w-96 h-64 md:h-auto">
                <Image
                  src="/special-event-banner.jpg"
                  alt="TEDxAshesiUniversity: Reimagine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">Ongoing Event</div>
                <h2 className="block mt-1 text-3xl leading-tight font-bold text-black">TEDxAshesiUniversity: Reimagine</h2>
                <p className="mt-2 text-gray-600">Join us for an extraordinary day of inspiration and innovation as we explore groundbreaking ideas that have the power to reshape our world.</p>
                <div className="mt-4 flex items-center text-gray-600">
                  <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  June 15, 2023
                </div>
                <div className="mt-4">
                  <Link
                    href="/events/special-event"
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About TEDx</h2>
              <p className="text-lg text-gray-600">
                TEDx is a program of local, self-organized events that bring people together to share 
                a TED-like experience. At TEDxAshesiUniversity, where x = independently organized TED event, 
                we believe in the power of ideas to change attitudes, lives, and ultimately, the world.
              </p>
              <Link
                href="/about"
                className="inline-block text-red-600 font-medium hover:text-red-700"
              >
                Learn More →
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/tedx-about.jpg"
                alt="TEDx Event"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-gray-50 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for thought-provoking talks, performances, and conversations 
              that will inspire and challenge you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={`/event-${i}.jpg`}
                    alt={`Event ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Upcoming Event Title</h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the upcoming event. This will give visitors 
                    a quick overview of what to expect.
                  </p>
                  <Link
                    href={`/events/event-${i}`}
                    className="text-red-600 font-medium hover:text-red-700"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-bold">Stay Updated</h2>
            <p className="text-lg text-gray-600">
              Subscribe to our newsletter to receive updates about upcoming events 
              and inspiring stories.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

