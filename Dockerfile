FROM node:16

# RUN mkdir -p /var/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn 

COPY . ./

EXPOSE 8080

RUN yarn build
# CMD ["yarn", "start"]


