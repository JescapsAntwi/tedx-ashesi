import { NextResponse } from 'next/server'

export function middleware(request) {
  const authToken = request.cookies.get('auth_token')
  
  if (request.nextUrl.pathname.startsWith('/admin') && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/admin/:path*',
}

