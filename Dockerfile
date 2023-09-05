FROM nginx:1.17.1-alpine
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY /dist/plant-grower-angular /usr/share/nginx/html
