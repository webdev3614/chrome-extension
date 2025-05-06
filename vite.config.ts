import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets:[
        {
          src:'public/manifest.json',
          dest:'.'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    } as AliasOptions
  },
  build: {
    outDir:'build',
    rollupOptions:{
      input: {
        main:'./index.html'
      }
    }
  }
})
