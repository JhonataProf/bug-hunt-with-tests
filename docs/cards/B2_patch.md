### B2 – CORS configurável (adaptativa)

**Problema**: navegador bloqueia requisições (CORS).

**Patch (server.ts):**
```ts
import cors from 'cors'
app.use(cors({
  origin: process.env.WEB_URL ?? 'http://localhost:5173',
  methods: ['GET','POST','PATCH']
}))
```