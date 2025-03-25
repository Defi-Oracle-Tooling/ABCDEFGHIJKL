import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom plugin to set Cache-Control header.
const cacheControlPlugin = () => ({
  name: 'cache-control',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Set Cache-Control header to cache responses for 1 hour.
      res.setHeader('Cache-Control', 'public, max-age=3600');
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), cacheControlPlugin()]
});
