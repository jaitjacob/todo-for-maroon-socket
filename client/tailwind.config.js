// tailwind.config.js (ESM)
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // React source files
    './components/**/*.{html,js,ts,jsx,tsx}' // Reusable components
  ],
  // Add other configurations below

  theme: {
    extend: {
      colors: {
        primary: '#ff6767'
      }
    }
  }
};
