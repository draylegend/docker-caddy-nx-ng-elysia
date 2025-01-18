FROM lucaslorentz/caddy-docker-proxy:alpine AS release
WORKDIR /app
COPY apps/app/Caddyfile /data/coolify/proxy/dynamic/Caddyfile
RUN echo "<h1>welcome to finflow!!!</h1>" > index.html
#COPY dist/apps/app/browser/index.html .
