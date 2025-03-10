import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const srcPath = path.join(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(srcPath),
      },
    ],
  },
});
