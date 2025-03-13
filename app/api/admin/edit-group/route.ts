import { NextRequest, NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

cloudinary.v2.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function PATCH(req: NextRequest) {
   try {
      const formData = await req.formData();
      const file = formData.get('image');
      const productId = formData.get('categoryId');
      const categoryId = formData.get('groupId');
      const updatedContent = formData.get('content');

      if (!productId || !categoryId) {
         return NextResponse.json(
            { error: 'Product ID or Category ID not provided' },
            { status: 400 }
         );
      }

      let uploadResult = null;

      if (file && typeof file !== 'string') {
         const buffer = Buffer.from(await file.arrayBuffer());

         uploadResult = await new Promise<{ secure_url: string }>(
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
      }

      await connectMongo();

      const updatedProduct = await ProductModel.findOneAndUpdate(
         {
            _id: productId,
            'menu.categories._id': categoryId,
         },
         {
            $set: {
               'menu.categories.$.content': updatedContent,
               ...(uploadResult && {
                  'menu.categories.$.image': uploadResult.secure_url,
               }),
            },
         },
         { new: true }
      );

      if (!updatedProduct) {
         return NextResponse.json(
            { error: 'Product or Category not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         message: 'Category updated successfully',
         updatedCategory: {
            content: updatedContent,
            ...(uploadResult && { image: uploadResult.secure_url }),
         },
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while updating the category' },
         { status: 500 }
      );
   }
}
