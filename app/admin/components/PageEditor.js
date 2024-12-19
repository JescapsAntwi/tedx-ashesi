'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
}

export default function PageEditor({ section, onSave }) {
  const [content, setContent] = useState(section.content)
  const [title, setTitle] = useState(section.title)
  const [image, setImage] = useState(section.image)

  const handleSave = async () => {
    await onSave({ title, content, image })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Section Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
        />
      </div>

      {section.hasImage && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          className="h-64 mb-12"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Save Changes
      </button>
    </motion.div>
  )
} 