interface IView {
   first_view?: string;
   second_view?: string;
}

interface IDimension {
   width?: number;
   depth?: number;
   height?: number;
   weight?: number;
   seatBackHeight?: number;
   seatDepth?: number;
   seatHeight?: number;
   seatWidth?: number;
   armHeight?: number;
}

interface IStock {
   in_stock?: boolean;
   when_in_stock?: string;
   stock_count: number;
}

interface IOption {
   _id: string;
   option?: string;
   stock?: IStock;
   option_image?: string;
   previews?: string[];
   tags?: string[];
   features?: string;
   care?: string;
   fabrics?: string;
}

interface IFeature {
   _id: string;
   header?: string;
   paragraph?: boolean;
   lists?: { list?: string }[];
   content?: string;
}

interface IProduct {
   _id: string;
   name?: string;
   price?: number;
   cancelled_price?: number;
   views?: IView;
   in_stock?: boolean;
   fabric?: boolean;
   finish?: boolean;
   leather?: boolean;
   dimensions?: IDimension;
   options?: IOption[];
   features?: IFeature[];
}

interface ICategory {
   _id: string;
   content?: string;
   image?: string;
   products?: IProduct[];
}

interface IMenu {
   _id: string;
   categories?: ICategory[];
}

interface IRooms {
   _id: string;
   dir: string;
   image: string;
   content: string;
   menu?: IMenu;
}

export type {
   IView,
   IDimension,
   IStock,
   IOption,
   IFeature,
   IProduct,
   ICategory,
   IMenu,
   IRooms,
};
