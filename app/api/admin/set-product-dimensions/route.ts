import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function POST(req: NextRequest) {
   try {
      const {
         furnitureId,
         groupId,
         productId,
         width,
         height,
         depth,
         seatBackHeight,
         seatDepth,
         seatHeight,
         armHeight,
         weight,
      } = await req.json();
      if (
         !furnitureId ||
         !groupId ||
         !productId ||
         !width ||
         !height ||
         !depth
      ) {
         return NextResponse.json(
            { error: 'Width, Depth and Height are all required' },
            { status: 400 }
         );
      }

      await connectMongo();
      const furniture = await ProductModel.findById(furnitureId);
      if (!furniture) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      const category = furniture.menu.categories.find(
         (cat: any) => String(cat._id) === groupId
      );
      if (!category) {
         return NextResponse.json(
            { error: 'Category not found' },
            { status: 404 }
         );
      }

      const option = category.products.find(
         (pro: any) => String(pro._id) === productId
      );
      if (!option) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      option.dimensions = {
         ...option.dimensions,
         width: width,
         height: height,
         depth: depth,
         weight: weight,
         seatBackHeight: seatBackHeight,
         seatDepth: seatDepth,
         seatHeight: seatHeight,
         armHeight: armHeight,
      };

      await furniture.save();

      return NextResponse.json({
         message: 'Dimensions set',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while setting dimensions' },
         { status: 500 }
      );
   }
}
