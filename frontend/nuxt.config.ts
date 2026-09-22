import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  css: ["~/assets/css/main.css", "~/assets/css/theme.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: false,
});
