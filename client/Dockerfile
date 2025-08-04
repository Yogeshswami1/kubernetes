ARG VITE_API_BASE

FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN VITE_API_BASE=$VITE_API_BASE npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
