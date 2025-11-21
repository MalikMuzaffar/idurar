FROM node:24-slim

WORKDIR /New-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8888

CMD ["npm", "start"]
