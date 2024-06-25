FROM nginx:stable-alpine-perl

COPY ./dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
