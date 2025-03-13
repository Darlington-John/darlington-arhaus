import { NextRequest, NextResponse } from 'next/server';
import User from '~/lib/models/user';
import ProductModel from '~/lib/models/rooms';
import connectMongo from '~/lib/mongodb';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();
      const userId = req.nextUrl.searchParams.get('userId');

      if (!userId) {
         return NextResponse.json(
            { error: 'User ID is required' },
            { status: 400 }
         );
      }

      const user = await User.findById(userId);
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      if (!user.bag || user.bag.length === 0) {
         return NextResponse.json({ bag: [] }, { status: 200 });
      }

      const productIds = user.bag.map((item) => item.productId);

      const bagProducts = await ProductModel.aggregate([
         { $unwind: '$menu.categories' },
         { $unwind: '$menu.categories.products' },

         {
            $match: {
               'menu.categories.products._id': { $in: productIds },
            },
         },

         {
            $replaceRoot: {
               newRoot: '$menu.categories.products',
            },
         },
      ]);

      return NextResponse.json({ bag: bagProducts }, { status: 200 });
   } catch (error) {
      return NextResponse.json(
         { error: 'Internal server error' },
         { status: 500 }
      );
   }
}
