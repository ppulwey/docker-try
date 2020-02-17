FROM node:lts-stretch-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8281

CMD ["node", "index.js"]

