import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { aiRecommend } from "./routes/ai"; // updated import

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check or ping endpoint
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  // Example demo route
  app.get("/api/demo", handleDemo);

  // AI recommendation route
  app.post("/api/ai/recommend", aiRecommend);

  return app;
}

// Optional: start server if run directly
if (require.main === module) {
  const port = process.env.PORT ?? 3000;
  const server = createServer();
  server.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}
