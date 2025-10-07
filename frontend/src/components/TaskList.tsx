import React from 'react'
import type { Task } from '../types'

type Props = {
  tasks: Task[]
  onToggle: (id: string) => void
}

export default function TaskList({ tasks, onToggle }: Props) {
  return (
    <ul>
      {tasks.map((t, i) => (
        // BUG B6: key incorreta (índice)
        <li key={i}>
          <label>
            <input type="checkbox" checked={!!t.done} onChange={() => onToggle(String(t.id))} />
            {String(t.title)}
          </label>
        </li>
      ))}
    </ul>
  )
}