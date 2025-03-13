import { NextRequest, NextResponse } from 'next/server';
import User from '~/lib/models/user';
import connectMongo from '~/lib/mongodb';
export async function DELETE(req: NextRequest) {
   try {
      await connectMongo();

      const { userId } = await req.json();
      if (!userId) {
         return NextResponse.json(
            { error: 'User ID is required' },
            { status: 400 }
         );
      }

      const user = await User.findByIdAndDelete(userId);
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      return NextResponse.json(
         { message: 'User deleted successfully' },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
   }
}
