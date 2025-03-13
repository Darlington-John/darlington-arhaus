import { NextRequest, NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

cloudinary.v2.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
   try {
      const formData = await req.formData();
      const file = formData.get('file');
      const productId = formData.get('groupId'); // This is the product ID
      const categoryContent = formData.get('group'); // Category content

      if (!productId) {
         return NextResponse.json(
            { error: 'Product ID (groupId) not found' },
            { status: 400 }
         );
      }

      if (!categoryContent) {
         return NextResponse.json(
            { error: 'Category content (group) not found' },
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

      // Upload the file to Cloudinary
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

      // Connect to MongoDB
      await connectMongo();

      // Find the product and update the menu with a new category
      const updatedProduct = await ProductModel.findByIdAndUpdate(
         productId,
         {
            $push: {
               'menu.categories': {
                  content: categoryContent,
                  image: uploadResult.secure_url,
                  groups: {},
               },
            },
         },
         { new: true } // Return the updated document
      );

      if (!updatedProduct) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         message: 'Category added successfully',
         category: {
            content: categoryContent,
            image: uploadResult.secure_url,
         },
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while adding the group' },
         { status: 500 }
      );
   }
}
