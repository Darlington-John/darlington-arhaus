import mongoose, { Schema, Document, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Interfaces
interface IView {
   first_view?: string;
   second_view?: string;
}

interface IDimension {
   width: number;
   depth: number;
   height: number;
   weight: number;
   seatBackHeight: number;
   seatDepth: number;
   seatHeight: number;
   seatWidth: number;
   armHeight: number;
}

interface IStock {
   in_stock: boolean;
   when_in_stock: string;
   stock_count: number;
}

interface IOption {
   _id: string; // UUID
   option: string;
   stock: IStock;
   option_image: string;
   previews: string[];
   tags: string[];
   features: string;
   care: string;
   fabrics: string;
}

interface IFeatureList {
   list: string;
}

interface IFeature {
   _id: string; // UUID
   header: string;
   paragraph: boolean;
   lists?: IFeatureList[];
   content?: string;
}

interface IProduct {
   _id: string; // UUID
   name: string;
   price: number;
   cancelled_price: number;
   views: IView;
   in_stock: boolean;
   fabric: boolean;
   leather: boolean;
   finish: boolean;
   dimensions: IDimension;
   options: IOption[];
   features: IFeature[];
}

interface ICategory {
   _id: string; // UUID
   content: string;
   image: string;
   products: IProduct[];
}

interface IMenu {
   _id: string; // UUID
   categories: ICategory[];
}

interface IRooms extends Document {
   _id: string; // UUID
   dir: string;
   image: string;
   content: string;
   menu: IMenu;
   createdAt?: Date;
   updatedAt?: Date;
}

// Schema Definitions
const ViewSchema: Schema<IView> = new Schema({
   first_view: { type: String },
   second_view: { type: String },
});

const DimensionSchema: Schema<IDimension> = new Schema({
   width: { type: Number, required: false },
   depth: { type: Number, required: false },
   height: { type: Number, required: false },
   weight: { type: Number, required: false },
   seatBackHeight: { type: Number, required: false },
   seatDepth: { type: Number, required: false },
   seatHeight: { type: Number, required: false },
   seatWidth: { type: Number, required: false },
   armHeight: { type: Number, required: false },
});

const StockSchema: Schema<IStock> = new Schema({
   in_stock: { type: Boolean, required: false },
   when_in_stock: { type: String, required: false },
   stock_count: { type: Number, required: true },
});

const OptionSchema: Schema<IOption> = new Schema({
   _id: { type: String, default: uuidv4 }, // UUID
   option: { type: String, required: false },
   stock: { type: StockSchema, required: false },
   option_image: { type: String, required: false },
   previews: [{ type: String }],
   tags: [{ type: String }],
   features: { type: String, required: false },
   care: { type: String, required: false },
   fabrics: { type: String },
});

const FeatureSchema: Schema<IFeature> = new Schema({
   _id: { type: String, default: uuidv4 }, // UUID
   header: { type: String, required: false },
   paragraph: { type: Boolean, required: false },
   lists: [
      {
         list: { type: String, required: false },
      },
   ],
   content: { type: String },
});

const ProductSchema: Schema<IProduct> = new Schema({
   _id: { type: String, default: uuidv4 }, // UUID
   name: { type: String, required: false },
   price: { type: Number, required: false },
   cancelled_price: { type: Number, required: false },
   views: { type: ViewSchema, required: false },
   in_stock: { type: Boolean, required: false },
   fabric: { type: Boolean, required: false },
   finish: { type: Boolean, required: false },
   leather: { type: Boolean, required: false },
   dimensions: { type: DimensionSchema, required: false },
   options: [OptionSchema],
   features: [FeatureSchema],
});

const CategorySchema: Schema<ICategory> = new Schema({
   _id: { type: String, default: uuidv4 }, // UUID
   content: { type: String, required: false },
   image: { type: String, required: false },
   products: [ProductSchema],
});

const MenuSchema: Schema<IMenu> = new Schema({
   _id: { type: String, default: uuidv4 }, // UUID
   categories: [CategorySchema],
});

const RoomsSchema: Schema<IRooms> = new Schema(
   {
      _id: { type: String, default: uuidv4 }, // UUID
      dir: { type: String, required: true },
      image: { type: String, required: true },
      content: { type: String, required: true },
      menu: { type: MenuSchema, required: false },
   },
   { timestamps: true }
);

const RoomsModel: Model<IRooms> =
   mongoose.models.Rooms || mongoose.model<IRooms>('Rooms', RoomsSchema);

export default RoomsModel;
export type { IRooms, IMenu, ICategory };
