module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6B21A8', // spiritual deep purple
        accent: '#06B6D4',
        glass: 'rgba(255,255,255,0.06)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #6b21a8 100%)'
      }
    }
  },
  plugins: []
}
