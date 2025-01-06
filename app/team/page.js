'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Sample team data - you should replace this with your actual team data
const teamData = {
  2024: [
    {
      name: 'John Doe',
      role: 'Lead Organizer',
      image: '/team/placeholder.jpg',
    },
    // Add more team members
  ],
  2023: [
    {
      name: 'Jane Smith',
      role: 'Creative Director',
      image: '/team/placeholder.jpg',
    },
    // Add more team members
  ],
  2022: [
    {
      name: 'Mike Johnson',
      role: 'Event Coordinator',
      image: '/team/placeholder.jpg',
    },
    // Add more team members
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function TeamPage() {
  const [selectedYear, setSelectedYear] = useState(2024)
  const years = Object.keys(teamData).sort((a, b) => b - a)

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
            Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet the passionate individuals who make TEDxAshesiUniversity possible.
          </p>
        </motion.div>

        {/* Year selector */}
        <motion.div 
          className="flex justify-center space-x-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {years.map((year) => (
            <motion.button
              key={year}
              onClick={() => setSelectedYear(parseInt(year))}
              className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedYear === parseInt(year)
                  ? 'bg-red-600 text-white shadow-lg hover:bg-red-700'
                  : 'bg-white hover:bg-gray-100 shadow-md'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {year}
            </motion.button>
          ))}
        </motion.div>

        {/* Team grid */}
        <motion.div
          key={selectedYear}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamData[selectedYear]?.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <motion.div 
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 