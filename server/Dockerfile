FROM node:22-alpine

RUN apk add --no-cache openssl libc6-compat

WORKDIR /app


COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 5001

CMD npx prisma generate && npm start