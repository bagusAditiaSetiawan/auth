import request from "supertest";
import {app} from "../../../../app";

describe('get users', () => {
  it('should get users', async () => {
    const email = `${Date.now()}braditya12@gmail.com`
    const getToken = await request(app)
      .post('/api/users')
      .send({
        email,
        name: "braditya12",
        role: "admin",
        password: "braditya12"
      })
    expect(getToken.body).toHaveProperty('token')
    const token = getToken.body.token;

    const res = await request(app)
    .get('/api/users')
    .set('Authorization', `Bearer ${token}`)
  
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
  })

  it('should get detail users', async () => {
    const email = `${Date.now()}braditya12@gmail.com`
    const getToken = await request(app)
      .post('/api/users')
      .send({
        email,
        name: "braditya12",
        role: "admin",
        password: "braditya12"
      })
    expect(getToken.body).toHaveProperty('token')
    const token = getToken.body.token;

    const res = await request(app)
    .get('/api/users')
    .set('Authorization', `Bearer ${token}`)
  
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
    const {id} = res.body.data[0];
    const getDetail = await request(app)
      .get(`/api/users/${id}`)
      .set('Authorization', `Bearer ${token}`)
    expect(getDetail.body.id === id).toEqual(true)
  })

  
  it('should delete users', async () => {
    const email = `${Date.now()}braditya12@gmail.com`
    const getToken = await request(app)
      .post('/api/users')
      .send({
        email,
        name: "braditya12",
        role: "admin",
        password: "braditya12"
      })
    expect(getToken.body).toHaveProperty('token')
    const token = getToken.body.token;

    const res = await request(app)
    .get('/api/users')
    .set('Authorization', `Bearer ${token}`)
  
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
    const {id} = res.body.data[0];
    const deleteUser = await request(app)
      .delete(`/api/users/${id}`)
      .set('Authorization', `Bearer ${token}`)
    expect(deleteUser.body.id === id).toEqual(true)
  })
})
