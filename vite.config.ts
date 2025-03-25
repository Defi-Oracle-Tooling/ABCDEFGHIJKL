import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom plugin to set Cache-Control and security headers.
const securityHeadersPlugin = () => ({
  name: 'security-headers',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Set Cache-Control header to cache responses for 1 hour.
      res.setHeader('Cache-Control', 'public, max-age=3600');
      // Set X-Content-Type-Options header to prevent MIME type sniffing.
      res.setHeader('X-Content-Type-Options', 'nosniff');
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), securityHeadersPlugin()]
});
