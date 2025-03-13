import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectMongo from '~/lib/mongodb';
import verification from '~/lib/models/verification';
import User from '~/lib/models/user';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
   try {
      await connectMongo();

      const { email, verificationCode } = await req.json();

      const verificationRecord = await verification.findOne({ email });
      if (!verificationRecord) {
         return NextResponse.json(
            { error: 'Verification record not found' },
            { status: 404 }
         );
      }

      const isMatch = await bcrypt.compare(
         verificationCode,
         verificationRecord.hashedCode
      );
      if (!isMatch) {
         return NextResponse.json(
            { error: 'Invalid verification code' },
            { status: 400 }
         );
      }

      const newUser = await User.create({
         email,
         password: verificationRecord.password,
         firstName: verificationRecord.firstName,
         lastName: verificationRecord.lastName,
         oauthProvider: 'local',
         isAdmin: false,
         verifiedAt: new Date(),
      });

      await verification.deleteOne({ email });

      const token = jwt.sign(
         { userId: newUser._id, email: newUser.email },
         JWT_SECRET,
         {
            expiresIn: '7d',
         }
      );

      const response = NextResponse.json({
         message: 'Email verified and account created',
      });
      response.cookies.set({
         name: 'token',
         value: token,
         path: '/',
         httpOnly: true,
         secure: true,
         sameSite: 'strict',
         maxAge: 7 * 24 * 60 * 60,
      });

      return response;
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred during email verification' },
         { status: 500 }
      );
   }
}
