import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
   const { reference } = await req.json();
   const secretKey = process.env.PAYSTACK_SECRET_KEY;

   try {
      const response = await fetch(
         `https://api.paystack.co/transaction/verify/${reference}`,
         {
            method: 'GET',
            headers: {
               Authorization: `Bearer ${secretKey}`,
               'Content-Type': 'application/json',
            },
         }
      );

      const data = await response.json();

      if (data.status && data.data.status === 'success') {
         return NextResponse.json(
            { message: 'Payment verified', data: data.data },
            { status: 200 }
         );
      } else {
         return NextResponse.json(
            { message: 'Payment verification failed' },
            { status: 400 }
         );
      }
   } catch (error) {
      return NextResponse.json(
         { message: 'Server error', error },
         { status: 500 }
      );
   }
}
