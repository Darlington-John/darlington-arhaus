import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import User from '~/lib/models/user';

export async function GET(
   req: NextRequest,
   { params }: { params: { userId: string } }
) {
   try {
      await connectMongo();
      const { userId } = await params;

      const user = await User.findById(userId);
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      return NextResponse.json(user);
   } catch (error) {
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
   }
}
