FROM node:16-alpine as base
ARG UID=1000
RUN deluser node
RUN adduser --uid $UID --system for
WORKDIR /app
ADD package.json yarn.lock tsconfig.json ./
RUN yarn install --frozen-lockfile

ADD ./public ./public
ADD ./src ./src

FROM base as development
#USER for
CMD ["yarn", "start"]

FROM base as build
RUN yarn build

FROM node:16-alpine as prod
RUN adduser --uid $UID --system --disable-password for
RUN npm install -g serve
COPY --from=build ./build ./build
EXPOSE 3000

USER for
CMD ["serve", "--single", "./build", "--listen", "3000"]
