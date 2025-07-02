import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows access via localhost
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // 👈 required for live reload to work in Docker on Windows
    },
  },
})
