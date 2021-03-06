FROM node:16-alpine as build

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx:stable

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80:80

CMD ["nginx", "-g", "daemon off;"]
