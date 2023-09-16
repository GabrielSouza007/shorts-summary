import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite config options...

  build: {
    // Define environment variables for the build process
    rollupOptions: {
      output: {
        // Example: Pass the environment variable to the bundle
        globals: {
          VITE_BASE_URL: 'http://localhost:3333',
        },
      },
    },
  },
});