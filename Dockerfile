FROM node:11.10.1

RUN npm install --global yarn
COPY public/ /app/public/
COPY src/ /app/src/
COPY .babelrc .npmrc .env index.js package.json webpack.config.js webpack.server.config.js _variables.scss /app/
WORKDIR /app
RUN ls -la
RUN npm rebuild node-sass
RUN yarn install
RUN yarn build
EXPOSE 9000
ENV NODE_ENV production
ENTRYPOINT node dist/server.js
