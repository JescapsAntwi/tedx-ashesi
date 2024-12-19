import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Replace this with your actual database query
    const pages = [
      {
        id: 1,
        title: 'Home',
        description: 'Main landing page',
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'About',
        description: 'About TEDx and our team',
        updatedAt: new Date(),
      },
    ]

    return NextResponse.json(pages)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch pages' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Replace this with your actual database operation
    const newPage = {
      id: Date.now(),
      ...data,
      updatedAt: new Date(),
    }

    return NextResponse.json(newPage)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create page' },
      { status: 500 }
    )
  }
}

