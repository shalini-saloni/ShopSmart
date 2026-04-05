const request = require('supertest');
const app = require('../src/app');

describe('Product Routes API tests', () => {
  it('GET /api/products returns products correctly', async () => {
    const res = await request(app).get('/api/products');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('price');
    expect(res.body[0]).toHaveProperty('category');
    expect(res.body[0]).toHaveProperty('imageUrl');
  });

  it('GET /api/products?category=women returns women products', async () => {
    const res = await request(app).get('/api/products?category=women');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    res.body.forEach(product => {
      expect(product.category.toLowerCase()).toBe('women');
    });
  });
});
