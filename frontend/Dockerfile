# stage 1

FROM node:24-alpine AS build

WORKDIR /New-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# stage 2

FROM nginx:alpine 

COPY --from=build /frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off"]
