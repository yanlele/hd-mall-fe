import React, { FC, useState } from 'react';
import styles from './style.less';
import { get, omit } from 'lodash';
import { Button, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { usePersistFn } from 'ahooks';
import { useHistory } from 'react-router';
import query from 'query-string';
import { useRecoilState, useRecoilValue } from 'recoil';
import getDetailInfoModel from '@src/pages/ProductDetail/model/getDetailInfoModel';
import { userInfoModel } from '@src/components/biz/UserLoginComponent/model';
import produce from 'immer';
import { shoppingCartCreate } from '@src/service';

const ProductInfo: FC = () => {
  const history = useHistory();
  const { detail } = useRecoilValue(getDetailInfoModel);
  const [{ userInfo }, setUserModel] = useRecoilState(userInfoModel);
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

  const productId = get(query.parse(history.location.search), 'id') as string;

  // 跳转到 order 页面
  const handleOnClickBuy = usePersistFn(async () => {
    if (!userInfo.name) {
      message.warn('请登录之后再购买');
      setUserModel(
        produce(draft => {
          draft.modalControl.visible = true;
          draft.modalControl.type = 'login';
        }),
      );
      return;
    }

    const res = await shoppingCartCreate(
      Object.assign({ product_id: parseInt(productId, 10), count: purchaseQuantity, type: 2 }, omit(detail, ['id'])),
    );

    history.push(`/order?temp_order_id=${res.data}`);
  });

  // 加入购物车
  const handleAddShopCar = usePersistFn(async () => {
    if (!userInfo.name) {
      message.warn('请登录之后再加入购物车');
      setUserModel(
        produce(draft => {
          draft.modalControl.visible = true;
          draft.modalControl.type = 'login';
        }),
      );
      return;
    }

    await shoppingCartCreate(
      Object.assign({ product_id: parseInt(productId, 10), count: purchaseQuantity, type: 1 }, omit(detail, ['id'])),
    );
    message.success('加入购物车成功');
  });

  return (
    <div className={styles.productInfoContainer}>
      <h2 className="title">{get(detail, 'name')}</h2>
      <p className="desc-info">{get(detail, 'desc')}</p>

      {/* 价格板块 */}
      <div className="price-content">
        <p className="line">
          <span className="label">原价</span>
          <span className="price">
            <del>￥{get(detail, 'original_cost', 0).toFixed(2)}</del>
          </span>
        </p>

        <p className="line">
          <span className="label">价格</span>
          <span className="price">￥{get(detail, 'price', 0).toFixed(2)}</span>
        </p>

        <p className="line">
          <span className="label">促销</span>
          <span className="discount-icon">赠送积分</span>
          <span className="desc">购买即赠送商城积分，积分可以抵现</span>
        </p>
      </div>

      {/* 描述信息板块 */}
      <p className="distribution">
        <span>配送</span>
        <span>快递满99免邮费</span>
        <span>付款后72小时内发货</span>
      </p>

      {/* 销量和评价板块 */}
      <div className="product-information">
        <p className="info">
          月销量
          <span className="price"> {get(detail, 'sales')}</span>
        </p>
        <span className="split" />
        <p className="info">
          累计评价
          <span className="price">0</span>
        </p>
      </div>

      {/* 商品销售分类 */}
      {/*<div className="sell-category">
        <span className="label">选择分类</span>
        <div className="category-container">
          {map(range(0, 5), (item, index) => {
            return (
              <div
                onClick={() => setType(index)}
                key={item}
                className={cn('category-item', type === index && 'active')}>
                <img
                  width={30}
                  height={30}
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg005.hc360.cn%2Fk3%2FM07%2FCB%2F59%2FwKhQv1kzXJiEUy2UAAAAADXkdGU281.jpg&refer=http%3A%2F%2Fimg005.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620111747&t=fb38179c7942e698fc740b45d4b1c35e"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>*/}

      {/* 商品数量 */}
      <div className="sell-count">
        <span className="label">数量</span>
        <div className="input-number-container">
          <input
            type="number"
            max={get(detail, 'inventory')}
            value={purchaseQuantity}
            min={1}
            className="input-number"
          />
          <div className="input-number-buttons">
            <span
              className="add"
              onClick={() => {
                if (purchaseQuantity < get(detail, 'inventory')) {
                  setPurchaseQuantity(purchaseQuantity + 1);
                }
              }}>
              +
            </span>
            <span
              className="subtract"
              onClick={() => {
                if (purchaseQuantity > 1) {
                  setPurchaseQuantity(purchaseQuantity - 1);
                }
              }}>
              -
            </span>
          </div>
        </div>

        <span className="inventory">库存{get(detail, 'inventory')}件</span>
      </div>

      {/* handle - 操作 */}
      <div className="handle">
        <Button className="buy" onClick={handleOnClickBuy}>
          立即购买
        </Button>
        <Button onClick={handleAddShopCar} className="add-car">
          <ShoppingCartOutlined style={{ fontSize: 18, verticalAlign: 'sub' }} /> 加入购物车
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
