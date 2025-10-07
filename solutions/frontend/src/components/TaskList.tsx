import React from 'react'
import type { Task } from '../types'

type Props = {
  tasks: Task[]
  onToggle: (id: string) => void
}

export default function TaskList({ tasks, onToggle }: Props) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <label>
            <input type="checkbox" checked={t.done} onChange={() => onToggle(t.id)} />
            {t.title}
          </label>
        </li>
      ))}
    </ul>
  )
}