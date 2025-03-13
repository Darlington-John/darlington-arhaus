
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const response = NextResponse.json({ message: "Cookies cleared" });

  
  response.cookies.set('next-auth.session-token', '', {
    httpOnly: true,
    secure: false,  
    sameSite: 'lax',
    maxAge: -1,  
    path: '/',
  });

  
  response.cookies.set('token', '', {
    httpOnly: true,
    secure: true,  
    sameSite: 'strict',
    maxAge: -1,  
    path: '/',
  });

  return response;
}
