# Stage 0, "build-stage", based on Node.js, to build and compile the frontend

FROM node:12 as build-stage

RUN npm install npm@latest -g

ARG REGISTRY

WORKDIR  /app

COPY package.json /app/

RUN npm cache clean --force

RUN npm install && npm config set registry $REGISTRY && npm install nomad-ui@1.0.26 --registry http://192.168.100.71:4873

COPY ./ /app/

RUN npm run build


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17.3-alpine

COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY site.nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

