import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    // This ensures proper JSX handling
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin']
    }
  })],
  server: {
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})