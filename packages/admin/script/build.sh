cd ../

echo "开始打包文件"
yarn build

echo "静态文件打包完成"

echo "开始上传文件..."

scp -r ./dist yanle-tx:/root/app/hd-mall-fe/web-admin/
scp ./script/nginx.conf yanle-tx:/root/app/hd-mall-fe/web-admin/nginx.conf
scp ./script/default.conf yanle-tx:/root/app/hd-mall-fe/web-admin/default.conf

ssh yanle-tx docker restart web-admin
