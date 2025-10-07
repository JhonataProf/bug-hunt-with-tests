// BUG B7: URL fixa
const API = 'http://localhost:3333';

export async function fetchTasks(page = 1) {
  const res = await fetch(`${API}/tasks?page=${page}`);
  return res.json();
}

export async function createTask(title: string) {
  const res = await fetch(`${API}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  return res.json();
}

export async function toggleTask(id: string, done: boolean) {
  const res = await fetch(`${API}/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done })
  });
  return res.json();
}