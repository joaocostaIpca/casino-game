import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/joaocostaIpca/casino-game", // Substitua pelo nome do repositório no GitHub
});
