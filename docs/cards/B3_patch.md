### B3 – Paginação correta (corretiva)

**Problema**: página 1 retorna vazia.

**Patch (routes/tasks.ts):**
```ts
const page = Math.max(1, Number(req.query.page) || 1)
const limit = Math.min(50, Number(req.query.limit) || 10)
const skip = (page - 1) * limit
const data = db.tasks.slice(skip, skip + limit)
```