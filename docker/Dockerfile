FROM node:17-alpine
COPY . /src
WORKDIR /src
RUN yarn install
EXPOSE 8000
ENTRYPOINT [ "yarn","serve" ]