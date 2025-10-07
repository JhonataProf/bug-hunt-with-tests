import React, { useEffect, useState } from 'react'
import { fetchTasks, createTask, toggleTask } from './api'
import type { Task } from './types'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [page, setPage] = useState(1)

  async function load(p = page) {
    const data = await fetchTasks(p)
    setTasks(data.data)
  }

  // ✅ B5: useEffect com deps
  useEffect(() => {
    load(1)
  }, [])

  async function add(title: string) {
    await createTask(title)
    await load(1)
  }

  async function toggle(id: string) {
    const t = tasks.find(t => t.id === id)
    await toggleTask(id, !t?.done)
    await load(1)
  }

  return (
    <div style={{ maxWidth: 640, margin: '24px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Bug Hunt – Manutenção (Gabarito)</h1>
      <NewTaskForm onCreate={add} />
      <TaskList tasks={tasks} onToggle={toggle} />
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <button onClick={() => { setPage(p => Math.max(1, p - 1)); load(page - 1) }}>Anterior</button>
        <span>Página {page}</span>
        <button onClick={() => { setPage(p => p + 1); load(page + 1) }}>Próxima</button>
      </div>
    </div>
  )
}