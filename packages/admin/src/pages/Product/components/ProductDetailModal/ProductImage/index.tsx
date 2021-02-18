import React, { FC } from 'react';
import { Card, Divider, Image } from 'antd';
import { filter, map } from 'lodash';
import { useGetStaticImages } from '@src/pages/Product/components/ProductDetailModal/ProductImage/useHooks';
import { ProductImageProps } from '@src/pages/Product/components/ProductDetailModal/ProductImage/interface';
import { ImageType } from '@src/common/enum';
import styles from './style.less';

const ProductImage: FC<ProductImageProps> = props => {
  const { productId } = props;
  const list = useGetStaticImages(productId);
  const productImageList = filter(list, item => item.type === ImageType.productImage);
  const detailImageList = filter(list, item => item.type === ImageType.productDetail);

  return (
    <div>
      <Divider>商品图片</Divider>
      <div className="item">
        <Card>
          {map(productImageList, item => {
            return (
              <Card.Grid key={item.id} className={styles.gridStyle}>
                <Image src={item.url} />
              </Card.Grid>
            );
          })}
        </Card>
      </div>

      <Divider>商品详情图片</Divider>
      <div className="item">
        {map(detailImageList, item => {
          return <Image key={item.id} width="100%" src={item.url} preview={false} />;
        })}
      </div>
    </div>
  );
};

export default ProductImage;
