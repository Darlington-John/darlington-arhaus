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

export const roomsDummy = [
   {
      _id: 'dfea23e3-2108-455e-82ca-90e066054541',
      dir: 'Living',
      image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1740747939/arhaus_images/wrnukkaht4jltfjhveil.webp',
      content: 'living room furniture',
      menu: {
         _id: '89c553d4-6d9d-43a7-b88d-c922d20fdd7a',
         categories: [
            {
               content: 'sofas',
               image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741972838/huusofc5umwxen3bgvpn_1_s6wi1j.png',
               _id: '3f989f94-b8a3-4245-b552-cd1b1b856a05',
               products: [
                  {
                     name: 'Madrone leather sofa',
                     price: 30,
                     cancelled_price: 44,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740748575/arhaus_images/q95gbkjr8fixdh5fbqrl.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740748575/arhaus_images/enmhnsgkficufbn6bmbt.avif',
                        _id: '67c1b720574814f6661ec554',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: '68ca254b-6db8-47c1-828e-72b36d50a06f',
                     options: [
                        {
                           option: 'Lanie graphite',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c32d2b47eb4732efb6ff16',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740844326/arhaus_images/unkxfytvno7w9sjjpusw.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740844328/arhaus_images/yx27fozxexkuztit8g2m.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740844329/arhaus_images/m1bvy5bbeustje2przsf.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740844329/arhaus_images/jzcifmqz2gqteequ8sff.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740844329/arhaus_images/qomaanwzmebn2i2srybr.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: 'e6bf7ec5-4c24-4681-b50a-999f5264b5ce',
                        },
                        {
                           option: 'lanie camel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67c3314747eb4732efb70060',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740845378/arhaus_images/g2xz93jclly1tee3luzv.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740845381/arhaus_images/hmloqhinacl6vpk2dvy0.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740845381/arhaus_images/ejf5zkdkftoijm7wphge.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740845381/arhaus_images/hbqvdxjphsme3qt2i3ct.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740845381/arhaus_images/mgeiiru5cu8bvgu1mkcw.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: '39f32927-8ab7-42b6-be6e-2f99beb48042',
                        },
                        {
                           option: 'lanie indigo',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 2,
                              _id: '67c3328447eb4732efb700c3',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740845697/arhaus_images/rv1shapbqyrgvw9ikrxh.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740845699/arhaus_images/ukmi4i7tikjtd71ngyj3.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of lasti',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: '7805e784-718f-42c9-acf8-1a7384cd47e9',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Craftsman-built frames are constructed using solid, reinforced hardwood for lasting strength and stability.',
                                 _id: '67c3331247eb4732efb70168',
                              },
                              {
                                 list: 'Solid wood legs are inset, making each piece appear to be floating above the ground.',
                                 _id: '67c3331247eb4732efb70169',
                              },
                              {
                                 list: 'Frame support system features no-sag springs made from recycled steel sustained by flexible elastic webbing.',
                                 _id: '67c3331247eb4732efb7016a',
                              },
                              {
                                 list: 'Seat cushions contain dense foam padded with poly fibers.',
                                 _id: '67c3331247eb4732efb7016b',
                              },
                              {
                                 list: 'Backrests and arms are filled with a supportive blend of foam and poly fibers and back frame system is sustained by flexible elastic webbing.',
                                 _id: '67c3331247eb4732efb7016c',
                              },
                           ],
                           content: '',
                           _id: '0c3a2215-be54-4e9f-8a66-ae3fe8f52e5d',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'A modern design for luxurious living spaces, our Madrone Collection features low-profile silhouettes with track arms and deep seating accented by subtle piping. Aniline-dyed leather features a rich, matte surface with a super soft feel. Natural details in the leather’s surface, uneven pebbling, and subtle color variations add unique beauty to each piece.',
                           _id: '96898902-b34c-4a01-8047-8c024ca809a7',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c3338647eb4732efb70203',
                              },
                              {
                                 list: 'Our artisan-crafted leathers can be easily maintained by spot-cleaning using a dry cloth to remove dust and dirt.',
                                 _id: '67c3338647eb4732efb70204',
                              },
                              {
                                 list: 'For long-term care, use an undyed cloth dampened with distilled water to wipe down your leather. This will help keep your upholstery looking its best by adding moisture back into the leather.',
                                 _id: '67c3338647eb4732efb70205',
                              },
                              {
                                 list: 'Clean oil-based spills from leather by blotting with a clean, undyed, soft cloth. Oil should dissipate over time.',
                                 _id: '67c3338647eb4732efb70206',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c3338647eb4732efb70207',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c3338647eb4732efb70208',
                              },
                              {
                                 list: 'Avoid using harsh cleaners or solvents, as these could leave marks or otherwise cause damage.',
                                 _id: '67c3338647eb4732efb70209',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c3338647eb4732efb7020a',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c3338647eb4732efb7020b',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c3338647eb4732efb7020c',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c3338647eb4732efb7020d',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c3338647eb4732efb7020e',
                              },
                           ],
                           content: '',
                           _id: '2efca496-cdc6-4ab8-97a6-3bfca68c1524',
                        },
                     ],
                     dimensions: {
                        width: 100,
                        depth: 43,
                        height: 26.5,
                        weight: 182,
                        seatBackHeight: 10,
                        seatDepth: 30,
                        seatHeight: 17,
                        armHeight: 26,
                        _id: '67c332e447eb4732efb70126',
                     },
                  },
                  {
                     name: 'Coburn three piece motion sofa',
                     price: 45,
                     cancelled_price: 57,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740748823/arhaus_images/chlszsbbgoftphuflxfr.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740748823/arhaus_images/vzdgzwix7rwo0z2hamc0.avif',
                        _id: '67c1b817574814f6661ec562',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '2cbb3521-ced9-43b8-982b-9c2efaf72c19',
                     options: [
                        {
                           option: 'Nomad Snow',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c5a46d73d970a34219cc3f',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005920/arhaus_images/jss0zoexqhjrlvpgyp5y.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005922/arhaus_images/kfrj8s36ytn9atwk5l4i.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005930/arhaus_images/kgrl4jyxzqvkbggvnyi8.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005925/arhaus_images/kcybzoevhet8hkzfgbjl.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005924/arhaus_images/dsf6njdgutr4ypi6zq4u.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005925/arhaus_images/conxsjpzajgo5bmrthns.webp',
                           ],
                           tags: ['performance'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '92% POLYESTER, 8% LINEN',
                           _id: '48a765c3-ad4e-4216-9f8c-5b63fb548f36',
                        },
                        {
                           option: 'Capricorn Grey',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 2,
                              _id: '67c5a52873d970a34219cdf8',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741006114/arhaus_images/tki5sbtknvftuyqcjrxa.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741006116/arhaus_images/b6z3oxbixuhyr24ioa27.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741006118/arhaus_images/ewy4bn7mq5o4derbft5r.jpg',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741006117/arhaus_images/rhejt3v35pcorlb6d5m6.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741006116/arhaus_images/wznxi8d5pk9ixirpnih0.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741006117/arhaus_images/gmynj2zpbhslpkwrd2zd.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741006117/arhaus_images/cnt0fgzjb7tyomlyb1po.webp',
                           ],
                           tags: ['Canvas'],
                           features:
                              'With tightly woven textures and outstanding durability, canvas fabrics make furniture more approachable, lending a casual flair throughout the home.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '70% COTTON, 30% POLYESTER',
                           _id: '3680cdc7-f582-4970-bddb-0444068b90f0',
                        },
                        {
                           option: 'nomad charcoal',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 2,
                              _id: '67c5a9d373d970a34219d16a',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741007312/arhaus_images/mdnba2xk7cxicfprrhat.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741007314/arhaus_images/eeny4lfik89vgeh2latq.webp',
                           ],
                           tags: ['performance'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '92% POLYESTER, 8% LINEN',
                           _id: '1d800279-c08b-4822-a9c4-10af1107e2ff',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Craftsman-built frames are constructed using solid, reinforced hardwood for lasting strength and stability.',
                                 _id: '67c5aa5773d970a34219d3b6',
                              },
                              {
                                 list: 'Frame support system features no-sag springs made from recycled steel.',
                                 _id: '67c5aa5773d970a34219d3b7',
                              },
                              {
                                 list: 'Seat cushions contain dense foam padded with a blend of sterilized down and feathers.',
                                 _id: '67c5aa5773d970a34219d3b8',
                              },
                              {
                                 list: 'Backrests are filled with a plush blend of poly fiber, sterilized down, and feathers,',
                                 _id: '67c5aa5773d970a34219d3b9',
                              },
                              {
                                 list: 'and back frame system is supported by flexible elastic webbing.',
                                 _id: '67c5aa5773d970a34219d3ba',
                              },
                              {
                                 list: 'Back pillows are abundantly stuffed and encased in down-proof covers.',
                                 _id: '67c5aa5773d970a34219d3bb',
                              },
                              {
                                 list: 'Coburn sectionals do not include metal connectors. Adding them is not recommended, as this will void our Warranty.',
                                 _id: '67c5aa5773d970a34219d3bc',
                              },
                              {
                                 list: 'The Coburn Collection is available in multiple pieces and customizable fabrics. Call, email, or live chat with our Design Team to create your own Coburn.',
                                 _id: '67c5aa5773d970a34219d3bd',
                              },
                              {
                                 list: 'We want you to love your Coburn as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice',
                                 _id: '67c5aa5773d970a34219d3be',
                              },
                           ],
                           content: '',
                           _id: '297679fd-5a21-428b-b94c-d87669afb2ae',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Contemporary comfort that fits spaces of all sizes—our Coburn Sectional Collection features modular designs that are easy to arrange and even easier to love. Crafted in casual style, Coburn is fitted in your choice of soft-yet-durable fabric, including our incredible Crypton® Home Performance Fabrics that withstand the stains and spills of everyday living.',
                           _id: 'c3ea82b7-03b6-4b94-beb2-976f15cca124',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c5aa8473d970a34219d62d',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c5aa8473d970a34219d62e',
                              },
                              {
                                 list: 'Pieces upholstered in Crypton® Nomad Stone and Nomad Snow Performance Fabrics are code SW: Spot-clean using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used.',
                                 _id: '67c5aa8473d970a34219d62f',
                              },
                              {
                                 list: 'Crypton® fabrics can be cleaned using clear, mild detergent and water. Do not bleach. For tough stains, rub with a soft brush. Blot with a clean towel, rinsing thoroughly; let air-dry.',
                                 _id: '67c5aa8473d970a34219d630',
                              },
                              {
                                 list: 'Pieces upholstered in Shayna Nature and Capricorn fabric are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c5aa8473d970a34219d631',
                              },
                              {
                                 list: 'Pieces upholstered in Capricorn fabric can be spot cleaned by removing residue with a straight edge, such as a butter knife or spoon.',
                                 _id: '67c5aa8473d970a34219d632',
                              },
                              {
                                 list: 'Then, blot clean using an absorbent undyed cloth. To prevent rings, blot from the outside of the soiled area, moving towards the middle. Never scrub.',
                                 _id: '67c5aa8473d970a34219d633',
                              },
                              {
                                 list: 'Allow to air-dry; and brush with a soft-bristle brush to restore fabric.',
                                 _id: '67c5aa8473d970a34219d634',
                              },
                              {
                                 list: 'Back pillows may show signs of wear and lose shape after use. To help prevent this, periodically rotate to distribute wear.',
                                 _id: '67c5aa8473d970a34219d635',
                              },
                              {
                                 list: 'To help prevent fabrics from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c5aa8473d970a34219d636',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c5aa8473d970a34219d637',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c5aa8473d970a34219d638',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c5aa8473d970a34219d639',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c5aa8473d970a34219d63a',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c5aa8473d970a34219d63b',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c5aa8473d970a34219d63c',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c5aa8473d970a34219d63d',
                              },
                           ],
                           content: '',
                           _id: 'c23f944e-163d-48f9-b044-058ff57cac04',
                        },
                     ],
                     dimensions: {
                        width: 124,
                        depth: 43,
                        height: 28,
                        weight: 204,
                        seatBackHeight: 20,
                        seatDepth: 22,
                        seatHeight: 17,
                        armHeight: 28,
                        _id: '67c5aa2673d970a34219d290',
                     },
                  },
                  {
                     name: 'Amira sofa',
                     price: 50,
                     cancelled_price: 70,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740748984/arhaus_images/mtntpocwxoocyrzlfqc9.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740748984/arhaus_images/v2sgt97d5syrmcfwrljg.avif',
                        _id: '67c1b8b9574814f6661ec569',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: 'be079b05-1e26-4f90-9135-cd905739b575',
                     options: [
                        {
                           option: 'Quincy Cinnamon',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c1d102574814f6661eca95',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740755199/arhaus_images/mijmgja9tln3brfeyyot.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740755200/arhaus_images/dilwrd05mhlxtszownmn.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740755201/arhaus_images/j7ytne0useohjnxc6lru.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740755201/arhaus_images/tykqk3j1s1faikyl7bzt.webp',
                           ],
                           tags: ['performance'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '100% POLYESTER',
                           _id: 'ec9d03ae-0f29-4352-b191-ef544c02839f',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: true,
                           content:
                              'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.\nFrames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.\nSeat frame system is supported by flexible elastic webbing.\nSeat cushions contain dense foam made from partially plant-based material, padded with poly fibers.\nBackrests are filled with a supportive blend of poly fibers.\nWe want you to love your Amira as much as we do. We recommend ordering a swatch prior to purchase, ensuring the perfect color choice.\nThe Amira Collection is available in customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own.',
                           _id: '2e749767-d0e5-4e8a-9417-63f9c851fd62',
                           lists: [],
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Craftsman-built by artisans, our Amira Collection is channel-tufted in sumptuous velvet evoking a sense of timeless elegance. The juxtaposition of its modish curves and clean vertical lines offers a sophisticated silhouette perfect for any living space.',
                           _id: '1b9a3453-522f-403f-8d4e-8884e159e4f5',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c1d233574814f6661ecb79',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c1d233574814f6661ecb7a',
                              },
                              {
                                 list: 'Pieces upholstered in Banks Fir Performance Velvet fabric are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c1d233574814f6661ecb7b',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c1d233574814f6661ecb7c',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c1d233574814f6661ecb7d',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c1d233574814f6661ecb7e',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c1d233574814f6661ecb7f',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c1d233574814f6661ecb80',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c1d233574814f6661ecb81',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c1d233574814f6661ecb82',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c1d233574814f6661ecb83',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c1d233574814f6661ecb84',
                              },
                           ],
                           content: '',
                           _id: '1ef8ba52-0c52-44bd-be5b-2e37378cee20',
                        },
                     ],
                     dimensions: {
                        width: 93,
                        depth: 41,
                        height: 32,
                        weight: 155,
                        seatBackHeight: 16,
                        seatDepth: 22,
                        seatHeight: 16,
                        armHeight: 29,
                        _id: '67c1d1b2574814f6661ecad4',
                     },
                  },
                  {
                     name: 'Fisha cane back sofa',
                     price: 39,
                     cancelled_price: 43,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749937/arhaus_images/ql9cluzaletpkq2tjyns.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749938/arhaus_images/uvrwqoltpw7ldp0tusa1.avif',
                        _id: '67c1bc72574814f6661ec58d',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: 'b35f02dd-c875-4823-b693-fc78ca228b40',
                     options: [
                        {
                           option: 'wiley flax',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67c5a20b73d970a34219c2fc',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005318/arhaus_images/l7sp9irdmitr7rtnf8tu.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005320/arhaus_images/nxaxbdooar4jox2lr0c5.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005320/arhaus_images/izrbntjtfpt0elaeidti.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005321/arhaus_images/dd6uuqbnuvvjazjwuljj.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005321/arhaus_images/apnscr8jogywdseaqnju.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741005320/arhaus_images/of16uroyyhhyczslqzdc.webp',
                           ],
                           tags: ['classic weave', 'crypton', 'performance'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '70% POLYESTER, 25% VISCOSE, 5% LINEN',
                           _id: 'a5f8f0de-ccae-4cbf-86a0-463fb0b1ecd4',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Frames are craftsman-built in Cambodia using red oak wood with a mocha finish.',
                                 _id: '67c5a33c73d970a34219c581',
                              },
                              {
                                 list: 'Our sustainably certified Crypton® Home Performance Fabrics are easy to clean, soft, and durable—engineered with stain-, odor-, and moisture-resistant technology in every fiber.',
                                 _id: '67c5a33c73d970a34219c582',
                              },
                              {
                                 list: 'Frame support system features no-sag springs made from recycled steel.',
                                 _id: '67c5a33c73d970a34219c583',
                              },
                              {
                                 list: 'Seat cushions contain dense foam padded with a blend of sterilized down and feathers.',
                                 _id: '67c5a33c73d970a34219c584',
                              },
                              {
                                 list: 'Backrests are filled with a soft blend of foam, sterilized down, and feathers, and back frame system is supported by flexible elastic webbing.',
                                 _id: '67c5a33c73d970a34219c585',
                              },
                           ],
                           content: '',
                           _id: '06f14bb7-99b3-415f-975b-100618ddf22d',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Craftsman-built by artisans in Cambodia, our Fisher Chair’s uniquely shaped silhouette offers stunning graining detail paired with brass accents on its tapered arms and legs. Meticulously crafted to imitate a vintage aesthetic, Fisher’s woven cane frame creates a visual interest perfect for open-seating arrangements.',
                           _id: '139e1667-1cc5-4e52-88d8-ebb7b724736f',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c5a36b73d970a34219c79c',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c5a36b73d970a34219c79d',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c5a36b73d970a34219c79e',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c5a36b73d970a34219c79f',
                              },
                              {
                                 list: 'Pieces upholstered in Crypton® Home Performance Fabrics are code W: Spot-clean using water and water-based upholstery shampoo or foam cleaner only. Do not bleach. For tough stains, rub with a soft brush. Blot with a clean towel, rinsing thoroughly; let air-dry.',
                                 _id: '67c5a36b73d970a34219c7a0',
                              },
                              {
                                 list: 'Pieces upholstered in Vance and Banks fabrics are cleaning code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c5a36b73d970a34219c7a1',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c5a36b73d970a34219c7a2',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c5a36b73d970a34219c7a3',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c5a36b73d970a34219c7a4',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c5a36b73d970a34219c7a5',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c5a36b73d970a34219c7a6',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c5a36b73d970a34219c7a7',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c5a36b73d970a34219c7a8',
                              },
                           ],
                           content: '',
                           _id: '9f48272f-5a94-4124-9f5b-b7d6f4d137e2',
                        },
                     ],
                     dimensions: {
                        width: 72,
                        depth: 35,
                        height: 35,
                        weight: 100,
                        seatBackHeight: 14,
                        seatDepth: 22,
                        seatHeight: 21,
                        armHeight: 24,
                        _id: '67c5a31173d970a34219c47f',
                     },
                  },
                  {
                     name: 'Berwick faux leather sofa',
                     price: 43,
                     cancelled_price: 50,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749257/arhaus_images/tjxngxkqivhqd3evevqg.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749257/arhaus_images/zhjnd9r3yodrhjlld7ud.avif',
                        _id: '67c1b9ca574814f6661ec575',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: '6d0b53c6-9499-42a0-b300-cd6a938ed329',
                     options: [
                        {
                           option: 'Norre steel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c4305da86cf07517f22b58',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740910682/arhaus_images/yldkvnjjjzdz3xpa2wmd.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740910683/arhaus_images/fpecdwj3hxmbp8qb08z0.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740910684/arhaus_images/axfmmjrfogsbd1nhrvie.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740910684/arhaus_images/tadxk9x5cvsr7xppwlab.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740910684/arhaus_images/s3iwpy3jlt16caumsdzv.webp',
                           ],
                           tags: ['Washable', 'faux leather'],
                           features:
                              'Faux leathers offer the look and dimension of genuine leather in an array of colors and finishes. Crafted from no animal products, faux leathers are durable, UV-resistant, and easy to clean.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '100% POLYESTER',
                           _id: '3e946286-f2a2-44f7-b564-0723ff55cf17',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.',
                                 _id: '67c43120a86cf07517f22d60',
                              },
                              {
                                 list: 'Frames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.',
                                 _id: '67c43120a86cf07517f22d61',
                              },
                              {
                                 list: 'Norre faux leathers offer the look and dimension of genuine leather in an array of colors and finishes. Crafted from no animal products, faux leathers are durable, UV-resistant, and easy to clean.',
                                 _id: '67c43120a86cf07517f22d62',
                              },
                              {
                                 list: 'Our Performance Fabrics are extremely durable and resist stains and fading, remaining beautiful and soft to the touch.',
                                 _id: '67c43120a86cf07517f22d63',
                              },
                              {
                                 list: 'Frames feature a no-sag, recycled-steel, sinuous support system beneath seat cushions for evenly dispersed, firm yet flexible comfort.',
                                 _id: '67c43120a86cf07517f22d64',
                              },
                              {
                                 list: 'Backrests are sustained by flexible, sinuous springs for resilient support and stability.',
                                 _id: '67c43120a86cf07517f22d65',
                              },
                              {
                                 list: 'Cushion cores are made with dense, eco-friendly foam made partly from sustainable, plant-based material.',
                                 _id: '67c43120a86cf07517f22d66',
                              },
                              {
                                 list: 'Seat and back cushions are hand-tufted to keep padding in place for added resilience.',
                                 _id: '67c43120a86cf07517f22d67',
                              },
                              {
                                 list: 'Pieces upholstered in Tolliver Sand fabric are accented with Natural-finish nailheads and solid wood legs in our Driftwood Natural finish.',
                                 _id: '67c43120a86cf07517f22d68',
                              },
                              {
                                 list: 'Pieces upholstered in Norre Recycled Leathers are accented with Antique Black-finished nailheads and solid wood legs stained a rich Ebony color.',
                                 _id: '67c43120a86cf07517f22d69',
                              },
                              {
                                 list: 'We want you to love your Berwick as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c43120a86cf07517f22d6a',
                              },
                           ],
                           content: '',
                           _id: '5629c798-50dc-4990-b467-3949eec76a10',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Hand-tufted detailing paired with soft, graceful curves create the regal appearance of our artfully crafted Berwick Collection. Elegantly highlighted by rows of hand-applied nailheads, Berwick creates an exquisite lounging experience.',
                           _id: '46890de5-9715-403d-a399-fb28eb7c2074',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus furnishings are designed to withstand everyday use; however normal wear and tear is reflective of your care and use.',
                                 _id: '67c43150a86cf07517f22f35',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c43150a86cf07517f22f36',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c43150a86cf07517f22f37',
                              },
                              {
                                 list: 'Norre faux leathers can be spot cleaned using mild soap and water. Wipe dry immediately.',
                                 _id: '67c43150a86cf07517f22f38',
                              },
                              {
                                 list: 'Do not over-wet faux leathers or use solvents to clean. Avoid leather cleaner and conditioner as these could cause damage.',
                                 _id: '67c43150a86cf07517f22f39',
                              },
                              {
                                 list: 'Spot-clean oil-based spills on leather by blotting with a clean, soft cloth. Oil should absorb completely into the leather in a short time.',
                                 _id: '67c43150a86cf07517f22f3a',
                              },
                              {
                                 list: 'Spot-clean other liquid spills on leather by blotting with mild soap and distilled water. Follow by wiping the area with distilled water. Use a clean, soft, and absorbent cloth. Allow to air dry.',
                                 _id: '67c43150a86cf07517f22f3b',
                              },
                              {
                                 list: 'Avoid using harsh cleaners or solvents, as these could leave marks or otherwise damage leather finishes.',
                                 _id: '67c43150a86cf07517f22f3c',
                              },
                              {
                                 list: 'Tolliver Performance Fabrics can be spot cleaned using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used.',
                                 _id: '67c43150a86cf07517f22f3d',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c43150a86cf07517f22f3e',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67c43150a86cf07517f22f3f',
                              },
                              {
                                 list: 'Do not clean wood surfaces using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and wood surfaces.',
                                 _id: '67c43150a86cf07517f22f40',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c43150a86cf07517f22f41',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c43150a86cf07517f22f42',
                              },
                           ],
                           content: '',
                           _id: 'df510fea-39d4-4f6d-8606-8f0acec87929',
                        },
                     ],
                     dimensions: {
                        width: 88,
                        depth: 38,
                        height: 32,
                        weight: 157,
                        seatBackHeight: 22,
                        seatDepth: 22,
                        seatHeight: 20,
                        armHeight: 32,
                        _id: '67c430fba86cf07517f22c90',
                     },
                  },
                  {
                     name: 'Bourne leather sofa',
                     price: 62,
                     cancelled_price: 70,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749412/arhaus_images/uxnktwpgdzjwt6909zva.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749412/arhaus_images/aqwixjsvgkpiff5jtacp.avif',
                        _id: '67c1ba64574814f6661ec57a',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: 'dfe38324-4727-4278-b0f9-f39dc308d10b',
                     options: [
                        {
                           option: 'Lukas pecan',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 1,
                              _id: '67c41a00a86cf07517f22094',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740904958/arhaus_images/pwh8cmdpg9ii2pveyfgg.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740904960/arhaus_images/ttqzzmp1bj4zytwcphon.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740904960/arhaus_images/yaxrhkpy6lvvtf8apsi2.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740904960/arhaus_images/y4mi9gdxfxw8ijysab7h.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740904959/arhaus_images/dmfjubtj2pl7nx1vzojt.webp',
                           ],
                           tags: ['Leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: '0298d1cf-e6bc-49e6-86eb-019b0638feb4',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Selected from the highest quality hides in the world, our leathers are hand-finished to accentuate their natural color variations, distinct textures, and other unique features.',
                                 _id: '67c42e47a86cf07517f225cc',
                              },
                              {
                                 list: 'Frame support system features flexible elastic webbing.',
                                 _id: '67c42e47a86cf07517f225cd',
                              },
                              {
                                 list: 'Seat cushions contain dense foam made from partially plant-based material, padded with resilient memory fibers.',
                                 _id: '67c42e47a86cf07517f225ce',
                              },
                              {
                                 list: 'Backrests are filled with a supportive blend of foam and poly fibers.',
                                 _id: '67c42e47a86cf07517f225cf',
                              },
                              {
                                 list: 'This collection is available in customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own Bourne.',
                                 _id: '67c42e47a86cf07517f225d0',
                              },
                              {
                                 list: 'We want you to love your Bourne as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c42e47a86cf07517f225d1',
                              },
                           ],
                           content: '',
                           _id: 'd51cbaab-62fc-4968-ac88-5c8830a9ad83',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Inspired by mid-century modern design, our Bourne Collection is simple, sophisticated, and stylish. Featuring slightly flared arms, subtle biscuit tufting, and a low-profile silhouette, Bourne offers refined comfort perfect for any aesthetic.',
                           _id: '46e03728-0f83-4a34-8d0e-077d5547fba1',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c42e80a86cf07517f227ab',
                              },
                              {
                                 list: 'Our artisan-crafted leathers can be easily maintained by spot-cleaning using a dry cloth to remove dust and dirt.',
                                 _id: '67c42e80a86cf07517f227ac',
                              },
                              {
                                 list: 'For long-term care, use an undyed cloth dampened with distilled water to wipe down your leather. This will help keep your upholstery looking its best by adding moisture back into the leather.',
                                 _id: '67c42e80a86cf07517f227ad',
                              },
                              {
                                 list: 'Clean oil-based spills from leather by blotting with a clean, undyed, soft cloth. Oil should dissipate over time.',
                                 _id: '67c42e80a86cf07517f227ae',
                              },
                              {
                                 list: 'Spot-clean other liquid spills by blotting with clear, mild soap and distilled water. Follow by wiping the area with distilled water. Use a clean, undyed, soft, and absorbent cloth. Avoid scrubbing. Allow to air-dry.',
                                 _id: '67c42e80a86cf07517f227af',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c42e80a86cf07517f227b0',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c42e80a86cf07517f227b1',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c42e80a86cf07517f227b2',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c42e80a86cf07517f227b3',
                              },
                           ],
                           content: '',
                           _id: 'd7541fbf-ee55-492f-8f17-8dd7f8a8e25b',
                        },
                     ],
                     dimensions: {
                        width: 86,
                        depth: 36,
                        height: 33,
                        weight: 180,
                        seatBackHeight: 16,
                        seatDepth: 22,
                        seatHeight: 17,
                        armHeight: 23,
                        _id: '67c42e24a86cf07517f2251a',
                     },
                  },
                  {
                     name: 'Marcela sofa',
                     price: 47,
                     cancelled_price: 66,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749647/arhaus_images/qu43snds9coms1pa9sjj.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749647/arhaus_images/wayscdw6b0wroli7ou7w.avif',
                        _id: '67c1bb50574814f6661ec581',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '85a5efb8-9d4e-41b2-90bf-04f912a392c3',
                     options: [
                        {
                           option: 'BELLERA EARTH',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c336ee47eb4732efb708a5',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846826/arhaus_images/zxvvff3zc46o3s8utho3.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846829/arhaus_images/ooyyjga9kzd9hpez4h1k.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846829/arhaus_images/ymrov9hqsun9lorhj1ee.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846828/arhaus_images/pouvajtu5f4f6f6xtzez.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846829/arhaus_images/wmbyauc8bx3uwv754wgr.webp',
                           ],
                           tags: ['performance', 'textured weave'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics:
                              '32% POLYESTER, 19% ACRYLIC, 19% VIRGIN WOOL, 17% COTTON, 8% RAYON, 5% LINEN',
                           _id: '2b8a3e5d-e785-4b34-ace6-d8053ca0bd21',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Our Performance Fabrics are extremely durable and resist stains but remain beautiful and soft to the touch.',
                                 _id: '67c3382347eb4732efb70a97',
                              },
                              {
                                 list: 'Frames are craftsman-built using solid, reinforced hardwood with cross-directional hardwood laminate.',
                                 _id: '67c3382347eb4732efb70a98',
                              },
                              {
                                 list: 'Frame features artisan-crafted eight-way hand-tied support system with no-sag springs made from recycled steel.',
                                 _id: '67c3382347eb4732efb70a99',
                              },
                              {
                                 list: 'Seat cushions contain dense foam made from partially plant-based material, padded with sterilized down, feathers, and poly fibers.',
                                 _id: '67c3382347eb4732efb70a9a',
                              },
                              {
                                 list: 'Backrests are filled with a supportive blend of foam and poly fibers.',
                                 _id: '67c3382347eb4732efb70a9b',
                              },
                              {
                                 list: 'We want you to love your Marcela as much as we do. We recommend ordering a swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c3382347eb4732efb70a9c',
                              },
                           ],
                           content: '',
                           _id: '38d4081a-9c6b-442d-8743-d489f453f319',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Surrender to the curvaceous embrace of our Marcela Collection. Its angled arms and plush seating beckon restful lounging, while the plinth base adds a touch of grandeur. Complemented by two round toss pillows, Marcela’s inviting silhouette offers refined relaxation.',
                           _id: '0260d999-6d7d-444d-98d1-c398ee7e2df7',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c3386947eb4732efb70bcf',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c3386947eb4732efb70bd0',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c3386947eb4732efb70bd1',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c3386947eb4732efb70bd2',
                              },
                              {
                                 list: 'Pieces upholstered in Bellera fabrics are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c3386947eb4732efb70bd3',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c3386947eb4732efb70bd4',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c3386947eb4732efb70bd5',
                              },
                              {
                                 list: 'To help prevent fabrics from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c3386947eb4732efb70bd6',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c3386947eb4732efb70bd7',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c3386947eb4732efb70bd8',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c3386947eb4732efb70bd9',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c3386947eb4732efb70bda',
                              },
                           ],
                           content: '',
                           _id: '33a9b6d2-d4f1-4eaf-b0bb-83479b1b7a11',
                        },
                     ],
                     dimensions: {
                        width: 108,
                        depth: 38.5,
                        height: 29,
                        weight: 294,
                        seatDepth: 27,
                        seatHeight: 18,
                        armHeight: 29,
                        _id: '67c337f447eb4732efb70a09',
                     },
                  },
                  {
                     name: 'Kaz leather motion sofa',
                     price: 50,
                     cancelled_price: 69,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749761/arhaus_images/qw9xgrowy24egbhmsjyb.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740749761/arhaus_images/mk91asxx9nriuhzhjlbl.avif',
                        _id: '67c1bbc1574814f6661ec586',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: 'ea6595e4-d3e1-431f-87c2-72daa85548d7',
                     options: [
                        {
                           option: 'lanie graphite',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c334bd47eb4732efb703cd',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846263/arhaus_images/b2licd3pzkbbhuamiqqw.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846264/arhaus_images/wswo2o0nwipc1enuhpwh.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846267/arhaus_images/ftc9qm9cwsdbprkqpugc.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846265/arhaus_images/fmsmelxgpvfistyotxe2.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846266/arhaus_images/gmykrasd9l4bc52gprak.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846267/arhaus_images/oxtapattw1ljc4kzdtqj.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846266/arhaus_images/flp09vuym2ojq1zsqwyh.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of lasti',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: 'a507093a-f803-40a1-b8a1-2469615a6533',
                        },
                        {
                           option: 'lanie camel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 10,
                              _id: '67c3352e47eb4732efb70463',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846378/arhaus_images/vwxiabmjacxyw4nnsqfx.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846379/arhaus_images/b7xbycbrnhloxa527y70.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846380/arhaus_images/mfzkkopdmdesdvimtlqe.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846380/arhaus_images/nmmhlskvemsllk3t3rb5.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846380/arhaus_images/i0mpaa7bmlsn9jcyjs9f.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740846380/arhaus_images/mwzuwpfo2fhulswf0hes.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of lasti',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: 'cf350115-13f4-4193-9840-43cb6bc86f42',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Our artisan-crafted leathers are selected from the highest quality hides in the world—dyed and finished by hand to accentuate their natural color and preserve their unique features.',
                                 _id: '67c335b147eb4732efb7052b',
                              },
                              {
                                 list: 'Craftsman-built frames are constructed using solid, reinforced hardwood for lasting strength and stability.',
                                 _id: '67c335b147eb4732efb7052c',
                              },
                              {
                                 list: 'Frame support system features no-sag springs made from recycled steel sustained by flexible elastic webbing.',
                                 _id: '67c335b147eb4732efb7052d',
                              },
                              {
                                 list: 'Seat cushions are filled with a supportive blend of foam and poly fiber.',
                                 _id: '67c335b147eb4732efb7052e',
                              },
                              {
                                 list: 'Backrest is filled with a supportive blend of foam and poly fibers and back frame system is sustained by flexible elastic webbing.',
                                 _id: '67c335b147eb4732efb7052f',
                              },
                              {
                                 list: 'Two-button motion controls smoothly elevate footrests.',
                                 _id: '67c335b147eb4732efb70530',
                              },
                              {
                                 list: "Includes a 10.5' L cord and power motor. Electricity is required to recline.",
                                 _id: '67c335b147eb4732efb70531',
                              },
                              {
                                 list: 'The Kaz Collection is available in customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own.',
                                 _id: '67c335b147eb4732efb70532',
                              },
                              {
                                 list: 'We want you to love your Kaz as much as we do. We recommend ordering a material swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c335b147eb4732efb70533',
                              },
                           ],
                           content: '',
                           _id: '49a038fb-fa66-4afe-a215-705661a5352e',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Our Kaz Motion pieces are crafted with comfort in mind, from the luxurious artisan-crafted leather upholstery to smooth elevating footrests—and much more to adore. A modern complement to any seating area that brings both form and function, Kaz’s generous extra-wide plush cushions invite you to simply relax at the touch of a button.',
                           _id: 'da7567d7-413a-4cec-923e-cce4a9b6c189',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c335ea47eb4732efb7061e',
                              },
                              {
                                 list: 'Our artisan-crafted leathers can be easily maintained by spot-cleaning using a dry cloth to remove dust and dirt.',
                                 _id: '67c335ea47eb4732efb7061f',
                              },
                              {
                                 list: 'For long-term care, use an undyed cloth dampened with distilled water to wipe down your leather. This will help keep your upholstery looking its best by adding moisture back into the leather.',
                                 _id: '67c335ea47eb4732efb70620',
                              },
                              {
                                 list: 'Clean oil-based spills from leather by blotting with a clean, undyed, soft cloth. Oil should dissipate over time.',
                                 _id: '67c335ea47eb4732efb70621',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c335ea47eb4732efb70622',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c335ea47eb4732efb70623',
                              },
                              {
                                 list: 'Avoid using harsh cleaners or solvents, as these could leave marks or otherwise cause damage.',
                                 _id: '67c335ea47eb4732efb70624',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c335ea47eb4732efb70625',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c335ea47eb4732efb70626',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c335ea47eb4732efb70627',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c335ea47eb4732efb70628',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c335ea47eb4732efb70629',
                              },
                           ],
                           content: '',
                           _id: 'dab06f1e-2b8b-4053-a8f8-f7858c2468f3',
                        },
                     ],
                     dimensions: {
                        width: 96,
                        depth: 41,
                        height: 34,
                        weight: 238,
                        seatBackHeight: 21,
                        seatDepth: 26,
                        seatHeight: 19,
                        armHeight: 24,
                        _id: '67c3359447eb4732efb704c7',
                     },
                  },
                  {
                     name: 'amira daybed',
                     price: 33,
                     cancelled_price: 45,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740750163/arhaus_images/xtkbh5iesoagbzv9s8f1.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1740750163/arhaus_images/ierpmjuxt6wzx6unolhb.avif',
                        _id: '67c1bd53574814f6661ec593',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: 'b8c17163-2071-486a-b5ed-b5170470d06d',
                     options: [
                        {
                           option: 'Banks Fir',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 9,
                              _id: '67c1becd574814f6661ec5a6',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740750538/arhaus_images/gdgurkqbgwgciiel9aek.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740750539/arhaus_images/tcmbqbieay1xnjdpjriu.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740750540/arhaus_images/tdq6w1rxkmezibr87y6n.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1740750540/arhaus_images/aiqgaxbjp2mmxqtcebb2.webp',
                           ],
                           tags: ['performance', 'velvet'],
                           features:
                              'Soft and luxurious, velvets offer style and sophistication throughout the home. With a dense pile and soft luster that seems to glow from within, velvets saturate and enhance colors on any silhouette.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '82% POLYESTER, 18% COTTON',
                           _id: '46fd0e8e-d2a2-4867-a631-826ff4cf4504',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.',
                                 _id: '67c1c19f574814f6661ec5b2',
                              },
                              {
                                 list: 'Frames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.',
                                 _id: '67c1c19f574814f6661ec5b3',
                              },
                              {
                                 list: 'Seat frame system is supported by flexible elastic webbing.',
                                 _id: '67c1c19f574814f6661ec5b4',
                              },
                              {
                                 list: 'Seat cushions contain dense foam made from partially plant-based material, padded with poly fibers.',
                                 _id: '67c1c19f574814f6661ec5b5',
                              },
                              {
                                 list: 'Backrests are filled with a supportive blend of poly fibers.',
                                 _id: '67c1c19f574814f6661ec5b6',
                              },
                              {
                                 list: 'We want you to love your Amira as much as we do. We recommend ordering a swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c1c19f574814f6661ec5b7',
                              },
                              {
                                 list: 'The Amira Collection is available in customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own.',
                                 _id: '67c1c19f574814f6661ec5b8',
                              },
                           ],
                           content: '',
                           _id: '10aa67df-e0d9-462c-a73b-0d2bae30e55a',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Craftsman-built by artisans, our Amira Collection is channel-tufted in sumptuous velvet evoking a sense of timeless elegance. The juxtaposition of its modish curves and clean vertical lines offers a sophisticated silhouette perfect for any living space.',
                           _id: 'b4599bd3-b76b-4280-9c43-808ad9846d7e',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c1c5da574814f6661ec634',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c1c5da574814f6661ec635',
                              },
                              {
                                 list: 'Pieces upholstered in Banks Fir Performance Velvet fabric are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c1c5da574814f6661ec636',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c1c5da574814f6661ec637',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c1c5da574814f6661ec638',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c1c5da574814f6661ec639',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c1c5da574814f6661ec63a',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c1c5da574814f6661ec63b',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c1c5da574814f6661ec63c',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c1c5da574814f6661ec63d',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c1c5da574814f6661ec63e',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service',
                                 _id: '67c1c5da574814f6661ec63f',
                              },
                           ],
                           content: '',
                           _id: '3e0eab2f-bd03-41df-9c95-8931be7fac29',
                        },
                     ],
                     dimensions: {
                        width: 82,
                        depth: 33,
                        height: 32,
                        weight: 150,
                        seatBackHeight: 16,
                        seatDepth: 68,
                        seatHeight: 16,
                        armHeight: 23,
                        _id: '67c1c102574814f6661ec5ae',
                     },
                  },
               ],
            },
            {
               content: 'chairs',
               image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741973086/e9iqz0x2iv4a5vlbbot9_1_agrlqi.png',
               _id: 'a82562cc-1c0d-41c3-bbe8-510dca652766',
               products: [
                  {
                     name: 'Rowland Leather High-Back Motion Recliner',
                     price: 43,
                     cancelled_price: 53,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741086639/arhaus_images/wd28p8fqke4niwddjvoq.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741086639/arhaus_images/xzqvgr8c89edjagw4ril.avif',
                        _id: '67c6dfb14798472e1f098d94',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: '08d7321e-fd79-40ed-81f6-e155030e5d09',
                     options: [
                        {
                           option: 'lanie camel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c6ef054798472e1f09b4bb',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090561/arhaus_images/iwmkjs8drtxjt9om6jxc.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090563/arhaus_images/mttita9tiwqfoufldc91.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090563/arhaus_images/qcbps4sybi0gve01szgs.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090563/arhaus_images/vw3tghcken9rliocxmjk.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090563/arhaus_images/nsztzl6zcurc93gpqdxl.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: 'fd48a467-d857-41ae-857f-c24d04f1ed7b',
                        },
                        {
                           option: 'lanie taupe',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 2,
                              _id: '67c6ef874798472e1f09b6c2',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090691/arhaus_images/hnabnokcb6or0vdz6knv.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090692/arhaus_images/ony91dbomi3fl9f6zltd.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090693/arhaus_images/rvmph8m0nlz4mcyzxfgo.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090693/arhaus_images/awmds1hvfvrzi5v0zp55.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090693/arhaus_images/e759lwl9owsjg1doqwr1.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: 'c9679add-3794-4a98-b976-c7b35657cdf6',
                        },
                        {
                           option: 'lanie graphite',
                           stock: {
                              in_stock: false,
                              when_in_stock: '2025-04-02',
                              stock_count: 0,
                              _id: '67c6f07f4798472e1f09b81c',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090940/arhaus_images/bnpt64brkgcwjqlqthex.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090941/arhaus_images/zdgzgpnkc84dyrklyrnp.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090942/arhaus_images/z7e3h09szimmelmxogiz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090942/arhaus_images/yfys04abfabflts1hi4f.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090942/arhaus_images/dgg5awxhisb47nenknuu.webp',
                           ],
                           tags: [],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: '6e869a8e-614b-4d75-aef4-1df4c98f007b',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Craftsman-built frames are constructed using solid, reinforced hardwood for lasting strength and stability.',
                                 _id: '67c6f1164798472e1f09bb7d',
                              },
                              {
                                 list: 'Frame support system features no-sag springs made from recycled steel sustained by flexible elastic webbing.',
                                 _id: '67c6f1164798472e1f09bb7e',
                              },
                              {
                                 list: 'Seat cushion contain dense foam padded with sterilized down and feathers.',
                                 _id: '67c6f1164798472e1f09bb7f',
                              },
                              {
                                 list: 'Backrest is filled with a supportive blend of foam and poly fibers and back frame system is sustained by flexible elastic webbing.',
                                 _id: '67c6f1164798472e1f09bb80',
                              },
                              {
                                 list: 'Two-button motion controls smoothly recline backrests and elevate footrests. Please allow 12" of clearance behind to properly recline.',
                                 _id: '67c6f1164798472e1f09bb81',
                              },
                              {
                                 list: "Includes a 10.5' L cord and power motor. Electricity is required to recline.",
                                 _id: '67c6f1164798472e1f09bb82',
                              },
                              {
                                 list: 'The Rowland Collection is available in multiple pieces and customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own Rowland.',
                                 _id: '67c6f1164798472e1f09bb83',
                              },
                              {
                                 list: 'We want you to love your Rowland as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c6f1164798472e1f09bb84',
                              },
                           ],
                           content: '',
                           _id: '3122e9ba-8302-4088-a9b5-979c041b5337',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Dressed in rich, artisan-finished leather, our Rowland Recliner creates a casual-yet-refined seat perfect for putting your feet up. Sink-into cushions feature flanged edges for a relaxed look, while two-button motion controls allow smooth reclining and complete comfort.',
                           _id: 'f9843509-4f0e-4c1a-876d-9db0054eeb20',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c6f1474798472e1f09be57',
                              },
                              {
                                 list: 'Our artisan-crafted leathers can be easily maintained by spot-cleaning using a dry cloth to remove dust and dirt.',
                                 _id: '67c6f1474798472e1f09be58',
                              },
                              {
                                 list: 'For long-term care, use an undyed cloth dampened with distilled water to wipe down your leather. This will help keep your upholstery looking its best by adding moisture back into the leather.',
                                 _id: '67c6f1474798472e1f09be59',
                              },
                              {
                                 list: 'Clean oil-based spills from leather by blotting with a clean, undyed, soft cloth. Oil should dissipate over time.',
                                 _id: '67c6f1474798472e1f09be5a',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c6f1474798472e1f09be5b',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c6f1474798472e1f09be5c',
                              },
                              {
                                 list: 'Avoid using harsh cleaners or solvents, as these could leave marks or otherwise cause damage.',
                                 _id: '67c6f1474798472e1f09be5d',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone.',
                                 _id: '67c6f1474798472e1f09be5e',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c6f1474798472e1f09be5f',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c6f1474798472e1f09be60',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c6f1474798472e1f09be61',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c6f1474798472e1f09be62',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c6f1474798472e1f09be63',
                              },
                           ],
                           content: '',
                           _id: '1440c8e8-b743-4a7b-acaa-9d92dba3b2e0',
                        },
                     ],
                     dimensions: {
                        width: 45,
                        depth: 44,
                        height: 39,
                        weight: 174,
                        seatBackHeight: 17,
                        seatDepth: 26,
                        seatHeight: 19,
                        armHeight: 25,
                        _id: '67c6f0f44798472e1f09ba23',
                     },
                  },
                  {
                     name: 'Fresno swivel chairs',
                     price: 26,
                     cancelled_price: 32,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741086793/arhaus_images/rblwipapmitr1dl7wgwz.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741086794/arhaus_images/tshe9vgeonqsionncxry.avif',
                        _id: '67c6e04b4798472e1f099047',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '1d534e3f-5d08-4d0f-b971-310b6f8703d3',
                     options: [
                        {
                           option: 'promise pacific',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c6f4764798472e1f09c779',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741091953/arhaus_images/rkqk3j7n18bokbrsqvny.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741091955/arhaus_images/nuczyeo1mjeudawkrqqz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741091956/arhaus_images/ltihrjrcgcm6ayt3sujo.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741091956/arhaus_images/efocba7ly5uvri0wqyze.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741091956/arhaus_images/znd9l0bno8jsr03pz8dy.webp',
                           ],
                           tags: ['boucles', 'washables'],
                           features:
                              'Bouclés are crafted from looped yarn and as a result, they offer plush comfort and an iconic, nubby look. Highly textured and rich in visual appeal, bouclés make spaces cozy and more inviting.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '100% POLYESTER',
                           _id: '2e35382c-61f8-467e-be67-9298b0ec1675',
                        },
                        {
                           option: 'oaks pacific',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 3,
                              _id: '67c6f5124798472e1f09c8fd',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092110/arhaus_images/daioprhddbeupizkg8wk.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092112/arhaus_images/krjm74pq4m7tyi4b6pzz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092112/arhaus_images/oey5dmvz6houvzahmomg.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092113/arhaus_images/jkygk0d3v4isqgekfiiy.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092113/arhaus_images/gr8uvim8vfjzwxu2zxdb.webp',
                           ],
                           tags: ['crypton'],
                           features:
                              'Featuring alluring colors and intricate patterns woven into the fabric, jacquards bring elevated dimension to spaces throughout the home.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics:
                              '74% BLEACH CLEANABLE POLYESTER, 26% POLYESTER',
                           _id: 'a67a50df-1d03-49cc-a8e5-a6270a5d2f9b',
                        },
                        {
                           option: 'burbank natural',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c6f6ef4798472e1f09d6a4',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092586/arhaus_images/pvt6rrbvcou75c7a7key.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092587/arhaus_images/d1m8r0n3k3bexlavfw2v.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092588/arhaus_images/wp0iqhcezws8d8nx1f7p.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092588/arhaus_images/xlsezesbjy2g5xxzxj35.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092588/arhaus_images/j7lbwevolhr5ala7frmr.webp',
                           ],
                           tags: [
                              'boucle',
                              'performance',
                              'washable',
                              'textured weave',
                           ],
                           features:
                              'Bouclés are crafted from looped yarn and as a result, they offer plush comfort and an iconic, nubby look. Highly textured and rich in visual appeal, bouclés make spaces cozy and more inviting.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '54% POLYESTER, 46% ACRYLIC',
                           _id: '80dbb240-77de-4a01-9d9d-78a2a870c577',
                        },
                        {
                           option: 'banks taupe',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 2,
                              _id: '67c6f7e64798472e1f09d828',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092834/arhaus_images/tzt55y2vxiz4hbplzfuv.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092835/arhaus_images/wkhiwn8oezbcywalnjga.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092836/arhaus_images/gxy97tsfsdkfeybiqk24.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092836/arhaus_images/xvvdxy40gd110kberrc9.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741092836/arhaus_images/ienvq2ldn8s70fiw9esq.webp',
                           ],
                           tags: ['velvet'],
                           features:
                              'Soft and luxurious, velvets offer style and sophistication throughout the home. With a dense pile and soft luster, velvets saturate and enhance colors in both soft and bold applications.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '82% POLYESTER, 18% COTTON',
                           _id: 'bb03d9d8-dea0-46b6-bc22-357e3778ebae',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.',
                                 _id: '67c6f8674798472e1f09dbf2',
                              },
                              {
                                 list: 'Frames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.',
                                 _id: '67c6f8674798472e1f09dbf3',
                              },
                              {
                                 list: 'Frame support system features flexible elastic webbing.',
                                 _id: '67c6f8674798472e1f09dbf4',
                              },
                              {
                                 list: 'Seat cushions contain dense foam made from partially plant-based material, padded with poly fibers.',
                                 _id: '67c6f8674798472e1f09dbf5',
                              },
                              {
                                 list: 'Backrests are filled with a supportive blend of poly fibers and back frame system is sustained by flexible elastic webbing.',
                                 _id: '67c6f8674798472e1f09dbf6',
                              },
                              {
                                 list: 'Solid steel swivel mechanism allows 360-degree rotation.',
                                 _id: '67c6f8674798472e1f09dbf7',
                              },
                           ],
                           content: '',
                           _id: '61024ef1-3a6a-4cc2-8e8e-ca4e90d23022',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Modern style meets exceptional comfort in our Fresno Swivel Chair. Its curved, orb shape is expertly upholstered in a textural, knubby boucle fabric to make a warm and welcoming statement among any seating arrangement. Or, craft a custom look that perfectly matches your home’s aesthetic.',
                           _id: 'ded3de22-9006-4f1b-ae18-85ff6f1ba279',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c6f89d4798472e1f09df16',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c6f89d4798472e1f09df17',
                              },
                              {
                                 list: 'Pieces upholstered in Burbank fabrics are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c6f89d4798472e1f09df18',
                              },
                              {
                                 list: 'Pieces upholstered in our Tarek fabrics are code SW: Spot-clean using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used.',
                                 _id: '67c6f89d4798472e1f09df19',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c6f89d4798472e1f09df1a',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c6f89d4798472e1f09df1b',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c6f89d4798472e1f09df1c',
                              },
                              {
                                 list: 'Pile may need brushed with a non-metallic, soft-bristle brush to restore appearance.',
                                 _id: '67c6f89d4798472e1f09df1d',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c6f89d4798472e1f09df1e',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67c6f89d4798472e1f09df1f',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c6f89d4798472e1f09df20',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c6f89d4798472e1f09df21',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c6f89d4798472e1f09df22',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c6f89d4798472e1f09df23',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c6f89d4798472e1f09df24',
                              },
                           ],
                           content: '',
                           _id: 'fd3cdbf2-4060-4243-afa1-97e84ee6422e',
                        },
                     ],
                     dimensions: {
                        width: 36,
                        depth: 37,
                        height: 32,
                        weight: 89,
                        seatBackHeight: 14,
                        seatDepth: 25,
                        seatHeight: 18,
                        armHeight: 25,
                        _id: '67c6f83e4798472e1f09da6e',
                     },
                  },
                  {
                     name: 'fisher nubuck leather chair',
                     price: 27,
                     cancelled_price: 30,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741086975/arhaus_images/msoiuwxviw8zj1xira1c.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741086975/arhaus_images/g88cabnbk7gt8odg8b9f.avif',
                        _id: '67c6e1014798472e1f0993a8',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: '87db6d1e-1866-4ca7-b45b-32fa67331465',
                     options: [
                        {
                           option: 'PIEDMONT COCOA',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 3,
                              _id: '67c6fafa4798472e1f09eae1',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741093621/arhaus_images/iveea8vqtjw5fdm0yae6.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741093623/arhaus_images/ayunxku9pefkqwewg6mz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741093623/arhaus_images/ldnhrsrnfopekjt30gpy.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741093623/arhaus_images/tzjuc4tdmp4qpoi83pfo.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741093623/arhaus_images/k08whl8fto02dxgiunxw.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: 'c54825b2-f26e-4a13-80c3-ec449db9a182',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Frames are craftsman-built in Cambodia using red oak wood with a mocha finish.',
                                 _id: '67c6fb784798472e1f09ee3d',
                              },
                              {
                                 list: 'Our nubuck leather is a buffed and sanded-down top-grain leather that offers a sumptuous, velvet-like texture and incredible durability.',
                                 _id: '67c6fb784798472e1f09ee3e',
                              },
                              {
                                 list: 'Frame support system features no-sag springs made from recycled steel.',
                                 _id: '67c6fb784798472e1f09ee3f',
                              },
                              {
                                 list: 'Seat cushions contain dense foam padded with a blend of sterilized down and feathers.',
                                 _id: '67c6fb784798472e1f09ee40',
                              },
                              {
                                 list: 'Backrests are filled with a soft blend of foam, sterilized down, and feathers, and back frame system is supported by flexible elastic webbing.',
                                 _id: '67c6fb784798472e1f09ee41',
                              },
                           ],
                           content: '',
                           _id: '7a347adb-58a5-460f-abe8-bae83c20c8ee',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Craftsman-built by artisans in Cambodia, our Fisher Chair’s uniquely shaped silhouette offers stunning graining detail paired with brass accents on its tapered arms and legs. Meticulously crafted to imitate a vintage aesthetic, Fisher’s open-back frame exposes the soft, textural fabric creating a visual interest perfect for open-seating arrangements.',
                           _id: '8d11a171-feaa-4e08-ac9a-d612609af800',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c6fbab4798472e1f09f28c',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c6fbab4798472e1f09f28d',
                              },
                              {
                                 list: 'Pieces upholstered in Burbank fabrics are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c6fbab4798472e1f09f28e',
                              },
                              {
                                 list: 'Pieces upholstered in our Tarek fabrics are code SW: Spot-clean using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used.',
                                 _id: '67c6fbab4798472e1f09f28f',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c6fbab4798472e1f09f290',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c6fbab4798472e1f09f291',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c6fbab4798472e1f09f292',
                              },
                              {
                                 list: 'Pile may need brushed with a non-metallic, soft-bristle brush to restore appearance.',
                                 _id: '67c6fbab4798472e1f09f293',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c6fbab4798472e1f09f294',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67c6fbab4798472e1f09f295',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c6fbab4798472e1f09f296',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c6fbab4798472e1f09f297',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c6fbab4798472e1f09f298',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c6fbab4798472e1f09f299',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c6fbab4798472e1f09f29a',
                              },
                           ],
                           content: '',
                           _id: '53f89c2f-027f-43eb-8f80-ac1ac0ffb634',
                        },
                     ],
                     dimensions: {
                        width: 29,
                        depth: 35,
                        height: 35,
                        weight: 53,
                        seatBackHeight: 25,
                        seatDepth: 21,
                        seatHeight: 21,
                        armHeight: 24,
                        _id: '67c6fb484798472e1f09ec8f',
                     },
                  },
                  {
                     name: 'emory chair',
                     price: 30,
                     cancelled_price: 37,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741087126/arhaus_images/r9qqzkneh1rabbujjflv.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741087126/arhaus_images/udp3bdcbzivkxvsqvuds.avif',
                        _id: '67c6e1984798472e1f099709',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: 'bcdb65cf-ca7d-4d6b-bad1-16348d45fff2',
                     options: [
                        {
                           option: 'cassie ivory',
                           stock: {
                              in_stock: false,
                              when_in_stock: '2025-03-14',
                              stock_count: 0,
                              _id: '67c6fcd64798472e1f09fada',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094098/arhaus_images/hescil1njuojxkdpjjdd.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094099/arhaus_images/exxoyayvayzu53kmoihi.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094101/arhaus_images/r9uejy4yga4oizizi4yn.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094100/arhaus_images/ibmiisfv36ndnmwsglxc.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094101/arhaus_images/cqyxyfxblppt6s2dml2t.webp',
                           ],
                           tags: ['classic weave', 'linen'],
                           features:
                              'Naturally beautiful and sustainably crafted from flax plants, linen offers lightweight breathability and relaxed luxury. These fabrics are strong, supple to the touch, and offer stunning lustre and drape.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '78% POLYESTER, 22% COTTON',
                           _id: '2df7dd46-11cd-4394-a7f7-606e3a5265d6',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Frames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.',
                                 _id: '67c6fda94798472e1f0a005e',
                              },
                              {
                                 list: 'Frames feature recycled-steel Flexolator suspension systems beneath seat cushions for evenly dispersed, firm yet flexible comfort.',
                                 _id: '67c6fda94798472e1f0a005f',
                              },
                              {
                                 list: 'Backrests are sustained by flexible webbing.',
                                 _id: '67c6fda94798472e1f0a0060',
                              },
                              {
                                 list: 'Seat-cushion cores consist of dense, eco-friendly foam made partly from sustainable, plant-based material.',
                                 _id: '67c6fda94798472e1f0a0061',
                              },
                              {
                                 list: 'Seat cushions are padded with sterilized down, feathers, and poly-fiber to create a relaxing, “sink-into” feel.',
                                 _id: '67c6fda94798472e1f0a0062',
                              },
                              {
                                 list: 'Cushions are wrapped in cotton, down-proof casings to maintain their shape. Channel-stitching keeps padding in place for added resilience.',
                                 _id: '67c6fda94798472e1f0a0063',
                              },
                              {
                                 list: 'Toss pillows are abundantly stuffed with polyester fibers and encased in down-proof covers.',
                                 _id: '67c6fda94798472e1f0a0064',
                              },
                              {
                                 list: 'All Emory pieces are available with both fitted fabric and leather upholstery by special order.',
                                 _id: '67c6fda94798472e1f0a0065',
                              },
                           ],
                           content: '',
                           _id: '92cf48de-a990-4d6c-905e-d56b2a358051',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'From quiet afternoons to evenings of entertaining friends, our Emory collection manages to deliver irresistible comfort with a fresh, fashion-forward feel. A clean, modern silhouette merges with easy-to-clean fabrics to deliver a timeless look that remains smart and stylish through years of daily use. Handcrafted by skilled upholstery artisans, this cozy collection has a clean, contemporary edge and versatility that will complement any interior.',
                           _id: '62e509c1-d7e2-4bc6-ab52-61c1952a916c',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c6fdea4798472e1f0a0430',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, certain standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c6fdea4798472e1f0a0431',
                              },
                              {
                                 list: 'Pieces upholstered in Cassie Ivory fabrics are code SW: Spot-clean using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used.',
                                 _id: '67c6fdea4798472e1f0a0432',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c6fdea4798472e1f0a0433',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c6fdea4798472e1f0a0434',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c6fdea4798472e1f0a0435',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67c6fdea4798472e1f0a0436',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c6fdea4798472e1f0a0437',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c6fdea4798472e1f0a0438',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c6fdea4798472e1f0a0439',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c6fdea4798472e1f0a043a',
                              },
                           ],
                           content: '',
                           _id: '067b6443-0ff4-4c27-9ba0-02c46cd2fb75',
                        },
                     ],
                     dimensions: {
                        width: 53,
                        depth: 46,
                        height: 36,
                        weight: 123,
                        seatBackHeight: 18,
                        seatDepth: 29,
                        seatHeight: 18,
                        armHeight: 26,
                        _id: '67c6fd764798472e1f09fe88',
                     },
                  },
                  {
                     name: 'Kipton motion recliner',
                     price: 43,
                     cancelled_price: 45,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741087562/arhaus_images/txrd2awpwlat2brd0g8z.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741087561/arhaus_images/ynin51zywbl0sk20xhrt.avif',
                        _id: '67c6e34b4798472e1f0999bc',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '606eb3e6-9d18-4e24-82a1-699599c0e0a5',
                     options: [
                        {
                           option: 'plush linen',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c6fef04798472e1f0a0d25',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094635/arhaus_images/vl6hhro4s6jnknu31vgv.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094637/arhaus_images/jseyn47rsycvl0swuns5.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094638/arhaus_images/rsw4q6ipimwafrbl5lay.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094638/arhaus_images/fsymk4eki7wzfsnfwuai.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094638/arhaus_images/kcjfxbdua5qw0qqcxl7n.webp',
                           ],
                           tags: ['textured weave'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '100% POLYESTER',
                           _id: '9bbafa22-7166-4a7a-9604-a359e9593dda',
                        },
                        {
                           option: 'Nomad sage',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67c6ffae4798472e1f0a101f',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094827/arhaus_images/dwfwzhtz0hd5f6fovmjn.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741094829/arhaus_images/njbkrqbvytacadzpvumg.webp',
                           ],
                           tags: ['classic weave', 'crypton'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '92% POLYESTER, 8% LINEN',
                           _id: '926d06b8-4c70-42e6-a9dc-9ec0a53cea27',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.',
                                 _id: '67c700474798472e1f0a1417',
                              },
                              {
                                 list: 'Our Performance Fabrics are extremely durable and resist stains but remain beautiful and soft to the touch.',
                                 _id: '67c700474798472e1f0a1418',
                              },
                              {
                                 list: 'Our sustainably certified Crypton® Home Performance Fabric is easy to clean, soft, and durable—engineered with stain-, odor-, and moisture-resistant technology.',
                                 _id: '67c700474798472e1f0a1419',
                              },
                              {
                                 list: 'Frames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.',
                                 _id: '67c700474798472e1f0a141a',
                              },
                              {
                                 list: 'Frame support system features no-sag springs made from recycled steel.',
                                 _id: '67c700474798472e1f0a141b',
                              },
                              {
                                 list: 'Seat cushions contain dense foam made from partially plant-based material, padded with sterilized down and feathers.',
                                 _id: '67c700474798472e1f0a141c',
                              },
                              {
                                 list: 'Seat cushions also contain flexible, interconnected coils made from recycled steel.',
                                 _id: '67c700474798472e1f0a141d',
                              },
                              {
                                 list: 'Backrests are filled with resilient memory fiber and back frame system is supported by flexible elastic webbing.',
                                 _id: '67c700474798472e1f0a141e',
                              },
                              {
                                 list: 'Two-button motion controls smoothly recline backrests and elevate footrests.',
                                 _id: '67c700474798472e1f0a141f',
                              },
                              {
                                 list: "Includes a 8.5' L cord and power motor. Electricity is required to recline.",
                                 _id: '67c700474798472e1f0a1420',
                              },
                              {
                                 list: 'The Kipton Collection is available in multiple pieces and customizable fabrics, leathers, and slipcovers. Call, email, or live chat with our Design Team to create your own Kipton.',
                                 _id: '67c700474798472e1f0a1421',
                              },
                              {
                                 list: 'We want you to love your Kipton as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c700474798472e1f0a1422',
                              },
                           ],
                           content: '',
                           _id: '9478b61b-cca0-4dff-9e80-aebee131f4ce',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'The one that feels like it was made for you—because it was. Our Kipton Collection is where clean lines meet maximum comfort, featuring a frame crafted by artisans from sustainably sourced hardwood laminate. Kipton’s plush cushions and relaxed style blend seamlessly with classic and contemporary styles.',
                           _id: '4bbcf142-887d-499a-8f2b-7a6a89a55173',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c700844798472e1f0a1953',
                              },
                              {
                                 list: 'Pieces upholstered in Crypton® Home Performance Fabrics can be spot-cleaned using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used. Do not bleach.',
                                 _id: '67c700844798472e1f0a1954',
                              },
                              {
                                 list: 'For tough stains, rub with a soft brush and blot with a clean towel, rinsing thoroughly; let air-dry. Never scrub.',
                                 _id: '67c700844798472e1f0a1955',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c700844798472e1f0a1956',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c700844798472e1f0a1957',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c700844798472e1f0a1958',
                              },
                              {
                                 list: 'To help prevent fabrics from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c700844798472e1f0a1959',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c700844798472e1f0a195a',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c700844798472e1f0a195b',
                              },
                           ],
                           content: '',
                           _id: 'f1469a06-0f94-4a72-87b5-299b071c7854',
                        },
                     ],
                     dimensions: {
                        width: 38,
                        depth: 39,
                        height: 37,
                        weight: 121,
                        seatBackHeight: 17,
                        seatDepth: 22,
                        seatHeight: 20,
                        armHeight: 23,
                        _id: '67c700244798472e1f0a121b',
                     },
                  },
                  {
                     name: 'savannah swivel chair with fringe',
                     price: 29,
                     cancelled_price: 32,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741087850/arhaus_images/ljb4naxvhdylto8a7fao.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741087850/arhaus_images/jvcbclbbif8uiprtl1xv.avif',
                        _id: '67c6e46b4798472e1f099c6f',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '601734de-8194-428a-9fc3-339fdfb15983',
                     options: [
                        {
                           option: 'lucino navy',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c701584798472e1f0a21f0',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741095252/arhaus_images/lalqngsslsqeqor4psqa.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741095253/arhaus_images/nixdv2j2fxpszlshrv8e.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741095254/arhaus_images/i5jrakvltc6mtppejr64.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741095254/arhaus_images/gc9vgnxgflh0eoq3hhaj.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741095254/arhaus_images/icxzm4usfceykto9pmfc.webp',
                           ],
                           tags: ['classic weave'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '100% ACRYLIC',
                           _id: '414429d0-5ed1-446a-a102-e7bfbf5e1880',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.',
                                 _id: '67c7028f4798472e1f0a274f',
                              },
                              {
                                 list: 'Craftsman-built frames are constructed using solid, reinforced hardwood for lasting strength and stability.',
                                 _id: '67c7028f4798472e1f0a2750',
                              },
                              {
                                 list: 'Solid steel swivel mechanism allows for 360-degree rotation.',
                                 _id: '67c7028f4798472e1f0a2751',
                              },
                              {
                                 list: 'Frame support system features flexible elastic webbing.',
                                 _id: '67c7028f4798472e1f0a2752',
                              },
                              {
                                 list: 'Seats and backrests are filled with a supportive blend of foam and poly fibers.',
                                 _id: '67c7028f4798472e1f0a2753',
                              },
                              {
                                 list: 'This collection is available in multiple pieces and customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own Savannah.',
                                 _id: '67c7028f4798472e1f0a2754',
                              },
                              {
                                 list: 'We want you to love your Savannah as much as we do. We recommend ordering a material swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c7028f4798472e1f0a2755',
                              },
                           ],
                           content: '',
                           _id: '8dbd0508-9097-4292-8678-21e2ad66d48c',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Defined by its bold, vintage-inspired style, our Savannah Collection makes a statement with its graceful silhouette. Adorned by a fashionable fringe base or bold contrast welt detailing, Savannah’s understated curves and plush upholstery envelope you in unparalleled comfort and style.',
                           _id: 'ab4ba8ea-c2f9-44fd-923b-a5687fd1344c',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c702b84798472e1f0a2cd6',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c702b84798472e1f0a2cd7',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c702b84798472e1f0a2cd8',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c702b84798472e1f0a2cd9',
                              },
                              {
                                 list: 'Pieces upholstered in Lucino Navy, Lucino Cashmere, and Cherie Madder fabrics are cleaning code S: Spot clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c702b84798472e1f0a2cda',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c702b84798472e1f0a2cdb',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c702b84798472e1f0a2cdc',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c702b84798472e1f0a2cdd',
                              },
                              {
                                 list: 'To help prevent fabrics from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c702b84798472e1f0a2cde',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c702b84798472e1f0a2cdf',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c702b84798472e1f0a2ce0',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c702b84798472e1f0a2ce1',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c702b84798472e1f0a2ce2',
                              },
                           ],
                           content: '',
                           _id: 'd1b70ef5-a70c-49e9-bdcd-c687be0c0290',
                        },
                     ],
                     dimensions: {
                        width: 29,
                        depth: 29,
                        height: 31,
                        weight: 55,
                        seatBackHeight: 13,
                        seatDepth: 21,
                        seatHeight: 18,
                        armHeight: 23,
                        _id: '67c7023b4798472e1f0a2529',
                     },
                  },
                  {
                     name: 'amira swivel chair',
                     price: 29,
                     cancelled_price: 34,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741088218/arhaus_images/uq5oqfkgqeinkeql11t2.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741088218/arhaus_images/lxthevebhehdx9ocv7yw.avif',
                        _id: '67c6e5db4798472e1f099fcf',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: 'b94c0972-5208-463d-9203-ad144374b3d6',
                     options: [
                        {
                           option: 'Banks fir',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c7089e4798472e1f0a3bda',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741097113/arhaus_images/ofkgw2p7rymrl8vkpgj8.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741097115/arhaus_images/onlussknmonyy0get2gb.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741097116/arhaus_images/aazhnk64zqybhkhc6stl.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741097115/arhaus_images/vynfj35enp1vjfdqfydr.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741097116/arhaus_images/lgzfmhru0nlrgppnkapr.webp',
                           ],
                           tags: ['velvet', 'performance'],
                           features:
                              'Soft and luxurious, velvets offer style and sophistication throughout the home. With a dense pile and soft luster that seems to glow from within, velvets saturate and enhance colors on any silhouette.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only',
                           fabrics: '82% POLYESTER, 18% COTTON',
                           _id: '99caf7d8-9af9-4553-ba0f-3e7a2c776cb7',
                        },
                        {
                           option: 'avery blush',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c70c8425069d456e971c0d',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098111/arhaus_images/iu8o3t94xjfj9bme4k33.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098113/arhaus_images/iphwddsdtjqyebvlyta0.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098114/arhaus_images/zl8b7uebwq3n5jvwyr7h.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098114/arhaus_images/vids4rzywfryyy7qatch.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098114/arhaus_images/shhfzw9yfm4by7ygkqmi.webp',
                           ],
                           tags: ['chenille', 'performance'],
                           features:
                              'Chenille Performance Fabrics are extremely durable and resist stains but remain beautiful and soft to the touch.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '100% RECYCLED POLYESTER',
                           _id: 'f89f2fcb-417a-4269-9226-20b51ddf1c10',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.',
                                 _id: '67c70cfb25069d456e9720a9',
                              },
                              {
                                 list: 'Frames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.',
                                 _id: '67c70cfb25069d456e9720aa',
                              },
                              {
                                 list: 'Our Avery Blush Performance Fabric is extremely durable and resist stains but remain beautiful and soft to the touch.',
                                 _id: '67c70cfb25069d456e9720ab',
                              },
                              {
                                 list: 'Seat frame system is supported by flexible elastic webbing.',
                                 _id: '67c70cfb25069d456e9720ac',
                              },
                              {
                                 list: 'Seat cushions contain dense foam made from partially plant-based material, padded with poly fibers.',
                                 _id: '67c70cfb25069d456e9720ad',
                              },
                              {
                                 list: 'Backrests are filled with a supportive blend of poly fibers.',
                                 _id: '67c70cfb25069d456e9720ae',
                              },
                              {
                                 list: 'Swivel mechanism allows for 360-degree rotation.',
                                 _id: '67c70cfb25069d456e9720af',
                              },
                              {
                                 list: 'We want you to love your Amira as much as we do. We recommend ordering a swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c70cfb25069d456e9720b0',
                              },
                              {
                                 list: 'The Amira Collection is available in customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own.',
                                 _id: '67c70cfb25069d456e9720b1',
                              },
                           ],
                           content: '',
                           _id: '2feeecf6-1f0d-4da5-bd11-27628a0f8bbb',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Craftsman-built by artisans, our Amira Collection is channel-tufted in sumptuous velvet evoking a sense of timeless elegance. The juxtaposition of its modish curves and clean vertical lines offers a sophisticated silhouette perfect for any living space.',
                           _id: '9f9d0603-30ac-4028-b11a-995094d5ae44',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c70d2b25069d456e9726a0',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c70d2b25069d456e9726a1',
                              },
                              {
                                 list: 'Pieces upholstered in Banks Fir Performance Velvet fabric are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c70d2b25069d456e9726a2',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c70d2b25069d456e9726a3',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c70d2b25069d456e9726a4',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c70d2b25069d456e9726a5',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c70d2b25069d456e9726a6',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c70d2b25069d456e9726a7',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c70d2b25069d456e9726a8',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c70d2b25069d456e9726a9',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c70d2b25069d456e9726aa',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c70d2b25069d456e9726ab',
                              },
                           ],
                           content: '',
                           _id: 'b6efb18f-6318-42e8-80c7-b229522a922e',
                        },
                     ],
                     dimensions: {
                        width: 43,
                        depth: 33,
                        height: 32,
                        weight: 95,
                        seatBackHeight: 16,
                        seatDepth: 22,
                        seatHeight: 16,
                        armHeight: 29,
                        _id: '67c70ce625069d456e971e5b',
                     },
                  },
                  {
                     name: 'Bourne leather chair',
                     price: 35,
                     cancelled_price: 42,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741089373/arhaus_images/v2zzvfog1qucj9kwvyxi.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741089373/arhaus_images/jqkh5faojhcqmudo3sji.avif',
                        _id: '67c6ea5f4798472e1f09a537',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: '078e07dc-8dda-47cb-b42f-d57d1f6569f6',
                     options: [
                        {
                           option: 'Lukas pecan',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c70df125069d456e973088',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098477/arhaus_images/oy5dwfjgaztaacpxijmf.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098479/arhaus_images/nvuhbs1md13zqlppv9hk.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098479/arhaus_images/jvaltmy58if9d2s3lnfe.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098479/arhaus_images/kuoapqogdbhfb0vkfe0l.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098479/arhaus_images/buy54atmc5iryxnzbbw7.webp',
                           ],
                           tags: [],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: 'f75344bf-1ed8-4c68-a5a0-82bb79fcaf3e',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Selected from the highest quality hides in the world, our leathers are hand-finished to accentuate their natural color variations, distinct textures, and other unique features.',
                                 _id: '67c70e6c25069d456e9736b4',
                              },
                              {
                                 list: 'Frame support system features flexible elastic webbing.',
                                 _id: '67c70e6c25069d456e9736b5',
                              },
                              {
                                 list: 'Seat cushions contain dense foam made from partially plant-based material, padded with resilient memory fibers.',
                                 _id: '67c70e6c25069d456e9736b6',
                              },
                              {
                                 list: 'Backrests are filled with a supportive blend of foam and poly fibers.',
                                 _id: '67c70e6c25069d456e9736b7',
                              },
                              {
                                 list: 'This collection is available in customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own Bourne.',
                                 _id: '67c70e6c25069d456e9736b8',
                              },
                              {
                                 list: 'We want you to love your Bourne as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c70e6c25069d456e9736b9',
                              },
                           ],
                           content: '',
                           _id: '2c5903f6-4eef-49c8-93a2-1edb7ac41fee',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Inspired by mid-century modern design, our Bourne Collection is simple, sophisticated, and stylish. Featuring slightly flared arms, subtle biscuit tufting, and a low-profile silhouette, Bourne offers refined comfort perfect for any aesthetic.',
                           _id: '5efb638d-b49a-4c50-9a78-6fc7f61591fd',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c70ea425069d456e973bc0',
                              },
                              {
                                 list: 'Our artisan-crafted leathers can be easily maintained by spot-cleaning using a dry cloth to remove dust and dirt.',
                                 _id: '67c70ea425069d456e973bc1',
                              },
                              {
                                 list: 'For long-term care, use an undyed cloth dampened with distilled water to wipe down your leather. This will help keep your upholstery looking its best by adding moisture back into the leather.',
                                 _id: '67c70ea425069d456e973bc2',
                              },
                              {
                                 list: 'Clean oil-based spills from leather by blotting with a clean, undyed, soft cloth. Oil should dissipate over time.',
                                 _id: '67c70ea425069d456e973bc3',
                              },
                              {
                                 list: 'Spot-clean other liquid spills by blotting with clear, mild soap and distilled water. Follow by wiping the area with distilled water. Use a clean, undyed, soft, and absorbent cloth. Avoid scrubbing. Allow to air-dry.',
                                 _id: '67c70ea425069d456e973bc4',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c70ea425069d456e973bc5',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c70ea425069d456e973bc6',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c70ea425069d456e973bc7',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c70ea425069d456e973bc8',
                              },
                           ],
                           content: '',
                           _id: '3f077579-4591-4142-95d1-446b6ee30e05',
                        },
                     ],
                     dimensions: {
                        width: 34,
                        depth: 36,
                        height: 33,
                        weight: 60,
                        seatBackHeight: 16,
                        seatDepth: 22,
                        seatHeight: 17,
                        armHeight: 23,
                        _id: '67c70e4e25069d456e973300',
                     },
                  },
                  {
                     name: 'bowan leather swivel chair',
                     price: 39,
                     cancelled_price: 45,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741089460/arhaus_images/odhowqg8pu0mzptmxsay.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741089460/arhaus_images/qhxvmgitfdwzcoee1mxf.avif',
                        _id: '67c6eab64798472e1f09a73d',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: 'dfe12b3b-896a-4d6d-a6bb-4e510e8ffc89',
                     options: [
                        {
                           option: 'Leigh parchment',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 3,
                              _id: '67c70f6525069d456e97461d',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098849/arhaus_images/lkt2gxno7nlzbgef93jq.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098851/arhaus_images/drzyijemaqnvw9mmiepz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098852/arhaus_images/a21k2gljsbrry2ubpvgw.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098851/arhaus_images/eah4gkny4p1g6gjdyt0v.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741098851/arhaus_images/zgvoq3dqle7ubfdxyprp.webp',
                           ],
                           tags: [],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '100% LEATHER',
                           _id: '013b77bf-aaaa-4c3e-b495-2f60daf024d7',
                        },
                     ],
                     features: [],
                  },
                  {
                     name: 'Griffin swivel chairs',
                     price: 16,
                     cancelled_price: 20,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741089627/arhaus_images/oysyx8alvopinykg8afn.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741089627/arhaus_images/q95j3dal6unrzo5riiti.avif',
                        _id: '67c6eb5c4798472e1f09a9f0',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '7646977e-d831-41b9-a4c5-b5acf842a0d9',
                     options: [
                        {
                           option: 'evianna cinnamon',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 3,
                              _id: '67c7102d25069d456e9751bd',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099048/arhaus_images/td09fga5uinq42mgyyu7.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099049/arhaus_images/rppleyfhrxrrbqhcj3ti.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099050/arhaus_images/olcbouzmt2nhptwyigte.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099050/arhaus_images/inoqvthjwbodosk97kg1.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099050/arhaus_images/ewtmzvwllqzui3ml1tck.webp',
                           ],
                           tags: ['textured', 'velvet'],
                           features:
                              'Soft and luxurious, velvets offer style and sophistication throughout the home. With a dense pile and soft luster, velvets saturate and enhance colors in both soft and bold applications.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '100% POLYESTER',
                           _id: 'e23fd79b-842d-4187-b041-4cdeef003910',
                        },
                        {
                           option: 'evianna olive',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c710af25069d456e97559e',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099177/arhaus_images/epuyrnrztavspwp1kvg9.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099180/arhaus_images/ufd2p88yfvp1u1uu3cqg.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099181/arhaus_images/odxbkpt2j3pozyet8ftt.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099181/arhaus_images/otcjzoixj0ekxzcsvarz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099180/arhaus_images/zzv8lbdqxnlshwkfg6iu.webp',
                           ],
                           tags: ['velvet'],
                           features:
                              'Soft and luxurious, velvets offer style and sophistication throughout the home. With a dense pile and soft luster, velvets saturate and enhance colors in both soft and bold applications.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '100% POLYESTER',
                           _id: 'c738d157-a522-42dc-8a65-419232c59f9c',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Frames are craftsman-built using solid poplar and pine wood with cross-directional hardwood laminate.',
                                 _id: '67c7112725069d456e975aca',
                              },
                              {
                                 list: 'Frame support system features flexible elastic webbing.',
                                 _id: '67c7112725069d456e975acb',
                              },
                              {
                                 list: 'Seat cushions contain dense foam padded with poly fibers.',
                                 _id: '67c7112725069d456e975acc',
                              },
                              {
                                 list: 'Backrests are filled with a supportive blend of soft foam and poly fibers.',
                                 _id: '67c7112725069d456e975acd',
                              },
                              {
                                 list: 'Solid steel swivel mechanism allows 360-degree rotation.',
                                 _id: '67c7112725069d456e975ace',
                              },
                           ],
                           content: '',
                           _id: '7883f63d-7927-4ed1-899c-22e0b9936a73',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'With angled arms and a bucket silhouette, our Griffin Collection wraps you in sumptuous comfort. Showcasing an elegant channel-stitching design, Griffin adds an unexpected pop of interest to any space.',
                           _id: '2eaf4d77-1667-4f96-bfc8-fb4530964d71',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c7115125069d456e97600d',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c7115125069d456e97600e',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c7115125069d456e97600f',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c7115125069d456e976010',
                              },
                              {
                                 list: 'Pieces upholstered in Evianna and Olencia Fabrics are code X: Vacuum or lightly brush using a non-metallic brush to remove overall soiling. Do not use water, foam, liquid cleaning agents, or dry-cleaning solvents.',
                                 _id: '67c7115125069d456e976011',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c7115125069d456e976012',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c7115125069d456e976013',
                              },
                              {
                                 list: 'To help prevent fabrics from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c7115125069d456e976014',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c7115125069d456e976015',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c7115125069d456e976016',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c7115125069d456e976017',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c7115125069d456e976018',
                              },
                           ],
                           content: '',
                           _id: '0e409628-94e7-418b-b02e-3e56d090091a',
                        },
                     ],
                     dimensions: {
                        width: 28,
                        depth: 29,
                        height: 29,
                        weight: 46,
                        seatDepth: 20.5,
                        seatHeight: 18,
                        armHeight: 27.5,
                        _id: '67c7110e25069d456e975834',
                     },
                  },
                  {
                     name: 'fenwick chair',
                     price: 28,
                     cancelled_price: 32,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741089937/arhaus_images/noemyjn9wwsmul4tgj8o.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741089937/arhaus_images/temdualkvl7fmf6h7nsd.avif',
                        _id: '67c6ec934798472e1f09aca3',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '2e9b469f-32de-4a1c-9319-6db22e4cf551',
                     options: [
                        {
                           option: 'Northgate charcoal',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 2,
                              _id: '67c7120125069d456e976c51',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099516/arhaus_images/wnwaedjzc4p4ugiv2ls6.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099518/arhaus_images/rihjqoazxprol7eizjim.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099519/arhaus_images/vltngdkqr81wlcicn5k3.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099519/arhaus_images/mrh2utkmuiinrea3uono.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099519/arhaus_images/t0hl12ntpfs81l9wjs1g.webp',
                           ],
                           tags: ['classsic weave'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics:
                              '40% WOOL, 35% POLYESTER, 15% NYLON, 10% ACRYLIC',
                           _id: '2693705c-3d11-4a11-8287-bc1368f56b55',
                        },
                        {
                           option: 'northgate camel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c712bb25069d456e976f09',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099702/arhaus_images/txpqw8djjatayfimb9oj.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099704/arhaus_images/witolvddlvcywivalquk.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099705/arhaus_images/xe1ak6tl3mv98wdk680i.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099705/arhaus_images/cvsntrsq5odsmdstxatc.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741099705/arhaus_images/czmg3z9k6lj0pdprqyqu.webp',
                           ],
                           tags: ['classic weave', 'performance'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics:
                              '40% WOOL, 35% POLYESTER, 15% NYLON, 10% ACRYLIC',
                           _id: '87abdb99-3ecd-46e4-a02b-a5cfa1e2e220',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.',
                                 _id: '67c7131625069d456e9775d5',
                              },
                              {
                                 list: 'Frames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.',
                                 _id: '67c7131625069d456e9775d6',
                              },
                              {
                                 list: 'Our sustainably certified Crypton® Home Performance Fabrics are easy to clean, soft, and durable—engineered with stain-, odor-, and moisture-resistant technology.',
                                 _id: '67c7131625069d456e9775d7',
                              },
                              {
                                 list: 'Frames feature a no-sag, recycled-steel, sinuous support system beneath seat cushions for evenly dispersed, firm yet flexible comfort.',
                                 _id: '67c7131625069d456e9775d8',
                              },
                              {
                                 list: 'Backrests are sustained by flexible, sinuous springs for resilient support and stability.',
                                 _id: '67c7131625069d456e9775d9',
                              },
                              {
                                 list: 'Seat-cushion cores contain flexible, interconnected recycled-steel coils, which provide additional support and continuous comfort.',
                                 _id: '67c7131625069d456e9775da',
                              },
                              {
                                 list: 'Cushion cores are made with dense, eco-friendly foam made partly from sustainable, plant-based material.',
                                 _id: '67c7131625069d456e9775db',
                              },
                              {
                                 list: 'Seat cushions are padded with sterilized down, feathers, and poly-fiber to create a relaxing, “sink-into” feel.',
                                 _id: '67c7131625069d456e9775dc',
                              },
                              {
                                 list: 'Cushions are wrapped in cotton, down-proof casings to maintain their shape. Channel-stitching keeps padding in place for added resilience.',
                                 _id: '67c7131625069d456e9775dd',
                              },
                              {
                                 list: 'The Fenwick Collection is available in multiple pieces and customizable fabrics, leathers, and finishes. Call, email, or live chat with our Design Team to create your own.',
                                 _id: '67c7131625069d456e9775de',
                              },
                              {
                                 list: 'We want you to love your Fenwick as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c7131625069d456e9775df',
                              },
                           ],
                           content: '',
                           _id: '2efc1c33-4e2d-488a-8eea-38a29fd7fd9d',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Create a unique, luxurious sitting area with our Fenwick Collection. Featuring softly sloped arms, traditional wood legs, and hand-tufted seats, Fenwick is built by expert upholstery artisans to bring a subtle seaside aesthetic to your home.',
                           _id: 'a569ef4a-2da9-44af-a666-d324027e84e5',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c7134625069d456e977b7a',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c7134625069d456e977b7b',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c7134625069d456e977b7c',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c7134625069d456e977b7d',
                              },
                              {
                                 list: 'Pieces upholstered in Crypton® Home Performance Fabrics are code W: Spot-clean using water and water-based upholstery shampoo or foam cleaner only. Do not bleach. For tough stains, rub with a soft brush. Blot with a clean towel, rinsing thoroughly; let air-dry.',
                                 _id: '67c7134625069d456e977b7e',
                              },
                              {
                                 list: 'Pieces upholstered in Baldwin Fog fabric are code SW: Spot-clean using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used.',
                                 _id: '67c7134625069d456e977b7f',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c7134625069d456e977b80',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c7134625069d456e977b81',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c7134625069d456e977b82',
                              },
                              {
                                 list: 'Avoid using harsh cleaners or solvents, as these could leave marks or otherwise cause damage.',
                                 _id: '67c7134625069d456e977b83',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67c7134625069d456e977b84',
                              },
                              {
                                 list: 'To help prevent fabrics from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c7134625069d456e977b85',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c7134625069d456e977b86',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c7134625069d456e977b87',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c7134625069d456e977b88',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c7134625069d456e977b89',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c7134625069d456e977b8a',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c7134625069d456e977b8b',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67c7134625069d456e977b8c',
                              },
                           ],
                           content: '',
                           _id: '0ee253b5-afdf-4be7-8ccf-ea51214678f6',
                        },
                     ],
                     dimensions: {
                        width: 32,
                        depth: 34,
                        height: 36,
                        weight: 50,
                        seatBackHeight: 16,
                        seatDepth: 22,
                        seatHeight: 20,
                        armHeight: 26,
                        _id: '67c712fe25069d456e9771c1',
                     },
                  },
                  {
                     name: 'sabina leather chair',
                     price: 37,
                     cancelled_price: 45,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090227/arhaus_images/n0mhdf1shlatrg40v9dl.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741090227/arhaus_images/azlkmujsxnudldtk4xc5.avif',
                        _id: '67c6edb44798472e1f09af56',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: '21f0a10f-caf1-4507-a9fd-4830c988f432',
                     options: [
                        {
                           option: 'kerrigan camel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67c7146425069d456e9788d3',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100129/arhaus_images/d2drw0z16mm9xelqugvy.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100130/arhaus_images/kmgbrnih2xaaztlnghn6.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100131/arhaus_images/m3xzjhe8tbgkrrbbppyz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100131/arhaus_images/cwwazswabciah7qvjrr0.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100131/arhaus_images/lsh8srmauedzflp2hzmi.webp',
                           ],
                           tags: [],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '100% LEATHER',
                           _id: '66b42ebd-e274-46b1-a230-85a6d7cb4937',
                        },
                        {
                           option: 'Kerrigan onyx',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 2,
                              _id: '67c714f025069d456e978bc7',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100268/arhaus_images/gcxhv1xwbukwnq78vboy.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100269/arhaus_images/xrcvzvpklzx7cx7ho8pv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100270/arhaus_images/fxuxdqcmhsu2ahdesgmk.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100270/arhaus_images/jbsb5r9kqsgzxjen85d7.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741100270/arhaus_images/pnpjgdagqtbidz5fzwhn.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of last',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '100% Leather',
                           _id: '2ee8ac1a-1347-4cc1-91f0-084c097a779c',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.',
                                 _id: '67c823dd330262671f510e07',
                              },
                              {
                                 list: 'Frame support system features flexible elastic webbing.',
                                 _id: '67c823dd330262671f510e08',
                              },
                              {
                                 list: 'Seat cushions and backrests are filled with a supportive blend of foam made from partially plant-based material and padded with poly fibers.',
                                 _id: '67c823dd330262671f510e09',
                              },
                              {
                                 list: 'Selected from the highest quality hides in the world, our artisan-finished leathers are hand-finished to accentuate their natural color variations, distinct textures, and other unique features.',
                                 _id: '67c823dd330262671f510e0a',
                              },
                              {
                                 list: 'The Sabina Collection is available customizable in fabrics and leathers. Call, email, or live chat with our Design Team to create your own.',
                                 _id: '67c823dd330262671f510e0b',
                              },
                              {
                                 list: 'We want you to love your Sabina as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c823dd330262671f510e0c',
                              },
                           ],
                           content: '',
                           _id: '0fd6a39c-3812-40b3-bf59-69abcd30afee',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Blending polished stainless steel and soft leather, our Sabina Chair brings a pop of thoughtful design into any conversation area. Featuring an angular floating frame paired with expertly tailored upholstery around sumptuous cushions, Sabina creates a beautiful mixed-material accent piece that will fit seamlessly into your home’s aesthetic.',
                           _id: 'c97da7ff-165b-42fc-a196-9c24fe4e737b',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c8242b330262671f51140b',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c8242b330262671f51140c',
                              },
                              {
                                 list: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                                 _id: '67c8242b330262671f51140d',
                              },
                              {
                                 list: 'Metal frame should be dusted regularly with a soft, dry cloth to remove any particles or loose dirt.',
                                 _id: '67c8242b330262671f51140e',
                              },
                              {
                                 list: 'Do not clean metal using care products containing ammonia or silicone, as these could damage finishes.',
                                 _id: '67c8242b330262671f51140f',
                              },
                              {
                                 list: 'Avoid using abrasives or harsh, corrosive chemicals as these could scratch or mark the metal’s surface.',
                                 _id: '67c8242b330262671f511410',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c8242b330262671f511411',
                              },
                              {
                                 list: 'To help prevent leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c8242b330262671f511412',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c8242b330262671f511413',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c8242b330262671f511414',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c8242b330262671f511415',
                              },
                           ],
                           content: '',
                           _id: '6c312331-c6df-4d9f-b394-8a2b04d066ea',
                        },
                     ],
                     dimensions: {
                        width: 30,
                        depth: 31,
                        height: 34,
                        weight: 69,
                        seatBackHeight: 16,
                        seatDepth: 21,
                        seatHeight: 20,
                        armHeight: 24,
                        _id: '67c7153325069d456e978ebb',
                     },
                  },
               ],
            },
         ],
      },
      createdAt: '2025-02-28T13:05:39.822Z',
      updatedAt: '2025-03-18T14:29:24.467Z',
      __v: 120,
   },
   {
      _id: '96d7c7a7-2a18-4757-be08-a3cee5f2ac43',
      dir: 'dining',
      image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1740748051/arhaus_images/ve7lrqhfibh8iqhjmjxm.webp',
      content: 'dining room furniture',
      menu: {
         _id: '3751669d-5548-40e1-91c0-1dfc033d4dc5',
         categories: [
            {
               content: 'Dining chairs',
               image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741973242/lal0oyz41gdeywmoytqa_1_n31cyz.webp',
               _id: 'e8e0681d-ef33-4def-af45-590e8ddd9961',
               products: [
                  {
                     name: 'Jagger dining arm chair',
                     price: 11,
                     cancelled_price: 15,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173013/arhaus_images/scdd9uuhhk3liq1wntdd.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173013/arhaus_images/s34uhoujfds6bxufgrxp.avif',
                        _id: '67c83117330262671f5148c1',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '6022f5f3-fd9f-42a9-ae15-b11be300f658',
                     options: [
                        {
                           option: 'BLACK & CUSHING MELLOW',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c85637ed9f048736586e53',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182515/arhaus_images/di42opzpclebnaqibghr.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182516/arhaus_images/i8kiqavrdyhnqji7f8hw.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182516/arhaus_images/ynuhsmj95t3om78cvpbb.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182516/arhaus_images/ftrujp1js2raz1ixbkyd.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182516/arhaus_images/ytrcil8uuayqddtijgry.webp',
                           ],
                           tags: ['Cryton', 'performance'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: '_',
                           fabrics: '100% POLYESTER',
                           _id: '147e1ff0-38c1-4201-8023-b4a3ae1396fc',
                        },
                        {
                           option: 'BLACK & DOWNY EBONY',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c85704ed9f048736586e5a',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182711/arhaus_images/pzrrmypmg4chdvkpn6en.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182721/arhaus_images/wpa1gqpddprnhyq1dxqx.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182721/arhaus_images/g9vbuvjfwdkwql5uefvu.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182721/arhaus_images/qso5chu0krimkumci4il.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182721/arhaus_images/jj79uujv4mszyy8tsa65.webp',
                           ],
                           tags: ['Crypton', 'performance'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: '_',
                           fabrics: '100% POLYESTER',
                           _id: '3cd70a0f-d2a5-4a09-8482-8da6b5bd076d',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Our sustainably certified Crypton® Home Performance Fabrics are easy to clean, soft, and durable—engineered with stain-, odor-, and moisture-resistant technology in every fiber.',
                                 _id: '67c85786ed9f048736586fee',
                              },
                              {
                                 list: 'Our Cary Linen Performance Fabric is extremely durable and resists stains yet remains beautiful and soft to the touch.',
                                 _id: '67c85786ed9f048736586fef',
                              },
                              {
                                 list: 'Hand-applied finish is sealed with clear lacquer for added protection and subtle sheen.',
                                 _id: '67c85786ed9f048736586ff0',
                              },
                           ],
                           content: '',
                           _id: '2b59d414-84eb-42d3-a5c7-c857d967313f',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Handcrafted by artisans in Indonesia, our Jagger Dining Seating Collection delivers a sleek modern design paired with unfailing comfort. Hand-stained frames crafted from solid mahogany wood are complemented by warm metal accents, creating an elevated aesthetic perfect for any gathering space.',
                           _id: 'a355075b-f4b6-4f77-8538-33da2448043d',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c857a0ed9f048736587003',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c857a0ed9f048736587004',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c857a0ed9f048736587005',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c857a0ed9f048736587006',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67c857a0ed9f048736587007',
                              },
                              {
                                 list: 'Crypton® Home Performance Fabrics are code W: Spot-clean using clear, mild detergent and water. Do not bleach. For tough stains, rub with a soft brush. Blot with a clean towel, rinsing thoroughly; let air-dry.',
                                 _id: '67c857a0ed9f048736587008',
                              },
                              {
                                 list: 'Cary Linen Performance Fabrics are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c857a0ed9f048736587009',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c857a0ed9f04873658700a',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c857a0ed9f04873658700b',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c857a0ed9f04873658700c',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c857a0ed9f04873658700d',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c857a0ed9f04873658700e',
                              },
                              {
                                 list: 'Recommended care for wood furnishings may vary depending on the type of wood and finishes applied to each surface.',
                                 _id: '67c857a0ed9f04873658700f',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67c857a0ed9f048736587010',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c857a0ed9f048736587011',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67c857a0ed9f048736587012',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c857a0ed9f048736587013',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking in finishes or fading in upholstery.',
                                 _id: '67c857a0ed9f048736587014',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c857a0ed9f048736587015',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c857a0ed9f048736587016',
                              },
                              {
                                 list: 'Do not lean back in chairs and avoid using chair stretchers or table pedestals as footrests.',
                                 _id: '67c857a0ed9f048736587017',
                              },
                           ],
                           content: '',
                           _id: 'aacc9604-83de-43ff-8f16-7026e0fa98ec',
                        },
                     ],
                     dimensions: {
                        width: 22,
                        depth: 22,
                        height: 29,
                        weight: 15,
                        seatBackHeight: 29,
                        seatDepth: 19,
                        seatHeight: 19,
                        armHeight: 26,
                        _id: '67c8575ded9f048736586fea',
                     },
                  },
                  {
                     name: 'aimee dining arm chair',
                     price: 13,
                     cancelled_price: 17,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173103/arhaus_images/ilckd3soclihefrhpheo.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173104/arhaus_images/sqcf4fy79oj2tr339t8b.avif',
                        _id: '67c83172330262671f514a4f',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '1e4a04fe-967d-401a-806d-4065b79b187b',
                     options: [
                        {
                           option: 'nomad snow',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67c85875ed9f048736587288',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183086/arhaus_images/p1ifdtxt9sc9aarlhnqi.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183089/arhaus_images/g1r0hq7rzza9stbccw6l.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183091/arhaus_images/uafgj2enhwpkdqza0ea6.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183090/arhaus_images/en0bdl4dxe8c7efcpapx.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183090/arhaus_images/n9g61tsu5osnawjeyoov.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183090/arhaus_images/tcpufcr2gbsebxehugzi.webp',
                           ],
                           tags: ['performance'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '92% POLYESTER, 8% LINEN',
                           _id: 'be3e4ddd-8f54-4d2f-93bf-9984c7251632',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted solid oak frames, rattan cane backs, and upholstered cushion seats.',
                                 _id: '67c858dbed9f0487365872f0',
                              },
                              {
                                 list: 'Our sustainably certified Crypton® Nomad Snow Home Performance Fabric is easy to clean, soft, and durable—engineered with stain-, odor-, and moisture-resistant technology in every fiber.',
                                 _id: '67c858dbed9f0487365872f1',
                              },
                              {
                                 list: 'Wooden surfaces are hand-finished with lacquer for added protection and subtle sheen.',
                                 _id: '67c858dbed9f0487365872f2',
                              },
                              {
                                 list: 'The Aimee Collection is available customizable fabrics and finishes, including our Crypton® Home Performance Fabrics. Call, email, or live chat with our Design Team to create your own Aimee.',
                                 _id: '67c858dbed9f0487365872f3',
                              },
                              {
                                 list: 'We want you to love your Aimee as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c858dbed9f0487365872f4',
                              },
                           ],
                           content: '',
                           _id: 'b0378012-5f0d-4a73-8203-e0f67821aeba',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'With a softly curved back, rattan caning, and chic flared legs, our Aimee Dining Collection is thoughtfully crafted to capture the styles of both classic French antiques and iconic midcentury modern designs. Each frame is made from solid oak wood paired with a generously upholstered cushion resulting in welcoming comfort that complements any aesthetic.',
                           _id: 'ffa30eee-927f-4cea-8c99-8f95a86c008c',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c85907ed9f04873658736f',
                              },
                              {
                                 list: 'Pieces upholstered in Nomad Snow are spot-clean only using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used.',
                                 _id: '67c85907ed9f048736587370',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c85907ed9f048736587371',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c85907ed9f048736587372',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c85907ed9f048736587373',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c85907ed9f048736587374',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67c85907ed9f048736587375',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c85907ed9f048736587376',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c85907ed9f048736587377',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c85907ed9f048736587378',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c85907ed9f048736587379',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c85907ed9f04873658737a',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c85907ed9f04873658737b',
                              },
                           ],
                           content: '',
                           _id: '74dc0add-f41c-40aa-b3b5-f7b0369be32e',
                        },
                     ],
                     dimensions: {
                        width: 21,
                        depth: 24,
                        height: 32,
                        weight: 21,
                        seatBackHeight: 13,
                        seatDepth: 20,
                        seatHeight: 19,
                        armHeight: 24,
                        _id: '67c858afed9f0487365872bc',
                     },
                  },
                  {
                     name: 'kirsten dining chair',
                     price: 13,
                     cancelled_price: 17,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173181/arhaus_images/lkjyinopxqabguz6kvi7.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173181/arhaus_images/jjb3vad0u2wy617quxka.avif',
                        _id: '67c831bf330262671f514bdd',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: 'f96fbc17-10dc-478e-ae4d-9eff49c83a2c',
                     options: [
                        {
                           option: 'kirsten dining chair',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67c85a04ed9f04873658768e',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183487/arhaus_images/mig6b9ec48brdqkenxqv.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183488/arhaus_images/jfnegxngprirgs3f4hyr.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183489/arhaus_images/zumqgmd6ajpxyi0gbzlx.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183489/arhaus_images/offzoka1lrtjx35sxes0.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183489/arhaus_images/h5owuye74hgfvnvrbxq9.webp',
                           ],
                           tags: ['performance', 'crypton'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '92% POLYESTER, 8% LINEN',
                           _id: 'c9f0d9e1-e6ed-42ec-8596-ae273e29018b',
                        },
                        {
                           option: 'banks cognac',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c85a86ed9f0487365876e6',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183617/arhaus_images/aweu95vayw7qrvmbrn0t.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183619/arhaus_images/wykmfx3wzwjqhakiagho.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183619/arhaus_images/ldppvysujb9bgwufzt37.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183619/arhaus_images/wdeejqaavrfiycl76z0n.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741183619/arhaus_images/btfblxjkpvqrehlf88v9.webp',
                           ],
                           tags: ['velvet'],
                           features:
                              'Soft and luxurious, velvets offer style and sophistication throughout the home. With a dense pile and soft luster that seems to glow from within, velvets saturate and enhance colors on any silhouette.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '82% POLYESTER, 18% COTTON',
                           _id: 'e7378148-b0a1-49a8-a38d-79e49e3f49e9',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Our sustainably certified Crypton® Performance Fabrics are easy to clean, soft, and durable—engineered with stain-, odor-, and moisture-resistant technology in every fiber.',
                                 _id: '67c85b26ed9f04873658794c',
                              },
                              {
                                 list: 'Our Banks Performance Velvets are extremely durable and stain resistant yet remain beautiful and soft to the touch',
                                 _id: '67c85b26ed9f04873658794d',
                              },
                              {
                                 list: 'Iron frame and legs are powder-coated for a durable, textured finish.',
                                 _id: '67c85b26ed9f04873658794e',
                              },
                           ],
                           content: '',
                           _id: '5d9e4455-f9c9-4eb0-9be7-645a2f58f649',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              "The sculpted silhouette of our Kirsten Dining Seating Collection embraces you with its elegant scoop seat and gently curved backrest. Generously upholstered in soft-yet-durable fabric, Kirsten's minimalistic iron frame adds modern comfort to any kitchen or dining space.",
                           _id: '1055b6f8-4f89-4fed-bca1-144ef5f9b359',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c85b8ced9f048736587a09',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c85b8ced9f048736587a0a',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c85b8ced9f048736587a0b',
                              },
                              {
                                 list: 'Crypton® Home Performance Fabrics can be spot-cleaned using mild detergent and water or water-based cleaning agents. Do not bleach.',
                                 _id: '67c85b8ced9f048736587a0c',
                              },
                              {
                                 list: 'Spot-clean Banks Performance Velvet upholstery using water and water-based upholstery shampoo or foam cleaners only.',
                                 _id: '67c85b8ced9f048736587a0d',
                              },
                              {
                                 list: 'For tough stains, rub with a soft brush, then blot with a clean towel, rinsing thoroughly. Let dry.',
                                 _id: '67c85b8ced9f048736587a0e',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c85b8ced9f048736587a0f',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c85b8ced9f048736587a10',
                              },
                              {
                                 list: 'Metal frame should be dusted regularly with a soft, dry cloth to remove any particles or loose dirt.',
                                 _id: '67c85b8ced9f048736587a11',
                              },
                              {
                                 list: 'As iron is prone to rust, avoid contact with excessive moisture.',
                                 _id: '67c85b8ced9f048736587a12',
                              },
                              {
                                 list: 'Do not clean metal using care products containing ammonia or silicone, as these could damage finishes.',
                                 _id: '67c85b8ced9f048736587a13',
                              },
                              {
                                 list: 'Avoid using abrasives or harsh, corrosive chemicals as these could scratch or mark the metal’s surface.',
                                 _id: '67c85b8ced9f048736587a14',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c85b8ced9f048736587a15',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c85b8ced9f048736587a16',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c85b8ced9f048736587a17',
                              },
                              {
                                 list: 'Do not lean back in chairs and avoid using chair stretchers as footrests.',
                                 _id: '67c85b8ced9f048736587a18',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c85b8ced9f048736587a19',
                              },
                           ],
                           content: '',
                           _id: '3dbad91e-68f2-4e3c-8520-6877bca69ecd',
                        },
                     ],
                     dimensions: {
                        width: 19,
                        depth: 24,
                        height: 32,
                        weight: 14,
                        seatBackHeight: 15,
                        seatDepth: 17,
                        seatHeight: 19,
                        _id: '67c85aeeed9f0487365878f4',
                     },
                  },
                  {
                     name: 'rodin dining arm chair',
                     price: 20,
                     cancelled_price: 25,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173271/arhaus_images/rtervhztdmn5f6gqk4qx.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173271/arhaus_images/jjujzxuqjta3do904vwy.avif',
                        _id: '67c8321a330262671f514ef7',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '4aab2ac1-246c-4edf-a87d-1bf532092550',
                     options: [
                        {
                           option: 'mattera cashmere',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c85c4fed9f048736587de0',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184074/arhaus_images/vvq9f1i87s2lw2ulj7fa.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184076/arhaus_images/vrg7dvnmudpl4dimp6kv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184076/arhaus_images/okjzmgtsosikjlyivd4e.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184076/arhaus_images/nxmnh1iv8rrmlguu3kr9.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184076/arhaus_images/qbjadpt6cg77ntqajkg8.webp',
                           ],
                           tags: ['performance', 'textured weave'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics:
                              '29% ACRYLIC, 25% VIRGIN WOOL, 13% POLYESTER, 12% COTTON, 11% VISCOSE, 10% LINEN',
                           _id: 'e41cfeb0-af58-4adb-a2cb-4717c600976a',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Made in Italy from ash wood and features hand-applied finishes to highlight the organic beauty of ash wood.',
                                 _id: '67c85d18ed9f0487365880aa',
                              },
                              {
                                 list: 'Our Matera Performance Fabrics are extremely durable and resist stains and fading while remaining beautiful and soft to the touch.',
                                 _id: '67c85d18ed9f0487365880ab',
                              },
                              {
                                 list: 'Frames are supported by a flexible rubber webbing for durable and evenly dispersed comfort.',
                                 _id: '67c85d18ed9f0487365880ac',
                              },
                           ],
                           content: '',
                           _id: 'aa1974cd-6f39-42ef-9668-e4a822e02443',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Inspired by an antique chair found while combing a German flea market, our Rodin Dining Chair Collection is simply unique. Handcrafted by master artisans in Italy from ash wood, contemporary Rodin will wrap you in comfort for hours of lingering—and laughing—around your dining table.',
                           _id: '4775e1c2-1770-4455-91fd-d6a0719b9be3',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c85d39ed9f0487365881b7',
                              },
                              {
                                 list: 'Wooden frame should be dusted regularly with a soft, dry cloth to remove any particles or loose dirt.',
                                 _id: '67c85d39ed9f0487365881b8',
                              },
                              {
                                 list: 'Upholstery should be spot-cleaned only. For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c85d39ed9f0487365881b9',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c85d39ed9f0487365881ba',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c85d39ed9f0487365881bb',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c85d39ed9f0487365881bc',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67c85d39ed9f0487365881bd',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c85d39ed9f0487365881be',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c85d39ed9f0487365881bf',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c85d39ed9f0487365881c0',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c85d39ed9f0487365881c1',
                              },
                           ],
                           content: '',
                           _id: '12e5a8ef-c8c4-42d4-a44a-055d5ebfc565',
                        },
                     ],
                     dimensions: {
                        width: 22,
                        depth: 22,
                        height: 29,
                        _id: '67c85d00ed9f04873658802a',
                     },
                  },
                  {
                     name: 'norah dining chair',
                     price: 19,
                     cancelled_price: 25,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173397/arhaus_images/gbzjyagmn2ffi7crs3pg.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173397/arhaus_images/edub2jno7yxnk8dxr7gy.avif',
                        _id: '67c83297330262671f515085',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '939710f3-e5a8-43df-b179-658ea79fe0ef',
                     options: [
                        {
                           option: 'nomad snow',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 9,
                              _id: '67c85e8ced9f048736588606',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184646/arhaus_images/mss0e6pwg91ga0xcv5ga.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184648/arhaus_images/ha79zlmrxvnrtx7nf8a3.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184648/arhaus_images/lm9eu6ekgdsjv7rf746n.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184648/arhaus_images/qwovzwo4vyrllukf5zgz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184649/arhaus_images/nqkjkprq0xcowgm0yanl.webp',
                           ],
                           tags: ['classic weave'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '92% POLYESTER, 8% LINEN',
                           _id: '06876b5a-be86-4162-b7d9-ffdfb271cb85',
                        },
                        {
                           option: 'wiley flax',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 10,
                              _id: '67c85f2bed9f0487365886a2',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184805/arhaus_images/w5n9xhv80kyvym3oclp4.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184807/arhaus_images/elulzi0jdrhr57inhbtv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184808/arhaus_images/rxdcelfc6pc6hp8xyggh.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184808/arhaus_images/btiogmussveb4u88hglm.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741184809/arhaus_images/qsj5dovykmkuabwnxvr8.webp',
                           ],
                           tags: ['classic weave'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '70% POLYESTER, 25% VISCOSE, 5% LINEN',
                           _id: 'cd0ec85e-270b-43cb-9f0a-db0afa49ff93',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Our sustainably certified Crypton® Home Performance Fabrics, as well as our Merino Pearl Performance Fabric, are easy to clean, soft, and durable—engineered with stain-, odor-, and moisture-resistant technology in every fiber.',
                                 _id: '67c85f7ded9f0487365889b2',
                              },
                              {
                                 list: 'Seat cushions contain dense foam made from partially plant-based material, padded with a blend of poly fibers and sterilized down and feathers.',
                                 _id: '67c85f7ded9f0487365889b3',
                              },
                              {
                                 list: 'Features casters for easy movement.',
                                 _id: '67c85f7ded9f0487365889b4',
                              },
                           ],
                           content: '',
                           _id: '4eb5bd3d-bf61-48ef-be17-835315ca42a3',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'The simple silhouette of our Norah Dining Chair boasts a contemporary aesthetic with clean lines. Featuring sleek, welcoming curves and caster wheels for easy arranging, Norah is upholstered in soft, textured performance fabric to withstand the spills and stains of everyday living.',
                           _id: 'a3ad6d72-68a5-463e-abcd-444a29fb20db',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c85fbeed9f048736588af7',
                              },
                              {
                                 list: 'Spot-clean using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used.',
                                 _id: '67c85fbeed9f048736588af8',
                              },
                              {
                                 list: 'Crypton® fabrics can be cleaned using clear, mild detergent and water. Do not bleach. For tough stains, rub with a soft brush. Blot with a clean towel, rinsing thoroughly; let air-dry.',
                                 _id: '67c85fbeed9f048736588af9',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c85fbeed9f048736588afa',
                              },
                              {
                                 list: 'To help prevent fabrics from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c85fbeed9f048736588afb',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c85fbeed9f048736588afc',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c85fbeed9f048736588afd',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67c85fbeed9f048736588afe',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c85fbeed9f048736588aff',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c85fbeed9f048736588b00',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c85fbeed9f048736588b01',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c85fbeed9f048736588b02',
                              },
                           ],
                           content: '',
                           _id: 'b4857618-82f2-4357-9402-e6a4d54b14cd',
                        },
                     ],
                     dimensions: {
                        width: 26,
                        depth: 26,
                        height: 34,
                        weight: 30,
                        seatBackHeight: 13,
                        seatDepth: 19,
                        seatHeight: 19,
                        armHeight: 26,
                        _id: '67c85f63ed9f048736588916',
                     },
                  },
                  {
                     name: 'canterbury dining chair',
                     price: 19,
                     cancelled_price: 22,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173499/arhaus_images/a7qcytavf5vzp5tgklhg.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173499/arhaus_images/u6p33dm3pipnvenvvufl.avif',
                        _id: '67c832fd330262671f515213',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: true,
                     _id: '75cfb4f1-4883-43ec-8547-692ed5e6b1f6',
                     options: [
                        {
                           option: 'Top grain smoke',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 3,
                              _id: '67c86092ed9f048736588fce',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185164/arhaus_images/yfj2ggmqka9em7t3e7sh.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185165/arhaus_images/bnohvgprtceajhiz30z4.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185166/arhaus_images/cuqpzcoxw5shsdhbwaax.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185167/arhaus_images/npewcvb0bvbefxhv8nbv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185166/arhaus_images/xzco4xsxeoae1r5wgtul.webp',
                           ],
                           tags: ['leather'],
                           features:
                              'Timeless and buttery, our artisan-crafted leathers are dyed and finished by hand to accentuate their natural colors and graining. This process also helps preserve our leathers’ uniqueness as they age gracefully and soften over time—offering years of lasti',
                           care: 'Wipe down with an undyed cloth dampened with distilled water to remove dust and add moisture back into the leather.',
                           fabrics: '100% LEATHER',
                           _id: 'b6a71dd1-a223-49e5-9108-71c4da14667c',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Craftsman-built chair frames are constructed using solid, reinforced, hand-carved, kiln-dried oak for lasting strength and stability.',
                                 _id: '67c860cfed9f048736589142',
                              },
                              {
                                 list: 'Hand-applied cinder finish is sealed with a clear lacquer for added protection and subtle sheen.',
                                 _id: '67c860cfed9f048736589143',
                              },
                              {
                                 list: 'Top Grain Smoke leather develops natural texture and markings with use, creating a unique, antique appearance.',
                                 _id: '67c860cfed9f048736589144',
                              },
                              {
                                 list: 'Arms measure 25.5" h; seat measures 18.75" h.',
                                 _id: '67c860cfed9f048736589145',
                              },
                              {
                                 list: 'Canterbury is available customizable fabrics and finishes. Call, email, or live chat with our Design Team to create your own Canterbury.',
                                 _id: '67c860cfed9f048736589146',
                              },
                              {
                                 list: 'We want you to love your Canterbury as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c860cfed9f048736589147',
                              },
                           ],
                           content: '',
                           _id: '1496ae80-6802-4333-88ab-87bcf649201a',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Inspired by our favorite vintage finds, Canterbury Dining Chairs are a thoughtful study in iconic mid-century design. Stunning angular silhouettes crafted from solid oak wood showcase tapered arms and legs, hand-finished with a richly colored stain. Artisan-finished leather cushions complement the unique, modern back for an elevated dining experience.',
                           _id: 'd4482e10-dc4e-4bd7-b4f0-93760fe51ac2',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus furnishings are designed to withstand everyday use; however normal wear and tear is reflective of your care and use.',
                                 _id: '67c860f1ed9f0487365892d2',
                              },
                              {
                                 list: 'Top Grain Smoke leather upholstery can be cleaned using wax-free leather cleaner and conditioner.',
                                 _id: '67c860f1ed9f0487365892d3',
                              },
                              {
                                 list: 'Spot-clean oil-based spills on leather by blotting with a clean, soft cloth. Oil should absorb completely into the leather in a short time.',
                                 _id: '67c860f1ed9f0487365892d4',
                              },
                              {
                                 list: 'Spot-clean other liquid spills on leather by blotting with mild soap and distilled water. Follow by wiping the area with distilled water. Use a clean, soft, and absorbent cloth. Allow to air dry.',
                                 _id: '67c860f1ed9f0487365892d5',
                              },
                              {
                                 list: 'Apply leather conditioner using a clean, undyed cloth. Allow your upholstery to air dry before gently buffing to finish.',
                                 _id: '67c860f1ed9f0487365892d6',
                              },
                              {
                                 list: 'Avoid using harsh cleaners or solvents, as these could leave marks or otherwise damage leather finishes.',
                                 _id: '67c860f1ed9f0487365892d7',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67c860f1ed9f0487365892d8',
                              },
                              {
                                 list: 'Do not clean wood surfaces using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and wood surfaces.',
                                 _id: '67c860f1ed9f0487365892d9',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c860f1ed9f0487365892da',
                              },
                              {
                                 list: 'Expertly fitted fabrics and hand-finished leathers are hand-sewn. To help prevent these materials from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c860f1ed9f0487365892db',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c860f1ed9f0487365892dc',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c860f1ed9f0487365892dd',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67c860f1ed9f0487365892de',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c860f1ed9f0487365892df',
                              },
                           ],
                           content: '',
                           _id: '2a6d878c-e4e2-4fad-a647-33d78b14a331',
                        },
                     ],
                     dimensions: {
                        width: 21,
                        depth: 24,
                        height: 31,
                        weight: 27,
                        seatBackHeight: 11,
                        seatDepth: 21,
                        seatHeight: 19,
                        armHeight: 25,
                        _id: '67c860b9ed9f048736589088',
                     },
                  },
                  {
                     name: 'sinclair dining chair',
                     price: 14,
                     cancelled_price: 18,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173575/arhaus_images/hlqeagaeffkggpmu9uqf.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173575/arhaus_images/paii3ojyyzenoocl0c3z.avif',
                        _id: '67c83349330262671f51552d',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '33416b5a-6e9f-4dc7-95be-9282529238bf',
                     options: [
                        {
                           option: 'amanda earth',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67c8619ded9f048736589664',
                           },
                           option_image:
                              'https://cdn.arhaus.com/product/material/fabric/20917.jpg?preset=pdp_fabric_info',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185433/arhaus_images/lmtl1ldetrx7k2wnizfv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185435/arhaus_images/itpn0usqf1qsuq5tlvhd.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185435/arhaus_images/kpc2j39lmegxkylcwtko.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185434/arhaus_images/z3v1lirhbruqlp0knqt2.webp',
                           ],
                           tags: ['linen'],
                           features:
                              'Naturally beautiful and sustainably crafted from flax plants, linen offers lightweight breathability and relaxed luxury. These fabrics are strong, supple to the touch, and offer stunning lustre and drape.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '100% LINEN',
                           _id: 'ddcf65d8-cd78-41dc-815d-e79a79eb229c',
                        },
                        {
                           option: 'cushing slate',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c862b1ed9f048736589941',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185709/arhaus_images/n1j1h0jrinvntbgvneee.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185710/arhaus_images/ho7cd9ncbmcxxjbnngpj.webp',
                           ],
                           tags: ['textured weave', 'crypton'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '100% POLYESTER',
                           _id: '0e4a06d3-c98b-43d9-a0d8-1d3f7266aedc',
                        },
                        {
                           option: 'cushing olive',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c86366ed9f048736589c1e',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185890/arhaus_images/zuxa3nvq43g2qpcfkex7.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741185891/arhaus_images/hsxwoejmdexdpikojve1.webp',
                           ],
                           tags: ['chenille', 'crypton', 'performance'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '100% POLYESTER',
                           _id: '0ec776cc-0487-4805-9653-145ee539afc7',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Frames are craftsman-built from oak wood with hand-applied finishes.',
                                 _id: '67c863aced9f048736589de2',
                              },
                              {
                                 list: 'Drop-in seat can be upholstered in your choice of fabric from our Dining Fabric Collection.',
                                 _id: '67c863aced9f048736589de3',
                              },
                              {
                                 list: 'Natural materials and hand-applied finishes may vary in color, pattern, shape, and texture, making each piece truly unique.',
                                 _id: '67c863aced9f048736589de4',
                              },
                              {
                                 list: 'Natural wood may display small splits, knots, joint lines, or other organic features that will not affect the quality or performance of your piece.',
                                 _id: '67c863aced9f048736589de5',
                              },
                              {
                                 list: 'Sinclair is available in customizable fabrics. Call, email, or live chat with our Design Team to create your own.',
                                 _id: '67c863aced9f048736589de6',
                              },
                              {
                                 list: 'We want you to love your Sinclair as much as we do. We recommend ordering a material swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c863aced9f048736589de7',
                              },
                           ],
                           content: '',
                           _id: '887d9dfd-8b5f-4226-8580-3e8f96659164',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'A refresh on classic bistro chairs, our Sinclair Dining Chair Collection features minimalistic silhouettes with custom seats to complement any home. Sophisticated Sinclair is crafted from oak wood with hand-applied finishes, evoking the spirit of a warm, inviting café with timeless charm.',
                           _id: 'bc906d3a-4a34-460a-93b2-2122e161769e',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c863d0ed9f048736589fc2',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c863d0ed9f048736589fc3',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c863d0ed9f048736589fc4',
                              },
                              {
                                 list: 'For tough stains, rub with a soft brush, then blot with a clean towel, rinsing thoroughly. Let dry.',
                                 _id: '67c863d0ed9f048736589fc5',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c863d0ed9f048736589fc6',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c863d0ed9f048736589fc7',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c863d0ed9f048736589fc8',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c863d0ed9f048736589fc9',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67c863d0ed9f048736589fca',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c863d0ed9f048736589fcb',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67c863d0ed9f048736589fcc',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c863d0ed9f048736589fcd',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67c863d0ed9f048736589fce',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c863d0ed9f048736589fcf',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c863d0ed9f048736589fd0',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67c863d0ed9f048736589fd1',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c863d0ed9f048736589fd2',
                              },
                              {
                                 list: 'Do not lean back in chairs and avoid using chair stretchers or table pedestals as footrests.',
                                 _id: '67c863d0ed9f048736589fd3',
                              },
                           ],
                           content: '',
                           _id: '8688584c-4248-408b-8558-b3cb1523b203',
                        },
                     ],
                     dimensions: {
                        width: 19,
                        depth: 19,
                        height: 31,
                        weight: 14,
                        _id: '67c86395ed9f048736589d00',
                     },
                  },
                  {
                     name: 'henry dining chair',
                     price: 18,
                     cancelled_price: 20,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173801/arhaus_images/zocxbjz9fbfny0niumfs.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173801/arhaus_images/yiliwqbnzuceurxmscmd.avif',
                        _id: '67c8342b330262671f5156bb',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: 'fa256e5e-efce-444f-9ae2-2e7f6f6ca5f9',
                     options: [
                        {
                           option: 'Black suede',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c865ceed9f04873658aadb',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186503/arhaus_images/qpnwmnfjpsw2gjdckjyd.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186506/arhaus_images/oouwvgzov7q8mifs1gnd.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186507/arhaus_images/ng90xo8jivb1d8cwtktg.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186507/arhaus_images/rhly7h99zlukfgnu7xob.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186507/arhaus_images/gtqyouonbgikhdlflcbj.webp',
                           ],
                           tags: [],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '100% POLYESTER',
                           _id: 'dc37e329-6f19-487a-8062-4b91223f835e',
                        },
                        {
                           option: 'brown suede',
                           stock: {
                              in_stock: false,
                              when_in_stock: '2025-05-06',
                              stock_count: 0,
                              _id: '67c8664eed9f04873658abed',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186631/arhaus_images/hoqdvai7uy7pirkcq5eo.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186633/arhaus_images/c8rvlyy2ge9d5m8yuayc.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186634/arhaus_images/urnwiywwvx1ligoc3aaj.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186633/arhaus_images/oidcg8kd69jazaq8t0qh.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741186634/arhaus_images/hq8mgfphncc2fbi0qrff.webp',
                           ],
                           tags: [],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '100% POLYESTER',
                           _id: 'a0c2ab27-8c16-4ae8-bd16-7dde6ff00be2',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Hand-finished solid oak frame is joined using a mortise-and-tenon construction for added strength and stability.',
                                 _id: '67c86708ed9f04873658b024',
                              },
                              {
                                 list: 'Artisan-applied finish is sanded and stained by hand, then distressed and coated with lacquer—for added protection.',
                                 _id: '67c86708ed9f04873658b025',
                              },
                              {
                                 list: 'Unfinished suede does not have a protective covering and will deepen in color with wear and use—adding truly unique character to your piece.',
                                 _id: '67c86708ed9f04873658b026',
                              },
                              {
                                 list: 'Natural wood will vary in color and texture, featuring natural markings that add character without affecting quality or performance.',
                                 _id: '67c86708ed9f04873658b027',
                              },
                              {
                                 list: 'Due to the natural variances of suede, the coloring and shading of Henry’s straps may vary slightly.',
                                 _id: '67c86708ed9f04873658b028',
                              },
                           ],
                           content: '',
                           _id: '46e3aa86-b47c-4ffb-88cd-186e801c089e',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Inspired by the braided and woven patterns of artisan-made baskets, our Henry Dining Seating Collection is handcrafted by master artisans. Woven leather straps with their suede sides facing out create a unique and modern texture.',
                           _id: '26c74eb9-da24-4540-a6c0-db32920bf9a3',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c86725ed9f04873658b25f',
                              },
                              {
                                 list: 'Unfinished suede is susceptible to staining and should be expected to deepen in color with wear and use.',
                                 _id: '67c86725ed9f04873658b260',
                              },
                              {
                                 list: 'Pencil erasers may reduce the appearance of stains on suede.',
                                 _id: '67c86725ed9f04873658b261',
                              },
                              {
                                 list: 'Our artisan-crafted leathers can be easily maintained by spot-cleaning using a dry cloth to remove dust and dirt.',
                                 _id: '67c86725ed9f04873658b262',
                              },
                              {
                                 list: 'For long-term care, use an undyed cloth dampened with distilled water to wipe down your leather. This will help keep your upholstery looking its best by adding moisture back into the leather.',
                                 _id: '67c86725ed9f04873658b263',
                              },
                              {
                                 list: 'Clean oil-based spills from leather by blotting with a clean, undyed, soft cloth. Oil should dissipate over time.',
                                 _id: '67c86725ed9f04873658b264',
                              },
                              {
                                 list: 'Spot-clean other liquid spills by blotting with clear, mild soap and distilled water. Follow by wiping the area with distilled water. Use a clean, undyed, soft, and absorbent cloth. Avoid scrubbing. Allow to air-dry.',
                                 _id: '67c86725ed9f04873658b265',
                              },
                              {
                                 list: 'Do not use upholstery or leather cleaner or conditioner on suede, nubuck, or napped leathers, as this could damage the material.',
                                 _id: '67c86725ed9f04873658b266',
                              },
                              {
                                 list: 'Avoid using harsh cleaners or solvents, as these could leave marks or otherwise cause damage.',
                                 _id: '67c86725ed9f04873658b267',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c86725ed9f04873658b268',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c86725ed9f04873658b269',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c86725ed9f04873658b26a',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c86725ed9f04873658b26b',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67c86725ed9f04873658b26c',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c86725ed9f04873658b26d',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c86725ed9f04873658b26e',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c86725ed9f04873658b26f',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c86725ed9f04873658b270',
                              },
                           ],
                           content: '',
                           _id: 'a327e3a8-fffa-4a8b-a30d-0fa115213c10',
                        },
                     ],
                     dimensions: {
                        width: 20,
                        depth: 24,
                        height: 36,
                        weight: 25,
                        seatBackHeight: 17,
                        seatDepth: 17,
                        seatHeight: 19,
                        armHeight: 17,
                        _id: '67c866eded9f04873658af12',
                     },
                  },
                  {
                     name: 'Acro channel dining chair',
                     price: 18,
                     cancelled_price: 23,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173874/arhaus_images/lqsqo8unubl1x96zp4sh.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173874/arhaus_images/ymymsi8ftchvh2cn9srs.avif',
                        _id: '67c83474330262671f5159d5',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '97c6a9c0-fbe9-4b63-b115-5be406965e60',
                     options: [
                        {
                           option: 'Banks dusk',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67c97e67f5d46a951426f898',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741258341/arhaus_images/yqqhewojkmbanjnhzuz1.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741258342/arhaus_images/kixjxdfb05o8op6npjns.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741258343/arhaus_images/bykeyc66pfwky4pwmfx9.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741258343/arhaus_images/zj74ea2ta88yxy21k3aq.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741258342/arhaus_images/xkxtu7ul28xa2bipsto0.webp',
                           ],
                           tags: ['velvet'],
                           features:
                              'Soft and luxurious, velvets offer style and sophistication throughout the home. With a dense pile and soft luster, velvets saturate and enhance colors in both soft and bold applications.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '82% POLYESTER, 18% COTTON',
                           _id: '3b058141-20e6-4238-b33f-4b1e6e0f1f6e',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Dining chair frames are handcrafted by Italian artisans from solid beech wood accented by elegant channel detailing on the backrest.',
                                 _id: '67c97edbf5d46a951426fbf8',
                              },
                              {
                                 list: 'Hand-applied finish is sealed with clear lacquer for added protection and subtle sheen.',
                                 _id: '67c97edbf5d46a951426fbf9',
                              },
                              {
                                 list: 'Seats and backrests are generously padded with dense foam sustained by a flexible network of durable webbing designed for comfortable, evenly dispersed support.',
                                 _id: '67c97edbf5d46a951426fbfa',
                              },
                              {
                                 list: 'Our Performance Fabrics are extremely durable and resist stains and fading while remaining beautiful and soft to the touch.',
                                 _id: '67c97edbf5d46a951426fbfb',
                              },
                              {
                                 list: 'Natural wood may display small splits, knots, joint lines, or other organic features that add character to your piece without affecting quality or performance.',
                                 _id: '67c97edbf5d46a951426fbfc',
                              },
                              {
                                 list: 'Handcrafted furnishings made from natural materials with hand-applied finishes may vary in color, pattern, shape, and texture.',
                                 _id: '67c97edbf5d46a951426fbfd',
                              },
                           ],
                           content: '',
                           _id: '28f65e1b-dbef-468f-96e4-0f1dbf5ba8b1',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Relax and stay a while in our Arco Dining Collection—boasting an elevated, modern aesthetic and luxurious textured upholstery. Handcrafted in a region of Italy known for its furniture making, Arco features solid beech wood frames, elegant channel detailing, and generous padding on the softly curved silhouettes to offer maximum comfort for guests at any gathering.',
                           _id: '6082194e-762a-42f0-a4b5-66bca56dc06d',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c97f06f5d46a95142701dc',
                              },
                              {
                                 list: 'Our hand-crafted Italian wood furnishings can be easily cared for by regularly dusting with a soft, clean, undyed cloth.',
                                 _id: '67c97f06f5d46a95142701dd',
                              },
                              {
                                 list: 'Artisan-crafted Italian wood finishes should occasionally be waxed with natural and transparent beeswax. This will help preserve both the wood and the finish.',
                                 _id: '67c97f06f5d46a95142701de',
                              },
                              {
                                 list: 'For best results, follow use instructions for furniture wax carefully. Do not over apply.',
                                 _id: '67c97f06f5d46a95142701df',
                              },
                              {
                                 list: 'Performance Fabrics can be cleaned using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c97f06f5d46a95142701e0',
                              },
                              {
                                 list: 'To help prevent fabrics from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c97f06f5d46a95142701e1',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c97f06f5d46a95142701e2',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c97f06f5d46a95142701e3',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c97f06f5d46a95142701e4',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c97f06f5d46a95142701e5',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c97f06f5d46a95142701e6',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c97f06f5d46a95142701e7',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c97f06f5d46a95142701e8',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c97f06f5d46a95142701e9',
                              },
                              {
                                 list: 'Do not lean back in chairs.',
                                 _id: '67c97f06f5d46a95142701ea',
                              },
                           ],
                           content: '',
                           _id: '934ea2cc-ebc8-470c-8da1-eb313f10bffd',
                        },
                     ],
                     dimensions: {
                        width: 21,
                        depth: 30,
                        height: 36.5,
                        weight: 21,
                        seatBackHeight: 21,
                        seatDepth: 18,
                        seatHeight: 19,
                        _id: '67c97eb7f5d46a951426fa48',
                     },
                  },
                  {
                     name: 'Freya dining arm chair',
                     price: 22,
                     cancelled_price: 24,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173953/arhaus_images/jlq2inqs5972k0l17her.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741173953/arhaus_images/pxrqgcwkycjncrdhwtuy.avif',
                        _id: '67c834c4330262671f515b63',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '5a197fc7-302c-44e5-b0f7-fad95bc7ba80',
                     options: [
                        {
                           option: 'grizzly gravel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c8684ded9f04873658b997',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187143/arhaus_images/rsr53hfbzg6zziyuk5ux.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187145/arhaus_images/nwxs4iszde0a0jbvx6vx.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187145/arhaus_images/vieba4qj2jaxlkk9fdn8.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187145/arhaus_images/uqyldxpxkzow6mbiyk3t.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187145/arhaus_images/vdtiuobopuvcthypcbc7.webp',
                           ],
                           tags: ['boucle', 'performance'],
                           features:
                              'Bouclés are crafted from looped yarn and as a result, they offer plush comfort and an iconic, nubby look. Highly textured and rich in visual appeal, bouclés make spaces cozy and more inviting.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics:
                              '28% ACRYLIC, 24% COTTON, 20% VISCOSE, 16% WOOL, 12% POLYESTER',
                           _id: '23576b04-a88a-4cd4-85d1-9d96993406db',
                        },
                        {
                           option: 'Bellano cashmere',
                           stock: {
                              in_stock: false,
                              when_in_stock: '2025-06-06',
                              stock_count: 0,
                              _id: '67c86917ed9f04873658bd01',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187344/arhaus_images/zgvovnedzlqrndi7opkx.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187346/arhaus_images/mz4mnwndc2rujz9fgkjh.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187347/arhaus_images/nzk9i4agjw4wugbszklv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187348/arhaus_images/rd8lsjqvderp4idp5fol.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187347/arhaus_images/n2nsxranotmomwc1stnj.webp',
                           ],
                           tags: ['texttured weave'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics:
                              '28% ACRYLIC, 24% COTTON, 20% VISCOSE, 16% WOOL, 12% POLYESTER',
                           _id: '55c60888-a290-479d-aac7-bd313c906bcd',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Craftsman-built chair frames are constructed from solid beech wood for lasting strength and stability.',
                                 _id: '67c86996ed9f04873658bf81',
                              },
                              {
                                 list: 'Hand-stained finishes are sealed with a clear lacquer for added protection and subtle sheen.',
                                 _id: '67c86996ed9f04873658bf82',
                              },
                              {
                                 list: 'Seats are supported by sinuous springs, foam padding, and a flexible network of durable rubber webbing for comfortable, evenly dispersed support.',
                                 _id: '67c86996ed9f04873658bf83',
                              },
                              {
                                 list: 'Our Performance Fabrics are extremely durable and resist stains but remain beautiful and soft to the touch.',
                                 _id: '67c86996ed9f04873658bf84',
                              },
                           ],
                           content: '',
                           _id: '3604804d-2cb2-4184-8f72-e053834e094d',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Thoughtfully crafted by artisans in Italy, our Freya Dining Chair boasts an elegant silhouette with its subtle curves, tapered legs, and caned backrest. Pairing generous upholstered cushions with solid beech wood frames finished in complementing dark tones, Freya’s versatile aesthetic adds welcoming comfort to any dining table.',
                           _id: '32c7eb8e-1675-4412-9ae4-3b8afb3fd090',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d303d075653db6ade2fdf0',
                              },
                              {
                                 list: 'Our hand-crafted Italian wood furnishings can be easily cared for by regularly dusting with a soft, clean, undyed cloth.',
                                 _id: '67d303d075653db6ade2fdf1',
                              },
                              {
                                 list: 'Artisan-crafted Italian wood finishes should occasionally be waxed with natural and transparent beeswax. This will help preserve both the wood and the finish.',
                                 _id: '67d303d075653db6ade2fdf2',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67d303d075653db6ade2fdf3',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67d303d075653db6ade2fdf4',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67d303d075653db6ade2fdf5',
                              },
                              {
                                 list: 'Pieces upholstered in Bellano and Grizzly Performance Fabrics are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67d303d075653db6ade2fdf6',
                              },
                              {
                                 list: 'For best results, follow use instructions for furniture wax carefully. Do not over apply.',
                                 _id: '67d303d075653db6ade2fdf7',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub or clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67d303d075653db6ade2fdf8',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67d303d075653db6ade2fdf9',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67d303d075653db6ade2fdfa',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d303d075653db6ade2fdfb',
                              },
                              {
                                 list: 'Do not lean back in chairs.',
                                 _id: '67d303d075653db6ade2fdfc',
                              },
                           ],
                           content: '',
                           _id: 'f7881bf0-abbd-4d51-a516-d5d07b4fc626',
                        },
                     ],
                     dimensions: {
                        width: 22,
                        depth: 23,
                        height: 35,
                        weight: 16,
                        seatBackHeight: 19,
                        seatDepth: 18,
                        seatHeight: 19,
                        armHeight: 25,
                        _id: '67c86983ed9f04873658be41',
                     },
                  },
                  {
                     name: 'Venezia dining chair',
                     price: 20,
                     cancelled_price: 25,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741181922/arhaus_images/m4cjnvujfeeupdpexppg.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741181921/arhaus_images/sd8cpdrkoskoufgj0r1b.avif',
                        _id: '67c853e4ed9f04873658681c',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '206821d2-31cb-466e-98f8-fbc8ad7d735b',
                     options: [
                        {
                           option: 'bellano cashmere',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c86abbed9f04873658ccaf',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187764/arhaus_images/ifc2qrykt8fqd1fn1hsh.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187766/arhaus_images/lfv30dp3uxhqe51wtqx6.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187768/arhaus_images/xjrfcdzgydp1w4txdsbd.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187767/arhaus_images/ufavevvmqvrhncyhvezg.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741187767/arhaus_images/grbqwjuubqamvb61wf4h.webp',
                           ],
                           tags: ['textured weave'],
                           features:
                              'Textured weave fabrics are rich, appealing, and offer an inviting, natural feel. These sumptuous fabrics also showcase patterns and colors beautifully.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics:
                              '72% ACRYLIC, 14% VISCOSE, 9% WOOL, 5% POLYESTER',
                           _id: 'ea00bd1d-505c-4129-aaad-2272b6d87e65',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'This collection is handcrafted by artisan partners in Italy from natural materials with hand-applied finishes. Each Venezia piece will vary in color, pattern, shape, and texture.',
                                 _id: '67c86b1aed9f04873658cf77',
                              },
                              {
                                 list: 'Frames are built with ash wood and hardwood laminate supporting each upholstered seat.',
                                 _id: '67c86b1aed9f04873658cf78',
                              },
                              {
                                 list: 'Legs are crafted from solid ash wood.',
                                 _id: '67c86b1aed9f04873658cf79',
                              },
                              {
                                 list: 'Hand-applied, layered finishes are artfully distressed and lacquered for an elegant, timeworn appearance.',
                                 _id: '67c86b1aed9f04873658cf7a',
                              },
                              {
                                 list: 'Our Performance Fabrics are extremely durable and resist stains and fading yet remain beautiful and soft to the touch.',
                                 _id: '67c86b1aed9f04873658cf7b',
                              },
                              {
                                 list: 'Seats and backrests are generously padded with dense foam sustained by a flexible network of durable webbing designed for comfortable, evenly dispersed support.',
                                 _id: '67c86b1aed9f04873658cf7c',
                              },
                              {
                                 list: 'Venezia is available in customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own.',
                                 _id: '67c86b1aed9f04873658cf7d',
                              },
                              {
                                 list: 'We want you to love your Venezia as much as we do. We recommend ordering a material swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67c86b1aed9f04873658cf7e',
                              },
                           ],
                           content: '',
                           _id: '3dbe8901-3f11-400c-b08a-c66e8fcf747a',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'With a chic floating back silhouette, each Venezia Dining Chair marries modern style with natural ash wood and rich upholstery—expertly crafted by master artisan partners in a region of Italy known for its furniture making. Featuring sumptuous Performance Fabric upholstery complemented by finishes meticulously applied by hand, Venezia chairs are a comfortable everyday luxury that invite you to gather a little longer.',
                           _id: 'a05b0495-6ccc-49f1-8fc7-fafd7aa5c431',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c86b43ed9f04873658d265',
                              },
                              {
                                 list: 'Our hand-crafted Italian wood furnishings can be easily cared for by regularly dusting with a soft, clean, undyed cloth.',
                                 _id: '67c86b43ed9f04873658d266',
                              },
                              {
                                 list: 'Artisan-crafted Italian wood finishes should occasionally be waxed with natural and transparent beeswax. This will help preserve both the wood and the finish.',
                                 _id: '67c86b43ed9f04873658d267',
                              },
                              {
                                 list: 'Performance Fabrics are spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67c86b43ed9f04873658d268',
                              },
                              {
                                 list: 'For best results, follow use instructions for furniture wax carefully. Do not over apply.',
                                 _id: '67c86b43ed9f04873658d269',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c86b43ed9f04873658d26a',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c86b43ed9f04873658d26b',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67c86b43ed9f04873658d26c',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c86b43ed9f04873658d26d',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c86b43ed9f04873658d26e',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c86b43ed9f04873658d26f',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c86b43ed9f04873658d270',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c86b43ed9f04873658d271',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c86b43ed9f04873658d272',
                              },
                              {
                                 list: 'Do not lean back in chairs.',
                                 _id: '67c86b43ed9f04873658d273',
                              },
                           ],
                           content: '',
                           _id: '8065fa92-4365-41b9-b108-a3ac1de32b9a',
                        },
                     ],
                     dimensions: {
                        width: 21,
                        depth: 23,
                        height: 33,
                        weight: 18,
                        seatBackHeight: 16,
                        seatDepth: 17,
                        seatHeight: 18,
                        _id: '67c86afced9f04873658ce13',
                     },
                  },
                  {
                     name: 'jefferson dining chair',
                     price: 17,
                     cancelled_price: 18,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182184/arhaus_images/cte09iyjxutdgdqe1mjj.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741182184/arhaus_images/tlyqfmw6dfngjpkzckl2.avif',
                        _id: '67c854eaed9f048736586b36',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '19bec337-87cf-4fdb-b9fa-e57805d1da75',
                     options: [
                        {
                           option: 'nomad snow',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c86c09ed9f04873658db0b',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741188099/arhaus_images/iswlmnzxqwt8mjo8cnmf.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741188100/arhaus_images/tikuzpsis2ivbkquaa69.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741188102/arhaus_images/zr3leujfnuytd7dnpeai.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741188102/arhaus_images/am1uauni5oq6a9wnud1i.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741188102/arhaus_images/w0wzva5klsjdb7gakdon.webp',
                           ],
                           tags: ['crypton'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '92% POLYESTER, 8% LINEN',
                           _id: 'bce3232f-c4e1-43e7-a40c-a946aae915b5',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Our easy-to-clean, soft yet durable Crypton® Nomad Snow Home Performance Fabric is engineered with stain-, odor-, and moisture-resistant technology in every fiber.',
                                 _id: '67c86c5eed9f04873658de2f',
                              },
                              {
                                 list: 'Dining chair frames are handcrafted by Italian artisans from solid beech wood.',
                                 _id: '67c86c5eed9f04873658de30',
                              },
                              {
                                 list: 'Chairs feature hand-applied, layered stains or finishes that are artfully lacquered for an elegant appearance.',
                                 _id: '67c86c5eed9f04873658de31',
                              },
                              {
                                 list: 'Natural wood may display small splits, knots, joint lines, or other organic features that add character to your piece without affecting quality or performance.',
                                 _id: '67c86c5eed9f04873658de32',
                              },
                           ],
                           content: '',
                           _id: 'c1dd318d-06e1-435b-9f64-0b4c2b775ed7',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Tapered legs and gently curved backrests define our Jefferson Dining Chair Collection. Artfully crafted by Italian artisans from solid natural beech wood, Jefferson’s transitional design pairs beautifully with any aesthetic.',
                           _id: '95363807-fe72-499a-8663-57a0b1aa97d4',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c86c7fed9f04873658e165',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67c86c7fed9f04873658e166',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67c86c7fed9f04873658e167',
                              },
                              {
                                 list: 'Pieces upholstered in Crypton® Home Performance Fabrics can be spot-cleaned using mild detergent and water or water-based cleaning agents. Do not bleach.',
                                 _id: '67c86c7fed9f04873658e168',
                              },
                              {
                                 list: 'For tough stains, rub with a soft brush, then blot with a clean towel, rinsing thoroughly. Let dry.',
                                 _id: '67c86c7fed9f04873658e169',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67c86c7fed9f04873658e16a',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c86c7fed9f04873658e16b',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67c86c7fed9f04873658e16c',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67c86c7fed9f04873658e16d',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c86c7fed9f04873658e16e',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67c86c7fed9f04873658e16f',
                              },
                           ],
                           content: '',
                           _id: '6a625b27-eb35-41bd-9047-ef0a24c94078',
                        },
                     ],
                     dimensions: {
                        width: 20,
                        depth: 18,
                        height: 30,
                        weight: 10,
                        seatBackHeight: null,
                        seatDepth: 17,
                        seatHeight: 19,
                        _id: '67c86c3fed9f04873658dc9d',
                     },
                  },
               ],
            },
            {
               content: 'Dining Tables',
               image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741973243/yebc1aig5zixdbxtkxov_1_fvykmv.webp',
               _id: '460a21e6-d2b5-4021-8f1c-15ff78651884',
               products: [
                  {
                     name: 'finnley dining table',
                     price: 31,
                     cancelled_price: 34,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741261857/arhaus_images/c5j2tq7wytx1ewszewjd.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741261857/arhaus_images/gpmea1tu3nocciatr2v0.avif',
                        _id: '67c98c22bc2710de4fb40167',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '27b50875-ff83-4649-b7e0-820b28e9fbbf',
                     options: [
                        {
                           option: 'ebony',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c9972ebc2710de4fb4274f',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264682/arhaus_images/d0g9aslvgbmnnexjkn37.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264684/arhaus_images/x5bkznkcumu0b7a2a28u.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264685/arhaus_images/jzsdumxcfwltbi3eb4uh.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264684/arhaus_images/vm9dym7ltnyugbdq4s0q.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264684/arhaus_images/fzhjzqr6zssw9rx385ee.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '1dce34c3-6241-46bf-9412-9ec468c8a2c2',
                        },
                        {
                           option: 'mocha',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67c99859bc2710de4fb42ba0',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264982/arhaus_images/bqi7weqbq6j75x1gmj4s.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264983/arhaus_images/l8rwoimwuxaqygubgfau.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264984/arhaus_images/g4dvjzwy3b41zpiosrr5.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264984/arhaus_images/ey6kfnobbocrsfs8sbzg.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741264984/arhaus_images/uxahenoht1uzwrttk7tp.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'df747987-f546-4b70-96c8-2c5fe1c47ae6',
                        },
                        {
                           option: 'honey',
                           stock: {
                              in_stock: false,
                              when_in_stock: '2025-05-11',
                              stock_count: 0,
                              _id: '67c998c7bc2710de4fb42ff1',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265092/arhaus_images/ia2bqnnjvuur0puguqnl.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265094/arhaus_images/sguq5akidota4an3zynk.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265094/arhaus_images/xct9qidt3yoqzvuhwkmb.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265094/arhaus_images/hfbsa8clzbsch4liw9zw.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '53f8638f-61e9-4af0-a172-9df3f3f59e07',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Craftsman-built pieces are constructed from pine, oak veneers, and Carrara marble or bluestone tops, featuring reinforced mortise-and-tenon joinery for added strength and stability.',
                                 _id: '67c9998dbc2710de4fb433a5',
                              },
                              {
                                 list: 'Wood surfaces are hand-stained with a striking finish and protective lacquer for subtle sheen.',
                                 _id: '67c9998dbc2710de4fb433a6',
                              },
                              {
                                 list: 'Zinc-alloy plinth bases feature a light brass finish.',
                                 _id: '67c9998dbc2710de4fb433a7',
                              },
                           ],
                           content: '',
                           _id: 'a788fdd6-ccfe-4d8b-a326-ece054b4e430',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Our Finnley Collection showcases a stunning mixed-material design, inviting elevated style into any room in your home. Hand-finished pine from Finland is luxuriously complemented by a stone top, accented by light brass plinth bases and reeded oak detailing. The result is an eclectic-yet-chic collection that easily fits into any aesthetic.',
                           _id: '354f2578-3cb8-4e27-9ad4-3b8d4e329db1',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c999a5bc2710de4fb43766',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c999a5bc2710de4fb43767',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c999a5bc2710de4fb43768',
                              },
                              {
                                 list: 'Stone pieces may display natural mineral deposits, swirling, joint lines, veining, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c999a5bc2710de4fb43769',
                              },
                              {
                                 list: 'Our stone tops feature a protective wax topcoat. To preserve this topcoat, and the integrity of the stone itself, we recommend using a granite and quartz cleaner daily, as well as a granite and quartz polish weekly.',
                                 _id: '67c999a5bc2710de4fb4376a',
                              },
                              {
                                 list: 'Wax topcoats can have an adverse reaction when in contact with hot items. To avoid this, we recommend placing hot items on non-porous coasters or placemats.',
                                 _id: '67c999a5bc2710de4fb4376b',
                              },
                              {
                                 list: 'Spot-clean using a damp cloth, mild soap, and water. Use a towel to dry.',
                                 _id: '67c999a5bc2710de4fb4376c',
                              },
                              {
                                 list: 'Occasionally clean using cleaning agents specifically designed for stone.',
                                 _id: '67c999a5bc2710de4fb4376d',
                              },
                              {
                                 list: 'Stone surfaces can be easily cleaned with non-corrosive, non-abrasive cleaning agents. Rinse thoroughly and dry immediately.',
                                 _id: '67c999a5bc2710de4fb4376e',
                              },
                              {
                                 list: 'Avoid using window cleaner or cleaning agents containing lemon, vinegar, or other acids as these could cause damage to stone surfaces.',
                                 _id: '67c999a5bc2710de4fb4376f',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67c999a5bc2710de4fb43770',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c999a5bc2710de4fb43771',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67c999a5bc2710de4fb43772',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c999a5bc2710de4fb43773',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c999a5bc2710de4fb43774',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67c999a5bc2710de4fb43775',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood or stone surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67c999a5bc2710de4fb43776',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67c999a5bc2710de4fb43777',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c999a5bc2710de4fb43778',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67c999a5bc2710de4fb43779',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c999a5bc2710de4fb4377a',
                              },
                           ],
                           content: '',
                           _id: '2c4cf4ef-f0aa-4164-acc2-1ebf622f6a25',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 72,
                        depth: 38,
                        height: 30,
                        weight: 332,
                        _id: '67c9995bbc2710de4fb431cb',
                     },
                  },
                  {
                     name: 'petra dining table',
                     price: 52,
                     cancelled_price: 60,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265502/arhaus_images/kbz66uek3ryf0ntri1jf.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265502/arhaus_images/ohkhfn5zgenlqcko7fcb.avif',
                        _id: '67c99a5fbc2710de4fb43e1c',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '8a98d9bc-3eac-40d3-891b-66cec144cab4',
                     options: [
                        {
                           option: 'century marble',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c99fd9bc2710de4fb476c1',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266902/arhaus_images/gnu4nxztikflzgxcasp6.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266903/arhaus_images/fabcoqkkrmsz6ab5onkd.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266904/arhaus_images/eqfn8iqx0gtzbnbbf4ru.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266903/arhaus_images/ebvoirniivknu63sh9op.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266903/arhaus_images/fkf8trm1vza3tzzwrrgv.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'f2de1741-b720-4f23-a17a-6ccef116478a',
                        },
                        {
                           option: 'petrified wood',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 3,
                              _id: '67c9a076bc2710de4fb478cb',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267058/arhaus_images/ccj4zez4ub43cwwnzief.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267061/arhaus_images/ndjgrq4ureqvsuzgk461.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267061/arhaus_images/oczxeuygdvsoab3ksiud.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267061/arhaus_images/juezpyvenovb1ooknwub.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267061/arhaus_images/kavizzdayt6icgzyy3ag.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267061/arhaus_images/q9ywzxtwkbhm7j0be9wa.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '4b76a8ff-b58c-4942-b1f7-b0503b85c95b',
                        },
                        {
                           option: 'argento pyrite',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67c9a127bc2710de4fb47d64',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267236/arhaus_images/sa8rbyisvmhf74dchba7.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267238/arhaus_images/m6oeezhakwzwqucnfvxm.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267238/arhaus_images/hxocjme0bcxbtda3folo.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267238/arhaus_images/pintbtapaifbe7ix5cgs.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267238/arhaus_images/aicghjqssrhmqizfxln2.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741267238/arhaus_images/v9uuh6pcstegmqxirx77.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'ade4160e-7caf-44e2-b339-b36833d515e5',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Handcrafted petrified wood surfaces are assembled using petrified wood veneers and solid wood and are complemented by artisan-finished iron base featuring an antiqued, dark grey patina.',
                                 _id: '67c9a209bc2710de4fb48407',
                              },
                              {
                                 list: 'Handcrafted marble surfaces are assembled using century marble veneers and solid wood and are complemented by artisan-finished iron, featuring our Caribbean Gold patina.',
                                 _id: '67c9a209bc2710de4fb48408',
                              },
                              {
                                 list: 'Handcrafted argento pyrite stone tabletops are assembled using rare arengto pyrite minerals that are formed in active volcanoes and are complemented by an iron base featuring an antiqued, dark grey patina.',
                                 _id: '67c9a209bc2710de4fb48409',
                              },
                              {
                                 list: 'Stone surfaces are buffed and polished to accentuate their natural coloring.',
                                 _id: '67c9a209bc2710de4fb4840a',
                              },
                              {
                                 list: 'Hand-picked materials are sustainably sourced in compliance with Philippine Environmental Regulations.',
                                 _id: '67c9a209bc2710de4fb4840b',
                              },
                              {
                                 list: 'Featuring elegant variations in color, pattern, shape, and texture, natural stone surfaces are as beautiful to look at as they are durable.',
                                 _id: '67c9a209bc2710de4fb4840c',
                              },
                           ],
                           content: '',
                           _id: '738fb1e8-aae4-4980-9f68-e37a7931e490',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Our Petra Dining Collection is constructed from rare, naturally sourced materials, showcasing distinct, varying colors and textures, making each piece a true one-of-a-kind. Petrified wood tabletops cut from lengths of fossilized trees, white century marble or grey marble tabletops from remote regions of the Philippines are selected by hand and carefully mosaicked to form stunning surfaces.',
                           _id: '3b99731d-95c1-4bb5-a037-780a2b5a9535',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c9a24bbc2710de4fb48837',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural materials with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9a24bbc2710de4fb48838',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural materials may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c9a24bbc2710de4fb48839',
                              },
                              {
                                 list: 'Stone pieces may display natural mineral deposits, swirling, joint lines, veining, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c9a24bbc2710de4fb4883a',
                              },
                              {
                                 list: 'Our stone tops feature a protective wax topcoat. To preserve this topcoat, and the integrity of the stone itself, we recommend using a granite and quartz cleaner daily, as well as a granite and quartz polish weekly.',
                                 _id: '67c9a24bbc2710de4fb4883b',
                              },
                              {
                                 list: 'Wax topcoats can have an adverse reaction when in contact with hot items. To avoid this, we recommend placing hot items on non-porous coasters or placemats.',
                                 _id: '67c9a24bbc2710de4fb4883c',
                              },
                              {
                                 list: 'Spot-clean using a damp cloth, mild soap, and water. Use a towel to dry.',
                                 _id: '67c9a24bbc2710de4fb4883d',
                              },
                              {
                                 list: 'Occasionally clean using cleaning agents specifically designed for stone.',
                                 _id: '67c9a24bbc2710de4fb4883e',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c9a24bbc2710de4fb4883f',
                              },
                              {
                                 list: 'Metal surfaces should be dusted regularly with a soft, dry cloth to remove any particles or loose dirt.',
                                 _id: '67c9a24bbc2710de4fb48840',
                              },
                              {
                                 list: 'Avoid using window cleaner or cleaning agents containing lemon, vinegar, or other acids as these could cause damage to stone surfaces.',
                                 _id: '67c9a24bbc2710de4fb48841',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c9a24bbc2710de4fb48842',
                              },
                              {
                                 list: 'When assembling new furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67c9a24bbc2710de4fb48843',
                              },
                              {
                                 list: 'Never place hot dishes directly on finished surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67c9a24bbc2710de4fb48844',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats. Wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67c9a24bbc2710de4fb48845',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c9a24bbc2710de4fb48846',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c9a24bbc2710de4fb48847',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c9a24bbc2710de4fb48848',
                              },
                              {
                                 list: 'Avoid using table pedestals as footrests.',
                                 _id: '67c9a24bbc2710de4fb48849',
                              },
                           ],
                           content: '',
                           _id: 'e6c96d8e-f8cb-4301-b3ac-da5920f45426',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 74,
                        depth: 38,
                        height: 30,
                        weight: 185,
                        _id: '67c9a1ecbc2710de4fb481fd',
                     },
                  },
                  {
                     name: 'jacob dinig table with vertex base',
                     price: 42,
                     cancelled_price: 48,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265609/arhaus_images/mcuvivuna9ajn7lubt0y.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265609/arhaus_images/us8hjqekmxjvhzyjkoqe.avif',
                        _id: '67c99acabc2710de4fb442b3',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'ba644540-600b-43a6-bd2c-7d71da2594fa',
                     options: [
                        {
                           option: 'redwood',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c9a51bbc2710de4fb49d37',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268248/arhaus_images/rvkhqtgvv6mpeo551hht.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268249/arhaus_images/sp3jdekqoqlxhojhcsqj.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268250/arhaus_images/y8te4htng7zo5xkhwml1.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268250/arhaus_images/u9skfmbsoanm3oxwnqo9.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268249/arhaus_images/smfgms6g3vcxqo08gfmf.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '87187679-e6d8-47ea-b22b-ed012f6e1026',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Pieces with our Brown Walnut finish are made from solid walnut wood. Pieces with our White Oak finish are made from solid oak.',
                                 _id: '67c9a551bc2710de4fb4a1af',
                              },
                              {
                                 list: 'Due to their artisan-crafted nature, individual pieces may vary in color, pattern, shape, and texture, making them truly unique.',
                                 _id: '67c9a551bc2710de4fb4a1b0',
                              },
                              {
                                 list: 'Hand-crafted finishes age beautifully, developing one-of-a-kind patinas as they’re exposed to the environment of your home',
                                 _id: '67c9a551bc2710de4fb4a1b1',
                              },
                              {
                                 list: 'Natural wood may display small splits, knots, joint lines or other organic features, adding character to each piece without affecting its performance.',
                                 _id: '67c9a551bc2710de4fb4a1b2',
                              },
                           ],
                           content: '',
                           _id: 'af9ffeef-8b0f-4c86-b211-86dfb02318d3',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Our Jacob Dining Collection celebrates craftsmanship with sleek and modern style, bringing natural wood into contemporary dining spaces. Tabletops are made from solid oak and walnut, handcrafted by a community of Amish artisans. Oils, stains, and varnishes are applied to each tabletop by hand, creating high-gloss finishes that accentuate the wood’s natural beauty. Vertex Table Bases are made from iron in a subtle, flat black finish to complement the beautiful tones of the wood.',
                           _id: '82bc892f-26f8-4af4-8644-e01c81f8c196',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c9a56dbc2710de4fb4a8e5',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9a56dbc2710de4fb4a8e6',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c9a56dbc2710de4fb4a8e7',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67c9a56dbc2710de4fb4a8e8',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c9a56dbc2710de4fb4a8e9',
                              },
                              {
                                 list: 'Our wood furnishings are sealed with lacquer, adding a protective (but not indestructible) barrier, and can be easily spot-cleaned using a mild soap, water, and a soft undyed cloth as needed. Dry immediately to prevent marks from forming.',
                                 _id: '67c9a56dbc2710de4fb4a8ea',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67c9a56dbc2710de4fb4a8eb',
                              },
                              {
                                 list: 'Metal surfaces should be dusted regularly with a soft, dry cloth to remove any particles or loose dirt. Avoid contact with excessive moisture.',
                                 _id: '67c9a56dbc2710de4fb4a8ec',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c9a56dbc2710de4fb4a8ed',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67c9a56dbc2710de4fb4a8ee',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c9a56dbc2710de4fb4a8ef',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c9a56dbc2710de4fb4a8f0',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67c9a56dbc2710de4fb4a8f1',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67c9a56dbc2710de4fb4a8f2',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67c9a56dbc2710de4fb4a8f3',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c9a56dbc2710de4fb4a8f4',
                              },
                              {
                                 list: 'Avoid using table bases as footrests.',
                                 _id: '67c9a56dbc2710de4fb4a8f5',
                              },
                           ],
                           content: '',
                           _id: '955e9c64-91ee-4ec8-969b-5007695717d1',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 72,
                        depth: 36,
                        height: 30,
                        weight: 159,
                        _id: '67c9a539bc2710de4fb49f73',
                     },
                  },
                  {
                     name: 'petra round dining table',
                     price: 48,
                     cancelled_price: 52,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265721/arhaus_images/xhipea9ifv35zbvrxxkv.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265721/arhaus_images/tynj6w8tgxcvzh6pfitj.avif',
                        _id: '67c99b3abc2710de4fb449d9',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '4c0a83d4-cc11-4ee9-94ed-5eb6d4b9550a',
                     options: [
                        {
                           option: 'petrified wood',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c9a61ebc2710de4fb4b28a',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268506/arhaus_images/msblcy5h4ahzr4upgfqk.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268507/arhaus_images/jxqw8imqrqd21ditdcox.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268508/arhaus_images/gcdnouxxsm12rahsnmrc.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268508/arhaus_images/jyxbspbej0goodsx0hpp.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268508/arhaus_images/tzzxqichobs3xb2iprmc.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '374b7d96-f1d2-451b-a77b-fd2a0f04200b',
                        },
                        {
                           option: 'century marble',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c9a677bc2710de4fb4b4f0',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268595/arhaus_images/ds7ou8py0ga7ae78ymni.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268596/arhaus_images/yylmxjruy6gbk8ipkh0m.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268598/arhaus_images/qnq9rarpojq69zz8ffwe.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268598/arhaus_images/hjk4knp5crwaecdccxjz.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'ad0ec22c-c061-44b2-ad62-d67483b24169',
                        },
                        {
                           option: 'argento pyrite',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c9a747bc2710de4fb4c40b',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268802/arhaus_images/chiyqciyiu53dlxy87p5.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268804/arhaus_images/v255vili2wg3f4elwcn4.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268806/arhaus_images/chg2fpbkrgwxdpxsgom5.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268806/arhaus_images/rcvzxe86dqx5utnkzh54.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741268805/arhaus_images/mrw8n8xeuvvypafpronu.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '60fd2415-b77e-416f-bb54-9961ef022260',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Handcrafted petrified wood surfaces are assembled using petrified wood veneers and solid wood and are complemented by artisan-finished iron base featuring an antiqued, dark grey patina.',
                                 _id: '67c9a6b6bc2710de4fb4bc79',
                              },
                              {
                                 list: 'Handcrafted marble surfaces are assembled using century marble veneers and solid wood and are complemented by artisan-finished iron, featuring our Caribbean Gold patina.',
                                 _id: '67c9a6b6bc2710de4fb4bc7a',
                              },
                              {
                                 list: 'Handcrafted argento pyrite stone tabletops are assembled using rare arengto pyrite minerals that are formed in active volcanoes and are complemented by an iron base featuring an antiqued, dark grey patina.',
                                 _id: '67c9a6b6bc2710de4fb4bc7b',
                              },
                              {
                                 list: 'Stone surfaces are buffed and polished to accentuate their natural coloring.',
                                 _id: '67c9a6b6bc2710de4fb4bc7c',
                              },
                              {
                                 list: 'Hand-picked materials are sustainably sourced in compliance with Philippine Environmental Regulations.',
                                 _id: '67c9a6b6bc2710de4fb4bc7d',
                              },
                              {
                                 list: 'Featuring elegant variations in color, pattern, shape, and texture, natural stone surfaces are as beautiful to look at as they are durable.',
                                 _id: '67c9a6b6bc2710de4fb4bc7e',
                              },
                           ],
                           content: '',
                           _id: '8b59055d-2267-4a40-aa48-8f200e5cab0b',
                        },
                        {
                           header: 'Story',
                           paragraph: true,
                           content:
                              'Our Petra Dining Collection is constructed from rare, naturally sourced materials, showcasing distinct, varying colors and textures, making each piece a true one-of-a-kind. Petrified wood tabletops cut from lengths of fossilized trees, white century marble or grey marble tabletops from remote regions of the Philippines are selected by hand and carefully mosaicked to form stunning surfaces.',
                           _id: 'b8b196be-7f5a-4961-90c3-37e1b0ff4588',
                           lists: [],
                        },
                        {
                           header: 'Care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c9a6dabc2710de4fb4c161',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural materials with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9a6dabc2710de4fb4c162',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural materials may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c9a6dabc2710de4fb4c163',
                              },
                              {
                                 list: 'Stone pieces may display natural mineral deposits, swirling, joint lines, veining, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c9a6dabc2710de4fb4c164',
                              },
                              {
                                 list: 'Our stone tops feature a protective wax topcoat. To preserve this topcoat, and the integrity of the stone itself, we recommend using a granite and quartz cleaner daily, as well as a granite and quartz polish weekly.',
                                 _id: '67c9a6dabc2710de4fb4c165',
                              },
                              {
                                 list: 'Wax topcoats can have an adverse reaction when in contact with hot items. To avoid this, we recommend placing hot items on non-porous coasters or placemats.',
                                 _id: '67c9a6dabc2710de4fb4c166',
                              },
                              {
                                 list: 'Spot-clean using a damp cloth, mild soap, and water. Use a towel to dry.',
                                 _id: '67c9a6dabc2710de4fb4c167',
                              },
                              {
                                 list: 'Occasionally clean using cleaning agents specifically designed for stone.',
                                 _id: '67c9a6dabc2710de4fb4c168',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c9a6dabc2710de4fb4c169',
                              },
                              {
                                 list: 'Metal surfaces should be dusted regularly with a soft, dry cloth to remove any particles or loose dirt.',
                                 _id: '67c9a6dabc2710de4fb4c16a',
                              },
                              {
                                 list: 'Avoid using window cleaner or cleaning agents containing lemon, vinegar, or other acids as these could cause damage to stone surfaces.',
                                 _id: '67c9a6dabc2710de4fb4c16b',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c9a6dabc2710de4fb4c16c',
                              },
                              {
                                 list: 'When assembling new furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67c9a6dabc2710de4fb4c16d',
                              },
                              {
                                 list: 'Never place hot dishes directly on finished surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67c9a6dabc2710de4fb4c16e',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats. Wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67c9a6dabc2710de4fb4c16f',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c9a6dabc2710de4fb4c170',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c9a6dabc2710de4fb4c171',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c9a6dabc2710de4fb4c172',
                              },
                              {
                                 list: 'Avoid using table pedestals as footrests.',
                                 _id: '67c9a6dabc2710de4fb4c173',
                              },
                           ],
                           content: '',
                           _id: '8561ab40-33ac-4cb8-8aed-3d3177261879',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 64,
                        depth: 64,
                        height: 30,
                        weight: 176,
                        _id: '67c9a69dbc2710de4fb4ba13',
                     },
                  },
                  {
                     name: 'acacius round dining table',
                     price: 56,
                     cancelled_price: 60,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265815/arhaus_images/hbppr111pnor5da5kmba.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741265815/arhaus_images/hmqc2jol0w8ay36wvatf.avif',
                        _id: '67c99b99bc2710de4fb44e70',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'b7743e15-ed16-4daa-b251-bb2c39a686eb',
                     options: [
                        {
                           option: 'redwood',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c9a843bc2710de4fb4cea7',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741269056/arhaus_images/oitslowd6zihecnanjw9.jpg',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741269058/arhaus_images/ebuhbrbtjumgbhssykiw.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741269058/arhaus_images/wbzltcmsfwfxmqgdnefp.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741269058/arhaus_images/dgaik0xvq6biydcsek3l.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '026e94c2-cb51-444d-a098-b7a5e4aa9e66',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Handcrafted in Mexico from a unique combination of naturally oxidized steel and carefully procured veneers from reclaimed yukas trees.',
                                 _id: '67c9a8fbbc2710de4fb4d6ad',
                              },
                              {
                                 list: 'Hand-applied finish is weathered and coated with polyurethane for added protection.',
                                 _id: '67c9a8fbbc2710de4fb4d6ae',
                              },
                              {
                                 list: 'This collection is artisan-crafted from natural materials with hand-applied finishes. Individual pieces may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9a8fbbc2710de4fb4d6af',
                              },
                           ],
                           content: '',
                           _id: 'acc183a1-ab3b-4f86-a806-82da9d421a2c',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Made from panels of steel left out in the elements to age, Acacius is one of our signature collections handcrafted by a family of imaginative artists in Mexico. After developing a patina of stains and speckles, each panel is molded around the organic silhouette of reclaimed yukas, creating a finished piece as unique as the trees themselves.',
                           _id: 'f371b7c6-3f80-475e-b1d5-ed2ec90d1a4a',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c9a91cbc2710de4fb4dbea',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c9a91cbc2710de4fb4dbeb',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67c9a91cbc2710de4fb4dbec',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best. Metal surfaces should also be dusted regularly with a soft, dry cloth.',
                                 _id: '67c9a91cbc2710de4fb4dbed',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c9a91cbc2710de4fb4dbee',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67c9a91cbc2710de4fb4dbef',
                              },
                              {
                                 list: 'As steel is prone to rust, avoid contact with excessive moisture.',
                                 _id: '67c9a91cbc2710de4fb4dbf0',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c9a91cbc2710de4fb4dbf1',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c9a91cbc2710de4fb4dbf2',
                              },
                              {
                                 list: 'When assembling new furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67c9a91cbc2710de4fb4dbf3',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood or metal surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67c9a91cbc2710de4fb4dbf4',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67c9a91cbc2710de4fb4dbf5',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c9a91cbc2710de4fb4dbf6',
                              },
                              {
                                 list: 'Avoid using table pedestal as a footrest.',
                                 _id: '67c9a91cbc2710de4fb4dbf7',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c9a91cbc2710de4fb4dbf8',
                              },
                           ],
                           content: '',
                           _id: '4a5e68a5-3391-4af4-ac08-04588aa40e96',
                        },
                     ],
                     dimensions: {
                        width: 54,
                        depth: 22,
                        height: 31,
                        weight: 173,
                        _id: '67c9a8e1bc2710de4fb4d415',
                     },
                  },
                  {
                     name: "cerea amalfi bell'arte dining table",
                     price: 46,
                     cancelled_price: 52,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266115/arhaus_images/vldl2qvuleoop7hzs9fa.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266115/arhaus_images/skwv2gesmtskr4qupb7u.avif',
                        _id: '67c99cc4bc2710de4fb45596',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'ff172311-8f08-4188-9f43-f0f8e7a9ccfa',
                     options: [
                        {
                           option: 'Ivory grey & dark rust',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67c9abcabc2710de4fb4ecb5',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741269958/arhaus_images/ibxd3qc843y8hcpbzy4m.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741269960/arhaus_images/snpyzvnv08ssxnrbu3kn.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741269961/arhaus_images/ogtmbvonlruor7h1tlzt.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741269961/arhaus_images/xi9rkhqbluzxg8asr0fo.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741269961/arhaus_images/ftlykranyrkfuw4mejki.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '35b3fb96-b47d-4864-a36f-c8fa6e382c75',
                        },
                        {
                           option: 'Antique white',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67c9ac3dbc2710de4fb4ef71',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270074/arhaus_images/qdvk02jejutsmhlx7l9u.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270075/arhaus_images/bjdevoqvoirrsjl5no0r.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270076/arhaus_images/rwcd4i9visatdpyiyuav.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270076/arhaus_images/jtxjdsd34ye17tiqhre0.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270076/arhaus_images/elgru1zsxu9v7q4n0hhu.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '2c22f519-4666-4e02-a7ad-ebb328daccdc',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'A hand-painted, intricate runner adds delicate detail to this tabletop.',
                                 _id: '67c9acbebc2710de4fb4f7d1',
                              },
                              {
                                 list: 'Our exclusive Bell’Arte Collection is handcrafted from solid poplar wood by master artisans in a region of Italy renowned for its furniture-making.',
                                 _id: '67c9acbebc2710de4fb4f7d2',
                              },
                              {
                                 list: 'Every surface is distressed and finished by hand, combining layers of stain, paint, and lacquer with careful brushstrokes—a process that takes over three days to complete.',
                                 _id: '67c9acbebc2710de4fb4f7d3',
                              },
                              {
                                 list: 'This collection is artisan-crafted from natural materials with hand-applied finishes. Individual pieces may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9acbebc2710de4fb4f7d4',
                              },
                              {
                                 list: 'Natural wood may display small splits, knots, joint lines, or other organic features that will not affect the quality or performance of your piece.',
                                 _id: '67c9acbebc2710de4fb4f7d5',
                              },
                              {
                                 list: 'Includes two 20" extensions to accommodate additional seating.',
                                 _id: '67c9acbebc2710de4fb4f7d6',
                              },
                           ],
                           content: '',
                           _id: '1818d2ee-ba34-4f83-bf9c-5cb3e5f06046',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'A passion for artistry, a celebration of family, a reverence for tradition. Our made-to order Italian dining tables are handcrafted and hand-painted by a family of master artisans who, over our 30 years working together, has become like family to Arhaus. Inspired by the town of Cerea, which is near our artisans’ workshop, our Cerea Dining Table is traditionally hand-painted and carefully detailed.',
                           _id: 'e785e74f-1e53-4782-b59c-3859f4335bb3',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c9ace1bc2710de4fb4fd65',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9ace1bc2710de4fb4fd66',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c9ace1bc2710de4fb4fd67',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67c9ace1bc2710de4fb4fd68',
                              },
                              {
                                 list: 'Our artisan-crafted Italian collections can be easily cared for by regularly dusting the antique wood surfaces with a soft, clean, undyed cloth.',
                                 _id: '67c9ace1bc2710de4fb4fd69',
                              },
                              {
                                 list: 'Antique wood finish should occasionally be waxed with natural and transparent beeswax. This will help preserve both the wood and the finish.',
                                 _id: '67c9ace1bc2710de4fb4fd6a',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c9ace1bc2710de4fb4fd6b',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c9ace1bc2710de4fb4fd6c',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c9ace1bc2710de4fb4fd6d',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67c9ace1bc2710de4fb4fd6e',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67c9ace1bc2710de4fb4fd6f',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67c9ace1bc2710de4fb4fd70',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c9ace1bc2710de4fb4fd71',
                              },
                              {
                                 list: 'Avoid using table pedestals as footrests.',
                                 _id: '67c9ace1bc2710de4fb4fd72',
                              },
                           ],
                           content: '',
                           _id: '3ee006c7-bf82-467f-86c5-60e8a0ec27ce',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 118,
                        depth: 44,
                        height: 31,
                        weight: 277,
                        _id: '67c9acadbc2710de4fb4f515',
                     },
                  },
                  {
                     name: 'Tuscany oval extension dining table',
                     price: 32,
                     cancelled_price: 43,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266255/arhaus_images/b0mnnlbzauaztft79lqc.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266255/arhaus_images/zzezlnkosiojplts4kfz.avif',
                        _id: '67c99d50bc2710de4fb45a2d',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '20b8eb3c-bd73-4730-a099-857c2c46263c',
                     options: [
                        {
                           option: 'midnight',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 2,
                              _id: '67c9ada2bc2710de4fb50ede',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270431/arhaus_images/ohi36ihcormf7zaz8cod.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270432/arhaus_images/jtzvy4avktzna0op9wc3.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270433/arhaus_images/y4dwlzzgo2qvmh9oaznm.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270433/arhaus_images/errwnfvshlbku6lsezau.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270433/arhaus_images/rutuncgejh15xruup5ad.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270433/arhaus_images/q4ro8xsqtn7qdhnphoen.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270433/arhaus_images/pq1zptwkmilbql7nblav.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '80fd8f59-35f2-4c0d-b779-14ef7ad99459',
                        },
                        {
                           option: 'antique blonde',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67c9ae1bbc2710de4fb511c2',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270550/arhaus_images/gdt85okm4ui1zxitvijb.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270554/arhaus_images/lch9hoksor8ls41fvdza.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270552/arhaus_images/nvf0lkhkbxjwsixreztf.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270553/arhaus_images/ohcu6ja3x5dw95gv6db5.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270552/arhaus_images/jqvv5qgvet3aan4yjnqs.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270552/arhaus_images/siftlcnq47mhoqx6ctzi.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'e8129f1c-4207-480d-a1ac-9a80113fa8e3',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Handcrafted by Italian artisans from solid poplar wood, selected for its warm, rich coloring and fine grain.',
                                 _id: '67c9aeb0bc2710de4fb51a6e',
                              },
                              {
                                 list: 'Tabletop is complemented by hand-turned pedestal legs and hand-sculpted crown molding for additional architectural interest.',
                                 _id: '67c9aeb0bc2710de4fb51a6f',
                              },
                              {
                                 list: 'For a distinctive yet traditional silhouette, legs are connected by a horizontal trestle.',
                                 _id: '67c9aeb0bc2710de4fb51a70',
                              },
                              {
                                 list: 'Antiqued finishes are meticulously applied, brushed, and distressed to accentuate the poplar’s natural features and create a gently aged appearance.',
                                 _id: '67c9aeb0bc2710de4fb51a71',
                              },
                              {
                                 list: 'Finished surfaces are coated with multiple layers of lacquer for added protection and subtle sheen.',
                                 _id: '67c9aeb0bc2710de4fb51a72',
                              },
                              {
                                 list: 'Vintage-inspired, antiqued, brass pharmacy handles accentuate table leaves.',
                                 _id: '67c9aeb0bc2710de4fb51a73',
                              },
                              {
                                 list: 'Includes two 20" leaves, which are not self-storing.',
                                 _id: '67c9aeb0bc2710de4fb51a74',
                              },
                           ],
                           content: '',
                           _id: '7b4f5b1e-bf96-427a-b365-c75e74d5b7e0',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'With romantic ambience and Old World charm, our Tuscany Dining Collection’s elegant design invites hours of gathering with family and friends. Handcrafted by Italian furniture artisans to become more beautiful with age, every Tuscany piece possesses a unique “fingerprint” of patterns and textures accentuated by a hand-applied, carefully distressed finish.',
                           _id: '9702d1a6-8234-4fd7-90fe-fc8e597fec8f',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'This collection is artisan-crafted from natural materials with hand-applied finishes. Individual pieces may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9aed0bc2710de4fb5235a',
                              },
                              {
                                 list: 'Natural wood may display small splits, knots, joint lines, or other organic features that will not affect the quality or performance of your piece.',
                                 _id: '67c9aed0bc2710de4fb5235b',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly due to temperature and humidity. This is normal and should be expected from season to season.',
                                 _id: '67c9aed0bc2710de4fb5235c',
                              },
                              {
                                 list: 'For daily maintenance, clean lacquered surfaces using a mild soap, water, and a soft undyed cloth as needed.',
                                 _id: '67c9aed0bc2710de4fb5235d',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67c9aed0bc2710de4fb5235e',
                              },
                              {
                                 list: 'Arhaus furnishings are designed to withstand everyday use; however normal wear and tear is reflective of your care and use.',
                                 _id: '67c9aed0bc2710de4fb5235f',
                              },
                              {
                                 list: 'Avoid placing indoor wood furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in wood finishes.',
                                 _id: '67c9aed0bc2710de4fb52360',
                              },
                              {
                                 list: 'When assembling your new wood furnishings, avoid overtightening hardware as this could cause cracking in wood surfaces.',
                                 _id: '67c9aed0bc2710de4fb52361',
                              },
                              {
                                 list: 'Remove dirt from wood surfaces using a clean, damp, undyed cloth. Dry immediately to prevent marks from forming.',
                                 _id: '67c9aed0bc2710de4fb52362',
                              },
                              {
                                 list: 'To prevent moisture damage, wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67c9aed0bc2710de4fb52363',
                              },
                              {
                                 list: 'Do not clean wood surfaces using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and wood surfaces.',
                                 _id: '67c9aed0bc2710de4fb52364',
                              },
                              {
                                 list: 'Protect wood surfaces from incidental marks by using coasters, trivets, and felt pads.',
                                 _id: '67c9aed0bc2710de4fb52365',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67c9aed0bc2710de4fb52366',
                              },
                           ],
                           content: '',
                           _id: '0fe41481-3a79-405a-9599-60d8a827e6de',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 78,
                        depth: 39,
                        height: 30,
                        weight: 201,
                        _id: '67c9ae93bc2710de4fb514a6',
                     },
                  },
                  {
                     name: 'powell extension dining table',
                     price: 39,
                     cancelled_price: 45,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266493/arhaus_images/nquempuvmmvyuwpb6jdu.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266494/arhaus_images/pyh7zsukvfvfwgrx5gqy.avif',
                        _id: '67c99e41bc2710de4fb465ea',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '76e022ed-eb9c-4b42-8a19-05f807980fd0',
                     options: [
                        {
                           option: 'ebony',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67c9afbcbc2710de4fb52c88',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270969/arhaus_images/n70xfbiiyofug6y7zvlb.jpg',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270970/arhaus_images/ob959eghmlkgduesb0xi.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270971/arhaus_images/vob5l6b4px0hc5mvskip.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270970/arhaus_images/hzkxvdvj96u8dmrokyba.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741270971/arhaus_images/eavkvjizb7agu4anh4gu.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '7aba3146-c0c7-463d-a83c-0d70d45414dc',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Artisan crafted in Italy from oak veneered tabletops and sturdy bronze-finished steel bases.',
                                 _id: '67c9b03cbc2710de4fb535b0',
                              },
                              {
                                 list: 'Tabletops are hand-finished with lacquer for added protection and a subtle sheen; steel table bases feature a bronze epoxy powder finish.',
                                 _id: '67c9b03cbc2710de4fb535b1',
                              },
                              {
                                 list: 'Patented extension mechanism allows both length and width expansion with self-storing leaves.',
                                 _id: '67c9b03cbc2710de4fb535b2',
                              },
                              {
                                 list: 'Features secure locking functionality for use while extended and when closed.',
                                 _id: '67c9b03cbc2710de4fb535b3',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9b03cbc2710de4fb535b4',
                              },
                           ],
                           content: '',
                           _id: '94d4567c-8c98-4788-9b32-bdd85b7c3d80',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Balancing angular beauty and unique functionality, our Powell Dining Collection was made for customizing your ideal dining experience. Crafted by Italian artisans from beautiful oak veneers atop a metal base, Powell features a patented extension mechanism allowing the table to extend both long and wide. From hosting intimate gatherings to large dinner parties, dine around a stunning sculptural piece where no reservation is needed.',
                           _id: '36cb4cd5-2f8d-4e18-8ac4-02f0227683ee',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67c9b066bc2710de4fb53bdf',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes will vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9b066bc2710de4fb53be0',
                              },
                              {
                                 list: 'Natural wood may move slightly as temperature and humidity change, and may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67c9b066bc2710de4fb53be1',
                              },
                              {
                                 list: 'Spot-clean using a mild soap, water, and a soft undyed cloth as needed. Dry immediately to prevent marks from forming.',
                                 _id: '67c9b066bc2710de4fb53be2',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67c9b066bc2710de4fb53be3',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67c9b066bc2710de4fb53be4',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67c9b066bc2710de4fb53be5',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67c9b066bc2710de4fb53be6',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood surfaces as this could cause scorching. Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67c9b066bc2710de4fb53be7',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67c9b066bc2710de4fb53be8',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67c9b066bc2710de4fb53be9',
                              },
                           ],
                           content: '',
                           _id: '0565a853-44c8-4ee8-a157-1c37b2755a40',
                        },
                     ],
                     dimensions: {
                        width: 70,
                        depth: 36.5,
                        height: 30,
                        weight: 121,
                        _id: '67c9b02dbc2710de4fb532a4',
                     },
                  },
                  {
                     name: 'recycled metal dining table',
                     price: 22,
                     cancelled_price: 26,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266666/arhaus_images/w0wvqphyd39nlygpa8zb.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741266666/arhaus_images/qvxzymvohkyleqxtaxji.avif',
                        _id: '67c99eebbc2710de4fb46b89',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'bd95f864-82bd-4097-a017-679c6801d987',
                     options: [
                        {
                           option: 'aluminium brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67c9b0e7bc2710de4fb54896',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271267/arhaus_images/u4ppcshy5zk30q9uh5dk.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271269/arhaus_images/jkxtfuwbmdr9hmtvtn95.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271270/arhaus_images/a9cmkdnzmwz2lumjb0du.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271269/arhaus_images/vywiyfj9xukqfjhph40t.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271269/arhaus_images/m9huw9osn9gvcrbxqa70.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'cf5e0413-6ec6-4922-a49b-a427da2bca0f',
                        },
                        {
                           option: 'copper',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 3,
                              _id: '67c9b18fbc2710de4fb54ee2',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271435/arhaus_images/wfxqpkhfywz0yqq1evxn.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271436/arhaus_images/key46uogjqnxshcjmhsw.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271438/arhaus_images/ohar4knyz7jg3ox1p3ql.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271437/arhaus_images/wae4lpgr1ueofq3xjd0e.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741271437/arhaus_images/rbxolitgbf8rcfzz6zfw.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '52318f0c-3d48-4d67-972c-114c09d8d7d1',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Artisan-crafted tabletop is made from sheets of recycled metals formed onto hardwood.',
                                 _id: '67c9b1cbbc2710de4fb5553a',
                              },
                              {
                                 list: 'Copper and Chocolate Copper tabletops are handcrafted from 100 percent recycled copper.',
                                 _id: '67c9b1cbbc2710de4fb5553b',
                              },
                              {
                                 list: 'Zinc Alloy tabletops are composed of reclaimed tin, aluminum, and zinc.',
                                 _id: '67c9b1cbbc2710de4fb5553c',
                              },
                              {
                                 list: 'Brass tabletops are made from recycled aluminum hand-finished with a warm brass tone.',
                                 _id: '67c9b1cbbc2710de4fb5553d',
                              },
                              {
                                 list: 'Vertex Table Base is crafted from iron, featuring a flat black finish to complement the beautiful tones of the recycled metal.',
                                 _id: '67c9b1cbbc2710de4fb5553e',
                              },
                              {
                                 list: 'Artisans hand-hammer each tabletop more than 3,500 times to create their uniquely textured surfaces.',
                                 _id: '67c9b1cbbc2710de4fb5553f',
                              },
                              {
                                 list: 'Varied patinas are created by holding each tabletop over open flame.',
                                 _id: '67c9b1cbbc2710de4fb55540',
                              },
                              {
                                 list: 'Two layers of lacquer add protection and a subtle sheen to each tabletop.',
                                 _id: '67c9b1cbbc2710de4fb55541',
                              },
                              {
                                 list: 'Upon completion, our artisans hand-stamp a Monarch butterfly onto the edge of each tabletop, signifying its transformation.',
                                 _id: '67c9b1cbbc2710de4fb55542',
                              },
                              {
                                 list: 'This collection is artisan-crafted from reclaimed materials with hand-applied finishes. Individual pieces may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67c9b1cbbc2710de4fb55543',
                              },
                           ],
                           content: '',
                           _id: '68ddb6c2-5f57-4138-8a03-71bb7de93c93',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Story\nThousands of monarch butterflies make their way to an enchanting Mexican village once a year, where metalworking is a prized skill passed down from generation to generation. From this destination comes our Recycled Metal Collection, forged over an open flame to create distinctive patterns and colors, and bringing new life to what would otherwise be discarded.',
                           _id: '82dde1a8-3dbe-461e-91a3-32ca0ec4560d',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Our metal furnishings are craftsman-built and expertly finished to withstand day-to-day use. However, wear and tear of metal surfaces is relative to use and how well you maintain them.',
                                 _id: '67c9b1e4bc2710de4fb55bc2',
                              },
                              {
                                 list: 'Metal surfaces should be dusted regularly with a soft, dry cloth to remove any particles or loose dirt.',
                                 _id: '67c9b1e4bc2710de4fb55bc3',
                              },
                              {
                                 list: 'Occasionally apply copper wax to protect copper surfaces and preserve finishes. Please follow use instructions for care products carefully and do not over apply.',
                                 _id: '67c9b1e4bc2710de4fb55bc4',
                              },
                              {
                                 list: 'Wipe-up spills immediately with a soft, dry cloth; remove dirt with a damp cloth. Dry immediately to prevent moisture damage.',
                                 _id: '67c9b1e4bc2710de4fb55bc5',
                              },
                              {
                                 list: 'Do not clean metal surfaces using care products containing ammonia or silicone, as these could also damage metal finishes.',
                                 _id: '67c9b1e4bc2710de4fb55bc6',
                              },
                              {
                                 list: 'Avoid using abrasives or harsh, corrosive chemicals as these could scratch or mark the metal’s surface.',
                                 _id: '67c9b1e4bc2710de4fb55bc7',
                              },
                              {
                                 list: 'Avoid sunlight, heat, and excessive moisture, which could cause cracking or fading.',
                                 _id: '67c9b1e4bc2710de4fb55bc8',
                              },
                              {
                                 list: 'Protect metal surfaces from incidental marks by using coasters, trivets, and felt pads.',
                                 _id: '67c9b1e4bc2710de4fb55bc9',
                              },
                              {
                                 list: 'Never place hot dishes directly on finished metal surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67c9b1e4bc2710de4fb55bca',
                              },
                           ],
                           content: '',
                           _id: '81ad814a-0564-41d0-91c7-2764c03c8fb0',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 54,
                        depth: 44,
                        height: 30,
                        weight: 210,
                        _id: '67c9b1bbbc2710de4fb5520e',
                     },
                  },
               ],
            },
         ],
      },
      createdAt: '2025-02-28T13:07:31.912Z',
      updatedAt: '2025-03-18T14:29:25.050Z',
      __v: 130,
   },
   {
      _id: '00736144-a35b-4c3d-b887-10d1eaf0a42c',
      dir: 'lighting',
      image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741345894/arhaus_images/rbtqvduorw8w7h1gkv3x.webp',
      content: 'lighting ',
      menu: {
         _id: 'dc8a971f-8f4e-4be0-bd1e-d9dcbe3352f6',
         categories: [
            {
               content: 'chandeliers',
               image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741973373/bvbd5od1fxr2zful0y6g_1_os5xj1.webp',
               _id: '7de52583-af3d-44d1-bb77-5a98a3f633e9',
               products: [
                  {
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
                  {
                     name: 'leyland tiered round chandelier',
                     price: 65,
                     cancelled_price: 70,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346488/arhaus_images/gdaiwvj5rcgrr46j9kow.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346488/arhaus_images/upxupjgm9cw9hzspvmm4.avif',
                        _id: '67cad6b931783be9d0ee4e46',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '6b4f321c-671f-45f2-883a-80594c410df1',
                     options: [
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67cadf0031783be9d0ee8299',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348605/arhaus_images/gxp62xqm01mabfnekfka.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348607/arhaus_images/lwn7xdi43gkmdnzsxdbe.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348607/arhaus_images/rcxvjfdgzjfaqcqm3s0v.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348607/arhaus_images/dvplzmw8hmsqjziyxwt7.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '4d8d9f45-deae-4b2b-9cfe-ca7fc0414d77',
                        },
                        {
                           option: 'bronze',
                           stock: {
                              in_stock: false,
                              when_in_stock: '2025-07-08',
                              stock_count: 0,
                              _id: '67cadf5331783be9d0ee82bd',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348688/arhaus_images/u8y6agjp8kqgknivhotf.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348689/arhaus_images/b9lxmwulpwoacwwihyle.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348690/arhaus_images/ptw1b0nh87aana5n9bgv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741348690/arhaus_images/tyzmvt0t9vv5djiifitl.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '43ab9c05-200a-48c6-8306-807a6a0e2153',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from multifaceted K9 glass crystals with an iron frame and oil-rubbed finish.',
                                 _id: '67cadfaf31783be9d0ee8305',
                              },
                              {
                                 list: '48" chandelier uses thirty 15-watt E12 bulbs (not included). We recommend energy-saving LED lights.',
                                 _id: '67cadfaf31783be9d0ee8306',
                              },
                              {
                                 list: '48" chandelier has an adjustable drop length that ranges from 53" – 197".',
                                 _id: '67cadfaf31783be9d0ee8307',
                              },
                              {
                                 list: '60" chandelier uses fifty-six 15-watt E12 bulbs (not included). We recommend energy-saving LED lights.',
                                 _id: '67cadfaf31783be9d0ee8308',
                              },
                              {
                                 list: '60" chandelier has an adjustable drop length that ranges from 65" – 209".',
                                 _id: '67cadfaf31783be9d0ee8309',
                              },
                              {
                                 list: 'Can be mounted on a vaulted ceiling.',
                                 _id: '67cadfaf31783be9d0ee830a',
                              },
                              {
                                 list: 'Iron chain measures 141.75" long.',
                                 _id: '67cadfaf31783be9d0ee830b',
                              },
                              {
                                 list: 'Canopy measures 9.75" diameter x 6" h.',
                                 _id: '67cadfaf31783be9d0ee830c',
                              },
                              {
                                 list: 'Clear PVC and copper cord measures 149.5" long.',
                                 _id: '67cadfaf31783be9d0ee830d',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67cadfaf31783be9d0ee830e',
                              },
                              {
                                 list: 'Mounting hardware included.',
                                 _id: '67cadfaf31783be9d0ee830f',
                              },
                              {
                                 list: 'Chandeliers weighing more than 50 lbs. cannot be mounted alone to a standard outlet box and require additional bracing above the ceiling where they are to be installed. Professional installation is required.',
                                 _id: '67cadfaf31783be9d0ee8310',
                              },
                              {
                                 list: 'Safety tested for use indoors and in dry locations that are not directly exposed to excessive moisture and water.',
                                 _id: '67cadfaf31783be9d0ee8311',
                              },
                              {
                                 list: 'In order to protect the delicate crystals of this collection, some assembly upon delivery to your home will be required.',
                                 _id: '67cadfaf31783be9d0ee8312',
                              },
                           ],
                           content: '',
                           _id: 'eab0697e-b7da-4d07-b1ca-b6b972af8591',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'French Art Deco style of the 1920s is reborn in our glamorous Leyland Lighting Collection. Hung from a rustic iron frame, Leyland creates an atmospheric glow with its layered rows of hand-polished multifaceted glass crystals.',
                           _id: 'f6f246a1-d150-4cf1-87ba-817f0e2a7bf9',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Gently wipe clean with a soft, dry cloth.',
                                 _id: '67cadfc931783be9d0ee8391',
                              },
                              {
                                 list: 'Do not use polishes or cleaners, as they could damage the finish.',
                                 _id: '67cadfc931783be9d0ee8392',
                              },
                           ],
                           content: '',
                           _id: 'fb2a6ec2-a155-4cb0-9b3a-f016d0990558',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 48,
                        depth: 48,
                        height: 39,
                        weight: 148,
                        _id: '67cadf8331783be9d0ee82e1',
                     },
                  },
                  {
                     name: 'Soltaire linear chandelier',
                     price: 68,
                     cancelled_price: 72,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346609/arhaus_images/hauewbfphdfipwxgcn48.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346609/arhaus_images/dzawefkyy9rl434n49dn.avif',
                        _id: '67cad73231783be9d0ee54af',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '543f3b9e-11a9-4ce6-a500-6eaa9c9ab99e',
                     options: [
                        {
                           option: 'nickel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67cae30031783be9d0ee8fa7',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349629/arhaus_images/zlcpx4sljyyerlf9ihcs.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349630/arhaus_images/qvocs4o7egsfxvxvscl7.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349631/arhaus_images/u2lgg3gshl0c8jid07ua.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349631/arhaus_images/f6pifrvwalcvth7kdyzb.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '8f633b6b-5e03-42db-8a4e-71a4437f2699',
                        },
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67cae36c31783be9d0ee8feb',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349738/arhaus_images/sjb8nmicypouv4sk6ulz.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349739/arhaus_images/wvjstu6jl8rafwamfflw.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349740/arhaus_images/ephtgi3dukppleqbcroz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349740/arhaus_images/h6reyescfb5n1i06vya4.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '7713e02f-cdd6-455d-bc27-93e794a8ee36',
                        },
                        {
                           option: 'bronze',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67cae3a131783be9d0ee9033',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349790/arhaus_images/uftcbq994vwf9mmek29f.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349792/arhaus_images/gws0chpgzxgnvwbeyh5p.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349792/arhaus_images/ep0zxzzbbcp1mdbxactk.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741349792/arhaus_images/iljhva7j68qbdenm4duy.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '0d990291-c047-413d-85e9-b18af541d124',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from steel, featuring a brass, bronze, or nickel finish with a clear lacquer for added protection.',
                                 _id: '67cae3d431783be9d0ee940b',
                              },
                              {
                                 list: '37" chandelier features 12 integrated 20-watt LED bulbs (included) and has an LED lifespan of 50,000 hours.',
                                 _id: '67cae3d431783be9d0ee940c',
                              },
                              {
                                 list: '50" chandelier features 25 integrated 50-watt LED bulbs (included) and has an LED lifespan of 50,000 hours.',
                                 _id: '67cae3d431783be9d0ee940d',
                              },
                              {
                                 list: '60" chandelier features 38 integrated 50-watt LED bulbs (included) and has an LED lifespan of 50,000 hours.',
                                 _id: '67cae3d431783be9d0ee940e',
                              },
                              {
                                 list: '70" chandelier features 42 integrated 70-watt LED bulbs (included) and has an LED lifespan of 50,000 hours.',
                                 _id: '67cae3d431783be9d0ee940f',
                              },
                              {
                                 list: 'Adjustable drop length ranges from 20.5" – 158".',
                                 _id: '67cae3d431783be9d0ee9410',
                              },
                              {
                                 list: 'Can be mounted on a vaulted ceiling.',
                                 _id: '67cae3d431783be9d0ee9411',
                              },
                              {
                                 list: 'Black PVC and copper cord measures 144" long.',
                                 _id: '67cae3d431783be9d0ee9412',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67cae3d431783be9d0ee9413',
                              },
                              {
                                 list: 'Mounting hardware included.',
                                 _id: '67cae3d431783be9d0ee9414',
                              },
                              {
                                 list: 'Chandeliers weighing more than 50 lbs. cannot be mounted alone to a standard outlet box and require additional bracing above the ceiling where they are to be installed. Professional installation is required.',
                                 _id: '67cae3d431783be9d0ee9415',
                              },
                              {
                                 list: 'ETL Certified Damp.',
                                 _id: '67cae3d431783be9d0ee9416',
                              },
                              {
                                 list: 'In order to protect the delicate glass of this collection, some assembly upon delivery to your home will be required.',
                                 _id: '67cae3d431783be9d0ee9417',
                              },
                           ],
                           content: '',
                           _id: '9def9cfd-d630-4423-9d2e-77dd0a02fa6a',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Featuring adjustable black PVC cords cascading into integrated LED lights handcrafted from seeded glass, our Soltaire Lighting Collection mimics the look of a fallen raindrop.',
                           _id: 'f918ab6b-02fa-4164-b89d-c7626f42960d',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Gently wipe clean with a soft, dry cloth.',
                                 _id: '67cae3f231783be9d0ee94d2',
                              },
                              {
                                 list: 'Do not use polishes or cleaners, as they could damage the finish.',
                                 _id: '67cae3f231783be9d0ee94d3',
                              },
                           ],
                           content: '',
                           _id: '56256901-7c11-4230-b21b-229859ab1346',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 36,
                        depth: 11,
                        height: 14,
                        weight: 30,
                        _id: '67cae3c031783be9d0ee93c7',
                     },
                  },
                  {
                     name: 'Dandelion round chandelier',
                     price: 22,
                     cancelled_price: 30,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346735/arhaus_images/mcdxoogwqc67lvpbxi26.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346735/arhaus_images/j1lwjwkjtw7nignnm8b9.avif',
                        _id: '67cad7af31783be9d0ee57e4',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '2e555bdb-0cd6-46eb-83d8-e4f114d814b2',
                     options: [
                        {
                           option: 'silver',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67cae49631783be9d0ee989e',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350035/arhaus_images/cspiswygekblecgxl9f4.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350037/arhaus_images/vwcqy73t35n0ncighfxv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350037/arhaus_images/hdx82yuwreicnlb4bzkp.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350037/arhaus_images/hu5339c4joe82poz7bck.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '75ee3ab4-9835-48d9-a27c-7bfc28db57e1',
                        },
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67cae4de31783be9d0ee9c63',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350107/arhaus_images/fl9iffd98p0mhcoidxnv.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350109/arhaus_images/x1apeflgihsd5xq26xjr.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350109/arhaus_images/jiorkakbhsw9udpl10wm.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350109/arhaus_images/wssej3kmc5ttmblvk33k.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '4832e9f5-76c9-4672-98c5-047cb0342262',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from nickel-plated iron decorated with a painted finish and glass crystal accents.',
                                 _id: '67cae51031783be9d0ee9d27',
                              },
                              {
                                 list: '43" Chandelier uses twenty 40-watt max, E12 bulbs (not included).',
                                 _id: '67cae51031783be9d0ee9d28',
                              },
                              {
                                 list: '32.5" Chandelier uses twelve 40-watt max, E12 bulbs (not included).',
                                 _id: '67cae51031783be9d0ee9d29',
                              },
                              {
                                 list: '22" Chandelier uses eight 40-watt max, E12 bulbs (not included).',
                                 _id: '67cae51031783be9d0ee9d2a',
                              },
                              {
                                 list: 'We recommend energy-saving LED lights.',
                                 _id: '67cae51031783be9d0ee9d2b',
                              },
                              {
                                 list: '43" Chandelier adjustable drop length ranges from 46.4"-188".',
                                 _id: '67cae51031783be9d0ee9d2c',
                              },
                              {
                                 list: '32.5" Chandelier adjustable drop length ranges from 36.8"-165.5".',
                                 _id: '67cae51031783be9d0ee9d2d',
                              },
                              {
                                 list: '22" Chandelier adjustable drop length ranges from 26"-157.75".',
                                 _id: '67cae51031783be9d0ee9d2e',
                              },
                              {
                                 list: 'Chain measures 142" long.',
                                 _id: '67cae51031783be9d0ee9d2f',
                              },
                              {
                                 list: 'Can be mounted on a vaulted ceiling.',
                                 _id: '67cae51031783be9d0ee9d30',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67cae51031783be9d0ee9d31',
                              },
                              {
                                 list: 'Mounting hardware included.',
                                 _id: '67cae51031783be9d0ee9d32',
                              },
                              {
                                 list: 'Safety tested for use indoors and in dry locations that are not directly exposed to excessive moisture and water.',
                                 _id: '67cae51031783be9d0ee9d33',
                              },
                              {
                                 list: 'In order to protect the delicate crystals of this collection, some assembly upon delivery to your home will be required.',
                                 _id: '67cae51031783be9d0ee9d34',
                              },
                           ],
                           content: '',
                           _id: 'c1dff4ce-d892-4741-bc46-493d9c59d3ac',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Delightfully designed to resemble a dandelion after it’s blossomed, our elegant Dandelion Chandelier beautifully twinkles with reflected light. Crafted from nickel-plated iron with a painted finish, Dandelion’s radiating crystals will add whimsical wonder to any space.',
                           _id: '201f5c8c-599a-4c2a-8437-65ce96d3e662',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: true,
                           content: 'Dust with a feather duster or soft cloth.',
                           _id: '74c3e832-4da7-4062-921b-e1d66eaaefb3',
                           lists: [],
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 43,
                        depth: 43,
                        height: 43,
                        weight: 44,
                        _id: '67cae4fc31783be9d0ee9cc5',
                     },
                  },
                  {
                     name: 'Delsie oval chandelier',
                     price: 94,
                     cancelled_price: 122,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346912/arhaus_images/yylk4love7fg4q9owmqr.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346913/arhaus_images/jqqn092yfg6yd31gpwd5.avif',
                        _id: '67cad86131783be9d0ee6186',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '06682d4b-e7dd-4eb7-890b-daec5302b71f',
                     options: [
                        {
                           option: 'bronze',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67cae5a131783be9d0eea023',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350302/arhaus_images/rd8ghskgo9mra3uujedi.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350304/arhaus_images/mbinnq4gmm6sabkayvtn.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350304/arhaus_images/kxbhiu7g1hreodc1pmiv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350304/arhaus_images/iy2lxc4i6hswv2vtjvzf.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '48113823-d9f0-47e9-8ad5-1de9bb9ca9e1',
                        },
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67cae60031783be9d0eea412',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350396/arhaus_images/dwesaraqz02pzqn1hj71.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350397/arhaus_images/uw8uzhqadbxyhgbinxko.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350398/arhaus_images/sbdburfmvqd5bsigodeg.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350398/arhaus_images/bulzfh0syq1lekltpjj2.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '6d4ecc6b-946d-4d1e-b5d5-9dd4b24ba010',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from glass and steel with either a burnished brass or bronze finish.',
                                 _id: '67cae63731783be9d0eea50e',
                              },
                              {
                                 list: '51" Chandelier uses four 60-watt E12 bulbs (not included).',
                                 _id: '67cae63731783be9d0eea50f',
                              },
                              {
                                 list: '63" Chandelier uses nine 60-watt E12 bulbs (not included).',
                                 _id: '67cae63731783be9d0eea510',
                              },
                              {
                                 list: '72" Chandelier uses 17 60-watt E12 bulbs (not included).',
                                 _id: '67cae63731783be9d0eea511',
                              },
                              {
                                 list: 'We recommend our LED B11 Candelabra E12 Bulb (6610071B134).',
                                 _id: '67cae63731783be9d0eea512',
                              },
                              {
                                 list: '51" Chandelier has an adjustable drop length that ranges from 22.5" – 160.75".',
                                 _id: '67cae63731783be9d0eea513',
                              },
                              {
                                 list: '63" Chandelier has an adjustable drop length that ranges from 31" – 169".',
                                 _id: '67cae63731783be9d0eea514',
                              },
                              {
                                 list: '72" Chandelier has an adjustable drop length that ranges from 31.25" – 169.5".',
                                 _id: '67cae63731783be9d0eea515',
                              },
                              {
                                 list: 'Can be mounted on a vaulted ceiling.',
                                 _id: '67cae63731783be9d0eea516',
                              },
                              {
                                 list: 'Steel poles measure 144" long.',
                                 _id: '67cae63731783be9d0eea517',
                              },
                              {
                                 list: 'Black and white PVC and copper cord measures 150" long.',
                                 _id: '67cae63731783be9d0eea518',
                              },
                              {
                                 list: 'Hardwired; professional installation required.',
                                 _id: '67cae63731783be9d0eea519',
                              },
                              {
                                 list: 'Mounting hardware included.',
                                 _id: '67cae63731783be9d0eea51a',
                              },
                              {
                                 list: 'Chandeliers weighing more than 50 lbs. cannot be mounted alone to a standard outlet box and require additional bracing above the ceiling where they are to be installed. Professional installation is required.',
                                 _id: '67cae63731783be9d0eea51b',
                              },
                              {
                                 list: 'ETL Certified Dry.',
                                 _id: '67cae63731783be9d0eea51c',
                              },
                              {
                                 list: 'In order to protect the glass elements in this collection, some assembly upon delivery to your home will be required.',
                                 _id: '67cae63731783be9d0eea51d',
                              },
                           ],
                           content: '',
                           _id: 'b1c963ff-c98d-42ac-b720-8a0dbe7adb06',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'A fresh take on a traditional silhouette, our Delsie Collection radiates old Hollywood glamour. Crafted from reeded glass panels elegantly arranged around a steel frame, Delsie creates dramatic ambiance in any space.',
                           _id: '75e509b3-f913-471e-b4e4-871b81a40ac9',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Gently wipe clean with a soft, dry cloth.',
                                 _id: '67cae65631783be9d0eea658',
                              },
                              {
                                 list: 'Do not use polishes or cleaners, as they could damage the finish.',
                                 _id: '67cae65631783be9d0eea659',
                              },
                           ],
                           content: '',
                           _id: '664f8060-de4e-4cf3-8f12-3d796b37a400',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 61,
                        depth: 22,
                        height: 12,
                        weight: 92,
                        _id: '67cae62231783be9d0eea490',
                     },
                  },
                  {
                     name: 'verna chandelier',
                     price: 68,
                     cancelled_price: 73,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346979/arhaus_images/tte2vevdao3ltdbdyirc.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741346979/arhaus_images/gqaw83wwbjkjr9w8cqg1.avif',
                        _id: '67cad8a431783be9d0ee618a',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'd2411c89-2bbe-4c94-9f66-632f054048ad',
                     options: [
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67cae6bc31783be9d0eea8de',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350585/arhaus_images/r9zlngmuv5xrabdupyp6.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350587/arhaus_images/mcz1rjdsaiaap3uwzheo.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350587/arhaus_images/u3lnxtusgt2bfll7k112.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741350587/arhaus_images/lnljlorvvvdv3ytdc0ga.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '221d51a2-38a0-4c92-a963-cd0ccb19b1b2',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Handmade by our artisan partners in India from swirled glass pieces on a steel frame with an antiqued brass finish.',
                                 _id: '67cae70031783be9d0eeaa22',
                              },
                              {
                                 list: 'Uses eight 40-watt max E12 bulb (not included). We recommend our LED Candelabra E12 bulbs (6610071B134).',
                                 _id: '67cae70031783be9d0eeaa23',
                              },
                              {
                                 list: 'Adjustable drop length ranges from 29"-104".',
                                 _id: '67cae70031783be9d0eeaa24',
                              },
                              {
                                 list: 'Can be mounted on a vaulted ceiling.',
                                 _id: '67cae70031783be9d0eeaa25',
                              },
                              {
                                 list: 'Antique brass-finished steel chain measures 72" long.',
                                 _id: '67cae70031783be9d0eeaa26',
                              },
                              {
                                 list: 'Black fabric-wrapped PVC cord measures 144" long.',
                                 _id: '67cae70031783be9d0eeaa27',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67cae70031783be9d0eeaa28',
                              },
                              {
                                 list: 'Safety tested for use indoors and in dry locations that are not directly exposed to excessive moisture and water.',
                                 _id: '67cae70031783be9d0eeaa29',
                              },
                           ],
                           content: '',
                           _id: '0b09b24a-737a-4233-8d04-2b2927e17d5e',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Glowing and glamourous, our Verna Chandelier catches light with three tiers of individually handcrafted swirled glass pieces accented with a warm antiqued brass metal frame.',
                           _id: '899bbcd6-2506-4c46-a776-d95846ec890d',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Dust with a feather duster or a soft, dry cloth.',
                                 _id: '67cae72631783be9d0eeab90',
                              },
                           ],
                           content: '',
                           _id: 'c753d3fc-d3ad-40cc-86b8-a16288f2fd45',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 26,
                        depth: 16,
                        height: 24,
                        weight: 78,
                        _id: '67cae6e031783be9d0eea980',
                     },
                  },
                  {
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
                  {
                     name: 'Arica linear chandelier',
                     price: 87,
                     cancelled_price: 92,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741351886/arhaus_images/s1qvkslww4meaaakh3zf.webp',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741347574/arhaus_images/jgq1sey6vhguo9xc9gds.avif',
                        _id: '67caebcf31783be9d0eecdc1',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '9aea0ac0-9189-44f0-910d-df8530a9d38b',
                     options: [
                        {
                           option: 'bronze',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67cae89d31783be9d0eebc8d',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741351066/arhaus_images/cntumcq2lbostgqslwpr.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741351067/arhaus_images/zwnflnw3zspe7vva9enp.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741351068/arhaus_images/isoo3chttzwfsiwtfxey.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741351068/arhaus_images/k8wnqkyesd8gat2dan1q.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'e4603170-2165-4956-b88b-612d3c82512c',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Exposed airplane cable is complemented by a curved shade crafted from natural alabaster stone.',
                                 _id: '67cae8e031783be9d0eebe25',
                              },
                              {
                                 list: 'Due to the natural materials used, each piece will vary in color and pattern.',
                                 _id: '67cae8e031783be9d0eebe26',
                              },
                              {
                                 list: '15-Light Chandelier uses 15 10-watt max T3 bulbs (included).',
                                 _id: '67cae8e031783be9d0eebe27',
                              },
                              {
                                 list: '30-Light Chandelier uses 30 10-watt max T3 bulbs (included).',
                                 _id: '67cae8e031783be9d0eebe28',
                              },
                              {
                                 list: 'Individual cable lengths can be adjusted to customize the chandelier for your space.',
                                 _id: '67cae8e031783be9d0eebe29',
                              },
                              {
                                 list: 'Adjustable drop length ranges from 12"-120".',
                                 _id: '67cae8e031783be9d0eebe2a',
                              },
                              {
                                 list: 'Can be mounted on a vaulted ceiling.',
                                 _id: '67cae8e031783be9d0eebe2b',
                              },
                              {
                                 list: 'Cable measures 120" long.',
                                 _id: '67cae8e031783be9d0eebe2c',
                              },
                              {
                                 list: 'Shades each measure 5" diameter x 5" high.',
                                 _id: '67cae8e031783be9d0eebe2d',
                              },
                              {
                                 list: '15-Light Chandelier ceiling canopy measures 48" w x 12" d x 2.5" h.',
                                 _id: '67cae8e031783be9d0eebe2e',
                              },
                              {
                                 list: '30-Light Chandelier ceiling canopy measures 54" w x 18" d x 2.5" h.',
                                 _id: '67cae8e031783be9d0eebe2f',
                              },
                              {
                                 list: 'Hardwired; professional installation required.',
                                 _id: '67cae8e031783be9d0eebe30',
                              },
                              {
                                 list: 'Mounting hardware included.',
                                 _id: '67cae8e031783be9d0eebe31',
                              },
                              {
                                 list: 'Safety tested for use indoors and in dry locations that are not directly exposed to excessive moisture and water.',
                                 _id: '67cae8e031783be9d0eebe32',
                              },
                           ],
                           content: '',
                           _id: 'aed84c07-875c-4415-a07e-824310817c8b',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Featuring an adjustable cable cascading into a curved shade made from natural alabaster stone, our Arica Collection adds a touch of organic elegance. Designed to highlight the beautiful variations found in natural alabaster, each luminous shade showcases delicate swirls of unique veining making each pendant truly one-of-a-kind.',
                           _id: 'aba94f13-3d67-49c3-beb3-2c9a782239c1',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Gently wipe clean with a soft, dry cloth.',
                                 _id: '67cae94231783be9d0eec001',
                              },
                              {
                                 list: 'Do not use polishes or cleaners, as they could damage the finish.',
                                 _id: '67cae94231783be9d0eec002',
                              },
                           ],
                           content: '',
                           _id: '0d74b2e4-ee37-48ed-ad31-048645b9393d',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 48,
                        depth: 12,
                        height: 120,
                        weight: 68,
                        _id: '67cae8c031783be9d0eebd59',
                     },
                  },
                  {
                     name: 'celine chandelier',
                     price: 32,
                     cancelled_price: 45,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741351969/arhaus_images/iomodtrme1awhur6akti.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741351349/arhaus_images/ft87dxhew0oummmkgcwh.avif',
                        _id: '67caec2231783be9d0eed341',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'c828aab1-ccf3-4202-a1b4-e2a415fd919e',
                     options: [
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67caed8931783be9d0eed9ab',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352326/arhaus_images/c7m6eblqt25z3hkdndnt.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352327/arhaus_images/a5v6vd2fgmmucodd491d.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352328/arhaus_images/rekfwmu0libnit90mjmy.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352328/arhaus_images/piz06ks7d8dnvpchnqn1.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '4b1308f6-de07-4fe4-a944-962cb65983b3',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from iron with hand-applied gold leaf detail and hand-finished antiquing.',
                                 _id: '67caedc231783be9d0eedb83',
                              },
                              {
                                 list: 'Uses six, 25-watt E12 bulbs (not included).',
                                 _id: '67caedc231783be9d0eedb84',
                              },
                              {
                                 list: 'Adjustable drop length ranges from 33"-105".',
                                 _id: '67caedc231783be9d0eedb85',
                              },
                              {
                                 list: 'Can be mounted on a vaulted ceiling.',
                                 _id: '67caedc231783be9d0eedb86',
                              },
                              {
                                 list: 'Iron chain measures 72" long.',
                                 _id: '67caedc231783be9d0eedb87',
                              },
                              {
                                 list: 'Clear PVC cord measures 168" long.',
                                 _id: '67caedc231783be9d0eedb88',
                              },
                              {
                                 list: 'Ceiling canopy measures 5" diameter x 0.75" high.',
                                 _id: '67caedc231783be9d0eedb89',
                              },
                              {
                                 list: '36" chandelier weighs 17 lbs.',
                                 _id: '67caedc231783be9d0eedb8a',
                              },
                              {
                                 list: '59" chandelier weighs 22 lbs.',
                                 _id: '67caedc231783be9d0eedb8b',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67caedc231783be9d0eedb8c',
                              },
                              {
                                 list: 'Mounting hardware included.',
                                 _id: '67caedc231783be9d0eedb8d',
                              },
                              {
                                 list: 'Dry UL listed for use indoors and dry locations that are not directly exposed to excessive moisture and water.',
                                 _id: '67caedc231783be9d0eedb8e',
                              },
                           ],
                           content: '',
                           _id: 'f732fbfd-a64a-4eb4-bc85-9c69760397ee',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Our stunning Celine Chandelier is adorned with 18 crystal drops that shimmer when illuminated. Its grand scale and warm, gold leaf finish make Celine a focal point in any home.',
                           _id: '218ce728-ff52-4f6c-914b-67ead72a5eae',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Gently wipe clean with a soft, dry cloth.',
                                 _id: '67caeddb31783be9d0eedd95',
                              },
                              {
                                 list: 'Do not use polishes or cleaners, as they could damage the finish.',
                                 _id: '67caeddb31783be9d0eedd96',
                              },
                           ],
                           content: '',
                           _id: '279e75ba-88c4-467d-90f6-2095842bb710',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 36,
                        depth: 36,
                        height: 26,
                        weight: 17,
                        _id: '67caedad31783be9d0eeda97',
                     },
                  },
               ],
            },
            {
               content: 'flush mounts',
               image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741973373/zc3ko0rogvpgtzpl8obg_1_mjv9bf.webp',
               _id: '7c042013-8bc5-4aec-8e1f-706f97fff5d6',
               products: [
                  {
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
                              stock_count: 4,
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
                  {
                     name: 'adela flush mount',
                     price: 24,
                     cancelled_price: 28,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352861/arhaus_images/rieuvlhdogwf6ya926wl.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352861/arhaus_images/dnctiqpbriatejf1mywt.avif',
                        _id: '67caef9f31783be9d0eeedde',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'd80475bc-fc26-47a1-882c-0a7b12b29fcf',
                     options: [
                        {
                           option: 'brass',
                           stock: {
                              in_stock: false,
                              when_in_stock: '2025-09-06',
                              stock_count: 0,
                              _id: '67caf4ba31783be9d0ef32bc',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354167/arhaus_images/irhz011fccndvnjxuhpz.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354169/arhaus_images/acg7vdsxglljfz5ergkt.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354169/arhaus_images/krstlrdirtwopf1aeht2.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354169/arhaus_images/tqw4d0mqr2alwuglmi2v.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '78b50ebb-04de-40b3-86c1-3e7f47dc3f0e',
                        },
                     ],
                     features: [
                        {
                           header: 'dailset',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from steel with brass plating and a burnished brass finish, accented with glass petals.',
                                 _id: '67caf55731783be9d0ef38af',
                              },
                              {
                                 list: 'Uses four 60-watt max, E12 bulbs (not included).',
                                 _id: '67caf55731783be9d0ef38b0',
                              },
                              {
                                 list: 'We recommend our LED Candelabra E12 Bulb (6610071B134), sold separately.',
                                 _id: '67caf55731783be9d0ef38b1',
                              },
                              {
                                 list: 'Canopy measures 5" diameter x 2.5" high.',
                                 _id: '67caf55731783be9d0ef38b2',
                              },
                              {
                                 list: 'Cord measures 6" long.',
                                 _id: '67caf55731783be9d0ef38b3',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67caf55731783be9d0ef38b4',
                              },
                              {
                                 list: 'Mounting hardware included.',
                                 _id: '67caf55731783be9d0ef38b5',
                              },
                              {
                                 list: 'Damp ETL listed.',
                                 _id: '67caf55731783be9d0ef38b6',
                              },
                           ],
                           content: '',
                           _id: '94b0c833-0877-484b-a569-400d8ed4461f',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Handcrafted from steel with brass plating, Adela scatters light through its beautiful glass petals. A lovely statement for any living space, softly sculpted petals create an organic feel, while steel branches secure the canopy and provide structure to the piece.',
                           _id: 'f4dd5798-003b-461b-988f-8309b3f0d8e6',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: true,
                           content: 'Gently wipe clean with a soft, dry cloth.',
                           _id: '86eeba03-2bd6-47c5-b776-e2a02d4454a6',
                           lists: [],
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 18,
                        depth: 23,
                        height: 10,
                        weight: 11,
                        _id: '67caf4fe31783be9d0ef33d6',
                     },
                  },
                  {
                     name: 'mandoza flush mount',
                     price: 30,
                     cancelled_price: 34,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353191/arhaus_images/ia63bbykzal3by68rgxd.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353192/arhaus_images/fmvwe4kwrem07rszcnxl.avif',
                        _id: '67caf0e931783be9d0ef0480',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '105f0d57-06e3-4588-bc06-77d3655b3979',
                     options: [
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67caf64731783be9d0ef41ff',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354563/arhaus_images/wpyc85p9bfefkejsnk1j.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354566/arhaus_images/tfggc5etmlrlkny52uz7.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354565/arhaus_images/kk3rnclusxou3p3eanw2.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354566/arhaus_images/cu5dutyczgyis1utort9.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '585c5a10-4eaf-4171-b24a-ad2b10a38fb2',
                        },
                        {
                           option: 'nickel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67caf69b31783be9d0ef46f0',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354648/arhaus_images/ewwqwpqynqsou6bhp7zl.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354649/arhaus_images/sqylw30kr9rlrkqa9edl.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354650/arhaus_images/geuoobyvyxjpfrswrjps.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354650/arhaus_images/ufr5kjlyqfel0ychpahb.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'fb70efe0-ca5e-492a-a200-437fdb469f28',
                        },
                        {
                           option: 'bronze',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67caf6df31783be9d0ef481a',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354715/arhaus_images/suv9miedqli6yxn6pzmd.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354716/arhaus_images/guelri12kxckb0gvsx3d.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354717/arhaus_images/u8mfcx1hpo5nlr4m0u0l.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741354717/arhaus_images/k9qmqhxjzqqhyxiotp8c.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'c5ab040d-78a0-418b-9b5d-facda4c2d537',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from burnished brass, bronze, or polished nickel-finished steel and aluminum with hand-blown glass globes.',
                                 _id: '67caf77631783be9d0ef4a6e',
                              },
                              {
                                 list: 'This collection is artisan-crafted with variations in color, pattern, and texture. No two chandeliers will appear exactly alike.',
                                 _id: '67caf77631783be9d0ef4a6f',
                              },
                              {
                                 list: 'Uses 13 25-watt max dimmable LED T22 Filament E12 bulbs (included).',
                                 _id: '67caf77631783be9d0ef4a70',
                              },
                              {
                                 list: 'Cannot be mounted on a vaulted ceiling.',
                                 _id: '67caf77631783be9d0ef4a71',
                              },
                              {
                                 list: 'Black and white PVC cord measures 6" long.',
                                 _id: '67caf77631783be9d0ef4a72',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67caf77631783be9d0ef4a73',
                              },
                              {
                                 list: 'ETL Certified Damp.',
                                 _id: '67caf77631783be9d0ef4a74',
                              },
                              {
                                 list: 'In order to protect the glass elements in this collection, some assembly upon delivery to your home will be required.',
                                 _id: '67caf77631783be9d0ef4a75',
                              },
                           ],
                           content: '',
                           _id: '95b84d58-2460-46e4-af43-d19a7c2fc303',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'A fusion of rustic charm and industrial design, our Mandoza Collection features stunning silhouettes and mixed-material style. Each individual glass globe is hand-blown with a reactive technique, creating a dense network of bubbles under a thick layer of glass. The result has a striking effect when illuminated from within, casting light from every angle.',
                           _id: '49c93a38-f909-490b-a3f6-c00c06cb0721',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Gently wipe clean with a soft, dry cloth.',
                                 _id: '67caf79231783be9d0ef50b7',
                              },
                              {
                                 list: 'Do not use polishes or cleaners, as they could damage the finish.',
                                 _id: '67caf79231783be9d0ef50b8',
                              },
                           ],
                           content: '',
                           _id: '4181fb2c-d4cf-42e6-8988-d00605f6267e',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 21,
                        depth: 21,
                        height: 16,
                        weight: 37,
                        _id: '67caf76131783be9d0ef4944',
                     },
                  },
                  {
                     name: 'lalla flush mount',
                     price: 19,
                     cancelled_price: 22,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352995/arhaus_images/w86eftjp2sv2g07ojnc2.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741352995/arhaus_images/nrseucgqvoda8p5vw2js.avif',
                        _id: '67caf02431783be9d0eef754',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'f77fc7f8-5b3a-4ffb-9516-ecc880e9fd32',
                     options: [
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 3,
                              _id: '67cc2ca35fa3b4d0fc0ce8c5',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434013/arhaus_images/x4obhdazlmr6i9qjmrns.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434015/arhaus_images/rvbdgw7armjjvacj1upl.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434016/arhaus_images/cxt9le3tapmakp2hmtr4.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'af38d727-6e69-4167-aad4-b8e513db299c',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from iron and brass with an Antique Copper finish with antiqued mirrored-glass panes surrounding the frame.',
                                 _id: '67cc2cda5fa3b4d0fc0ceb41',
                              },
                              {
                                 list: 'Uses four 40-watt max, E26 bulbs (not included). We recommend energy-saving LED bulbs.',
                                 _id: '67cc2cda5fa3b4d0fc0ceb42',
                              },
                              {
                                 list: 'Canopy measures 7" diameter x 1" high.',
                                 _id: '67cc2cda5fa3b4d0fc0ceb43',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67cc2cda5fa3b4d0fc0ceb44',
                              },
                              {
                                 list: 'Mounting hardware included.',
                                 _id: '67cc2cda5fa3b4d0fc0ceb45',
                              },
                              {
                                 list: 'Safety tested for use indoors and in dry locations that are not directly exposed to excessive moisture and water.',
                                 _id: '67cc2cda5fa3b4d0fc0ceb46',
                              },
                           ],
                           content: '',
                           _id: 'e51d6cfa-90a4-4d5a-be1d-e52e4a80799e',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Lustrous, hand-antiqued mirrored-glass panes of various sizes make up the unique shape of our Moroccan-inspired Laila Flushmount. Finished in Antique Copper with just the right amount of shine, this stunning fixture will add soft, warm light to any room.',
                           _id: '85c2dd77-d5df-4258-8ff5-348c119fbe61',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Clean with a soft, dry cloth.',
                                 _id: '67cc2cff5fa3b4d0fc0cedd9',
                              },
                              {
                                 list: 'Do not use polishes or cleaners.',
                                 _id: '67cc2cff5fa3b4d0fc0cedda',
                              },
                           ],
                           content: '',
                           _id: '72e2208d-a86e-475d-892a-2d0812eec31b',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 20,
                        depth: 20,
                        height: 12,
                        weight: 23,
                        _id: '67cc2cbd5fa3b4d0fc0cea03',
                     },
                  },
                  {
                     name: 'ninfea flush mount',
                     price: 23,
                     cancelled_price: 28,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353109/arhaus_images/c8zj64thxrl1kxz6py2a.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353109/arhaus_images/mvck9hyuolx2w5dacu94.avif',
                        _id: '67caf09631783be9d0eeffc5',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'a8c08caf-628a-45b4-b928-f8c261dab36a',
                     options: [
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67cc2d805fa3b4d0fc0cf30f',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434235/arhaus_images/g2hlpqdytkdyfp0cnx8j.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434237/arhaus_images/oyxl1jpwmof0f7n0rw0w.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434237/arhaus_images/lwnocmgi165mncbvbtlk.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434237/arhaus_images/kpojgsnbltvedkknudy0.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'f76caa8a-8304-4dc8-b336-e0333ebe2149',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our artisan partners in Italy from iron with hand-applied antiqued gold finish.',
                                 _id: '67cc2dab5fa3b4d0fc0cf984',
                              },
                              {
                                 list: '42" flushmount uses eight 40-watt max E12 bulbs (not included). We recommend our LED Candelabra E12 bulbs (6610071B134).',
                                 _id: '67cc2dab5fa3b4d0fc0cf985',
                              },
                              {
                                 list: '60" flushmount uses 12 40-watt max E12 bulbs (not included). We recommend our LED Candelabra E12 bulbs (6610071B134).',
                                 _id: '67cc2dab5fa3b4d0fc0cf986',
                              },
                              {
                                 list: 'Cannot be mounted on a vaulted ceiling.',
                                 _id: '67cc2dab5fa3b4d0fc0cf987',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67cc2dab5fa3b4d0fc0cf988',
                              },
                              {
                                 list: 'Safety tested for use in bathrooms, covered patios, or areas with temporary humidity and moisture.',
                                 _id: '67cc2dab5fa3b4d0fc0cf989',
                              },
                           ],
                           content: '',
                           _id: 'dc0fbfdc-8417-42d7-9cad-0bbdb3c883ba',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Elegant, swirling branches and leaves are illuminated with a warm glow in our Ninfea Lighting Collection. Crafted by our artisan partners in Italy from solid iron with a hand-applied antiqued gold finish, each Ninfea piece is inspired by the beauty of nature and celebrates premium craftsmanship while adding sophisticated glamour to any space.',
                           _id: '5be10155-1b9d-4051-a723-23d279f81520',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: true,
                           content:
                              'Dust with a feather duster or a soft, dry cloth.',
                           _id: '2e7c88d3-4f6d-4910-b817-962170fbb210',
                           lists: [],
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 69,
                        depth: 69,
                        height: 13,
                        weight: 30,
                        _id: '67cc2d985fa3b4d0fc0cf836',
                     },
                  },
                  {
                     name: 'aubrey flush mount',
                     price: 21,
                     cancelled_price: 25,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353266/arhaus_images/wofksljh2wcaauzxxuva.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741353266/arhaus_images/pofydpygemav3w8nasvh.avif',
                        _id: '67caf13331783be9d0ef0588',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '037186c3-7efd-42f5-a094-67ed6a3e0530',
                     options: [
                        {
                           option: 'brass',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67cc2e405fa3b4d0fc0d01a0',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434427/arhaus_images/mmarrt3e6jab1qxdyabb.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434429/arhaus_images/wwo1yu8lyrysun6u87xe.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434429/arhaus_images/rpniohzgzeoqhe1bqvy8.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '40fd7412-94d9-4726-8723-6f874889d0a6',
                        },
                        {
                           option: 'silver',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67cc2e955fa3b4d0fc0d02fa',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434512/arhaus_images/vodg4qenxpdnrugy9sl4.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434514/arhaus_images/tz46yimote9jlzqkfgoh.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434514/arhaus_images/z8xnxc1cifscq9z4rktk.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '5f7714c9-8fa1-4e8a-8cd4-203fb9ac6da5',
                        },
                        {
                           option: 'bronze',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 1,
                              _id: '67cc2ee55fa3b4d0fc0d0833',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434592/arhaus_images/stezhn1mujflctll4bgk.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434594/arhaus_images/x6wl3xyfa01qrvobfiwa.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741434594/arhaus_images/qunynweni9afe67tbdak.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '6825717f-e410-45a4-a1be-2f53798d355a',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by Italian artisans from solid iron.',
                                 _id: '67cc2f195fa3b4d0fc0d0ae7',
                              },
                              {
                                 list: 'Uses four 40-watt max E12 bulbs (not included). We recommend our LED Candelabra E12 bulbs.',
                                 _id: '67cc2f195fa3b4d0fc0d0ae8',
                              },
                              {
                                 list: 'Hardwired; professional installation recommended.',
                                 _id: '67cc2f195fa3b4d0fc0d0ae9',
                              },
                              {
                                 list: 'Mounting hardware included.',
                                 _id: '67cc2f195fa3b4d0fc0d0aea',
                              },
                              {
                                 list: 'Safety tested for use in bathrooms, covered patios, or areas with temporary humidity and moisture.',
                                 _id: '67cc2f195fa3b4d0fc0d0aeb',
                              },
                           ],
                           content: '',
                           _id: '2bfadf8a-003c-4933-a164-8934982ceac7',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Equally at home in an ancient French castle or a downtown New Orleans loft, our Aubrey Flushmount creates dramatic ambiance in any setting. Crystal drops hanging in varying lengths from an iron cage create the illusion of movement as they catch the light, refracting brilliant beams around your room.',
                           _id: '8be7d707-5cca-4cc5-ba6c-5342e42c5ab2',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: true,
                           content:
                              'Equally at home in an ancient French castle or a downtown New Orleans loft, our Aubrey Flushmount creates dramatic ambiance in any setting. Crystal drops hanging in varying lengths from an iron cage create the illusion of movement as they catch the light, refracting brilliant beams around your room.',
                           _id: '31f8dfa2-e002-4a7f-8f85-75a25d3c26a3',
                           lists: [],
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 20,
                        depth: 20,
                        height: 16,
                        weight: 13,
                        _id: '67cc2f055fa3b4d0fc0d098d',
                     },
                  },
                  {
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
                  {
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
                  {
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
                              stock_count: 4,
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
                              'Inspired by the stars, our midcentury modern Apollo Lighting Collection features a chic design that will add trendy style to any space. Featuring a radiating iron frame with an antiqued bronze, plated brass, or polished nickel finish, this fixture’s versatile aesthetic will easily blend with your décor.',
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
               ],
            },
         ],
      },
      createdAt: '2025-02-28T13:08:01.840Z',
      updatedAt: '2025-03-19T19:39:54.549Z',
      __v: 104,
   },
   {
      _id: '17ca3c8f-b24d-4f1f-8653-883358e0d9b3',
      dir: 'Bedroom',
      image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741687240/arhaus_images/zcxgotdgphvvz2ywdniy.webp',
      content: 'Bedroom furniture',
      menu: {
         _id: '07440986-5756-4aa3-8ac6-85bfb333ef9d',
         categories: [
            {
               content: 'Beds',
               image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741973520/eqzwsvuivzofpiqzttpu_1_wota9h.webp',
               _id: 'f2479eb5-16be-4561-b745-10d16d735888',
               products: [
                  {
                     name: 'pearson cane bed',
                     price: 45,
                     cancelled_price: 52,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691032/arhaus_images/u7pxdzeapox7jct4owim.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691032/arhaus_images/ul5gmzx3lqqcc6wxiw47.avif',
                        _id: '67d0189adf50f78cdeb23094',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '4bf2a84f-0d62-46d4-aec0-4ad7e25cb7d9',
                     options: [
                        {
                           option: 'ebony',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67d01cffdf50f78cdeb268ce',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692151/arhaus_images/i5cpjtp6wuix3bkea2mc.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692156/arhaus_images/prnopkurlrgev7ahzp5s.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '157baf96-a0a0-43f2-bcf7-677d2d3ed99d',
                        },
                        {
                           option: 'basa natural',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67d01d9bdf50f78cdeb26cd7',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692301/arhaus_images/ctvte8zm322n05latqm6.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692305/arhaus_images/m1aoasmtbkukhl5d4owe.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692309/arhaus_images/cfxgq128myrx2orjwhl2.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692307/arhaus_images/vwugtyamlxhbebckeqvr.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692313/arhaus_images/wkdubkonkpfnuvkrxkyk.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '45a73442-fdad-4485-b2fa-1532ec867fa4',
                        },
                     ],
                     features: [
                        {
                           header: 'Details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'This artisan-crafted collection is built in Indonesia from solid, locally grown, sustainably harvested mindi wood and mindi veneers.',
                                 _id: '67d01e56df50f78cdeb273fe',
                              },
                              {
                                 list: 'Frames are supported by mortise-and-tenon joinery and corner-block reinforcements for exceptional stability.',
                                 _id: '67d01e56df50f78cdeb273ff',
                              },
                              {
                                 list: 'Each piece is hand-sanded, hand-finished in rich tones, and brushed with lacquer for added protection and subtle sheen.',
                                 _id: '67d01e56df50f78cdeb27400',
                              },
                              {
                                 list: 'Beds are beautifully accentuated with hand-carved molding.',
                                 _id: '67d01e56df50f78cdeb27401',
                              },
                              {
                                 list: 'Gallery cane beds are expertly decorated with woven cane, creating a natural, boho, or coastal aesthetic.',
                                 _id: '67d01e56df50f78cdeb27402',
                              },
                              {
                                 list: 'Bed frames accommodate for variances in mattress sizes and allow bedding to be tucked in.',
                                 _id: '67d01e56df50f78cdeb27403',
                              },
                              {
                                 list: 'We recommend using our Retreat 8" Platform with this bed.',
                                 _id: '67d01e56df50f78cdeb27404',
                              },
                              {
                                 list: 'Low-footboard Bed footboards are 17.75" h.',
                                 _id: '67d01e56df50f78cdeb27405',
                              },
                              {
                                 list: 'Queen bed frame interior measures 61" w x 81" d.',
                                 _id: '67d01e56df50f78cdeb27406',
                              },
                              {
                                 list: 'King bed frame interior measures 77" w x 81" d.',
                                 _id: '67d01e56df50f78cdeb27407',
                              },
                           ],
                           content: '',
                           _id: '18bdde4e-672b-4e13-8f69-59cb62c3315b',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Our Pearson collection enhances your décor with classic design and easily transitions from traditional to modern styles depending on your aesthetic. Handcrafted by Indonesian artisans, Pearson is expertly constructed from sustainably grown mindi wood and mindi veneers for a smooth uniform surface. Simple, sophisticated details like plush upholstered headboards and rich finishes are masterfully applied by hand to add sophisticated style to each piece and complement the mindi wood’s natural beauty.',
                           _id: 'd0e6fb91-fd3c-4e92-a168-af87f99f9a84',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d01e7adf50f78cdeb27436',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d01e7adf50f78cdeb27437',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d01e7adf50f78cdeb27438',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d01e7adf50f78cdeb27439',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d01e7adf50f78cdeb2743a',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d01e7adf50f78cdeb2743b',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67d01e7adf50f78cdeb2743c',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d01e7adf50f78cdeb2743d',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67d01e7adf50f78cdeb2743e',
                              },
                              {
                                 list: 'Pieces upholstered in Dante Stone fabric are code W: Spot-clean using water and water-based upholstery shampoo or foam cleaners only.',
                                 _id: '67d01e7adf50f78cdeb2743f',
                              },
                              {
                                 list: 'Pieces upholstered in Top Secret Pearl fabric are code WS: Spot-clean using distilled water or water-based cleaning agents. Foam from a mild detergent or mild dry-cleaning solvents can also be used.',
                                 _id: '67d01e7adf50f78cdeb27440',
                              },
                              {
                                 list: 'Pieces upholstered in Cedar Natural fabric are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67d01e7adf50f78cdeb27441',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67d01e7adf50f78cdeb27442',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67d01e7adf50f78cdeb27443',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67d01e7adf50f78cdeb27444',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67d01e7adf50f78cdeb27445',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67d01e7adf50f78cdeb27446',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67d01e7adf50f78cdeb27447',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d01e7adf50f78cdeb27448',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67d01e7adf50f78cdeb27449',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67d01e7adf50f78cdeb2744a',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d01e7adf50f78cdeb2744b',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d01e7adf50f78cdeb2744c',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d01e7adf50f78cdeb2744d',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67d01e7adf50f78cdeb2744e',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d01e7adf50f78cdeb2744f',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67d01e7adf50f78cdeb27450',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67d01e7adf50f78cdeb27451',
                              },
                           ],
                           content: '',
                           _id: 'e54cb69c-12af-445c-9f62-646ad64f851b',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 64,
                        depth: 85,
                        height: 56,
                        weight: 144,
                        _id: '67d01e2adf50f78cdeb26ff5',
                     },
                  },
                  {
                     name: 'adalynn bed',
                     price: 47,
                     cancelled_price: 53,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691143/arhaus_images/tvznepf0lg3jzk5uqzcm.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691143/arhaus_images/fheyfqaexqj5hhiurvc9.avif',
                        _id: '67d01909df50f78cdeb2389c',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '301153e7-03c7-4aa9-ac40-3693fbdcddc4',
                     options: [
                        {
                           option: 'promise sugar',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67d01f6adf50f78cdeb2758e',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692772/arhaus_images/bjymrutnolbqhovifxpb.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692774/arhaus_images/rzqwcvp6n1fdikvarwat.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692775/arhaus_images/soxeeqesyxs8uqf1ognf.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741692774/arhaus_images/w9ctk42d58czmvqi9nue.webp',
                           ],
                           tags: ['boucles', 'washable'],
                           features:
                              'Bouclés are crafted from looped yarn and as a result, they offer plush comfort and an iconic, nubby look. Highly textured and rich in visual appeal, bouclés make spaces cozy and more inviting.',
                           care: 'Spot-clean with distilled water and/or water-based cleaning agents only.',
                           fabrics: '100% POLYESTER',
                           _id: '4cc515dd-dfe6-44b2-82f1-35662d8274ec',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted by our North Carolina upholstery artisans working with some of the finest materials sourced around the world.',
                                 _id: '67d04b39df50f78cdeb29786',
                              },
                              {
                                 list: 'Frames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.',
                                 _id: '67d04b39df50f78cdeb29787',
                              },
                              {
                                 list: 'Upholstered headboard contains dense foam made from partially plant-based material, padded with poly fibers.',
                                 _id: '67d04b39df50f78cdeb29788',
                              },
                              {
                                 list: 'Bed frame includes space to accommodate variances in mattress sizes and to allow bedding to be tucked in.',
                                 _id: '67d04b39df50f78cdeb29789',
                              },
                           ],
                           content: '',
                           _id: '3ed4be3b-416e-43f2-8eca-e56d7a4bb456',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Retreat yourself to a sophisticated oasis with our Adalynn Collection. Featuring a fully upholstered frame and a curved, sheltered headboard, Adalynn envelopes you in pure comfort.',
                           _id: '21e96979-444b-4fa5-8047-52883c3de52b',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d04b71df50f78cdeb29838',
                              },
                              {
                                 list: 'Before spot-cleaning, blot-up any excess liquid with an undyed cloth.',
                                 _id: '67d04b71df50f78cdeb29839',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67d04b71df50f78cdeb2983a',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67d04b71df50f78cdeb2983b',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67d04b71df50f78cdeb2983c',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d04b71df50f78cdeb2983d',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67d04b71df50f78cdeb2983e',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67d04b71df50f78cdeb2983f',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67d04b71df50f78cdeb29840',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67d04b71df50f78cdeb29841',
                              },
                           ],
                           content: '',
                           _id: '3d8c7b89-31e1-4fb4-b238-c481d983a05a',
                        },
                     ],
                     finish: false,
                     dimensions: {
                        width: 78,
                        depth: 96,
                        height: 42,
                        weight: 294,
                        _id: '67d01f9adf50f78cdeb27a09',
                     },
                  },
                  {
                     name: 'malone plinth bed',
                     price: 45,
                     cancelled_price: 55,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691241/arhaus_images/t076jazrhurlqvehfcpc.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691241/arhaus_images/wkth7b91juxw2stvnqpk.avif',
                        _id: '67d0196cdf50f78cdeb23c9f',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'cc3d23f8-ae9c-4663-9666-dc0695db2ff2',
                     options: [
                        {
                           option: 'sparrow',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67d0586fdf50f78cdeb2c43b',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707369/arhaus_images/pnnv6b5tt25mvexurwu7.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707371/arhaus_images/qhna8jt5mik2xrqxpe8i.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707372/arhaus_images/hzgksoeultoue8sn9hd4.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707373/arhaus_images/tluwnix6zdeycillfcvf.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '413fb83b-df36-4b96-aca1-d37a0174b8d4',
                        },
                        {
                           option: 'bone',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67d058d1df50f78cdeb2c4a7',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707468/arhaus_images/o3l7qo2sqmhrkocpt74g.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707469/arhaus_images/vx4bim3ykprdfnfx1y5b.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707470/arhaus_images/xaep0css7as4jqotxgtz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707470/arhaus_images/ilijoq4gqkv0a44vsudd.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '44927f83-90b5-4427-886f-f44f40be9156',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Pieces finished in Sparrow and Caramel feature craftsman-built frames made from solid parawood surfaced with walnut wood veneers.',
                                 _id: '67d05912df50f78cdeb2c57f',
                              },
                              {
                                 list: 'Pieces finished in Bone and Manta feature craftsman-built frames made from solid oak wood with elm wood veneers.',
                                 _id: '67d05912df50f78cdeb2c580',
                              },
                              {
                                 list: 'Reconstituted faux leather insets are dyed and artfully embossed with textural shagreen detailing.',
                                 _id: '67d05912df50f78cdeb2c581',
                              },
                              {
                                 list: 'Wood finishes are hand-stained and coated with lacquer for added protection.',
                                 _id: '67d05912df50f78cdeb2c582',
                              },
                              {
                                 list: 'Metallic accents complement dark wood and leather surfaces.',
                                 _id: '67d05912df50f78cdeb2c583',
                              },
                              {
                                 list: 'Upholstered headboard and footboard are encased in wood frames featuring complementary neutral color tones.',
                                 _id: '67d05912df50f78cdeb2c584',
                              },
                              {
                                 list: 'Bed frames include space to accommodate variances in mattress sizes and allow bedding to be tucked in.',
                                 _id: '67d05912df50f78cdeb2c585',
                              },
                              {
                                 list: 'We recommend using our Retreat 4" Platform with this bed.',
                                 _id: '67d05912df50f78cdeb2c586',
                              },
                           ],
                           content: '',
                           _id: '7a036c09-0f09-4631-8015-7e2d939235ba',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Featuring a sleek aesthetic, our Malone collection is artisan-crafted from solid parawood or oak wood—depending on your preferred finish—and surfaced with walnut or elm wood veneers. Insets made from reconstituted leather embossed with a shagreen pattern are complemented by hand-applied finishes to give this collection a modern look with intriguing textural details.',
                           _id: 'd34df030-8263-4092-86e6-a117b0562b77',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d05947df50f78cdeb2c67d',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d05947df50f78cdeb2c67e',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d05947df50f78cdeb2c67f',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d05947df50f78cdeb2c680',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d05947df50f78cdeb2c681',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d05947df50f78cdeb2c682',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67d05947df50f78cdeb2c683',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67d05947df50f78cdeb2c684',
                              },
                              {
                                 list: 'Our artisan-crafted leathers can be easily maintained by spot-cleaning using a dry cloth to remove dust and dirt.',
                                 _id: '67d05947df50f78cdeb2c685',
                              },
                              {
                                 list: 'For long-term care, use an undyed cloth dampened with distilled water to wipe down your leather. This will help keep your upholstery looking its best by adding moisture back into the leather.',
                                 _id: '67d05947df50f78cdeb2c686',
                              },
                              {
                                 list: 'Leathers can be cleaned more thoroughly using wax-free leather cleaner and conditioner.',
                                 _id: '67d05947df50f78cdeb2c687',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d05947df50f78cdeb2c688',
                              },
                              {
                                 list: 'Clean oil-based spills from leather by blotting with a clean, undyed, soft cloth. Oil should dissipate over time.',
                                 _id: '67d05947df50f78cdeb2c689',
                              },
                              {
                                 list: 'Spot-clean other liquid spills by blotting with clear, mild soap and distilled water. Follow by wiping the area with distilled water. Use a clean, undyed, soft, and absorbent cloth. Avoid scrubbing. Allow to air-dry.',
                                 _id: '67d05947df50f78cdeb2c68a',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67d05947df50f78cdeb2c68b',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67d05947df50f78cdeb2c68c',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67d05947df50f78cdeb2c68d',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67d05947df50f78cdeb2c68e',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d05947df50f78cdeb2c68f',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d05947df50f78cdeb2c690',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67d05947df50f78cdeb2c691',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d05947df50f78cdeb2c692',
                              },
                           ],
                           content: '',
                           _id: 'a9dd8f67-93c2-4071-a093-1270ccaf6707',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 64,
                        depth: 84,
                        height: 54,
                        weight: 169,
                        _id: '67d058f9df50f78cdeb2c513',
                     },
                  },
                  {
                     name: 'darian curved shelter bed',
                     price: 32,
                     cancelled_price: 38,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691329/arhaus_images/kefjak8k9llqw5uu86c2.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691329/arhaus_images/ct2cawohr0lfaiunxxir.avif',
                        _id: '67d019c3df50f78cdeb244a7',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '5640f867-cd8a-41ce-9e95-fadbd65e3de2',
                     options: [
                        {
                           option: 'nomad snow',
                           stock: {
                              in_stock: false,
                              when_in_stock: '2026-09-17',
                              stock_count: 0,
                              _id: '67d05a12df50f78cdeb2ce2d',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707789/arhaus_images/twopi3vgyow4jzfj556r.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707791/arhaus_images/fvzwid4c1n6ju720vzvm.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707791/arhaus_images/u383tif7vdnvqekxjjwb.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741707791/arhaus_images/eufbxbn2qlcl3ubaelow.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '908fb805-03a8-4e60-a8e9-03fdfe5b7171',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Frames are craftsman-built from oak veneer and solid oak wood with a hand-applied finish and accented with upholstered panels.',
                                 _id: '67d05ac0df50f78cdeb2cf7d',
                              },
                              {
                                 list: 'Bed frames accommodate for variances in mattress sizes and allow bedding to be tucked in.',
                                 _id: '67d05ac0df50f78cdeb2cf7e',
                              },
                              {
                                 list: 'Darien beds do not require box springs.',
                                 _id: '67d05ac0df50f78cdeb2cf7f',
                              },
                           ],
                           content: '',
                           _id: '68dea084-6ed3-40ae-a13f-95436cc67474',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Thoughtfully crafted to be a revelation of rest, our Darien Collection is designed for creating the suite of your dreams with its various silhouette options. From classic shelter styles to clean-lined panel beds, Darien’s expertly tailored upholstery and exposed wood frames creates a harmonious retreat in any bedroom.',
                           _id: '514ccb63-fbe4-4b9a-9f3e-f1085bd5bcfa',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d05ae0df50f78cdeb2d534',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d05ae0df50f78cdeb2d535',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d05ae0df50f78cdeb2d536',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d05ae0df50f78cdeb2d537',
                              },
                              {
                                 list: 'Izzy Snow Performance Fabric is cleaning code S: Spot-clean using water-free solvents only. Do not use water or dry clean.',
                                 _id: '67d05ae0df50f78cdeb2d538',
                              },
                              {
                                 list: 'Spot clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside in towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67d05ae0df50f78cdeb2d539',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67d05ae0df50f78cdeb2d53a',
                              },
                              {
                                 list: 'To help prevent fabrics from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67d05ae0df50f78cdeb2d53b',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d05ae0df50f78cdeb2d53c',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d05ae0df50f78cdeb2d53d',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d05ae0df50f78cdeb2d53e',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d05ae0df50f78cdeb2d53f',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d05ae0df50f78cdeb2d540',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d05ae0df50f78cdeb2d541',
                              },
                           ],
                           content: '',
                           _id: '750582fb-3dde-4e99-b493-f0da30c93ce7',
                        },
                     ],
                     finish: false,
                     dimensions: {
                        width: 65,
                        depth: 86,
                        height: 48,
                        weight: 327,
                        _id: '67d05a4ddf50f78cdeb2ced5',
                     },
                  },
                  {
                     name: 'malone canopy bed',
                     price: 52,
                     cancelled_price: 56,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691438/arhaus_images/clmx1zyvlde8jrgdkjhf.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691438/arhaus_images/mxod1jx0vnkogpg49dqb.avif',
                        _id: '67d01a30df50f78cdeb24caf',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '37aaaa8f-9a0d-4e39-a960-d8dca9283f48',
                     options: [
                        {
                           option: 'caramel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 4,
                              _id: '67d05bbfdf50f78cdeb2d866',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708188/arhaus_images/klibtdpethizo4mosb1n.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708220/arhaus_images/bjvbssjgpxsrtwhfbesc.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708195/arhaus_images/ea2noe7tkxwglh9enji7.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '019e73b8-5d5a-46bf-a4ab-62af602dbd76',
                        },
                        {
                           option: 'bone',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 10,
                              _id: '67d05d11df50f78cdeb2e12d',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708556/arhaus_images/dhyjv4zuhlgkppz1sjy9.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708557/arhaus_images/ca0ylohlveggguflucwz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708558/arhaus_images/ntzocfoualz0ihddcq9g.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708558/arhaus_images/rjfjblzi50xclrlgah8u.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '8987973a-12b4-46d8-a035-321a1f90fa5d',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Pieces finished in Sparrow and Caramel feature craftsman-built frames made from solid parawood surfaced with walnut wood veneers.',
                                 _id: '67d05c46df50f78cdeb2de62',
                              },
                              {
                                 list: 'Pieces finished in Bone and Manta feature craftsman-built frames made from solid oak wood with elm wood veneers.',
                                 _id: '67d05c46df50f78cdeb2de63',
                              },
                              {
                                 list: 'Reconstituted leather insets are dyed and artfully embossed with textural shagreen detailing.',
                                 _id: '67d05c46df50f78cdeb2de64',
                              },
                              {
                                 list: 'Wood finishes are hand-stained and coated with lacquer for added protection.',
                                 _id: '67d05c46df50f78cdeb2de65',
                              },
                              {
                                 list: 'Metallic accents complement dark wood and leather surfaces.',
                                 _id: '67d05c46df50f78cdeb2de66',
                              },
                              {
                                 list: 'Bed frames include space to accommodate variances in mattress sizes and allow bedding to be tucked in.',
                                 _id: '67d05c46df50f78cdeb2de67',
                              },
                              {
                                 list: 'We recommend using our Retreat 4" Platform with this bed.',
                                 _id: '67d05c46df50f78cdeb2de68',
                              },
                           ],
                           content: '',
                           _id: '0436c510-8502-429f-a913-45d06f261c38',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Featuring a sleek aesthetic, our Malone collection is artisan-crafted from solid parawood or oak wood—depending on your preferred finish—and surfaced with walnut or elm wood veneers. Insets made from reconstituted leather embossed with a shagreen pattern are complemented by hand-applied finishes to give this collection a modern look with intriguing textural details.',
                           _id: '3630f7e3-5037-47e9-b443-c5c5a3ff1665',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d05c65df50f78cdeb2e017',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d05c65df50f78cdeb2e018',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d05c65df50f78cdeb2e019',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d05c65df50f78cdeb2e01a',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d05c65df50f78cdeb2e01b',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d05c65df50f78cdeb2e01c',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67d05c65df50f78cdeb2e01d',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67d05c65df50f78cdeb2e01e',
                              },
                              {
                                 list: 'Our artisan-crafted leathers can be easily maintained by spot-cleaning using a dry cloth to remove dust and dirt.',
                                 _id: '67d05c65df50f78cdeb2e01f',
                              },
                              {
                                 list: 'For long-term care, use an undyed cloth dampened with distilled water to wipe down your leather. This will help keep your upholstery looking its best by adding moisture back into the leather.',
                                 _id: '67d05c65df50f78cdeb2e020',
                              },
                              {
                                 list: 'Leathers can be cleaned more thoroughly using wax-free leather cleaner and conditioner. For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d05c65df50f78cdeb2e021',
                              },
                              {
                                 list: 'Clean oil-based spills from leather by blotting with a clean, undyed, soft cloth. Oil should dissipate over time.',
                                 _id: '67d05c65df50f78cdeb2e022',
                              },
                              {
                                 list: 'Spot-clean other liquid spills by blotting with clear, mild soap and distilled water. Follow by wiping the area with distilled water. Use a clean, undyed, soft, and absorbent cloth. Avoid scrubbing. Allow to air-dry.',
                                 _id: '67d05c65df50f78cdeb2e023',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67d05c65df50f78cdeb2e024',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67d05c65df50f78cdeb2e025',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67d05c65df50f78cdeb2e026',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67d05c65df50f78cdeb2e027',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d05c65df50f78cdeb2e028',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d05c65df50f78cdeb2e029',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67d05c65df50f78cdeb2e02a',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d05c65df50f78cdeb2e02b',
                              },
                           ],
                           content: '',
                           _id: '454b6a78-c05a-43fe-8aaf-fe172b44fd96',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 63,
                        depth: 84,
                        height: 84,
                        weight: 205,
                        _id: '67d05c28df50f78cdeb2dd98',
                     },
                  },
                  {
                     name: 'astor bed',
                     price: 47,
                     cancelled_price: 60,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691543/arhaus_images/vsqtdh7wl7lmerq5ngpv.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691544/arhaus_images/lgcgtaiqcgqhsaol4pnd.avif',
                        _id: '67d01a9adf50f78cdeb250b2',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '95dbcc14-a60c-41af-bebc-1e2cd060e7a4',
                     options: [
                        {
                           option: 'honey',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67d05db0df50f78cdeb2e9b6',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708713/arhaus_images/ucouunorlibpdu5a9i5y.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708717/arhaus_images/ab4jblncjpfscibx3kle.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708717/arhaus_images/uzxwkhmjbt8fdkpxm2bk.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708717/arhaus_images/cqiwjmalharhvmvnjwiu.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '540fd88d-65ac-4bb5-9eb7-a48586da63e5',
                        },
                        {
                           option: 'chestnut',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67d05dffdf50f78cdeb2eab8',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708794/arhaus_images/elfdvb4yiguuitmp1f8g.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708795/arhaus_images/dt1x2a3naegx12nlmxq6.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708796/arhaus_images/i72wpxynryaiqjodowqy.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741708796/arhaus_images/ybcl06dxvpx3fdls4ios.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'f1fa835f-1f58-41cc-9002-34dda26de590',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from oak veneers with solid oak wood reeding detailing.',
                                 _id: '67d05e3ddf50f78cdeb2ecbc',
                              },
                              {
                                 list: 'This collection is artisan-crafted from natural materials and finishes. Individual pieces will vary in color, pattern, and texture, making each truly unique.',
                                 _id: '67d05e3ddf50f78cdeb2ecbd',
                              },
                           ],
                           content: '',
                           _id: '28a9b42f-624f-4bcf-ae39-04f69e6a3160',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Celebrating craftsmanship with chic style, our Astor Collection features gorgeous reeded detailing and inset stone tops on case pieces. Offering timeless sophistication with its uniquely crafted curves, Astor creates a suite designed for dreaming.',
                           _id: 'eec68e8a-9ce8-430b-ae17-e77feff627a0',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d05e5fdf50f78cdeb2f34e',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d05e5fdf50f78cdeb2f34f',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d05e5fdf50f78cdeb2f350',
                              },
                              {
                                 list: 'Stone pieces may display natural mineral deposits, swirling, joint lines, veining, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d05e5fdf50f78cdeb2f351',
                              },
                              {
                                 list: 'Stone surfaces can be wiped down using a damp cloth, mild soap, and warm water. Use a second damp cloth to remove any soap residue and then a clean towel to dry.',
                                 _id: '67d05e5fdf50f78cdeb2f352',
                              },
                              {
                                 list: 'Avoid using window cleaner or cleaning agents containing lemon, vinegar, or other acids as these could cause damage to stone surfaces.',
                                 _id: '67d05e5fdf50f78cdeb2f353',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best. For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d05e5fdf50f78cdeb2f354',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d05e5fdf50f78cdeb2f355',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d05e5fdf50f78cdeb2f356',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67d05e5fdf50f78cdeb2f357',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood or stone surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67d05e5fdf50f78cdeb2f358',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats. Wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d05e5fdf50f78cdeb2f359',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d05e5fdf50f78cdeb2f35a',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d05e5fdf50f78cdeb2f35b',
                              },
                           ],
                           content: '',
                           _id: 'e145505b-065e-4d46-ab52-cd1c19e11a40',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 65,
                        depth: 85,
                        height: 48,
                        weight: 332,
                        _id: '67d05e28df50f78cdeb2ebba',
                     },
                  },
                  {
                     name: 'kinan bed',
                     price: 42,
                     cancelled_price: 53,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691680/arhaus_images/rjrojaamogdaeuvwowci.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691680/arhaus_images/bdsg8dw8d5espjozm88r.avif',
                        _id: '67d01b22df50f78cdeb258ba',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: '96a29693-d88a-46fa-aac9-c93959db30a2',
                     options: [
                        {
                           option: 'vance forest',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67d05f37df50f78cdeb2fa22',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709105/arhaus_images/bbijgbhes6mxaxhclbu2.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709108/arhaus_images/ymkahwzocpedf92zpd9k.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709107/arhaus_images/lytwbcrdqukwambofmp6.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709107/arhaus_images/zarse4f0wuxcratib6o3.webp',
                           ],
                           tags: ['velvet'],
                           features:
                              'Soft and luxurious, velvets offer style and sophistication throughout the home. With a dense pile and soft luster that seems to glow from within, velvets saturate and enhance colors on any silhouette.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '74% COTTON, 26% POLYESTER',
                           _id: 'eaead188-dd71-4fd7-a119-a46c12747dfb',
                        },
                        {
                           option: 'avery cognac',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67d05fc7df50f78cdeb2ffd8',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709250/arhaus_images/qkdvzji8fso8y2lksard.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709251/arhaus_images/dfc7pl8d8fm912ksbvtp.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709252/arhaus_images/j43q4d6pefjwpdk90hi6.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709252/arhaus_images/w3i44uggqf62ogtruhxz.webp',
                           ],
                           tags: ['chenille', 'performance'],
                           features:
                              'Chenille Performance Fabrics are extremely durable and resist stains but remain beautiful and soft to the touch.',
                           care: 'Spot-clean with water-free cleaning solvents only. Do not use water or dry clean.',
                           fabrics: '100% RECYCLED POLYESTER',
                           _id: 'a3d313cb-f0b8-4ad6-82fd-1a76d31ffd41',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Frames are craftsman-built using cross-directional hardwood laminate certified by the Sustainable Forestry Initiative.',
                                 _id: '67d06001df50f78cdeb3021c',
                              },
                              {
                                 list: 'Our Tara Oat and Avery Cognac Performance Fabrics are extremely durable and resist stains but remain beautiful and soft to the touch.',
                                 _id: '67d06001df50f78cdeb3021d',
                              },
                              {
                                 list: 'Selected from the highest quality hides in the world, our leathers are hand-finished to accentuate their natural color variations, distinct textures, and other unique features.',
                                 _id: '67d06001df50f78cdeb3021e',
                              },
                              {
                                 list: 'Bed frames include space to accommodate variances in mattress sizes and allow bedding to be tucked in.',
                                 _id: '67d06001df50f78cdeb3021f',
                              },
                              {
                                 list: 'The Kinnan Collection is available in multiple pieces and customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own.',
                                 _id: '67d06001df50f78cdeb30220',
                              },
                              {
                                 list: 'We want you to love your Kinnan as much as we do. We recommend ordering a material swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67d06001df50f78cdeb30221',
                              },
                           ],
                           content: '',
                           _id: 'e1a6d4c8-a8b8-4ca8-ad20-b73f2a37b266',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Our Kinnan Bedroom Collection celebrates craftsmanship with a low-slung silhouette, modern style, and expansive comfort. Each handcrafted piece is generously upholstered offering a cozy and plush retreat. With soft curves bordering the frame and three simple channels featured on the headboard, Kinnan will make a minimalist statement in any bedroom.',
                           _id: '2bb60692-93a4-4aff-b49b-bc323db51d73',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care',
                                 _id: '67d0602fdf50f78cdeb3047c',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, certain standard cleaning codes may be designated, indicating how to care for it',
                                 _id: '67d0602fdf50f78cdeb3047d',
                              },
                              {
                                 list: 'Pieces upholstered in Tara Oak and Vance Forest fabrics are code S: Spot-clean using water-free cleaning solvents only.',
                                 _id: '67d0602fdf50f78cdeb3047e',
                              },
                              {
                                 list: 'Do not use water or dry clean To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture',
                                 _id: '67d0602fdf50f78cdeb3047f',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion.',
                                 _id: '67d0602fdf50f78cdeb30480',
                              },
                              {
                                 list: 'Blot from the outside towards the middle of the soiled area to prevent rings.',
                                 _id: '67d0602fdf50f78cdeb30481',
                              },
                              {
                                 list: 'Never scrub Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric',
                                 _id: '67d0602fdf50f78cdeb30482',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers',
                                 _id: '67d0602fdf50f78cdeb30483',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully.',
                                 _id: '67d0602fdf50f78cdeb30484',
                              },
                              {
                                 list: 'Do not over apply All fabrics may pill from friction and normal wear, as everyday use loosens fibers.',
                                 _id: '67d0602fdf50f78cdeb30485',
                              },
                              {
                                 list: 'Occasionally use a fabric (or “sweater”) shaver to gently remove pills.',
                                 _id: '67d0602fdf50f78cdeb30486',
                              },
                              {
                                 list: 'Pilling should decrease once loose fibers are removed Lift furniture when moving.',
                                 _id: '67d0602fdf50f78cdeb30487',
                              },
                              {
                                 list: 'Do not drag, as this could loosen joinery and damage your piece',
                                 _id: '67d0602fdf50f78cdeb30488',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67d0602fdf50f78cdeb30489',
                              },
                           ],
                           content: '',
                           _id: 'ba101123-fc0e-42ac-a709-f3ce7f21bd26',
                        },
                     ],
                     finish: false,
                     dimensions: {
                        width: 72,
                        depth: 97,
                        height: 45,
                        weight: 268,
                        _id: '67d05fe9df50f78cdeb300fa',
                     },
                  },
                  {
                     name: 'st. martin bed',
                     price: 43,
                     cancelled_price: 48,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691777/arhaus_images/pbhiugaq2ba1p2bbfoa7.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691777/arhaus_images/h9jl5owrmswudhcq9och.avif',
                        _id: '67d01b84df50f78cdeb25cbd',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '50d63b69-5115-42eb-831f-47c5860068bc',
                     options: [
                        {
                           option: 'haze',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67d06162df50f78cdeb30e56',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709659/arhaus_images/xnjdqnmchnk3fjnaetav.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709661/arhaus_images/f6yu7rcsajth2fmwrly1.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709663/arhaus_images/wlg1bzbnt7upqmz00t4f.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '928b0ae6-7bfb-41f7-ad69-3a9aedadeff5',
                        },
                        {
                           option: 'smoke',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67d061b3df50f78cdeb30fa0',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709732/arhaus_images/e0hur0dqwhxc1eqawfnb.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709734/arhaus_images/fxejpmlcmddq0ktjyfdh.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741709744/arhaus_images/th2vavjecec6ponobpdg.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '620f5fce-5386-47b7-ad22-9381fb9daa7a',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Bed frames include space to accommodate variances in mattress sizes and allow bedding to be tucked in.',
                                 _id: '67d061f1df50f78cdeb316dc',
                              },
                              {
                                 list: 'We recommend pairing beds with our Retreat 8" Box Spring.',
                                 _id: '67d061f1df50f78cdeb316dd',
                              },
                              {
                                 list: 'Craftsman-built from oak wood, finishes are artfully hand applied.',
                                 _id: '67d061f1df50f78cdeb316de',
                              },
                              {
                                 list: 'Queen beds feature a frame cavity measuring 61" w x 80.5" d x 8.5" h with 7" under-bed clearance.',
                                 _id: '67d061f1df50f78cdeb316df',
                              },
                              {
                                 list: 'King beds feature a frame cavity measuring 77" w x 80.5" d x 8.5" h with 7" under-bed clearance.',
                                 _id: '67d061f1df50f78cdeb316e0',
                              },
                           ],
                           content: '',
                           _id: 'a2bcd827-2e23-4e9f-983b-88c24fd8223f',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           lists: [],
                           content:
                              'A modern edge to a classic design, our St. Martin Bedroom Collection celebrates heirloom quality in a traditional style. The plush upholstered headboard is complemented with a contrasting wood frame that will add elegance to any bedroom.',
                           _id: '597496e9-e3b4-4204-81f8-aa124fc70587',
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d064c6df50f78cdeb3244d',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d064c6df50f78cdeb3244e',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d064c6df50f78cdeb3244f',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d064c6df50f78cdeb32450',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d064c6df50f78cdeb32451',
                              },
                              {
                                 list: 'Recommended care for wood furnishings may vary depending on the type of wood and finishes applied to each surface.',
                                 _id: '67d064c6df50f78cdeb32452',
                              },
                              {
                                 list: 'Our wood furnishings are sealed with lacquer, adding a protective (but not indestructible) barrier, and can be easily spot-cleaned using a mild soap, water, and a soft undyed cloth as needed. Dry immediately to prevent marks from forming.',
                                 _id: '67d064c6df50f78cdeb32453',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d064c6df50f78cdeb32454',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d064c6df50f78cdeb32455',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d064c6df50f78cdeb32456',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d064c6df50f78cdeb32457',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d064c6df50f78cdeb32458',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67d064c6df50f78cdeb32459',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67d064c6df50f78cdeb3245a',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67d064c6df50f78cdeb3245b',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d064c6df50f78cdeb3245c',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67d064c6df50f78cdeb3245d',
                              },
                           ],
                           content: '',
                           _id: '58ad8ed9-4c53-4ad5-937f-970a5fde0836',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 66,
                        depth: 87,
                        height: 60,
                        weight: 280,
                        _id: '67d061d9df50f78cdeb31592',
                     },
                  },
                  {
                     name: 'rigby bed',
                     price: 20,
                     cancelled_price: 30,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691854/arhaus_images/zgyviewbjzcf9arbaxmn.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741691854/arhaus_images/uhlnvqn824a8n6oefpeh.avif',
                        _id: '67d01bd0df50f78cdeb260c0',
                     },
                     in_stock: true,
                     fabric: true,
                     leather: false,
                     _id: 'aa953f6b-6dc7-44f7-91c7-e0f907db0c48',
                     options: [
                        {
                           option: 'nomad snow',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67d0666ddf50f78cdeb32ef0',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741710951/arhaus_images/zkitg5wbv3n9knxfgrs3.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741710953/arhaus_images/srlt4bswulxvgaujwypd.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741710954/arhaus_images/kjcfsvjdzdg10e83uas3.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741710954/arhaus_images/lzaynhsu13zp8fnw5xf4.webp',
                           ],
                           tags: ['performance', 'textured weave'],
                           features:
                              'Woven with minimal texture, classic weave fabrics elevate spaces with refined elegance. Simple and timeless, these fabrics pair harmoniously with any design sensibility.',
                           care: 'Spot-clean with water and water-based upholstery shampoo or foam cleaners only.',
                           fabrics: '92% POLYESTER, 8% LINEN',
                           _id: 'ea0a6a5a-faa8-43eb-bc5b-31ffda6b6b5a',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Craftsman-built bed frames are constructed out of hardwood and engineered hardwood.',
                                 _id: '67d066f5df50f78cdeb3369a',
                              },
                              {
                                 list: 'Our sustainably certified Crypton® Home Performance Fabrics are easy to clean, soft, and durable—engineered with stain-, odor-, and moisture-resistant technology in every fiber.',
                                 _id: '67d066f5df50f78cdeb3369b',
                              },
                              {
                                 list: 'Upholstered surfaces contain dense foam made from partially plant-based material, padded with poly fibers.',
                                 _id: '67d066f5df50f78cdeb3369c',
                              },
                              {
                                 list: 'Box spring not required.',
                                 _id: '67d066f5df50f78cdeb3369d',
                              },
                              {
                                 list: 'Frames include space to accommodate variances in mattress sizes and allow bedding to be tucked in.',
                                 _id: '67d066f5df50f78cdeb3369e',
                              },
                              {
                                 list: 'Rigby is available in customizable fabrics and leathers. Call, email, or live chat with our Design Team to create your own.',
                                 _id: '67d066f5df50f78cdeb3369f',
                              },
                              {
                                 list: 'We want you to love your Rigby as much as we do. We recommend ordering a fabric swatch prior to purchase, ensuring the perfect color choice.',
                                 _id: '67d066f5df50f78cdeb336a0',
                              },
                           ],
                           content: '',
                           _id: '3ad3bbea-965d-46d5-9d5e-70f1b9aed6e9',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'A plush, contemporary style for chic sleeping spaces, our Rigby Bed Collection features a luxurious pillow-back headboard design with a low-profile platform silhouette. A durable frame craftsman-built from solid poplar and pine wood features a supportive slat system that creates a relaxing feel.',
                           _id: '87c928d6-997d-4c54-af83-5aeefba752ff',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d06711df50f78cdeb339a7',
                              },
                              {
                                 list: 'Depending on the fabric selected for your upholstery, certain standard cleaning codes may be designated, indicating how to care for it.',
                                 _id: '67d06711df50f78cdeb339a8',
                              },
                              {
                                 list: 'Pieces upholstered in Prestige Fog, Falkirk Rust or Falkirk Dark Grey fabrics are code S: Spot-clean using water-free cleaning solvents only. Do not use water or dry clean.',
                                 _id: '67d06711df50f78cdeb339a9',
                              },
                              {
                                 list: 'Piece upholstered in Crypton® Cushing fabrics are code W: Spot-clean using water and water-based upholstery shampoo or foam cleaner only.',
                                 _id: '67d06711df50f78cdeb339aa',
                              },
                              {
                                 list: 'Crypton® fabrics can be cleaned using clear, mild detergent and water. Do not bleach. For tough stains, rub with a soft brush. Blot with a clean towel, rinsing thoroughly; let air-dry.',
                                 _id: '67d06711df50f78cdeb339ab',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67d06711df50f78cdeb339ac',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67d06711df50f78cdeb339ad',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67d06711df50f78cdeb339ae',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67d06711df50f78cdeb339af',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d06711df50f78cdeb339b0',
                              },
                              {
                                 list: 'All fabrics may pill from friction and normal wear, as everyday use loosens fibers. Occasionally use a fabric (or “sweater”) shaver to gently remove pills. Pilling should decrease once loose fibers are removed.',
                                 _id: '67d06711df50f78cdeb339b1',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d06711df50f78cdeb339b2',
                              },
                              {
                                 list: 'For overall cleaning or to clean any overly soiled upholstery, we recommend contacting a professional cleaning service.',
                                 _id: '67d06711df50f78cdeb339b3',
                              },
                           ],
                           content: '',
                           _id: '3bfea26f-a42f-4960-8ab9-4dc5772ced8d',
                        },
                     ],
                     finish: false,
                     dimensions: {
                        width: 73,
                        depth: 91,
                        height: 40,
                        weight: 128,
                        _id: '67d066aadf50f78cdeb33524',
                     },
                  },
               ],
            },
            {
               content: 'Dressers',
               image: 'https://res.cloudinary.com/dycw73vuy/image/upload/v1741973519/nac0cy8hhogrwhownkn3_1_pvta6s.webp',
               _id: 'fa8b6c86-df63-415b-955a-644f12c6132b',
               products: [
                  {
                     name: 'Malone six drawer dresser',
                     price: 48,
                     cancelled_price: 50,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741712921/arhaus_images/m5cddrvgq9sdrbzzhhoh.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741712921/arhaus_images/pxtawn7lelyldldhfpdv.avif',
                        _id: '67d06e1cdf50f78cdeb3787a',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '8156522d-5322-4b98-b706-b967833f5431',
                     options: [
                        {
                           option: 'bone',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67d07520df50f78cdeb3d25a',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714714/arhaus_images/xr0poiqgjhqheebsr3is.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714717/arhaus_images/rvp4yh8j5glzwysawkkq.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714717/arhaus_images/k1pc3pgw6w0ihmebcmxv.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714717/arhaus_images/peqlq6z6crolhdsryr3u.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '1594e2ad-016e-4593-9553-af679bac3553',
                        },
                        {
                           option: 'sparrow',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67d07590df50f78cdeb3d3f8',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714825/arhaus_images/qhwycmpatzf7g1ov2voz.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714827/arhaus_images/itkohsv59klb4zijoj3r.jpg',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714828/arhaus_images/ryr2mjllshnwckckp4fp.jpg',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714828/arhaus_images/nhc9j9tk7mg1zxpl7edq.jpg',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '1cc6d739-5551-4fb6-8bda-29d3cc212f23',
                        },
                        {
                           option: 'caramel',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67d075f0df50f78cdeb3d596',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714916/arhaus_images/tpgxwnosz8n9xxfi4x0p.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714920/arhaus_images/qieytme23y5q5rieij4q.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714920/arhaus_images/uquxannbkiekg13zhxuu.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714924/arhaus_images/ieg6qobvoczdhndhskxl.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '52118e57-d9e1-4ffc-9959-a4f06c7c547c',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Pieces finished in Sparrow and Caramel feature craftsman-built frames made from solid parawood surfaced with walnut wood veneers.',
                                 _id: '67d07640df50f78cdeb3dda4',
                              },
                              {
                                 list: 'Pieces finished in Bone and Manta feature craftsman-built frames made from solid oak wood with elm wood veneers.',
                                 _id: '67d07640df50f78cdeb3dda5',
                              },
                              {
                                 list: 'Reconstituted leather insets are dyed and artfully embossed with textural shagreen detailing.',
                                 _id: '67d07640df50f78cdeb3dda6',
                              },
                              {
                                 list: 'Wood finishes are hand-stained and coated with lacquer for added protection.',
                                 _id: '67d07640df50f78cdeb3dda7',
                              },
                              {
                                 list: 'Warm metallic accents complement dark wood and leather surfaces.',
                                 _id: '67d07640df50f78cdeb3dda8',
                              },
                              {
                                 list: 'Drawers built using English dovetail joinery sit on under-mounted, soft-close glides.',
                                 _id: '67d07640df50f78cdeb3dda9',
                              },
                           ],
                           content: '',
                           _id: '8eaba23b-87c5-460a-8bc7-4cbea9f6fd9e',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Featuring a sleek aesthetic, our Malone collection is artisan-crafted from solid parawood or oak wood—depending on your preferred finish—and surfaced with walnut or elm wood veneers. Insets made from reconstituted leather embossed with a shagreen pattern are complemented by hand-applied finishes to give this collection a modern look with intriguing textural details.',
                           _id: '05304ce4-a5d5-4315-9a6d-e17b58c4f149',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d07674df50f78cdeb3e0fc',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d07674df50f78cdeb3e0fd',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d07674df50f78cdeb3e0fe',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d07674df50f78cdeb3e0ff',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d07674df50f78cdeb3e100',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d07674df50f78cdeb3e101',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d07674df50f78cdeb3e102',
                              },
                              {
                                 list: 'Vacuum your upholstery occasionally, using upholstery and crevice attachments to clean up loose particles.',
                                 _id: '67d07674df50f78cdeb3e103',
                              },
                              {
                                 list: 'Spot-clean upholstery using a clean, absorbent, undyed cloth with a blotting motion. Blot from the outside towards the middle of the soiled area to prevent rings. Never scrub.',
                                 _id: '67d07674df50f78cdeb3e104',
                              },
                              {
                                 list: 'Our artisan-crafted leathers can be easily maintained by spot-cleaning using a dry cloth to remove dust and dirt.',
                                 _id: '67d07674df50f78cdeb3e105',
                              },
                              {
                                 list: 'For long-term care, use an undyed cloth dampened with distilled water to wipe down your leather. This will help keep your upholstery looking its best by adding moisture back into the leather.',
                                 _id: '67d07674df50f78cdeb3e106',
                              },
                              {
                                 list: 'Leathers can be cleaned more thoroughly using wax-free leather cleaner and conditioner. For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d07674df50f78cdeb3e107',
                              },
                              {
                                 list: 'Clean oil-based spills from leather by blotting with a clean, undyed, soft cloth. Oil should dissipate over time.',
                                 _id: '67d07674df50f78cdeb3e108',
                              },
                              {
                                 list: 'Spot-clean other liquid spills by blotting with clear, mild soap and distilled water. Follow by wiping the area with distilled water. Use a clean, undyed, soft, and absorbent cloth. Avoid scrubbing. Allow to air-dry.',
                                 _id: '67d07674df50f78cdeb3e109',
                              },
                              {
                                 list: 'Before cleaning, pre-test upholstery cleaners for color loss and compatibility by applying a small amount to a hidden section of fabric.',
                                 _id: '67d07674df50f78cdeb3e10a',
                              },
                              {
                                 list: 'If you are mixing cleaners, dilute the mixture using distilled water. Be careful not to over-wet your furniture.',
                                 _id: '67d07674df50f78cdeb3e10b',
                              },
                              {
                                 list: 'Avoid over-rubbing and never clean fabrics with a hard-bristle brush as this could damage fibers.',
                                 _id: '67d07674df50f78cdeb3e10c',
                              },
                              {
                                 list: 'To help prevent fabrics and leathers from fading over time, avoid placing indoor upholstery in direct sunlight or near sources of heat or moisture.',
                                 _id: '67d07674df50f78cdeb3e10d',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d07674df50f78cdeb3e10e',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d07674df50f78cdeb3e10f',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67d07674df50f78cdeb3e110',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67d07674df50f78cdeb3e111',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d07674df50f78cdeb3e112',
                              },
                           ],
                           content: '',
                           _id: 'df163964-3116-4132-98aa-2d57e7484fbc',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 66,
                        depth: 20,
                        height: 36,
                        weight: 220,
                        _id: '67d07625df50f78cdeb3dc06',
                     },
                  },
                  {
                     name: 'Finley six-drawer dresser',
                     price: 45,
                     cancelled_price: 55,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713123/arhaus_images/rxkfb0rzjmqm3afzl4zi.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713123/arhaus_images/jzejeyoumsjr2cybduqk.avif',
                        _id: '67d06ee6df50f78cdeb37ee4',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'd344a3a3-d79c-45dd-a17e-d1e1b27c3f89',
                     options: [
                        {
                           option: 'ebony',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67d07745df50f78cdeb3ed5e',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741715264/arhaus_images/pd604zxbeckjmb5ucosy.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741715265/arhaus_images/xuv3i4xaf9eyrnafjy8w.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741715266/arhaus_images/gmv1lt644pu4j3uo4eoo.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741715266/arhaus_images/y1pzwcrxcgnfeysyyqyn.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'a6d7d094-d887-450d-90b8-3a43863fbb89',
                        },
                        {
                           option: 'honey',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67d0779edf50f78cdeb3ef36',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741715353/arhaus_images/d39nagprddxq6qudrr8y.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741715355/arhaus_images/l8qmncd9tpir3amky1uu.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741715355/arhaus_images/exsrkj7rx8z8yi0or77y.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741715355/arhaus_images/ukqe5lg1wuo60v0a2pww.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: 'db4390e3-33b1-416f-83a3-7e37b1ca4ecb',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Finnley pieces with a Honey finish are constructed from white oak wood with oak veneers; Liath Smoke, Ebony, and Mocha finished pieces are constructed from Finnish pine with oak veneers.',
                                 _id: '67d077f1df50f78cdeb3f2e6',
                              },
                              {
                                 list: 'Craftsman-built pieces feature reinforced mortise-and-tenon joinery for added strength and stability and are complemented by your choice of Carrara marble, white marble, or bluestone tops.',
                                 _id: '67d077f1df50f78cdeb3f2e7',
                              },
                              {
                                 list: 'Wood surfaces are hand-stained with a striking finish and protective lacquer for subtle sheen.',
                                 _id: '67d077f1df50f78cdeb3f2e8',
                              },
                              {
                                 list: 'Zinc-alloy hardware features a brass finish.',
                                 _id: '67d077f1df50f78cdeb3f2e9',
                              },
                              {
                                 list: 'Levelers on the bottom of each leg ensure each piece sits evenly on uneven floors.',
                                 _id: '67d077f1df50f78cdeb3f2ea',
                              },
                              {
                                 list: 'Drawers sit atop under-mounted glides.',
                                 _id: '67d077f1df50f78cdeb3f2eb',
                              },
                           ],
                           content: '',
                           _id: 'ec8b4311-f299-4f8d-b746-2433ca2da7c7',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Our Finnley Bedroom Collection showcases a stunning mixed-material design, inviting elevated style into your bedroom oasis. Hand-finished pine from Finland or white oak wood is luxuriously accented by reeded oak detailing complemented by stone tops. The result is an eclectic-yet-chic bedroom suite that easily fits into the aesthetic of your home.',
                           _id: '6efb461e-b5e3-475a-95a0-00405efaed6c',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d07813df50f78cdeb3f6b2',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d07813df50f78cdeb3f6b3',
                              },
                              {
                                 list: 'Stone pieces may display natural mineral deposits, swirling, joint lines, veining, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d07813df50f78cdeb3f6b4',
                              },
                              {
                                 list: 'Our stone tops feature a protective wax topcoat. To preserve this topcoat, and the integrity of the stone itself, we recommend using a granite and quartz cleaner daily, as well as a granite and quartz polish weekly.',
                                 _id: '67d07813df50f78cdeb3f6b5',
                              },
                              {
                                 list: 'Wax topcoats can have an adverse reaction when in contact with hot items. Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67d07813df50f78cdeb3f6b6',
                              },
                              {
                                 list: 'Wipe up any spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d07813df50f78cdeb3f6b7',
                              },
                              {
                                 list: 'Stone surfaces can be easily cleaned with non-corrosive, non-abrasive cleaning agents designed specifically for stone. Rinse thoroughly and dry immediately.',
                                 _id: '67d07813df50f78cdeb3f6b8',
                              },
                              {
                                 list: 'Avoid using window cleaner or cleaning agents containing lemon, vinegar, or other acids as these could cause damage to stone surfaces.',
                                 _id: '67d07813df50f78cdeb3f6b9',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d07813df50f78cdeb3f6ba',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d07813df50f78cdeb3f6bb',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d07813df50f78cdeb3f6bc',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d07813df50f78cdeb3f6bd',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d07813df50f78cdeb3f6be',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d07813df50f78cdeb3f6bf',
                              },
                           ],
                           content: '',
                           _id: '2a4fbb66-d412-4d43-9631-7008e80e2e03',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 71,
                        depth: 21,
                        height: 35,
                        weight: 349,
                        _id: '67d077d3df50f78cdeb3f10e',
                     },
                  },
                  {
                     name: 'polanco six-drawer dress',
                     price: 66,
                     cancelled_price: 70,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713216/arhaus_images/mikixouhthglzs0bwzl7.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713216/arhaus_images/bcoadbzpunnq3hdsbhrk.avif',
                        _id: '67d06f43df50f78cdeb38a20',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '1c8e586d-ba64-4c3d-8fdf-63427ff997e9',
                     options: [
                        {
                           option: 'Basa natural',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 5,
                              _id: '67d0a68cdf50f78cdeb4d13a',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741727347/arhaus_images/dryyamhdkuuwqtndfr0w.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741727354/arhaus_images/a0r6efvkywxciqyty9kq.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741727353/arhaus_images/yibblerecus8qadx8pwl.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741727350/arhaus_images/fo8fx9nnn2qq60w5i4dl.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '9d45fe62-f047-43f3-8309-c6e4b4aa5e90',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: true,
                           content:
                              'Handcrafted from oyster-cut fragments of salvaged Mexican ash and sustainably harvested European ash burl.\nA hand-applied, reactive finish highlights the natural beauty and tonality of the wood. An acrylic lacquer is then applied for added protection.\nOyster-cut wood may display cracks and other organic features, including scorch marks, water stains, and natural graining, that will not affect the quality or performance of your piece.\nBases are crafted from steel panels left out in the elements to weather, developing a rich patina of dimples and speckles as they age.\nDrawers feature push-to-open functionality.\nThis collection is artisan-crafted from natural materials with hand-applied finishes. Individual pieces may vary in color, pattern, shape, and texture, making each truly unique.',
                           _id: '37ba8c9e-c448-45c4-89fa-ff7a552b691d',
                           lists: [],
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Following heavy storms, our artisan partners in Mexico search the forest for fallen trees of Mexican ash, salvaging as many as they can. Each log is oyster-cut, arranged, and stained by hand, united with fragments of sustainably grown European ash burl to create incredible, mosaic-like surfaces. Bases crafted from naturally oxidized metal add the perfect contrast, together forming the rustic beauty of our remarkable Polanco Collection.',
                           _id: '8aa90fcb-1d56-4f13-a1cc-de3e7f66ffb1',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d0a70bdf50f78cdeb4d938',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d0a70bdf50f78cdeb4d939',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d0a70bdf50f78cdeb4d93a',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best. Metal surfaces should also be dusted regularly with a soft, dry cloth.',
                                 _id: '67d0a70bdf50f78cdeb4d93b',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d0a70bdf50f78cdeb4d93c',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d0a70bdf50f78cdeb4d93d',
                              },
                              {
                                 list: 'As iron is prone to rust, avoid contact with excessive moisture.',
                                 _id: '67d0a70bdf50f78cdeb4d93e',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d0a70bdf50f78cdeb4d93f',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d0a70bdf50f78cdeb4d940',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood or metal surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67d0a70bdf50f78cdeb4d941',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67d0a70bdf50f78cdeb4d942',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d0a70bdf50f78cdeb4d943',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d0a70bdf50f78cdeb4d944',
                              },
                           ],
                           content: '',
                           _id: 'f6be73fd-16ae-46be-b38a-02f42c681a83',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 72,
                        depth: 20,
                        height: 33,
                        weight: 287,
                        _id: '67d0a6bfdf50f78cdeb4d33a',
                     },
                  },
                  {
                     name: 'palmer seven-drawer dresser',
                     price: 30,
                     cancelled_price: 40,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713322/arhaus_images/shnbcfiex1heay8lnhnv.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713322/arhaus_images/g7g1jjn5kwr72ohwndmx.avif',
                        _id: '67d06faddf50f78cdeb3908a',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '581998f4-2f77-4a72-8fcc-d16e6ace51ac',
                     options: [
                        {
                           option: 'stone on ash',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67d148ec5ca2c0b488138ad8',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741768933/arhaus_images/mbwwnolchfoqixo4f52g.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741768935/arhaus_images/zctizmoxwykigxb2akg6.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741768936/arhaus_images/q8zbhi5qbp20tb3d7bpf.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741768936/arhaus_images/ey2jq8gggybutcoc0uql.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '8902588e-ae60-4cd5-89b8-8c8545d8db8b',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Our Palmer Collection pairs a different wood species with each hand-applied finish: Natural Oak, Bahasa Brown, and Camel are made with American oak; Bali Brown is made with Indonesian mango wood; and Stone on Ash is made with solid ash and ash veneers.',
                                 _id: '67d1493f5ca2c0b488138f0c',
                              },
                              {
                                 list: 'Wood finishes are coated with clear lacquer for added protection and subtle sheen.',
                                 _id: '67d1493f5ca2c0b488138f0d',
                              },
                              {
                                 list: 'Parsons-style iron frames are finished with a protective powder coating to prevent rusting.',
                                 _id: '67d1493f5ca2c0b488138f0e',
                              },
                           ],
                           content: '',
                           _id: '810fc751-035c-4069-bb08-29ed38d471db',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Handcrafted by Indonesian artisans, our Palmer Bedroom Collection’s modern, minimalist aesthetic perfectly complements practical functionality with sustainable, natural materials. Hand-stained finishes in rich colors and sleek iron framing highlight organically unique details found in each hand-planed wood plank.',
                           _id: 'd3c60d4a-5aef-4d5f-87e0-0b2e55813907',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d149525ca2c0b48813934d',
                              },
                              {
                                 list: 'Spot-clean using mild soap, water, and a soft undyed cloth as needed. Dry immediately to prevent marks from forming.',
                                 _id: '67d149525ca2c0b48813934e',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d149525ca2c0b48813934f',
                              },
                              {
                                 list: 'Metal surfaces should be dusted regularly with a soft, dry cloth to remove any particles or loose dirt.',
                                 _id: '67d149525ca2c0b488139350',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d149525ca2c0b488139351',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d149525ca2c0b488139352',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d149525ca2c0b488139353',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d149525ca2c0b488139354',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67d149525ca2c0b488139355',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d149525ca2c0b488139356',
                              },
                           ],
                           content: '',
                           _id: 'e3187f75-d5b9-4cee-98c6-bde0bc3e6685',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 63,
                        depth: 18,
                        height: 34,
                        weight: 246,
                        _id: '67d149195ca2c0b488138cf2',
                     },
                  },
                  {
                     name: 'darwyn five-drawer dresser',
                     price: 41,
                     cancelled_price: 45,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713403/arhaus_images/izaa9inj9mue98tzomjm.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713403/arhaus_images/zvsoyxtjcezyv9lxn2tq.avif',
                        _id: '67d06ffedf50f78cdeb396f4',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '51b0eca0-962d-465d-9ccb-5313f6c64ab5',
                     options: [
                        {
                           option: 'ebony',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67d14a135ca2c0b48813a7d9',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769229/arhaus_images/iybbhuaotcjlx1stgcny.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769230/arhaus_images/nmdal3ye5ltbghd837ti.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769232/arhaus_images/prfbbweyoarao2kymlq2.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769231/arhaus_images/pzympp5mh5hsbftnaszt.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '4b6898ed-9ba2-4a70-b8aa-b49109210aec',
                        },
                        {
                           option: 'fawn',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 7,
                              _id: '67d14a5f5ca2c0b48813aa0d',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769305/arhaus_images/lf0hvb0wi2fimgzjaw14.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769306/arhaus_images/mmdfos5yosrrjkmnasdn.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769307/arhaus_images/ffioa25jq6dvyezevv0p.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769307/arhaus_images/ebvcbblcez77zoy8dkhi.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '5c94e2fc-b770-497e-9b9c-cf397c2ee880',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Frames are craftsman-built from solid oak wood and oak veneers with a hand-applied finish and accented with brass drawer pulls.',
                                 _id: '67d14a995ca2c0b48813ae75',
                              },
                              {
                                 list: 'Each piece is hand-stained and finished with lacquer for added protection and subtle sheen.',
                                 _id: '67d14a995ca2c0b48813ae76',
                              },
                              {
                                 list: 'Drawers feature under-mounted, soft-close glides.',
                                 _id: '67d14a995ca2c0b48813ae77',
                              },
                           ],
                           content: '',
                           _id: '3ad7b692-c1d2-4c2a-890b-8ec87a718768',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Celebrating expert craftsmanship, our Darwyn Collection is designed for creating the suite of your dreams. Crafted from solid oak wood and oak veneers with a hand-applied finish, Darwyn’s subtle grooved border and brass handles will add contemporary sophistication to your bedroom.',
                           _id: '86f7c29b-cf30-4e5f-832f-539a9ccf8dae',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d14ab85ca2c0b48813b2ea',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d14ab85ca2c0b48813b2eb',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d14ab85ca2c0b48813b2ec',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best. Metal surfaces should also be dusted regularly with a soft, dry cloth.',
                                 _id: '67d14ab85ca2c0b48813b2ed',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d14ab85ca2c0b48813b2ee',
                              },
                              {
                                 list: 'To prevent rust, avoid contact with excessive moisture.',
                                 _id: '67d14ab85ca2c0b48813b2ef',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d14ab85ca2c0b48813b2f0',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d14ab85ca2c0b48813b2f1',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood or metal surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67d14ab85ca2c0b48813b2f2',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats. Wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d14ab85ca2c0b48813b2f3',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d14ab85ca2c0b48813b2f4',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d14ab85ca2c0b48813b2f5',
                              },
                           ],
                           content: '',
                           _id: '6254b839-6e94-4835-8f2d-6c2602dec33f',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 36,
                        depth: 20,
                        height: 50,
                        weight: 286,
                        _id: '67d14a835ca2c0b48813ac41',
                     },
                  },
                  {
                     name: 'Halsten six-drawer dresser',
                     price: 49,
                     cancelled_price: 52,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713846/arhaus_images/ndomcyhrtmz6z1fh38zm.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713846/arhaus_images/g7cvfp5rmbl3gaglzdjc.avif',
                        _id: '67d071b9df50f78cdeb3a702',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '92f279a5-7203-4b22-a83d-312e3cd5f45e',
                     options: [
                        {
                           option: 'toffee',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67d14bc55ca2c0b48813c166',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769663/arhaus_images/s1nqd8rz5ajkabcwozro.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769664/arhaus_images/s0txjsxosohxn5ywra2o.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769666/arhaus_images/kwzlowwyp6w625bt4v8s.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769665/arhaus_images/nxqmdsjen2fgig5hpzng.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '660e8d99-5c7e-4285-bab3-91b34eb78fc6',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Swirling mappa burl wood is book matched across drawer fronts to create stunning visual interest and texture.',
                                 _id: '67d14c025ca2c0b48813c60a',
                              },
                              {
                                 list: 'Drawers are built using English dovetail joinery on under-mount glides and feature inset finger pulls.',
                                 _id: '67d14c025ca2c0b48813c60b',
                              },
                              {
                                 list: 'This collection is artisan-crafted from natural materials with hand-applied finishes. Individual pieces may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d14c025ca2c0b48813c60c',
                              },
                           ],
                           content: '',
                           _id: '550b8ff8-a960-4f65-b9b1-82ddab03e911',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Transform your bedroom with the swirling wood grains of our Halsten Bedroom Collection. Eye-catching burl wood prized for its unique beauty is hand-finished to illuminate every noteworthy knot and distinctive detail. Resting on a modern platformed plinth, the Halsten combines textured warmth with modern style to create a dynamic statement.',
                           _id: 'dc9479c1-1517-440a-9b4f-29d93466b970',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d14c215ca2c0b48813cfea',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d14c215ca2c0b48813cfeb',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d14c215ca2c0b48813cfec',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d14c215ca2c0b48813cfed',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d14c215ca2c0b48813cfee',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d14c215ca2c0b48813cfef',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d14c215ca2c0b48813cff0',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d14c215ca2c0b48813cff1',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d14c215ca2c0b48813cff2',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d14c215ca2c0b48813cff3',
                              },
                           ],
                           content: '',
                           _id: '6d21095a-24f2-4519-bbb5-ed5ad0b20ead',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 36,
                        depth: 20,
                        height: 50,
                        weight: 231,
                        _id: '67d14beb5ca2c0b48813c3b8',
                     },
                  },
                  {
                     name: 'Ashbrook  six-drawer dresser',
                     price: 49,
                     cancelled_price: 53,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713915/arhaus_images/wz3u2sl65sma3vq8lmpz.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741713915/arhaus_images/wpp6dnrzm2gioeyqqnyn.avif',
                        _id: '67d071fedf50f78cdeb3ad6c',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '5da853a2-62a6-4c43-9ba6-98f643503ac0',
                     options: [
                        {
                           option: 'mocha',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67d14cea5ca2c0b48813d9a0',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769955/arhaus_images/wk8mp3dwokhyyzveyxmk.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769957/arhaus_images/bagtq5wmcb6qjwgucqva.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769958/arhaus_images/m994n6ncfxcuybihr2to.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741769958/arhaus_images/rcy2xvavhfrmsg7cxg4m.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '1bcbcf84-9b84-49f9-a75f-d01a28583e70',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Craftsman-built from a blend of oak wood and veneers with a hand-applied mocha finish.',
                                 _id: '67d14d255ca2c0b48813de78',
                              },
                              {
                                 list: 'Features white Carrara marble inset tops and brass drawer pulls.',
                                 _id: '67d14d255ca2c0b48813de79',
                              },
                              {
                                 list: 'Drawers feature under-mounted, soft-close glides.',
                                 _id: '67d14d255ca2c0b48813de7a',
                              },
                              {
                                 list: 'Marble tops are finished with a clear protective top coat.',
                                 _id: '67d14d255ca2c0b48813de7b',
                              },
                              {
                                 list: 'Marble pieces may display natural mineral deposits, swirling, joint lines, veining, or other features that will add one-of-a-kind character to your piece without affecting its quality or performance.',
                                 _id: '67d14d255ca2c0b48813de7c',
                              },
                           ],
                           content: '',
                           _id: 'ff2a5122-05a5-45b3-9873-71677961f42d',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Our Ashbrook Collection is a sophisticated blend of both form and function. Crafted from solid oak and veneers, Ashbrook’s striking silhouettes are beautifully contrasted by inset Carrara stone tops and brass hardware. Offering ample storage for any bedroom, Ashbrook adds timeless elegance and modern convenience.',
                           _id: '09f5b605-3758-4e93-894e-90bf173ea440',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d14d465ca2c0b48813e8a5',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d14d465ca2c0b48813e8a6',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d14d465ca2c0b48813e8a7',
                              },
                              {
                                 list: 'Stone pieces may display natural mineral deposits, swirling, joint lines, veining, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d14d465ca2c0b48813e8a8',
                              },
                              {
                                 list: 'Our stone tops feature a protective wax top coat. To preserve this top coat, and the integrity of the stone itself, we recommend using a granite and quartz cleaner daily, as well as a granite and quartz polish weekly. We also recommend using a granite sealer biannually.',
                                 _id: '67d14d465ca2c0b48813e8a9',
                              },
                              {
                                 list: 'Wax top coats can have an adverse reaction when in contact with hot items. To avoid this, we recommend placing hot items on non-porous coasters or placemats.',
                                 _id: '67d14d465ca2c0b48813e8aa',
                              },
                              {
                                 list: 'Spot-clean using a damp cloth, mild soap, and water. Use a towel to dry.',
                                 _id: '67d14d465ca2c0b48813e8ab',
                              },
                              {
                                 list: 'Occasionally clean using cleaning agents specifically designed for stone.',
                                 _id: '67d14d465ca2c0b48813e8ac',
                              },
                              {
                                 list: 'Stone surfaces can be easily cleaned with non-corrosive, non-abrasive cleaning agents. Rinse thoroughly and dry immediately.',
                                 _id: '67d14d465ca2c0b48813e8ad',
                              },
                              {
                                 list: 'Avoid using window cleaner or cleaning agents containing lemon, vinegar, or other acids as these could cause damage to stone surfaces.',
                                 _id: '67d14d465ca2c0b48813e8ae',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d14d465ca2c0b48813e8af',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d14d465ca2c0b48813e8b0',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d14d465ca2c0b48813e8b1',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d14d465ca2c0b48813e8b2',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood or stone surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67d14d465ca2c0b48813e8b3',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats.',
                                 _id: '67d14d465ca2c0b48813e8b4',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d14d465ca2c0b48813e8b5',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d14d465ca2c0b48813e8b6',
                              },
                           ],
                           content: '',
                           _id: '1f0e45b0-a3a2-4a89-ab61-47ab77d4aae6',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 74,
                        depth: 22,
                        height: 36,
                        weight: 245,
                        _id: '67d14d0a5ca2c0b48813dc0c',
                     },
                  },
                  {
                     name: 'Astor five-drawer dresser',
                     price: 47,
                     cancelled_price: 50,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714024/arhaus_images/dhjuniyx1dzzsb1i0prm.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714024/arhaus_images/vmgyaru4ipyuoejqow7i.avif',
                        _id: '67d0726cdf50f78cdeb3b3d6',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: 'b7e4a724-81e6-4857-9dea-c102deae78ed',
                     options: [
                        {
                           option: 'chestnut',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 8,
                              _id: '67d14dcc5ca2c0b48813f84d',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770181/arhaus_images/poyrfbx6jg787mtu8mp2.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770183/arhaus_images/egdx8o5vzf7wqdbdqcsz.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770184/arhaus_images/tqrr4zimpltuwohy5j2c.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770184/arhaus_images/aexgbmki1jyhln1ck2uw.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '703f01ef-ca7f-4f19-acbf-ac1d25dad518',
                        },
                        {
                           option: 'honey',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 9,
                              _id: '67d14e225ca2c0b48813fae7',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770253/arhaus_images/ih0j0qxglgxpypfvecdh.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770254/arhaus_images/sqleccaegtpvibrebmr9.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770270/arhaus_images/z80oxwv1pyxgqjpdeh7a.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770256/arhaus_images/qmixejj6wp5z2i0rnsut.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '2f83990b-3213-4a43-9846-6acfd1f249e6',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from oak veneers with solid oak wood reeding detailing.',
                                 _id: '67d14e5f5ca2c0b48814001b',
                              },
                              {
                                 list: 'Case pieces feature inset natural marble stone tops and stone pulls.',
                                 _id: '67d14e5f5ca2c0b48814001c',
                              },
                              {
                                 list: 'This collection is artisan-crafted from natural materials and finishes. Individual pieces will vary in color, pattern, and texture, making each truly unique.',
                                 _id: '67d14e5f5ca2c0b48814001d',
                              },
                           ],
                           content: '',
                           _id: '726ca551-1442-418d-9e7a-7b7643d35cfb',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Celebrating craftsmanship with chic style, our Astor Collection features gorgeous reeded detailing and inset stone tops and pulls on case pieces. Offering timeless sophistication with its uniquely crafted curves, Astor creates a suite designed for dreaming.',
                           _id: '16acb442-a437-45b6-8571-dd79a3d03b37',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d14e835ca2c0b488140aaf',
                              },
                              {
                                 list: 'Artisan-crafted furnishings made from natural wood with hand-applied finishes may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d14e835ca2c0b488140ab0',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d14e835ca2c0b488140ab1',
                              },
                              {
                                 list: 'Stone pieces may display natural mineral deposits, swirling, joint lines, veining, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d14e835ca2c0b488140ab2',
                              },
                              {
                                 list: 'Stone surfaces can be wiped down using a damp cloth, mild soap, and warm water. Use a second damp cloth to remove any soap residue and then a clean towel to dry.',
                                 _id: '67d14e835ca2c0b488140ab3',
                              },
                              {
                                 list: 'Avoid using window cleaner or cleaning agents containing lemon, vinegar, or other acids as these could cause damage to stone surfaces.',
                                 _id: '67d14e835ca2c0b488140ab4',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best. For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d14e835ca2c0b488140ab5',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d14e835ca2c0b488140ab6',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d14e835ca2c0b488140ab7',
                              },
                              {
                                 list: 'When assembling new wood furnishings, avoid overtightening hardware as this could cause cracking.',
                                 _id: '67d14e835ca2c0b488140ab8',
                              },
                              {
                                 list: 'Never place hot dishes directly on wood or stone surfaces as this could cause scorching. Similarly, prolonged use of hot electrical equipment may also cause scorching.',
                                 _id: '67d14e835ca2c0b488140ab9',
                              },
                              {
                                 list: 'Protect surfaces from incidental marks (like scratching, scorching, and water marks) by using coasters, trivets, felt pads, and non-plastic mats. Wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d14e835ca2c0b488140aba',
                              },
                              {
                                 list: 'Lift furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d14e835ca2c0b488140abb',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d14e835ca2c0b488140abc',
                              },
                           ],
                           content: '',
                           _id: '96658185-8ed4-43dc-9266-e51c51ba3a1c',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 47,
                        depth: 20,
                        height: 50,
                        weight: 289,
                        _id: '67d14e485ca2c0b48813fd81',
                     },
                  },
                  {
                     name: 'Olina six-drawer ',
                     price: 35,
                     cancelled_price: 40,
                     views: {
                        first_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714343/arhaus_images/lf4tjtus8pqy6gp67daf.avif',
                        second_view:
                           'https://res.cloudinary.com/dycw73vuy/image/upload/v1741714343/arhaus_images/tfxxkseaabxwhtptoirb.avif',
                        _id: '67d073abdf50f78cdeb3c3e4',
                     },
                     in_stock: true,
                     fabric: false,
                     leather: false,
                     _id: '721b5c5f-0d3a-437b-b52e-5479d4d535bd',
                     options: [
                        {
                           option: 'ebony',
                           stock: {
                              in_stock: true,
                              when_in_stock: '',
                              stock_count: 6,
                              _id: '67d14f0b5ca2c0b4881415a9',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770497/arhaus_images/ceindnjlseeuxynvxncc.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770499/arhaus_images/ln1aeonkqcjfpal2cxps.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770503/arhaus_images/g1pdedfm2nwffroj34zo.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770500/arhaus_images/u2xppk4yj53aqy5vhaba.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '15f9a401-f452-4426-a1ad-d986015403e7',
                        },
                        {
                           option: 'mocha',
                           stock: {
                              in_stock: false,
                              when_in_stock: '2025-10-21',
                              stock_count: 0,
                              _id: '67d14f585ca2c0b488141865',
                           },
                           option_image:
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770577/arhaus_images/s1weaclxpgow1jf2jimr.avif',
                           previews: [
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770579/arhaus_images/rxawz27juojypdyltlw4.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770580/arhaus_images/ucvsspsgc2muyfhn7vhq.webp',
                              'https://res.cloudinary.com/dycw73vuy/image/upload/v1741770580/arhaus_images/qbksgkf4lggqu5zqkijg.webp',
                           ],
                           tags: [],
                           features: '',
                           care: '',
                           fabrics: '',
                           _id: '3f8027b3-772f-4f43-a247-b7c858d03d8e',
                        },
                     ],
                     features: [
                        {
                           header: 'details',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Crafted from a blend of solid oak wood and oak veneers with textured raffia drawer fronts.',
                                 _id: '67d150085ca2c0b48814233e',
                              },
                              {
                                 list: 'Each piece is finished with a topcoat for added protection and subtle sheen.',
                                 _id: '67d150085ca2c0b48814233f',
                              },
                              {
                                 list: 'Drawers sit atop under-mount glides and feature brass drawer pulls.',
                                 _id: '67d150085ca2c0b488142340',
                              },
                              {
                                 list: 'This collection is artisan-crafted from natural materials with hand-applied finishes. Individual pieces may vary in color, pattern, shape, and texture, making each truly unique.',
                                 _id: '67d150085ca2c0b488142341',
                              },
                           ],
                           content: '',
                           _id: '5b1de764-b965-4c3e-9263-dd7fff4772e0',
                        },
                        {
                           header: 'story',
                           paragraph: true,
                           content:
                              'Our Olina Bedroom Collection brings effortless versatility to your bedroom with its harmonious blend of mixed materials and transitional design. Crafted with textured raffia drawer fronts, Olina’s timeless appeal blends seamlessly with a wide range of bedroom aesthetics.',
                           _id: 'a717c46c-0fdf-4ca9-b4f7-e52910d13227',
                           lists: [],
                        },
                        {
                           header: 'care',
                           paragraph: false,
                           lists: [
                              {
                                 list: 'Arhaus collections are crafted by artisans from around the world and are expertly designed to withstand everyday use. However, as even the best-made furnishings and décor are not indestructible, normal wear and tear will reflect use and care.',
                                 _id: '67d1501f5ca2c0b4881428c8',
                              },
                              {
                                 list: 'Arhaus finishes may change over time, and natural wood may display small splits, knots, joint lines, or other features that will add character to your piece without affecting its quality or performance.',
                                 _id: '67d1501f5ca2c0b4881428c9',
                              },
                              {
                                 list: 'Furniture made from natural wood may move slightly as temperature and humidity cause the wood to expand and contract. This is normal and should be expected from season to season.',
                                 _id: '67d1501f5ca2c0b4881428ca',
                              },
                              {
                                 list: 'Occasionally dust lacquered wood surfaces with a soft, dry cloth and non-wax furniture polish to keep finishes looking their best.',
                                 _id: '67d1501f5ca2c0b4881428cb',
                              },
                              {
                                 list: 'For best results, follow use instructions for all cleaning products carefully. Do not over apply.',
                                 _id: '67d1501f5ca2c0b4881428cc',
                              },
                              {
                                 list: 'To prevent moisture damage (like water rings), wipe up spills immediately with a soft, dry, undyed cloth.',
                                 _id: '67d1501f5ca2c0b4881428cd',
                              },
                              {
                                 list: 'Do not clean using abrasives, harsh, corrosive chemicals, or care products containing ammonia or silicone, as these could damage finishes and surfaces.',
                                 _id: '67d1501f5ca2c0b4881428ce',
                              },
                              {
                                 list: 'Avoid placing indoor furnishings in direct sunlight or near sources of heat or moisture, as this could cause cracking or changes in finishes.',
                                 _id: '67d1501f5ca2c0b4881428cf',
                              },
                              {
                                 list: 'Lift wood furniture when moving. Do not drag, as this could loosen joinery and damage your piece.',
                                 _id: '67d1501f5ca2c0b4881428d0',
                              },
                              {
                                 list: 'Ensure your furniture sits in a level position to ensure the longevity of your piece, as frames tend to warp if standing on an uneven surface.',
                                 _id: '67d1501f5ca2c0b4881428d1',
                              },
                           ],
                           content: '',
                           _id: '96b9fef4-081e-4bd9-87dd-cce5ff9ca354',
                        },
                     ],
                     finish: true,
                     dimensions: {
                        width: 36,
                        depth: 20,
                        height: 50,
                        weight: 242,
                        _id: '67d14f875ca2c0b488141b21',
                     },
                  },
               ],
            },
         ],
      },
      createdAt: '2025-03-11T10:00:43.113Z',
      updatedAt: '2025-03-12T09:19:52.387Z',
      __v: 109,
   },
];
