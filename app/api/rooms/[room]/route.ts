import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '~/lib/models/rooms';
import connectMongo from '~/lib/mongodb';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();
      const url = new URL(req.url);
      const paths = url.pathname.split('/');
      const room = paths[3];

      const roomData = await ProductModel.findById(room);

      if (!room) {
         return NextResponse.json({ error: 'Room not found' }, { status: 404 });
      }

      return NextResponse.json({ roomData });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while fetching the group' },
         { status: 500 }
      );
   }
}
