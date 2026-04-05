const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, authMiddleware } = require('../middleware/auth');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email and password are required' });
    }
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword }
    });
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email, cart: JSON.parse(user.cart), favorites: JSON.parse(user.favorites) } });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, cart: JSON.parse(user.cart), favorites: JSON.parse(user.favorites) } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/auth/me
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user: { id: user.id, name: user.name, email: user.email, cart: JSON.parse(user.cart), favorites: JSON.parse(user.favorites) } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/sync-cart', authMiddleware, async (req, res) => {
  try {
    const { cart } = req.body;
    await prisma.user.update({
      where: { id: req.user.id },
      data: { cart: JSON.stringify(cart) }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to sync cart' });
  }
});

router.post('/sync-favorites', authMiddleware, async (req, res) => {
  try {
    const { favorites } = req.body;
    await prisma.user.update({
      where: { id: req.user.id },
      data: { favorites: JSON.stringify(favorites) }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to sync favorites' });
  }
});

module.exports = router;
