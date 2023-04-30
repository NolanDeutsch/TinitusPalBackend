
FROM --platform=linux/amd64 node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

ARG MONGODB_URL

RUN yarn build
EXPOSE 8080

CMD ["yarn", "start:prod"]
