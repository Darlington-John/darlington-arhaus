import { getServerSession } from 'next-auth';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import User from '~/lib/models/user';
import { authOptions } from '../[...nextauth]/route';

const JWT_SECRET = process.env.JWT_SECRET as string;
export async function GET(req: Request) {
   const session = (await getServerSession(authOptions as any)) as {
      user?: { email: string };
   };
   if (session) {
      try {
         await connectMongo();
         const user: any = await User.findOne({ email: session?.user?.email });
         if (user) {
            const customToken = jwt.sign(
               { userId: user._id, email: user.email },
               JWT_SECRET,
               { expiresIn: '7d' }
            );
            const response = NextResponse.json({ message: 'Token generated' });
            response.cookies.set({
               name: 'token',
               value: customToken,
               path: '/',
               httpOnly: true,
               secure: true,
               sameSite: 'strict',
               maxAge: 7 * 24 * 60 * 60,
            });

            return response;
         } else {
            return NextResponse.json(
               { error: 'User not found' },
               { status: 404 }
            );
         }
      } catch (error) {
         return NextResponse.json({ error: 'Server error' }, { status: 500 });
      }
   } else {
      return NextResponse.json({ error: 'No session found' }, { status: 401 });
   }
}
