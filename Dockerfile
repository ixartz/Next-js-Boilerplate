FROM node:16.6.2-alpine as builder

WORKDIR /app

RUN apk add --no-cache curl git && cd /tmp && \
    curl -#L https://github.com/tj/node-prune/releases/download/v1.0.1/node-prune_1.0.1_linux_amd64.tar.gz | tar -xvzf- && \
    mv -v node-prune /usr/local/bin && rm -rvf * && \
    echo "yarn cache clean && node-prune" > /usr/local/bin/node-clean && chmod +x /usr/local/bin/node-clean

# Use Docker Caching layers (only copy the package.json and yarn.lock, then install, then add rest of source code)
ADD package.json ./
ADD package-lock.json ./
RUN npm install --frozen-lockfile --non-interactive
ADD . ./

# turn on the Production flags
ENV NODE_ENV=production
RUN npm run build-prod --frozen-lockfile --non-interactive --production && node-clean

# runtime image
FROM node:16.6.2-alpine

WORKDIR /app
ENV HOST=0.0.0.0
ENV NODE_ENV=production
# ENV HOST=localhost

ADD package.json ./
ADD package-lock.json ./
ADD next.config.js ./
# ADD env ./

# only install the runtime packages (express and other runtime packages, web sockets, logging, newrelic, sentry, etc)
RUN npm install --frozen-lockfile --non-interactive --production

COPY --from=builder /app/out ./out
COPY --from=builder /app/env ./env

EXPOSE 3000
CMD ["npm", "run", "start:static", "--", "-H", "0.0.0.0", "--no-processenv"]
