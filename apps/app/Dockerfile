FROM lucaslorentz/caddy-docker-proxy:alpine AS release
COPY apps/app/Caddyfile /dynamic/Caddyfile
WORKDIR /app
RUN echo "<h1>welcome to finflow!!!</h1>" > index.html
#COPY dist/apps/app/browser/index.html .
