'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <section className="relative h-[50vh] px-4 md:px-8 pt-24">
        <div className="relative h-full rounded-[2rem] overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="TEDx Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About TEDxAshesiUniversity
            </motion.h1>
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
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-gray-600">
              TEDxAshesiUniversity is a platform for ideas worth spreading. We bring together thought leaders, innovators, and change-makers to share their insights and inspire our community. Our goal is to foster learning, inspiration and wonder – and provoke conversations that matter.
            </p>
            <h2 className="text-3xl font-bold">What is TEDx?</h2>
            <p className="text-lg text-gray-600">
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event.
            </p>
            <h2 className="text-3xl font-bold">Our Team</h2>
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
                      src="/placeholder.svg"
                      alt={`Team Member ${i}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Team Member Name</h3>
                  <p className="text-gray-600">Position</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

