import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      twoxl: "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        textColor: "",
      },
    },
  },
  plugins: [
    tailwindcss(), react()],
})
