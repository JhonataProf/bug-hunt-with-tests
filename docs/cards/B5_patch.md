### B5 – useEffect com deps (corretiva)

**Problema**: re-render/requests em loop.

**Patch (App.tsx):**
```tsx
useEffect(() => {
  load(1)
}, []) // deps vazias
```