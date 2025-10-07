# Jogo – Manutenção em Sistemas (React + Vite + Express)

Este repositório contém **duas partes**: `backend` (Express/TS) e `frontend` (React/Vite/TS). Há **bugs intencionais** para a dinâmica de manutenção.

## Como executar (ambiente de aluno)

### Backend
```bash
cd backend
cp .env.example .env
npm i
npm run dev
# API em http://localhost:3333
```

### Frontend
```bash
cd frontend
cp .env.example .env
npm i
npm run dev
# App em http://localhost:5173
```

> Observação: alguns fluxos falham por causa dos **bugs**. Eles serão corrigidos conforme as **cartas de patch** forem liberadas no jogo.

## Lista de bugs

- **B1 – Backend**: falta `app.use(express.json())` → POST quebra ao ler `req.body`.
- **B2 – Backend**: CORS sem origin/métodos restritos → falhas no navegador.
- **B3 – Backend**: paginação com `skip = page * limit` (off-by-one).
- **B4 – Backend**: PATCH não verifica ID inexistente (deveria 404).
- **B5 – Frontend**: `useEffect` sem deps → múltiplas chamadas.
- **B6 – Frontend**: `key` incorreta em lista (índice).
- **B7 – Frontend**: URL da API fixa (ignora `.env`).
- **B8 – Frontend**: Tipos fracos (`any`) permitem valores inválidos.

## Regras sugeridas do jogo
- Professor faz perguntas. Acertou → recebe **1 carta de patch** (em `docs/cards`).
- Valide cada correção abrindo o app e/ou no Postman.
- Quem estabilizar primeiro, vence.# bug-hunt-with-tests
