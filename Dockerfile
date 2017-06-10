FROM nginx
MAINTAINER Valentyn Hrynevych (valik.v1per@gmail.com)
COPY dist /usr/share/nginx/html
EXPOSE 80
