### B8 – Tipos fortes (preventiva)

**Problema**: aceita tipos inválidos.

**Patch (types.ts e NewTaskForm.tsx):**
```ts
export type Task = { id: string; title: string; done: boolean }
```
E validar string não vazia no form.