// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
})
