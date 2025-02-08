'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    // For this example, we'll just simulate a successful submission
    setFormStatus('success')
  }

  return (
    <>
      <section className="relative h-[50vh] px-4 md:px-8 pt-24">
        <div className="relative h-full rounded-[2rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800" />
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Send Message
                  </button>
                </div>
              </form>
              {formStatus === 'success' && (
                <p className="mt-4 text-green-600">Thank you for your message. We&apos;ll get back to you soon!</p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="flex items-center space-x-4">
                <MapPin className="text-red-600" />
                <span>Ashesi University, 1 University Avenue, Berekuso, Ghana</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-red-600" />
                <span>+233 12 345 6789</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-red-600" />
                <span>info@tedxashesiuniversity.com</span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Add social media icons/links here */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

