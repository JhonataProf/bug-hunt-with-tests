import "dotenv/config";
import express from "express";
import cors from "cors";
import { taskRoutes } from "./routes/tasks.js";
import { errorHandler } from "./middlewares/error.js";

const app = express();

// ✅ B1: JSON middleware
app.use(express.json());

// ✅ B2: CORS com origin/métodos configurados
app.use(cors({
  origin: process.env.WEB_URL ?? "http://localhost:5173",
  methods: ["GET","POST","PATCH"]
}));

taskRoutes(app);

app.use(errorHandler);

const port = Number(process.env.PORT) || 3333;
app.listen(port, () => {
  console.log(`[api] on http://localhost:${port}`);
});