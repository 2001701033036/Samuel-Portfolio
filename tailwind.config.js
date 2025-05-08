/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(85 81 227)',
        'secondary':'#2b2d77'

        
      }
    },
    fontFamily :{
      'hero-font':'Sriracha'
    }
  },
  plugins: [],
}
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add your file paths here
  ],
  theme: {
    extend: {
      animation: {
        bounceSlow: 'bounceSlow 4s ease-in-out infinite', // Define the custom animation
        bounceReverse: 'bounceSlow 5s ease-in-out infinite', // Define the custom animation

      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(-30)' },
          '50%': { transform: 'translateY(-20px)' }, // Adjust the height of the bounce
        },
        bounceReverse: {
          '0%, 50%': { transform: 'translateY(30)' },
          '100%': { transform: 'translateY(90px)' }, // Adjust the height of the bounce
        },
      },
    },
  },
}

