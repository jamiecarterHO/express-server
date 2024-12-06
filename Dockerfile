FROM node:22.11-bullseye-slim@sha256:5bbd9ddba6fddc74421d77b689b69c65939337e869041eecdd11fab2e5d6f1c1
WORKDIR /app
COPY --chown=node:node . /app
RUN yarn install --frozen-lockfile --production --ignore-optional --ignore-scripts
USER node
HEALTHCHECK --interval=5m --timeout=3s CMD curl --fail http://localhost:5555 || exit 1
CMD "node" "server.js"