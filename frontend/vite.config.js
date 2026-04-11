import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  // Access .env
  const env = loadEnv(mode, process.cwd(), '');
  return {
  plugins: [react()],
  server: 
  {
    proxy: 
    {
      '/api': 
      {
        // Targes the .env var
        target:env.BACKEND_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  };
});