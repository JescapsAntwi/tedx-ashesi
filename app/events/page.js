'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Events() {
  const events = [
    {
      id: 1,
      title: "TEDxAshesiUniversity 2023",
      date: "October 15, 2023",
      description: "Join us for a day of inspiring talks and performances that will challenge your perspective and ignite your curiosity.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "TEDxAshesiUniversitySalon: AI and the Future of Work",
      date: "November 5, 2023",
      description: "A focused discussion on how artificial intelligence is shaping the future of employment and industry.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "TEDxAshesiUniversityWomen",
      date: "December 1, 2023",
      description: "Celebrating the achievements and potential of women and girls worldwide.",
      image: "/placeholder.svg"
    }
  ]

  return (
    <>
      <section className="relative h-[50vh] px-4 md:px-8 pt-24">
        <div className="relative h-full rounded-[2rem] overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="TEDx Events"
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
              Upcoming Events
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="h-48 w-full object-cover md:h-full md:w-48"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">{event.date}</div>
                    <Link href={`/events/${event.id}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{event.title}</Link>
                    <p className="mt-2 text-gray-500">{event.description}</p>
                    <div className="mt-4">
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

