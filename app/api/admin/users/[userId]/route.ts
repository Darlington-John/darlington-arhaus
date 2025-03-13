import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import User from '~/lib/models/user';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();
      const url = new URL(req.url);
      const paths = url.pathname.split('/');
      const userId = paths[4];

      const user = await User.findById(userId);
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      return NextResponse.json(user);
   } catch (error) {
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
   }
}
