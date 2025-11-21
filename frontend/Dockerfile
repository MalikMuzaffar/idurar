# stage 1

FROM node:24-alpine AS build

WORKDIR /New-app

COPY package*.json

RUN npm install

COPY . .

RUN npm run build

# stage 2

FROM nginx:alpine 

COPY --from=build /frontend/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off"]
