import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('API /tasks PATCH', () => {
  it('retorna 404 para ID inexistente — falha até aplicar B4', async () => {
    const res = await request(app)
      .patch('/tasks/nao-existe')
      .set('Content-Type', 'application/json')
      .send({ done: true })
    expect(res.status).toBe(404) // na versão bugada retorna 200
  })
})