FROM oven/bun:alpine AS release
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun i --frozen-lockfile
COPY . .
RUN bun build apps/api/src/main.ts --outfile dist/apps/api/main.js
CMD ["bun", "dist/apps/api/main.js"]
