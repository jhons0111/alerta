import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  //Root path
  root: 'sources',
  server: {
    open: '/templates/index.html',
  },
  //Options for build
  build: {
    //Entry point and output filename
    lib: {
      entry: resolve(__dirname, 'src/js/app.js'),
      name: 'Mainscript',
      fileName: 'js/mainscript'
    },
    //Output name for css
    rollupOptions: {
      output: {
        assetFileNames: "css/main.css",
      },
    },
    //Other options
    sourcemap: true,
    devtool: 'source-map',
    target: "es2015",
    outDir: '../dist/',
    emptyOutDir: false,
    watch: true,
    manifest: true,
      // minifying switch
      minify: true,
      write: true
  },
  resolve: {
    alias: {
      $fonts: resolve('./dist/fonts')
    }
  }
});