import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // 개발용 Server, 운영 시 무력화
    port: 8099,
    // 통신을 진행하는 경우 별도 설정이 들어가야할 때
    proxy: {
      // 해당 (정규)표현식으로(/fallback) 시작하는 통신일 경우
      "^/fallback": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
    },
  },
});
