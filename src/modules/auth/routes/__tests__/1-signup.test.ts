import request from "supertest";
import {app} from "../../../../app";

describe('Signup Success', () => {
  it('should signup a user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        email: `braditya12${Date.now()}@gmail.com`,
        name: `braditya12${Date.now()}`,
        role: 'user',
        password: "braditya12"
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('token')
  })
})