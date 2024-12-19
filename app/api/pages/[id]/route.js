import { NextResponse } from 'next/server'

// This is a mock database. In a real application, you would use a proper database.
let pages = [
  { id: '1', title: 'Home', content: 'Welcome to TEDxAshesiUniversity', updatedAt: new Date() },
  { id: '2', title: 'About', content: 'Learn about TEDxAshesiUniversity', updatedAt: new Date() },
  { id: '3', title: 'Events', content: 'Upcoming TEDxAshesiUniversity events', updatedAt: new Date() },
]

export async function GET(request, { params }) {
  const page = pages.find(p => p.id === params.id)
  if (page) {
    return NextResponse.json(page)
  } else {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 })
  }
}

export async function PUT(request, { params }) {
  const updatedPage = await request.json()
  const index = pages.findIndex(p => p.id === params.id)
  if (index !== -1) {
    pages[index] = { ...updatedPage, updatedAt: new Date() }
    return NextResponse.json(pages[index])
  } else {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 })
  }
}

