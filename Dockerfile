# Base image for both services
FROM node:22-alpine AS base
WORKDIR /app

# --- Backend Stage ---
FROM base AS backend
# Install system dependencies for Prisma
RUN apk add --no-cache openssl libc6-compat

# Install dependencies
COPY server/package*.json ./
RUN npm install

# Copy Prisma schema and generate client
COPY server/prisma ./prisma/
RUN npx prisma generate

# Copy the rest of the backend code
COPY server/ .

EXPOSE 5001
CMD npx prisma generate && npm start

# --- Frontend Stage ---
FROM base AS frontend
# Install dependencies
COPY client/package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY client/ .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
