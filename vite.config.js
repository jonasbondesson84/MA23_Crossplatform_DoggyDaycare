import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "MA23_Crossplatform_DoggyDaycare",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-icons/md'], // Lägg till detta om du vill exkludera modulen från paketet
    },
  },
})
