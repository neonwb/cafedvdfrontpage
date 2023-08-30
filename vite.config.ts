import path from "path";
import legacy from "@vitejs/plugin-legacy";
import { UserConfig } from "vite";

console.log(process.env.TARGET);

/** @type {import('vite').UserConfig} */
export default {
  //Dev
  root: path.resolve(__dirname, process.env.TARGET),
  //Check build
  server: {
    port: 5555,
    hot: true,
  },
  plugins: [
    // legacy({
    //   targets: ["ie >= 11"],
    //   additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    // }),
  ],
  build: {
    outDir: path.resolve(__dirname, "dist"),
    cssMinify: false,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: ({ name }) => `asset/${name}/[name]-[hash].js`,
        chunkFileNames: "asset/[name]/[name]-[hash].js",
        assetFileNames: ({ name, source, type }) => {
          if (name) {
            const names = name.split(".");
            if (names.length > 0 && names[names.length - 1] === "css") {
              return "asset/[name]/[name]-[hash].[ext]";
            }
            if (names.length > 0 && names[names.length - 1] === "html") {
              const output = name.replace("src/", "");
              console.log(output);
              return output;
            }
          }
          return "asset/[name]-[hash].[ext]";
        },
      },
      input: {
        address: path.resolve(__dirname, "src/pages/signup/address.html"),
        basic: path.resolve(__dirname, "src/pages/signup/basic.html"),
        credit: path.resolve(__dirname, "src/pages/signup/credit.html"),
        plan: path.resolve(__dirname, "src/pages/signup/plan.html"),
        main: path.resolve(__dirname, "src/pages/main.html"),
        movie: path.resolve(__dirname, "src/pages/movie.html"),
        // new_popular: path.resolve(__dirname, "src/pages/new_popular.html"),
        // queue: path.resolve(__dirname, "src/pages/queue.html"),
        search: path.resolve(__dirname, "src/pages/search.html"),
        signin: path.resolve(__dirname, "src/pages/signin.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@scripts": path.resolve(__dirname, "./src/scripts/"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@types": path.resolve(__dirname, "./src/types/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Global bootstrap
        // https://github.com/twbs/icons/issues/1381
        additionalData: `
          $spacer: 1rem;
          $spacers: (
            0: 0,
            1: $spacer * .25,
            2: $spacer * .5,
            3: $spacer,
            4: $spacer * 1.5,
            5: $spacer * 3,
            c1: $spacer * 2.2,
          );
          @import "bootstrap/scss/bootstrap";
          @import 'bootstrap-icons/font/bootstrap-icons.css';
        `,
      },
    },
  },
} as UserConfig;
