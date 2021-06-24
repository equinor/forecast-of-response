FROM nginx:alpine
ARG UID=1000
RUN addgroup -g $UID for && \
    adduser --uid $UID -G for --system for
COPY default.nginx /etc/nginx/conf.d/default.conf
RUN touch /run/nginx.pid
RUN chown -R $UID:$UID /var/cache/nginx /run/nginx.pid
USER for
