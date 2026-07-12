import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // manualChunks only applies to the client build. In the SSR build react is
    // external, so manual-chunking it errors — leave SSR output unchunked.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom', 'react-router-dom'],
              'vendor-motion': ['framer-motion'],
              'vendor-ui': ['radix-ui', 'lucide-react', 'class-variance-authority', 'clsx', 'tailwind-merge'],
            },
          },
        },
  },
}))
