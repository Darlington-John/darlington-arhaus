import { NextResponse } from 'next/server';
import Order from '~/lib/models/orders';
import connectMongo from '~/lib/mongodb';

export async function GET() {
   try {
      await connectMongo();

      const orders = await Order.find();

      return NextResponse.json({ orders });
   } catch (error) {
      return NextResponse.json(
         { error: 'Failed to fetch orders.' },
         { status: 500 }
      );
   }
}
