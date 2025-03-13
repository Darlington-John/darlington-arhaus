import type { Config } from 'tailwindcss';

const config: Config = {
   darkMode: 'class',
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      colors: {
        brown: '#341c0f',
lightBrown: '#89331c',
         grey: '#707070',
         lightGrey: '#EAEAEC',
         lighterGrey: '#F8F8F8',
         lightestGrey: '#F1F1F4',
         greyGreen: '#F9FAFB',
         transparent: '#00000000',
         darkGrey: '#222222',
         dimGrey: '#808080',
         green: '#1e372f',
         lightGreen: '#70ccad',
         dimGreen: '#EFFCF6',
         softGreen: '#2D867D',
         black: '#000',
         white: '#fff',
         red: '#FF4D4D',
darkRed: '#89331c'
      },

      screens: {
         '4xl': '1600px',
         '3xl': { max: '1535px' },

         '2xl': { max: '1400px' },
         xl: { max: '1279px' },

         lg: { max: '1023px' },

         md: { max: '767px' },

         sm: { max: '639px' },
         xs: { max: '575px' },
         dxs: { max: '500px' },
         '2xs': { max: '400px' },
      },
      extend: {
         backgroundImage: {
            'custom-gradient':
               'linear-gradient(180deg, #915BE9 0%, #38048B 100%)',
         },
         boxShadow: {
            custom: '0px 12px 16px 0px rgba(0, 0, 0, 0.10)',
         },
      },
   },
   plugins: [],
};
export default config;
