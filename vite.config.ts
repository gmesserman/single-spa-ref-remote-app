import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'product0App',
      exposes: {
        './App': {
          import: './src/main.tsx',
          name: 'main'
        }
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: './src/main.tsx'  // Explicitly set the entry point
      },
      output: {
        format: 'system',
        entryFileNames: '[name].js'
      },
      preserveEntrySignatures: 'strict'
    }
  },
  server: {
    port: 4173,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});
