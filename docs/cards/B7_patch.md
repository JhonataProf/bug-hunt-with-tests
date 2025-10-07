### B7 – URL via .env (adaptativa)

**Problema**: API fixa no código.

**Patch (api.ts):**
```ts
const API = import.meta.env.VITE_API_URL || 'http://localhost:3333'
```