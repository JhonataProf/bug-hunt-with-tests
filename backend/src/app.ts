import "dotenv/config";
import express from "express";
import cors from "cors";
import { taskRoutes } from "./routes/tasks.js";
import { errorHandler } from "./middlewares/error.js";

export const app = express();

// BUG B1: faltando app.use(express.json())

// BUG B2: CORS genérico (sem origin configurado)
app.use(cors());

taskRoutes(app);

app.use(errorHandler);