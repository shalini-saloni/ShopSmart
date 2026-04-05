const express = require('express');

const router = express.Router();

const products = [
  // WOMEN (9 items)
  { id: '1', name: 'Oversized Blazer', price: 295, category: 'Women', imageUrl: '/images/women.png' },
  { id: '2', name: 'Black Tuxedo Dress', price: 185, category: 'Women', imageUrl: '/images/women2.png' },
  { id: '3', name: 'White Skater Dress', price: 340, category: 'Women', imageUrl: '/images/women3.png' },
  { id: '4', name: 'Beige Overcoat', price: 420, category: 'Women', imageUrl: '/images/women4.png' },
  { id: '5', name: 'Silk Wrap Dress', price: 265, category: 'Women', imageUrl: '/images/women_silk_dress.png' },
  { id: '6', name: 'Pleated Midi Skirt', price: 155, category: 'Women', imageUrl: '/images/women_pleated_skirt.png' },
  { id: '7', name: 'Cashmere Sweater', price: 210, category: 'Women', imageUrl: '/images/women_cashmere.png' },
  { id: '8', name: 'Tailored Jumpsuit', price: 375, category: 'Women', imageUrl: '/images/women_jumpsuit.png' },
  { id: '9', name: 'Evening Gown', price: 590, category: 'Women', imageUrl: '/images/women_evening_gown.png' },

  // MEN (9 items)
  { id: '11', name: 'Knit Turtleneck', price: 140, category: 'Men', imageUrl: '/images/men.png' },
  { id: '12', name: 'Navy Suit', price: 450, category: 'Men', imageUrl: '/images/men2.png' },
  { id: '13', name: 'Linen Shirt', price: 120, category: 'Men', imageUrl: '/images/men3.png' },
  { id: '14', name: 'Leather Jacket', price: 380, category: 'Men', imageUrl: '/images/men4.png' },
  { id: '15', name: 'Olive Bomber', price: 210, category: 'Men', imageUrl: '/images/men_bomber_jacket.png' },
  { id: '16', name: 'Grey Wool Suit', price: 520, category: 'Men', imageUrl: '/images/men_grey_suit.png' },
  { id: '17', name: 'Denim Overshirt', price: 110, category: 'Men', imageUrl: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80' },
  { id: '18', name: 'Summer Basic Tee', price: 60, category: 'Men', imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80' },
  { id: '19', name: 'Classic Coat', price: 280, category: 'Men', imageUrl: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&q=80' },

  // KIDS (9 items)
  { id: '21', name: 'Cargo Joggers', price: 55, category: 'Kids', imageUrl: '/images/kids.png' },
  { id: '22', name: 'Tutu Dress', price: 75, category: 'Kids', imageUrl: '/images/kids2.png' },
  { id: '23', name: 'Denim Jacket Jr', price: 65, category: 'Kids', imageUrl: '/images/kids3.png' },
  { id: '24', name: 'Coordinated Set', price: 85, category: 'Kids', imageUrl: '/images/kids4.png' },
  { id: '25', name: 'Summer Boy Vibe', price: 45, category: 'Kids', imageUrl: '/images/kids4.png' },
  { id: '26', name: 'Yellow Raincoat', price: 60, category: 'Kids', imageUrl: '/images/kids2.png' },
  { id: '27', name: 'Cool Kid Hat', price: 55, category: 'Kids', imageUrl: '/images/kids3.png' },
  { id: '28', name: 'Winter Jumper', price: 70, category: 'Kids', imageUrl: '/images/kids.png' },
  { id: '29', name: 'Little Denim', price: 40, category: 'Kids', imageUrl: '/images/kids4.png' }
];

router.get('/', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    return res.json(filtered);
  }
  res.json(products);
});

module.exports = router;
