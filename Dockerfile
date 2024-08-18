FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY node/package.json ./node/
RUN npm install --prefix node

COPY client/package.json ./client/
RUN npm install --prefix client

# Copy all server and client files
COPY node/ ./node/
COPY client/ ./client/

EXPOSE 3000 4000

CMD ["npm start --prefix node & npm start --prefix client"]