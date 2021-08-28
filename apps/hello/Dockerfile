FROM node:8.16
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --verbose 
COPY . ./
CMD yarn run start
EXPOSE 3000
