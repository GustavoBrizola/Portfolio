// @ts-ignore
import { defineConfig, loadEnv} from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  // Allow use of .env here
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },

    // Public Endpoint
    // https://vite.dev/guide/static-deploy
    base: '/Portfolio/',

    // Server dev port
    // https://vite.dev/config/server-options
    server: { 
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 3000,
      strictPort: true,
      //host: '',
      //open: true || './index.html',
      proxy: {

      },
    },

    resolve: 
    {
      alias: 
      {
        // Add absolute paths here (e.g.)
        //'pathname': path.resolve(__dirname, './path/to/folder'),
        // import { function, ... } from 'pathname/path/to/file'
        'components': path.resolve(__dirname, './src/components'),
        'json': path.resolve(__dirname, './src/json'),
        'scripts': path.resolve(__dirname, './src/scripts'),
        'site': path.resolve(__dirname, './src/site')
      },
    },
  }
})
