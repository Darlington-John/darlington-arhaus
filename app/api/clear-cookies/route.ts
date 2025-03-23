import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
   // Get the cookies instance
   const cookieStore = await cookies();

   // Delete NextAuth cookies
   cookieStore.delete('next-auth.session-token');
   cookieStore.delete('__Secure-next-auth.session-token');
   cookieStore.delete('__Host-next-auth.csrf-token');
   cookieStore.delete('token'); // If you also set a custom token

   return NextResponse.json({ message: 'Cookies cleared' });
}
