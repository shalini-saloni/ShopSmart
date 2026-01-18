# shopSmart - Clothing E-Commerce Platform

A modern, full-stack clothing e-commerce application built with React, Node.js, Express, Prisma, and SQLite.

## Features

- Complete CRUD operations for products
- RESTful API architecture
- Modern, responsive UI
- Product catalog with detailed views
- Admin product management
- SQLite database with Prisma ORM
- Deployed backend on Render
- Deployed frontend on Vercel

## Tech Stack

### Backend
- Node.js
- Express.js
- Prisma ORM
- SQLite3 Database
- CORS enabled

### Frontend
- React
- Tailwind CSS
- Lucide React Icons
- Fetch API

## Project Structure

```
shopSmart/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── dev.db (generated)
│   ├── src/
│   │   ├── index.js
│   │   └── routes/
│   │       └── products.js
│   ├── package.json
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   └── services/
│   ├── package.json
│   └── .gitignore
├── README.md
└── IDEA.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up Prisma and database:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Seed the database (optional):
```bash
npm run seed
```

5. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
VITE_API_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## API Endpoints

### Products API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Request/Response Examples

**GET /api/products**
```json
[
  {
    "id": 1,
    "name": "Classic Cotton T-Shirt",
    "description": "Comfortable cotton t-shirt",
    "price": 29.99,
    "category": "T-Shirts",
    "size": "M",
    "color": "Blue",
    "stock": 50,
    "imageUrl": "https://example.com/image.jpg",
    "createdAt": "2025-01-18T00:00:00.000Z",
    "updatedAt": "2025-01-18T00:00:00.000Z"
  }
]
```

**POST /api/products**
```json
{
  "name": "Classic Cotton T-Shirt",
  "description": "Comfortable cotton t-shirt",
  "price": 29.99,
  "category": "T-Shirts",
  "size": "M",
  "color": "Blue",
  "stock": 50,
  "imageUrl": "https://example.com/image.jpg"
}
```

## Deployment

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `cd backend && npm install && npx prisma generate && npx prisma migrate deploy`
4. Set start command: `cd backend && npm start`
5. Add environment variables if needed
6. Deploy

### Frontend Deployment (Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend directory: `cd frontend`
3. Update `.env` with production API URL:
```bash
VITE_API_URL=https://your-backend-url.onrender.com/api
```
4. Deploy: `vercel --prod`

Or use Vercel Dashboard:
1. Import your GitHub repository
2. Set root directory to `frontend`
3. Add environment variable: `VITE_API_URL`
4. Deploy

## Environment Variables

### Backend
```
PORT=3000
DATABASE_URL="file:./dev.db"
NODE_ENV=production
```

### Frontend
```
VITE_API_URL=http://localhost:3000/api
```

## CORS Configuration

CORS is configured in the backend to allow requests from:
- Development: `http://localhost:5173`
- Production: Your Vercel domain

Update `backend/src/index.js` with your production URLs.

## Testing the API

Using cURL:
```bash
# Get all products
curl http://localhost:3000/api/products

# Create a product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Shirt","price":25.99,"category":"T-Shirts","size":"L","color":"Red","stock":10}'
```

## Database Schema

```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Float
  category    String
  size        String
  color       String
  stock       Int      @default(0)
  imageUrl    String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

