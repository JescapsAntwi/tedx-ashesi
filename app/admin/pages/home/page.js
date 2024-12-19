'use client'

import { useState, useEffect } from 'react'
import PageEditor from '../../components/PageEditor'

export default function EditHomePage() {
  const [sections, setSections] = useState([
    {
      id: 'hero',
      title: 'Hero Section',
      content: 'Ideas worth spreading at Ashesi University',
      hasImage: true,
      image: '/campus-night.jpg'
    },
    {
      id: 'featured',
      title: 'Featured Events Section',
      content: 'Join us for thought-provoking talks...',
      hasImage: false
    },
    {
      id: 'newsletter',
      title: 'Newsletter Section',
      content: 'Subscribe to our newsletter...',
      hasImage: false
    }
  ])

  const handleSave = async (sectionId, updatedContent) => {
    // API call to save content
    console.log('Saving section:', sectionId, updatedContent)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Edit Home Page</h1>
      {sections.map(section => (
        <PageEditor
          key={section.id}
          section={section}
          onSave={(content) => handleSave(section.id, content)}
        />
      ))}
    </div>
  )
} 