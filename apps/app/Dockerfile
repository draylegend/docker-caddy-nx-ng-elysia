FROM caddy:alpine AS release
COPY ./apps/app/Caddyfile /etc/caddy/Caddyfile
WORKDIR /app
RUN echo "<h1>welcome to finflow!!!</h1><script>fetch('/api/hi').then(async r => alert(JSON.stringify(await r.json())))</script>" > index.html
