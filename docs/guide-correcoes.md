# Guia de Correções (Gabarito) – Commits Semânticos

Use este roteiro para aplicar os patches em sequência. Cada etapa inclui mensagem de commit sugerida.

## Backend
1. **B1 – JSON middleware**
   - Arquivo: `backend/src/server.ts`
   - Adição: `app.use(express.json())` antes das rotas.
   - Commit: `fix(api): ativa json middleware no Express`

2. **B2 – CORS configurado por ambiente**
   - Arquivo: `backend/src/server.ts`
   - Alteração: `app.use(cors({ origin: process.env.WEB_URL ?? 'http://localhost:5173', methods: ['GET','POST','PATCH'] }))`
   - Commit: `chore(api): configura CORS com origin e métodos permitidos`

3. **B3 – Paginação (off-by-one)**
   - Arquivo: `backend/src/routes/tasks.ts`
   - Alteração: `const skip = (page - 1) * limit`
   - Commit: `fix(tasks): corrige cálculo de paginação`

4. **B4 – PATCH valida ID**
   - Arquivo: `backend/src/routes/tasks.ts`
   - Alteração: retornar `404` se task não existir; atualizar `done` com boolean.
   - Commit: `fix(tasks): retorna 404 quando task não existe`

## Frontend
5. **B5 – useEffect com dependências**
   - Arquivo: `frontend/src/App.tsx`
   - Alteração: `useEffect(() => { load(1) }, [])`
   - Commit: `fix(app): evita chamadas repetidas removendo loop do useEffect`

6. **B6 – key correta na lista**
   - Arquivo: `frontend/src/components/TaskList.tsx`
   - Alteração: `key={t.id}`
   - Commit: `perf(ui): usa chave estável para melhorar reconciliação`

7. **B7 – URL via .env**
   - Arquivo: `frontend/src/api.ts`
   - Alteração: `const API = import.meta.env.VITE_API_URL || 'http://localhost:3333'`
   - Commit: `chore(api): lê URL da API via variáveis de ambiente`

8. **B8 – Tipos fortes e validação**
   - Arquivo: `frontend/src/types.ts`, `frontend/src/components/NewTaskForm.tsx`
   - Alteração: `Task` com `id: string; title: string; done: boolean` e validação `title.trim()`
   - Commit: `refactor(types): fortalece tipagem e validação do formulário`

## Exemplo de sequência de comandos
```bash
# supondo que você esteja numa branch de correções
git add backend/src/server.ts && git commit -m "fix(api): ativa json middleware no Express"
git add backend/src/server.ts && git commit -m "chore(api): configura CORS com origin e métodos permitidos"
git add backend/src/routes/tasks.ts && git commit -m "fix(tasks): corrige cálculo de paginação"
git add backend/src/routes/tasks.ts && git commit -m "fix(tasks): retorna 404 quando task não existe"
git add frontend/src/App.tsx && git commit -m "fix(app): evita chamadas repetidas removendo loop do useEffect"
git add frontend/src/components/TaskList.tsx && git commit -m "perf(ui): usa chave estável para melhorar reconciliação"
git add frontend/src/api.ts && git commit -m "chore(api): lê URL da API via variáveis de ambiente"
git add frontend/src/types.ts frontend/src/components/NewTaskForm.tsx && git commit -m "refactor(types): fortalece tipagem e validação do formulário"
```

## Dica de Branches para a dinâmica
- `main`: versão bugada (para os alunos)
- `gabarito`: todas as correções aplicadas (pasta `solutions/` já contém os arquivos finais)
- Você pode inicializar um repositório e criar branches com:
```bash
git init
git add .
git commit -m "chore: setup do jogo com versões bugadas"
git checkout -b gabarito
# Copie os arquivos de solutions/* para as pastas backend/ e frontend/ e faça os commits conforme o guia
```
---

## Modo Testes (opcional na dinâmica)

- **Backend** (Vitest + Supertest)
  - Rodar: `cd backend && npm test`
  - O teste `POST /tasks ... 201` **deve falhar** enquanto o bug **B1** (JSON middleware) não for corrigido.
  - Após aplicar o patch B1, o teste passa e você libera o próximo patch.

- **Frontend** (Vitest + Testing Library)
  - Rodar: `cd frontend && npm test`
  - Teste mínimo verifica o título do app; você pode pedir aos alunos para criar um teste extra validando a mensagem de erro do `NewTaskForm` quando o título estiver vazio.


### Testes extras incluídos
- **Backend:** `tests/patch.spec.ts` — espera **404** em `PATCH /tasks/:id` quando o ID não existe (**falha** até aplicar B4).
- **Frontend:** `src/NewTaskForm.test.tsx` — valida mensagem de erro quando enviar o formulário com título vazio (**passa**).
