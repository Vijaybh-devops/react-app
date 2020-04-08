FROM node:alpine as builder
workdir /app
copy ./package.json ./
RUN npm install
copy ./ ./
RUN npm run build

FROM nginx
expose 80
COPY --from=builder /app/build /usr/share/nginx/html


