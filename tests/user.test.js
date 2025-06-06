const request = require('supertest');
const app = require('../app');

describe('User API Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ username: 'testuser', email: 'test@example.com', password: 'Password123' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
  });

  it('should login an existing user', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({ email: 'test@example.com', password: 'Password123' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});