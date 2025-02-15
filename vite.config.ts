import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [biomePlugin()],
      base: "/interactions/",
      server: {
        // Expose for local debug on phones
        host: "0.0.0.0",
      },
    };
  }

  return {
    plugins: [biomePlugin()],
    base: "/interactions/",
  };
});
