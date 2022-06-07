import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
    },
    minify: true,
  },
});
