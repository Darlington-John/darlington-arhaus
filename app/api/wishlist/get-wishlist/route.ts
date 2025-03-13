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

      if (!user.wishlist || user.wishlist.length === 0) {
         return NextResponse.json({ wishlist: [] }, { status: 200 });
      }

      // Extract only furnitureId from wishlist items
      const productIds = user.wishlist.map((item) => item.productId);

      // Use aggregation to search for matching products
      const wishlistProducts = await ProductModel.aggregate([
         { $unwind: '$menu.categories' },
         { $unwind: '$menu.categories.products' },
         {
            $match: {
               'menu.categories.products._id': { $in: productIds },
            },
         },

         // Project all product fields
         {
            $replaceRoot: {
               newRoot: '$menu.categories.products',
            },
         },
      ]);

      return NextResponse.json({ wishlist: wishlistProducts }, { status: 200 });
   } catch (error) {
      return NextResponse.json(
         { error: 'Internal server error' },
         { status: 500 }
      );
   }
}
