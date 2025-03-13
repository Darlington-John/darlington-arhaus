import mongoose, { Schema, Document, Model } from 'mongoose';

import { v4 as uuidv4 } from 'uuid';

export interface IUsers {
   users: IUser[];
}
interface IUser extends Document {
   email: string;
   password?: string;
   firstName: string;
   lastName: string;
   profile: string;
   verificationHash?: string;
   oauthProvider: string;
   isAdmin: { type: Boolean; default: false };
   wishlist: IWishlist[];
   bag: IBag[];
}

interface IWishlist {
   typeId: string;
   groupId: string;
   furnitureId: string;
   productId: string;
}
interface IBag {
   typeId: string;
   groupId: string;
   furnitureId: string;
   productId: string;
   selected_option: number;
   quantity: number;
   initial_stock_count: number;
}
const wishlistSchema = new mongoose.Schema({
   _id: { type: String, default: uuidv4 },
   typeId: { type: String, required: false },
   groupId: { type: String, required: false },
   furnitureId: { type: String, required: false },
   productId: { type: String, required: false },
});
const bagSchema = new mongoose.Schema({
   _id: { type: String, default: uuidv4 },
   typeId: { type: String, required: false },
   groupId: { type: String, required: false },
   furnitureId: { type: String, required: false },
   productId: { type: String, required: false },
   quantity: { type: Number, required: false },
   selected_option: { type: Number, required: false },
   initial_stock_count: { type: Number, required: false },
});
const userSchema: Schema<IUser> = new mongoose.Schema(
   {
      profile: { type: String, required: false },
      email: { type: String, required: true, unique: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: false },
      password: { type: String, required: false },
      verificationHash: { type: String, required: false },
      isAdmin: { type: Boolean, default: false },
      oauthProvider: { type: String, required: false },
      wishlist: [wishlistSchema],
      bag: [bagSchema],
   },
   { timestamps: true }
);

const User: Model<IUser> =
   mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export default User;
export type { IUser };
