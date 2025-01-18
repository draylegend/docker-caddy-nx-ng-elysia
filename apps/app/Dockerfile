FROM lucaslorentz/caddy-docker-proxy:alpine AS release
COPY apps/app/Caddyfile /dynamic/app.caddy
WORKDIR /app
RUN echo "<h1>welcome to finflow!!!</h1>" > index.html
