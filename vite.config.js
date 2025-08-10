import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/shopping-cart/' : '/',
  server: {
    historyApiFallback: true
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './tests/setup.js',
  },
}))

