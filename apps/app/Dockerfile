FROM caddy:alpine AS release
COPY ./apps/app/app.caddy /etc/caddy/Caddyfile
WORKDIR /app
RUN echo "<h1>welcome to finflow!!!</h1><script>fetch('/api/elysia-version').then(async r => console.log(await r.json()))</script>" > index.html
