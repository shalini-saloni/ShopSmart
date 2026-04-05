const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      { name: 'Oversized Blazer', description: 'Beige minimalist blazer', price: 295.00, category: 'Women', bgColor: '#D6D1C4', imageUrl: '/images/women.png', stock: 15 },
      { name: 'Classic Trousers', description: 'Wide-leg trousers in earthy tones', price: 185.00, category: 'Women', bgColor: '#B6AB98', imageUrl: '/images/women.png', stock: 20 },
      { name: 'Knit Turtleneck', description: 'Soft men turtleneck', price: 140.00, category: 'Men', bgColor: '#D9D9D9', imageUrl: '/images/men.png', stock: 30 },
      { name: 'Striped Shorts', description: 'Navy striped shorts', price: 65.00, category: 'Kids', bgColor: '#E2E8F0', imageUrl: '/images/kids.png', stock: 50 },
      { name: 'Summer Tee', description: 'White summer tee', price: 40.00, category: 'Kids', bgColor: '#CBD5E1', imageUrl: '/images/kids.png', stock: 100 },
      { name: 'Denim Jacket', description: 'Essential denim', price: 150.00, category: 'Men', bgColor: '#94A3B8', imageUrl: '/images/men.png', stock: 40 },
    ]
  });

  // eslint-disable-next-line no-console
  console.log('Database seeded with image products!');
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
