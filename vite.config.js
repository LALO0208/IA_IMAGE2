import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/IA_IMAGE2/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@openai/api'],
    },
  },
})

