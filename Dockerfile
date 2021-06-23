FROM node:latest AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:latest AS deps

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY --from=build /app/dist /app/dist
COPY --from=deps /app/node_modules /app/node_modules

CMD ["node", "dist/index.js"]
