const request = require('supertest');
const app = require('../src/app');

jest.mock('@prisma/client', () => {
  const mPrismaClient = {
    product: {
      findMany: jest.fn(),
    },
  };
  return { PrismaClient: jest.fn(() => mPrismaClient) };
});

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Product Routes API tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('GET /api/products returns products correctly', async () => {
    const mockData = [
      { id: '1', name: 'Shoes', price: 99, bgColor: '#CCC' }
    ];
    prisma.product.findMany.mockResolvedValue(mockData);

    const res = await request(app).get('/api/products');

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockData);
    expect(prisma.product.findMany).toHaveBeenCalled();
  });
});
