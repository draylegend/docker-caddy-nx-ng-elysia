FROM lucaslorentz/caddy-docker-proxy:alpine AS release
COPY ./caddy/Caddyfile /dynamic/Caddyfile
COPY ./apps/app/app.caddy /dynamic/app.caddy
WORKDIR /app
RUN echo "<h1>welcome to finflow!!!</h1><script>fetch('/api/elysia-version').then(async r => console.log(await r.json()))</script>" > index.html
