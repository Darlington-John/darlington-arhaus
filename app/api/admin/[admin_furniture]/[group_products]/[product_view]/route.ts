import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

interface Context {
   params: {
      admin_furniture: string;
      group_products: string;
      product_view: string;
   };
}

export async function GET(req: NextRequest, context: Context) {
   try {
      await connectMongo();

      const { admin_furniture, group_products, product_view } =
         await context.params;

      const adminFurniture = await ProductModel.findById(admin_furniture);
      if (!adminFurniture) {
         return NextResponse.json(
            { error: `Room category not found for ID: ${admin_furniture}` },
            { status: 404 }
         );
      }

      const groupData = adminFurniture.menu.categories.find(
         (category: any) => String(category._id) === group_products
      );

      if (!groupData) {
         return NextResponse.json(
            { error: `Furniture type not found for ID: ${group_products}` },
            { status: 404 }
         );
      }

      const productData = groupData.products.find(
         (type: any) => String(type._id) === product_view
      );

      if (!productData) {
         return NextResponse.json(
            { error: `Furniture sub type not found for ID: ${product_view}` },
            { status: 404 }
         );
      }

      return NextResponse.json({ productData });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while fetching the data' },
         { status: 500 }
      );
   }
}
