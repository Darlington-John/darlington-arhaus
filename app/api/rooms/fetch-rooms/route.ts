import { NextResponse } from 'next/server';
import RoomsModel from '~/lib/models/rooms';
import connectMongo from '~/lib/mongodb';

export async function GET() {
   try {
      await connectMongo();

      const rooms = await RoomsModel.find();

      return NextResponse.json({ rooms });
   } catch (error) {
      return NextResponse.json(
         { error: 'Failed to fetch rooms.' },
         { status: 500 }
      );
   }
}
