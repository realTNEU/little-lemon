import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss({
    // Inline Tailwind configuration
    config: {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            greenDark: '#89AC46',
            greenLight: '#D3E671',
            yellowLight: '#F8ED8C',
            pinkLight: '#FF9899',
          },
        },
      },
      plugins: [],
    },
  }),],
})
