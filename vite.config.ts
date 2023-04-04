/// <reference types="vitest" />
import { defineConfig } from 'vite';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup-tests.js',
    coverage: {
      provider: 'c8', // or 'c8'
      reporter: ['text', 'html'],
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), eslintPlugin()],
  test: vitestConfig.test,
});
