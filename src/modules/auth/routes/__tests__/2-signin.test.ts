import request from "supertest";
import {app} from "../../../../app";

describe('Signin', () => {
  it('should user success signin', async () => {
    const email = `${Date.now()}braditya12@gmail.com`
    await request(app)
      .post('/api/users')
      .send({
        email,
        name: "braditya12",
        role: "admin",
        password: "braditya12"
      })

    const res = await request(app)
    .post('/api/users/login')
    .send({
      email,
      password: "braditya12"
    })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('token')
  })
})
