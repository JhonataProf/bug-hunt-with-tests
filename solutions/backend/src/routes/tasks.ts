import type { Express, Request, Response } from "express";
import { db } from "../lib/db.js";

export function taskRoutes(app: Express) {
  app.get("/tasks", (req: Request, res: Response) => {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(50, Number(req.query.limit) || 10);
    const skip = (page - 1) * limit; // ✅ corrigido
    const data = db.tasks.slice(skip, skip + limit);
    res.json({ page, limit, total: db.tasks.length, data });
  });

  app.post("/tasks", (req: Request, res: Response) => {
    const title = String(req.body?.title || "").trim();
    if (!title) return res.status(400).json({ error: "title é obrigatório" });
    const id = "t" + (db.tasks.length + 1);
    const task = { id, title, done: false };
    db.tasks.push(task);
    res.status(201).json(task);
  });

  app.patch("/tasks/:id", (req: Request, res: Response) => {
    const id = String(req.params.id);
    const task = db.tasks.find(t => t.id === id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    task.done = Boolean(req.body?.done);
    return res.status(200).json(task);
  });
}