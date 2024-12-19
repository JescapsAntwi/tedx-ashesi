import { NextResponse } from 'next/server'

const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'admin123'

export async function POST(request) {
  const { username, password } = await request.json()
  
  // Check against our default admin credentials
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const response = NextResponse.json({ 
      success: true,
      message: 'Login successful' 
    })
    
    response.cookies.set('auth_token', 'your_auth_token_here', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600 // 1 hour
    })
    
    return response
  } else {
    return NextResponse.json({ 
      success: false, 
      message: 'Invalid credentials' 
    }, { 
      status: 401 
    })
  }
}

