import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// O caminho para os estáticos no build da Vercel
const staticPath = path.resolve(__dirname, "..", "dist", "public");

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Portfolio API is running" });
});

// Fallback para o index.html (SPA routing)
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
