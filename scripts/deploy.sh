#!/bin/bash
# Idempotent Deployment Script for ShopSmart
set -e

APP_DIR="${DEPLOY_PATH:-$HOME/projects/shopsmart}"

echo "Deploying ShopSmart to $APP_DIR"
mkdir -p "$APP_DIR/client"
mkdir -p "$APP_DIR/server"

cd "$APP_DIR"

echo "Installing Backend Updates..."
cd server
npm ci
npx prisma generate
cd ..

echo "Installing Frontend Updates..."
cd client
npm ci
npm run build
cd ..

echo "Restarting services securely..."
if command -v pm2 &> /dev/null
then
    pm2 start ./server/src/index.js --name "shopsmart-backend" || pm2 restart "shopsmart-backend"
else
    echo "PM2 is missing. Please install pm2: npm i -g pm2"
fi

echo "Deployed successfully!"
