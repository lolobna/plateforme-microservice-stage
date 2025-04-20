# Étape 1 - Build
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Étape 2 - Serve avec nginx
FROM nginx:alpine
COPY --from=build /app/dist/mon-app /usr/share/nginx/html
