import { defineConfig } from 'vite'

export default defineConfig({
  base: "/GathSession/",
  server: {
    watch: {
      usePolling: true
    }
  }
})