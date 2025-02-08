'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function SpecialEvent() {
  return (
    <>
      <section className="relative h-[60vh] px-4 md:px-8 pt-24">
        <div className="relative h-full rounded-[2rem] overflow-hidden">
          <Image
            src="/special-event-banner.jpg"
            alt="TEDxAshesiUniversity Special Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold">TEDxAshesiUniversity: Reimagine</h1>
              <p className="text-xl md:text-2xl">Exploring innovative ideas to shape our future</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-red-600 text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar size={24} />
                <span>June 15, 2023</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={24} />
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={24} />
                <span>Ashesi University Auditorium</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold">About the Event</h2>
            <p className="text-lg text-gray-600">
              Join us for an extraordinary day of inspiration and innovation at TEDxAshesiUniversity: Reimagine. 
              This special event brings together thought leaders, innovators, and change-makers to explore 
              groundbreaking ideas that have the power to reshape our world. From cutting-edge technology to 
              social innovation, our speakers will challenge you to think differently and dream bigger.
            </p>

            <h2 className="text-3xl font-bold">Featured Speakers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="text-center"
                >
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <Image
                      src={`/speaker-${i}.jpg`}
                      alt={`Speaker ${i}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Dr. Jane Doe</h3>
                  <p className="text-gray-600">AI Ethics Researcher</p>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold">Event Schedule</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <span className="font-bold min-w-[100px]">9:00 AM</span>
                <div>
                  <h4 className="font-bold">Opening Ceremony</h4>
                  <p className="text-gray-600">Welcome address and introduction to the day&apos;s events</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="font-bold min-w-[100px]">10:00 AM</span>
                <div>
                  <h4 className="font-bold">First Speaker Session</h4>
                  <p className="text-gray-600">Three thought-provoking talks on reimagining technology</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="font-bold min-w-[100px]">12:00 PM</span>
                <div>
                  <h4 className="font-bold">Lunch Break & Networking</h4>
                  <p className="text-gray-600">Engage with speakers and attendees over a delicious meal</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="font-bold min-w-[100px]">2:00 PM</span>
                <div>
                  <h4 className="font-bold">Second Speaker Session</h4>
                  <p className="text-gray-600">Three inspiring talks on reimagining society and culture</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="font-bold min-w-[100px]">4:00 PM</span>
                <div>
                  <h4 className="font-bold">Panel Discussion</h4>
                  <p className="text-gray-600">Interactive Q&A session with all speakers</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="font-bold min-w-[100px]">5:00 PM</span>
                <div>
                  <h4 className="font-bold">Closing Remarks</h4>
                  <p className="text-gray-600">Reflection on the day&apos;s events and future outlook</p>
                </div>
              </li>
            </ul>

            <div className="text-center">
              <Link
                href="#register"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

