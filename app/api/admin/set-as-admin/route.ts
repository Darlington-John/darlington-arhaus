import { NextRequest, NextResponse } from 'next/server';
import User from '~/lib/models/user';
import connectMongo from '~/lib/mongodb';
export async function PATCH(req: NextRequest) {
   try {
      await connectMongo();

      const { userId } = await req.json();

      const user = await User.findById(userId);
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      user.set('isAdmin', !user.isAdmin);
      await user.save();

      return NextResponse.json(
         { message: 'User admin state updated' },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json({ error: 'An error occured' }, { status: 500 });
   }
}
