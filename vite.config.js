import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'react-js-jsx-and-css-mastering-front-end-development-BOSSY254-LEVI',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
})
