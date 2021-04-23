docker run --restart=always  -it -d --name client-admin -p 8000:80 \
 -v /root/app/hd-mall-fe/web-client/default.conf:/etc/nginx/conf.d/default.conf \
 -v /root/app/hd-mall-fe/web-client/nginx.conf:/etc/nginx/conf.conf \
 -v /root/app/hd-mall-fe/web-client/dist:/usr/share/nginx/html \
 -v /root/app/hd-mall-fe/web-client/logs:/var/log/nginx nginx
