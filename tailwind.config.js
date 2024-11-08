/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('../../public//images/banner-bg.png')",
        'download-bg': "linear-gradient(90deg, #AC2BBD 0.69%, #C6309C 51.52%, #E23984 96.64%)",
        'banner-shade': "linear-gradient(180deg, rgba(17, 18, 48, 0) 2.86%, rgba(17, 18, 48, 0) 16.17%, #111230 64.41%)",
      },
      boxShadow: {
        'brand-shadow': 'linear-gradient(90deg, #AC2BBD 0.69%, #C6309C 51.52%, #E23984 96.64%)',
        'user-shadow': '0px 4.72844px 16.5495px 11.8211px rgba(0, 0, 0, 0.02)',
        'banner-shadow': '6px 10px 5px rgba(0, 0, 0, 0.01), 3px 6px 4px rgba(0, 0, 0, 0.03), 1px 3px 3px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.05)',
    },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '769px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1281px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};



