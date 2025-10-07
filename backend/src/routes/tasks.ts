import type { Express, Request, Response } from "express";
import { db } from "../lib/db.js";

export function taskRoutes(app: Express) {
  app.get("/tasks", (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    // BUG B3: off-by-one na paginação
    const skip = page * limit; // errado
    const data = db.tasks.slice(skip, skip + limit);
    res.json({ page, limit, total: db.tasks.length, data });
  });

  app.post("/tasks", (req: Request, res: Response) => {
    // BUG B1: req.body ficará undefined sem express.json()
    const title = req.body?.title;
    if (!title) return res.status(400).json({ error: "title é obrigatório" });
    const id = "t" + (db.tasks.length + 1);
    const task = { id, title, done: false };
    db.tasks.push(task);
    res.status(201).json(task);
  });

  app.patch("/tasks/:id", (req: Request, res: Response) => {
    // BUG B4: não valida a existência antes de atualizar
    const id = String(req.params.id);
    const done = Boolean(req.body?.done);
    const idx = db.tasks.findIndex(t => t.id === id);
    if (idx === -1) {
      // retorna 200 mesmo sem existir (errado)
      return res.json({ id, done });
    }
    db.tasks[idx].done = done;
    res.json(db.tasks[idx]);
  });
}