FROM node:alpine
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
# COPY package*.json ./
RUN npm install
RUN npm install -g sequelize-cli
COPY ./config ./config
COPY ./controller ./controller
COPY ./helpers ./helpers
COPY ./middleware ./middleware
COPY ./migrations ./migrations
COPY ./models ./models
COPY ./routes ./routes
COPY ./seeders ./seeders
COPY ./uploads ./uploads
COPY ./app.js ./app.js
COPY ./server.js ./server.js
COPY ./nodemon.json ./nodemon.json

CMD [ "npm","run","dev" ]