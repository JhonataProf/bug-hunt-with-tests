const API = import.meta.env.VITE_API_URL || 'http://localhost:3333';

export async function fetchTasks(page = 1) {
  const res = await fetch(`${API}/tasks?page=${page}`);
  if (!res.ok) throw new Error('Falha ao carregar tarefas');
  return res.json();
}

export async function createTask(title: string) {
  const res = await fetch(`${API}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  if (!res.ok) throw new Error('Falha ao criar tarefa');
  return res.json();
}

export async function toggleTask(id: string, done: boolean) {
  const res = await fetch(`${API}/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done })
  });
  if (!res.ok) throw new Error('Falha ao atualizar tarefa');
  return res.json();
}