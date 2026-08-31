/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Crestara Luxury Palette from brand guidelines
        "champagne-beige": "#F2E5C6",
        "sand-gold": "#F2D9A0",
        "burgundy": "#75162D",
        "dark-maroon": "#560B18",
        "deep-wine": "#3B010B",

        // Semantic mappings
        "primary": "#3B010B", // Deep Wine
        "primary-light": "#560B18", // Dark Maroon
        "primary-accent": "#75162D", // Burgundy
        "secondary": "#F2D9A0", // Sand Gold
        "secondary-light": "#F2E5C6", // Champagne Beige
        
        "background": "#FAF7F2", // Luxury warm off-white
        "surface": "#FFFFFF",
        "surface-muted": "#F5EFE6",
        "on-surface": "#1F1315",
        "on-surface-muted": "#5C4A4D",
        
        "gold-accent": "#D4AF37",
        "gold-light": "#F9F1DC",
        "emerald-accent": "#0F5132",
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "sm": "0.25rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "full": "9999px"
      },
      fontFamily: {
        "sans": ["Montserrat", "Inter", "system-ui", "sans-serif"],
        "display": ["Montserrat", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-xl": ["Montserrat", "sans-serif"],
        "headline-lg": ["Montserrat", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "headline-sm": ["Montserrat", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
      },
      boxShadow: {
        "luxury": "0 10px 30px -10px rgba(59, 1, 11, 0.15)",
        "luxury-lg": "0 20px 40px -15px rgba(59, 1, 11, 0.25)",
        "gold": "0 8px 25px -5px rgba(242, 217, 160, 0.4)",
      }
    },
  },
  plugins: [],
};
