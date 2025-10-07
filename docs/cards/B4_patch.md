### B4 – PATCH valida ID (corretiva/preventiva)

**Problema**: retorna 200 para ID inexistente.

**Patch (routes/tasks.ts):**
```ts
const id = String(req.params.id)
const task = db.tasks.find(t => t.id === id)
if (!task) return res.status(404).json({ error: 'Task not found' })
task.done = Boolean(req.body.done)
return res.status(200).json(task)
```