docker run --restart=always  -it -d --name web-admin -p 8001:80 -v /root/app/hd-mall-fe/web-admin/default.conf:/etc/nginx/conf.d/default.conf -v /root/app/hd-mall-fe/web-admin/nginx.conf:/etc/nginx/conf.conf -v /root/app/hd-mall-fe/web-admin/dist:/usr/share/nginx/html -v /root/app/hd-mall-fe/web-admin/logs:/var/log/nginx nginx