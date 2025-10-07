### B1 – JSON middleware (corretiva)

**Problema**: `req.body` vem `undefined` no POST.

**Patch (server.ts):**
```ts
// Adicionar antes das rotas
app.use(express.json())
```