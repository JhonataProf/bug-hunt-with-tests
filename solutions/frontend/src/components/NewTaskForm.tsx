import React, { useState } from 'react'

type Props = { onCreate: (title: string) => void }

export default function NewTaskForm({ onCreate }: Props) {
  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<string>('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const val = title.trim()
    if (!val) {
      setError('Título é obrigatório')
      return
    }
    onCreate(val)
    setTitle('')
    setError('')
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Nova tarefa" />
      <button>Adicionar</button>
      {error && <span style={{ color: 'crimson' }}>{error}</span>}
    </form>
  )
}