import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '~/lib/models/rooms';
import connectMongo from '~/lib/mongodb';
import cloudinary from 'cloudinary';
cloudinary.v2.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function PATCH(req: NextRequest) {
   try {
      const formData = await req.formData();
      const file = formData.get('file');
      const directoryEdit = formData.get('directoryEdit');
      const contentEdit = formData.get('contentEdit');
      const categoryId = formData.get('categoryId');

      if (!categoryId || !directoryEdit || !contentEdit) {
         return NextResponse.json(
            { error: 'Missing required fields' },
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
      const updatedProduct = await ProductModel.findByIdAndUpdate(
         categoryId,
         {
            dir: directoryEdit,
            content: contentEdit,
            ...(uploadResult && {
               image: uploadResult.secure_url,
            }),
         },
         { new: true }
      );

      if (!updatedProduct) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         message: 'Product updated successfully',
         product: updatedProduct,
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while updating the product' },
         { status: 500 }
      );
   }
}
