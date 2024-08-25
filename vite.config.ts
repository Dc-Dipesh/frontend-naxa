import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: '/nepal-geojson/',
  build: {
    outDir: 'docs',
  },
  optimizeDeps: {
    include: ['@react-leaflet/core', '@react-leaflet/map', '@react-leaflet/tile-layer', '@react-leaflet/vector-tile-layer']
  }

  
})
