import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import User from '~/lib/models/user';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();
      const users = await User.find({});

      return NextResponse.json({ users });
   } catch (error) {
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
   }
}
