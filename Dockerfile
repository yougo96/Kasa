FROM node:18-slim

WORKDIR /app

COPY package*.json .

RUN npm ci --audit=false --fund=false

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]