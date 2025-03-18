import { NextResponse } from 'next/server';

export function GET(req: any) {
   const cookies = req.cookies;
   if (cookies.get('token')) {
      return NextResponse.json({ hasToken: true });
   }

   return NextResponse.json({ hasToken: false });
}
