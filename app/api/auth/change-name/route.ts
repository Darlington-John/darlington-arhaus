import { NextRequest, NextResponse } from 'next/server';
import User from '~/lib/models/user';
import connectMongo from '~/lib/mongodb';
export async function PATCH(req: NextRequest) {
   try {
      await connectMongo();

      const { firstName, lastName, email } = await req.json();

      const user = await User.findOne({ email });
      if (!user) {
         return NextResponse.json(
            { error: 'User  not authenticated' },
            { status: 404 }
         );
      }

      user.firstName = firstName;
      user.lastName = lastName;
      await user.save();

      return NextResponse.json(
         { message: 'Name updated successfully.' },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json(
         { error: 'An error during name update' },
         { status: 500 }
      );
   }
}
