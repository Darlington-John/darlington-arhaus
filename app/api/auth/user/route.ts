import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectMongo from '~/lib/mongodb';
import User from '~/lib/models/user';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GET(req: NextRequest) {
   try {
      await connectMongo();

      const token = req.cookies.get('token')?.value;
      if (!token) {
         return NextResponse.json(
            { error: 'Unauthorized: No token provided' },
            { status: 401 }
         );
      }

      const decoded: any = jwt.verify(token, JWT_SECRET);
      if (!decoded?.userId) {
         return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
      }

      const user = await User.findById(decoded.userId);
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      return NextResponse.json({ user });
   } catch (error) {
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
   }
}
