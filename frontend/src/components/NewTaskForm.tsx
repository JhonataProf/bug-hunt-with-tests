import React, { useState } from 'react'

type Props = { onCreate: (title: string) => void }

export default function NewTaskForm({ onCreate }: Props) {
  const [title, setTitle] = useState<any>('') // BUG B8: any
  const [error, setError] = useState<string>('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    // validação fraca
    if (!title) {
      setError('Título obrigatório')
      return
    }
    onCreate(String(title))
    setTitle('')
    setError('')
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <input value={title as any} onChange={e => setTitle((e.target as any).value)} placeholder="Nova tarefa" />
      <button>Adicionar</button>
      {error && <span style={{ color: 'crimson' }}>{error}</span>}
    </form>
  )
}