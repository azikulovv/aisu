import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3040/api",
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/theme.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: false,
});
