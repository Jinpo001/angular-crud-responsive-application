### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:lts-alpine3.9 as builder

WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build:prod


### STAGE 2: Setup ###
FROM nginx
EXPOSE 80
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html
