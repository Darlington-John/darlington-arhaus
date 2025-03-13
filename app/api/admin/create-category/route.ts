import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '~/lib/models/rooms';
import connectMongo from '~/lib/mongodb';

import cloudinary from 'cloudinary';

cloudinary.v2.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
   try {
      const formData = await req.formData();
      const file = formData.get('file');
      const content = formData.get('content');
      const directory = formData.get('directory');
      if (!directory || !content) {
         return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
         );
      }

      if (!file || typeof file === 'string') {
         return NextResponse.json(
            { error: 'No file uploaded or incorrect format' },
            { status: 400 }
         );
      }

      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadResult = await new Promise<{ secure_url: string }>(
         (resolve, reject) => {
            const uploadStream = cloudinary.v2.uploader.upload_stream(
               { folder: 'arhaus_images' },
               (error, result) => {
                  if (error) {
                     reject(new Error(error.message || 'Upload failed'));
                  } else {
                     resolve(result as { secure_url: string });
                  }
               }
            );
            uploadStream.end(buffer);
         }
      );
      await connectMongo();
      const newProductCategory = new ProductModel({
         content: content,
         dir: directory,
         image: uploadResult.secure_url,
         menu: {},
      });

      const savedProduct = await newProductCategory.save();

      return NextResponse.json({
         message: 'Product created successfully',
         product: savedProduct,
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while creating the product' },
         { status: 500 }
      );
   }
}
