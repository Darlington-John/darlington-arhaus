export interface ProductResult {
   productResults: Array<{
      product: {
         name: string;
         price: number;
         cancelled_price: number;
         views: {
            first_view: string;
            second_view: string;
            _id: string;
         };
         in_stock: boolean;
         fabric: boolean;
         leather: boolean;
         _id: string;
         options: Array<{
            option: string;
            stock: {
               in_stock: boolean;
               when_in_stock: string;
               stock_count: number;
               _id: string;
            };
            option_image: string;
            previews: Array<string>;
            tags: Array<string>;
            features: string;
            care: string;
            fabrics: string;
            _id: string;
         }>;
         features: Array<{
            header: string;
            paragraph: boolean;
            lists: Array<{
               list: string;
               _id: string;
            }>;
            content: string;
            _id: string;
         }>;
         finish: boolean;
         dimensions: {
            width: number;
            depth: number;
            height: number;
            weight: number;
            _id: string;
         };
      };
      roomId: string;
      categoryId: string;
   }>;
}

export const houseHoldMaterials: ProductResult = {
   productResults: [
      {
         product: {
            name: 'flore crown chandelier',
            price: 68,
            cancelled_price: 85,
            views: {
               first_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346427/arhaus_images/dsbr8ceipc4qudptuu4z.avif',
               second_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346427/arhaus_images/oojdkw8m20ciml75xr91.avif',
               _id: '67cad67c31783be9d0ee4b11',
            },
            in_stock: true,
            fabric: false,
            leather: false,
            _id: '19f66f04-3551-42a8-89b0-c9fb0aa44ad1',
            options: [
               {
                  option: 'silver',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 6,
                     _id: '67cadc8631783be9d0ee7803',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741347971/arhaus_images/j9qolomcfzqfjzawa6l6.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741347973/arhaus_images/am9cgcwqsiimssqld3la.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741347973/arhaus_images/ddrhrtl0yjoamfo7ipmt.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741347973/arhaus_images/bueqa8xzk6pmmbgx1dkj.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: '55364baf-4d1b-41d5-b5df-604e277cb493',
               },
               {
                  option: 'gold',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 5,
                     _id: '67cadd0431783be9d0ee7b3b',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348097/arhaus_images/hxcrgymrmn53ba8bjken.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348100/arhaus_images/jrkrniompqydb9jvjgug.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348100/arhaus_images/tldpxuah390vwgcvqjlh.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348100/arhaus_images/ep6cw1oykdfegr9ud80t.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: '0787f494-90f9-4f5c-ad9c-079a90619c49',
               },
               {
                  option: 'bronze',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 5,
                     _id: '67cadde431783be9d0ee7e73',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348321/arhaus_images/fdtk8ql9c2gzqculi4lb.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348323/arhaus_images/xh0ewaww714afhhsdczn.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348323/arhaus_images/hdcnum3arrfdhpvzgutq.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348323/arhaus_images/il0uajt7k7kkiopqdbht.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: '2291d7d2-8e49-41e7-8f49-187f3b6b46dd',
               },
            ],
            features: [
               {
                  header: 'details',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Crafted by our artisan partners from Italy from solid iron with a hand-applied finish.',
                        _id: '67cade2431783be9d0ee7e7b',
                     },
                     {
                        list: 'Pieces finished in silver or gold feature a hand-applied antiqued leaf design.',
                        _id: '67cade2431783be9d0ee7e7c',
                     },
                     {
                        list: '39" chandelier uses six 40-watt max E12 bulbs (not included).',
                        _id: '67cade2431783be9d0ee7e7d',
                     },
                     {
                        list: '48" chandelier uses eight 40-watt max E12 bulbs (not included).',
                        _id: '67cade2431783be9d0ee7e7e',
                     },
                     {
                        list: '60" chandelier uses 12 40-watt max E12 bulbs (not included).',
                        _id: '67cade2431783be9d0ee7e7f',
                     },
                     {
                        list: 'We recommend our LED Candelabra E12 bulbs (6610071B134).',
                        _id: '67cade2431783be9d0ee7e80',
                     },
                     {
                        list: '39" and 48"  chandeliers have an adjustable drop length that ranges from 39"-183".',
                        _id: '67cade2431783be9d0ee7e81',
                     },
                     {
                        list: '60" chandelier has an adjustable drop length that ranges from 46"-190".',
                        _id: '67cade2431783be9d0ee7e82',
                     },
                     {
                        list: 'Can be mounted on a vaulted ceiling.',
                        _id: '67cade2431783be9d0ee7e83',
                     },
                     {
                        list: 'Iron chain with silver, gold, or bronze finish measures 144" long.',
                        _id: '67cade2431783be9d0ee7e84',
                     },
                     {
                        list: 'Clear PVC cord measures 192" long.',
                        _id: '67cade2431783be9d0ee7e85',
                     },
                     {
                        list: 'Hardwired; professional installation required.',
                        _id: '67cade2431783be9d0ee7e86',
                     },
                     {
                        list: 'Chandeliers weighing more than 50 lbs. cannot be mounted alone to a standard outlet box and require additional bracing above the ceiling where they are to be installed.',
                        _id: '67cade2431783be9d0ee7e87',
                     },
                     {
                        list: 'Safety tested for use in bathrooms, covered patios, or areas with temporary humidity and moisture.',
                        _id: '67cade2431783be9d0ee7e88',
                     },
                  ],
                  content: '',
                  _id: '13a3f053-fd9b-4fc1-8e49-85c6a6fd96cf',
               },
               {
                  header: 'story',
                  paragraph: true,
                  content:
                     'Luxurious crystal florals and drops illuminate each branch-like form of our elegant Fiore Lighting Collection. Crafted by our artisan partners from Italy from solid iron hand-finished in either silver, gold, or bronze, each piece is inspired by the beauty of nature and celebrates premium craftsmanship.',
                  _id: '361dfc05-1744-40fc-86d4-9b435b51c2a7',
                  lists: [],
               },
               {
                  header: 'care',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Gently wipe clean with a soft, dry cloth.',
                        _id: '67cade4531783be9d0ee7ec7',
                     },
                     {
                        list: 'Do not use polishes or cleaners, as they could damage the finish.',
                        _id: '67cade4531783be9d0ee7ec8',
                     },
                  ],
                  content: '',
                  _id: 'd0ccb8cc-e7f8-4eaf-bb49-123e71fa5a24',
               },
            ],
            finish: true,
            dimensions: {
               width: 39,
               depth: 39,
               height: 34,
               weight: 35,
               _id: '67cade1231783be9d0ee7e77',
            },
         },
         roomId: '00736144-a35b-4c3d-b887-10d1eaf0a42c',
         categoryId: '7de52583-af3d-44d1-bb77-5a98a3f633e9',
      },
      {
         product: {
            name: 'flore flush mount',
            price: 26,
            cancelled_price: 34,
            views: {
               first_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353487/arhaus_images/xoi3v1z637z3mbaulsrr.avif',
               second_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353487/arhaus_images/myujpdny996ew4hz7qaw.avif',
               _id: '67caf21031783be9d0ef0df9',
            },
            in_stock: true,
            fabric: false,
            leather: false,
            _id: 'e92ab927-8fc9-4c88-a07e-d345a51f86f4',
            options: [
               {
                  option: 'gold',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 6,
                     _id: '67cc2fc95fa3b4d0fc0d133e',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434820/arhaus_images/hcu9ossfds3m3s5sabge.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434821/arhaus_images/elduufcehmpy4xciyooe.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434822/arhaus_images/jcwtqqivqypfqtp23roy.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434822/arhaus_images/jkemcdh9vuzj4j8hq4uc.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: '6dd2163f-7a7e-4bc6-931b-0e5844d1354c',
               },
               {
                  option: 'silver',
                  stock: {
                     in_stock: false,
                     when_in_stock: '2025-12-14',
                     stock_count: 0,
                     _id: '67cc323f5fa3b4d0fc0d2613',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435450/arhaus_images/k4v9acpb51fv4tzs4i2v.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435452/arhaus_images/mdsys8crp4erswqwiwuj.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435452/arhaus_images/eipmu5gz072nvosfigl8.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435452/arhaus_images/vb9a2qwmomsn3aedqei6.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: 'b1d6abb1-ae4d-4119-8a23-25d9d7c70730',
               },
               {
                  option: 'bronze',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 5,
                     _id: '67cc330f5fa3b4d0fc0d2787',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435657/arhaus_images/kkjehqnmkkzzniycicqi.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435659/arhaus_images/pr2yig0qhioaknr7hlei.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435660/arhaus_images/jnuam1a0gdtnhdh9f6x2.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435660/arhaus_images/keh6lvcrdkuovfbzwdou.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: 'c23f118a-d325-4fa3-82f1-5334524f59d2',
               },
            ],
            features: [
               {
                  header: 'details',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Crafted by our artisan partners from Italy from solid iron with a hand-applied finish.',
                        _id: '67cc311d5fa3b4d0fc0d1dce',
                     },
                     {
                        list: 'Pieces finished in silver or gold feature a hand-applied antiqued leaf design.',
                        _id: '67cc311d5fa3b4d0fc0d1dcf',
                     },
                     {
                        list: 'Uses four 40-watt max E12 bulbs (not included). We recommend our LED Candelabra E12 bulbs (6610071B134).',
                        _id: '67cc311d5fa3b4d0fc0d1dd0',
                     },
                     {
                        list: 'Black and white PVC cord measures 8" long.',
                        _id: '67cc311d5fa3b4d0fc0d1dd1',
                     },
                     {
                        list: 'Hardwired; professional installation recommended.',
                        _id: '67cc311d5fa3b4d0fc0d1dd2',
                     },
                     {
                        list: 'Safety tested for use in bathrooms, covered patios, or areas with temporary humidity and moisture.',
                        _id: '67cc311d5fa3b4d0fc0d1dd3',
                     },
                  ],
                  content: '',
                  _id: '58d6c82e-808f-4a44-9d07-addebfbdab59',
               },
               {
                  header: 'story',
                  paragraph: true,
                  content:
                     'Luxurious crystal florals and drops illuminate each branch-like form of our elegant Fiore Lighting Collection. Crafted by our artisan partners from Italy from solid iron hand-finished in either silver, gold, or bronze, each piece is inspired by the beauty of nature and celebrates premium craftsmanship.',
                  _id: '6b19268b-fb44-4063-9236-c86be2f1221d',
                  lists: [],
               },
               {
                  header: 'care',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Gently wipe clean with a soft, dry cloth.',
                        _id: '67cc31395fa3b4d0fc0d20b2',
                     },
                     {
                        list: 'Do not use polishes or cleaners, as they could damage the finish.',
                        _id: '67cc31395fa3b4d0fc0d20b3',
                     },
                  ],
                  content: '',
                  _id: '83e34645-d81f-4c6c-aadb-fa40cac370d0',
               },
            ],
            finish: true,
            dimensions: {
               width: 27,
               depth: 27,
               height: 14,
               weight: 13,
               _id: '67cc30b45fa3b4d0fc0d1886',
            },
         },
         roomId: '00736144-a35b-4c3d-b887-10d1eaf0a42c',
         categoryId: '7c042013-8bc5-4aec-8e1f-706f97fff5d6',
      },
      {
         product: {
            name: 'Flore colored oval chandelier',
            price: 87,
            cancelled_price: 95,
            views: {
               first_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741347513/arhaus_images/wnrkm4xl2mo02rsoxhmx.avif',
               second_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741347513/arhaus_images/ulcdwbfv65ew2rl5rbqc.avif',
               _id: '67cadab931783be9d0ee6b27',
            },
            in_stock: true,
            fabric: false,
            leather: false,
            _id: '43f87940-e13b-4ff1-9a0a-d892ba0943fd',
            options: [
               {
                  option: 'brass',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 5,
                     _id: '67cae7bf31783be9d0eeb1e4',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350844/arhaus_images/sffrwmsanmu0kgz6n6hi.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350846/arhaus_images/bo6p8wmjzci4lwkc0ghh.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350846/arhaus_images/t65jlre6mjfvcqi5n2ev.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350846/arhaus_images/uhpupav4yjt1btbap85k.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: '2b95ac42-c8ab-4663-a819-7b14f2e1568e',
               },
            ],
            features: [
               {
                  header: 'details',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Crafted by our artisan partners from Italy from iron hand-finished in brass or bronze.',
                        _id: '67cae7d031783be9d0eeb298',
                     },
                     {
                        list: '62" chandelier uses eight 40-watt max E12 bulbs, and the 74" chandelier uses 12 40-watt max E12 bulbs (not included). We recommend our LED Candelabra E12 bulbs (6610071B134).',
                        _id: '67cae7d031783be9d0eeb299',
                     },
                     {
                        list: 'Adjustable drop length ranges from 42"-186".',
                        _id: '67cae7d031783be9d0eeb29a',
                     },
                     {
                        list: 'Cannot be mounted on a vaulted ceiling.',
                        _id: '67cae7d031783be9d0eeb29b',
                     },
                     {
                        list: 'Iron chain with brass or bronze finish measures 144" long.',
                        _id: '67cae7d031783be9d0eeb29c',
                     },
                     {
                        list: '62" chandelier has a clear PVC cord that measures 156" long.',
                        _id: '67cae7d031783be9d0eeb29d',
                     },
                     {
                        list: '74" chandelier has a clear PVC cord that measures 168" long.',
                        _id: '67cae7d031783be9d0eeb29e',
                     },
                     {
                        list: 'Hardwired; professional installation required.',
                        _id: '67cae7d031783be9d0eeb29f',
                     },
                     {
                        list: 'Chandeliers weighing more than 50 lbs. cannot be mounted alone to a standard outlet box and require additional bracing above the ceiling where they are to be installed.',
                        _id: '67cae7d031783be9d0eeb2a0',
                     },
                     {
                        list: 'Safety tested for use in bathrooms, covered patios, or areas with temporary humidity and moisture.',
                        _id: '67cae7d031783be9d0eeb2a1',
                     },
                  ],
                  content: '',
                  _id: '4d1b8692-931a-4507-b875-f34726f213cd',
               },
               {
                  header: 'story',
                  paragraph: true,
                  content:
                     'Luxurious crystal florals and drops illuminate each branch-like form of our elegant Fiore Lighting Collection. Crafted by our artisan partners from Italy from solid iron and hand-finished with brass or bronze, each piece is inspired by the beauty of nature and celebrates premium craftsmanship.',
                  _id: 'b4df0d97-ba5d-4463-afaa-c7b0a8483806',
                  lists: [],
               },
               {
                  header: 'care',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Gently wipe clean with a soft, dry cloth.',
                        _id: '67cae7eb31783be9d0eeb430',
                     },
                     {
                        list: 'Do not use polishes or cleaners, as they could damage the finish.',
                        _id: '67cae7eb31783be9d0eeb431',
                     },
                  ],
                  content: '',
                  _id: 'e0f65869-c9c9-423a-9dd6-bc8ff882815b',
               },
            ],
            finish: true,
            dimensions: {
               width: 32,
               depth: 62,
               height: 16,
               weight: 55,
               _id: '67cae82431783be9d0eeb4fd',
            },
         },
         roomId: '00736144-a35b-4c3d-b887-10d1eaf0a42c',
         categoryId: '7de52583-af3d-44d1-bb77-5a98a3f633e9',
      },
      {
         product: {
            name: 'apollo flush mount',
            price: 18,
            cancelled_price: 20,
            views: {
               first_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353647/arhaus_images/rdlpg2qpo7x31wazbem9.avif',
               second_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353647/arhaus_images/eg5mzczec0za5twhwzuz.avif',
               _id: '67caf2b031783be9d0ef176f',
            },
            in_stock: true,
            fabric: false,
            leather: false,
            _id: 'e1d8b4a6-723a-43b5-9565-74c7080f2a09',
            options: [
               {
                  option: 'nickel',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 5,
                     _id: '67cc35175fa3b4d0fc0d4159',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741436177/arhaus_images/z9dajxbhtj3kmt9wynln.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741436179/arhaus_images/bxru1fnjqmcyuzm6nj9t.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741436180/arhaus_images/xxfvbylxjsnipn3fh1s5.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741436179/arhaus_images/wc9kdsitaiinpy6rqgro.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: '8b7dbe41-ea4a-49c1-8738-8e4de3de5c51',
               },
            ],
            features: [
               {
                  header: 'details',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Crafted from iron featuring an antiqued bronze, plated brass, or polished nickel finish.',
                        _id: '67cc35a15fa3b4d0fc0d45f6',
                     },
                     {
                        list: '20" flushmount uses eight 4-watt G9 Dimmable LED bulbs (included); equivalent to 40-watt incandescent bulbs.',
                        _id: '67cc35a15fa3b4d0fc0d45f7',
                     },
                     {
                        list: '36" flushmount uses 12 4-watt G9 Dimmable LED bulbs (included); equivalent to 40-watt incandescent bulbs.',
                        _id: '67cc35a15fa3b4d0fc0d45f8',
                     },
                     {
                        list: '47" flushmount uses 15 4-watt G9 Dimmable LED bulbs (included); equivalent to 40-watt incandescent bulbs.',
                        _id: '67cc35a15fa3b4d0fc0d45f9',
                     },
                     {
                        list: 'Cannot be mounted to a vaulted ceiling.',
                        _id: '67cc35a15fa3b4d0fc0d45fa',
                     },
                     {
                        list: 'Clear fabric-wrapped copper cord measures 12" long.',
                        _id: '67cc35a15fa3b4d0fc0d45fb',
                     },
                     {
                        list: 'Hardwired; professional installation recommended.',
                        _id: '67cc35a15fa3b4d0fc0d45fc',
                     },
                     {
                        list: 'Mounting hardware included.',
                        _id: '67cc35a15fa3b4d0fc0d45fd',
                     },
                     {
                        list: 'Safety tested for use indoors and in dry locations that are not directly exposed to excessive moisture and water.',
                        _id: '67cc35a15fa3b4d0fc0d45fe',
                     },
                  ],
                  content: '',
                  _id: '2433a35d-bb7d-400f-bc35-3a89675884bb',
               },
               {
                  header: 'story',
                  paragraph: true,
                  content:
                     "Inspired by the stars, our midcentury modern Apollo Lighting Collection features a chic design that will add trendy style to any space. Featuring a radiating iron frame with an antiqued bronze, plated brass, or polished nickel finish, this fixture's versatile aesthetic will easily blend with your décor.",
                  _id: '3de9e1b9-d90a-4f98-b28a-ed42659284b8',
                  lists: [],
               },
               {
                  header: 'care',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Gently wipe clean with a soft, dry cloth.',
                        _id: '67cc35c65fa3b4d0fc0d4d35',
                     },
                     {
                        list: 'Do not use polishes or cleaners, as they could damage the finish.',
                        _id: '67cc35c65fa3b4d0fc0d4d36',
                     },
                  ],
                  content: '',
                  _id: 'ad17e1ad-5d94-477c-8b8e-17bc25fd27c6',
               },
            ],
            finish: true,
            dimensions: {
               width: 20,
               depth: 20,
               height: 10,
               weight: 10,
               _id: '67cc358c5fa3b4d0fc0d446c',
            },
         },
         roomId: '00736144-a35b-4c3d-b887-10d1eaf0a42c',
         categoryId: '7c042013-8bc5-4aec-8e1f-706f97fff5d6',
      },
      {
         product: {
            name: 'Viticclo Flush mount',
            price: 28,
            cancelled_price: 22,
            views: {
               first_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352782/arhaus_images/cbbgpfob2sqpi1e1by95.avif',
               second_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352782/arhaus_images/aqzxzxz9g9wrqrurxryj.avif',
               _id: '67caef4f31783be9d0eee56d',
            },
            in_stock: true,
            fabric: false,
            leather: false,
            _id: '08679faf-c839-4c5b-b8db-5e4351b647b4',
            options: [
               {
                  option: 'silver',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 5,
                     _id: '67caf38f31783be9d0ef21ee',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353868/arhaus_images/vb6chpun3h5r19wyhw5c.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353870/arhaus_images/uiejin03smua12ikawbt.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353870/arhaus_images/x2ghddvidbhbbimlrksu.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353870/arhaus_images/xdezaunyzyvklzzc0wef.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: '7f9dfd9d-6a68-43ce-a8f9-7d665109a9f2',
               },
            ],
            features: [
               {
                  header: 'details',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Crafted by our artisan partners in Italy from hand-molded iron, featuring a hand-applied silver finish and elegantly hand-strung, faceted glass crystals.',
                        _id: '67caf3b831783be9d0ef23fe',
                     },
                     {
                        list: 'Due to the handcrafted nature, Viticcio pieces will vary in color and pattern.',
                        _id: '67caf3b831783be9d0ef23ff',
                     },
                     {
                        list: 'Uses six 40-watt max E12 bulbs (not included). We recommend energy-saving LED lights.',
                        _id: '67caf3b831783be9d0ef2400',
                     },
                     {
                        list: 'Black and white PVC cord measures 8" long.',
                        _id: '67caf3b831783be9d0ef2401',
                     },
                     {
                        list: 'Ceiling canopy measures 4".',
                        _id: '67caf3b831783be9d0ef2402',
                     },
                     {
                        list: 'Hardwired; professional installation recommended.',
                        _id: '67caf3b831783be9d0ef2403',
                     },
                     {
                        list: 'Mounting hardware included.',
                        _id: '67caf3b831783be9d0ef2404',
                     },
                     {
                        list: 'Safety tested for use in bathrooms, covered patios, or areas with temporary humidity and moisture.',
                        _id: '67caf3b831783be9d0ef2405',
                     },
                  ],
                  content: '',
                  _id: '20eb7a6e-ba25-4b75-96f9-9991b0d71af6',
               },
               {
                  header: 'story',
                  paragraph: true,
                  content:
                     'Like freshly fallen rain on draped garden vines, our Viticcio Lighting Collection is hand-molded by Italian artisans from solid iron. Floral flourishes are elegantly accentuated by a hand-applied silver finish, and hand-strung crystals dangle to scatter drops of light around your space.',
                  _id: '56a287c3-a442-41ee-adfa-f2572fa7ea7f',
                  lists: [],
               },
               {
                  header: 'care',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Wipe clean with a soft cloth.',
                        _id: '67caf3d031783be9d0ef2634',
                     },
                  ],
                  content: '',
                  _id: '052abcb6-fc4c-4347-9765-5da252153268',
               },
            ],
            finish: true,
            dimensions: {
               width: 32,
               depth: 32,
               height: 12,
               weight: 11,
               _id: '67caf3a331783be9d0ef22f6',
            },
         },
         roomId: '00736144-a35b-4c3d-b887-10d1eaf0a42c',
         categoryId: '7c042013-8bc5-4aec-8e1f-706f97fff5d6',
      },
      {
         product: {
            name: 'ghiacclo flush mount',
            price: 24,
            cancelled_price: 28,
            views: {
               first_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353593/arhaus_images/cd4d4vxigbeobckdaess.avif',
               second_view:
                  'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353593/arhaus_images/yi3cqixsio7hdamfuokp.avif',
               _id: '67caf27a31783be9d0ef12b4',
            },
            in_stock: true,
            fabric: false,
            leather: false,
            _id: 'b0915c7d-5733-4639-b3fb-9641b9ce5b2b',
            options: [
               {
                  option: 'brass',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 8,
                     _id: '67cc33be5fa3b4d0fc0d3140',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434820/arhaus_images/hcu9ossfds3m3s5sabge.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435834/arhaus_images/e75cwkktpk2z2wjettqw.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435835/arhaus_images/burfgjcy1wuxtqjvp0my.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741435835/arhaus_images/dok3n3nxmnqhaofyw9eg.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: 'd9312dbd-addb-4d22-9ca6-526b78f81504',
               },
               {
                  option: 'bronze',
                  stock: {
                     in_stock: true,
                     when_in_stock: '',
                     stock_count: 7,
                     _id: '67cc34a55fa3b4d0fc0d3cbd',
                  },
                  option_image:
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741436064/arhaus_images/jnzr5fdw7q3qcctg8rkv.avif',
                  previews: [
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741436065/arhaus_images/pojodpppm7btojbfglfq.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741436066/arhaus_images/z0pcgmta8iabzy9g42xi.webp',
                     'https://res.cloudinary.com/dycw73vuy/image/upload/v1741436066/arhaus_images/ukf5faw67obt6mt8kc81.webp',
                  ],
                  tags: [],
                  features: '',
                  care: '',
                  fabrics: '',
                  _id: '9ad2a05f-8d9e-484c-a189-0e8552fcc0dd',
               },
            ],
            features: [
               {
                  header: 'details',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Crafted from steel and curved glass.',
                        _id: '67cc34125fa3b4d0fc0d3428',
                     },
                     {
                        list: 'Uses three 60-watt max E12 bulbs (not included). We recommend our Arhaus LED Candelabra E12 Bulbs (6610071B134).',
                        _id: '67cc34125fa3b4d0fc0d3429',
                     },
                     {
                        list: 'Cannot be mounted on a vaulted ceiling.',
                        _id: '67cc34125fa3b4d0fc0d342a',
                     },
                     {
                        list: 'Canopy measures 6.25" diameter x 1" high.',
                        _id: '67cc34125fa3b4d0fc0d342b',
                     },
                     {
                        list: 'Black and white PVC and copper cord measures 6" long.',
                        _id: '67cc34125fa3b4d0fc0d342c',
                     },
                     {
                        list: 'Hardwired; professional installation recommended.',
                        _id: '67cc34125fa3b4d0fc0d342d',
                     },
                     {
                        list: 'Mounting hardware included.',
                        _id: '67cc34125fa3b4d0fc0d342e',
                     },
                     {
                        list: 'ETL Certified Damp.',
                        _id: '67cc34125fa3b4d0fc0d342f',
                     },
                     {
                        list: 'In order to protect the delicate glass of this collection, some assembly upon delivery to your home will be required.',
                        _id: '67cc34125fa3b4d0fc0d3430',
                     },
                  ],
                  content: '',
                  _id: 'b9d98806-6fad-4ffc-97b4-4c6fc356b85f',
               },
               {
                  header: 'story',
                  paragraph: true,
                  content:
                     'Inspired by famously adorned Italian glass, our Ghiaccio Lighting Collection artfully diffuses light through pieces of curved, textured glass. Complemented by a plated-brass finish, Ghiaccio elegantly illuminates any room.',
                  _id: 'b79c440e-118d-4550-9f5e-fad42622163c',
                  lists: [],
               },
               {
                  header: 'care',
                  paragraph: false,
                  lists: [
                     {
                        list: 'Gently wipe clean with a soft, dry cloth.',
                        _id: '67cc342e5fa3b4d0fc0d373b',
                     },
                     {
                        list: 'Do not use polishes or cleaners, as they could damage the finish.',
                        _id: '67cc342e5fa3b4d0fc0d373c',
                     },
                  ],
                  content: '',
                  _id: '86a7494d-a1c6-4467-bce3-47f84414770d',
               },
            ],
            finish: true,
            dimensions: {
               width: 18,
               depth: 18,
               height: 10,
               weight: 14,
               _id: '67cc33f75fa3b4d0fc0d32b4',
            },
         },
         roomId: '00736144-a35b-4c3d-b887-10d1eaf0a42c',
         categoryId: '7c042013-8bc5-4aec-8e1f-706f97fff5d6',
      },
   ],
};
