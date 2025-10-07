import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('API /tasks', () => {
  it('GET /tasks deve responder 200 e um objeto com propriedades esperadas', async () => {
    const res = await request(app).get('/tasks')
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('data')
    expect(Array.isArray(res.body.data)).toBe(true)
    expect(res.body).toHaveProperty('page')
    expect(res.body).toHaveProperty('limit')
  })

  it('POST /tasks com body válido deve criar (201) — este teste falha até aplicar B1', async () => {
    const res = await request(app)
      .post('/tasks')
      .set('Content-Type', 'application/json')
      .send({ title: 'Nova tarefa' })
    expect(res.status).toBe(201) // Sem express.json(), este teste falha (recebe 400)
  })
})