FROM node:7
MAINTAINER Valentyn Hrynevych (valik.v1per@gmail.com)

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install typings --global
RUN npm install -g @angular/cli@latest
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 4200

CMD "./entrypoint.sh"
