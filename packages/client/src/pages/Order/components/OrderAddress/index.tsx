import React, { FC } from 'react';
import { map, get } from 'lodash';
import styles from './style.less';
import { PlusOutlined } from '@ant-design/icons';
import AddressModal from '@src/components/biz/AddressModal';
import { useSetRecoilState } from 'recoil';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import { useRequest, useUnmount } from 'ahooks';
import { defaultClientAddressModalModelState } from '@src/components/biz/AddressModal/model/consts';
import { handleOpenAddressModalHelper } from '@src/pages/Order/components/OrderAddress/helper';
import { getAddressListRequest } from '@src/pages/Order/service';
import { Spin } from 'antd';

const OrderAddress: FC = () => {
  const setModalState = useSetRecoilState(clientAddressModalModel);
  const { data: res, loading, refresh } = useRequest(getAddressListRequest);
  const addressList = get(res, 'data', []);
  console.log(addressList);

  // 注销组件的时候， 清空数据
  useUnmount(() => {
    setModalState(defaultClientAddressModalModelState);
  });

  return (
    <>
      <div className={styles.orderAddressContainer}>
        <h3>收获地址</h3>
        <Spin spinning={loading}>
          <div className="address-list">
            {/* address - item */}
            {map(addressList, item => {
              return (
                <div key={item.id} className="address-item">
                  <p className="info">
                    <span className="name">{get(item, 'addressee_name')}</span>
                    <span className="handle">
                      <a
                        style={{ marginRight: 6 }}
                        onClick={() =>
                          handleOpenAddressModalHelper({
                            params: {
                              title: '修改',
                              type: 'edit',
                              addressInfo: { ...item, address_name: get(item, 'addressee_name') },
                            },
                            setModalState,
                          })
                        }>
                        修改
                      </a>

                      <a style={{ marginRight: 6, color: '#ef7575' }}>删除</a>

                      <a>设为默认</a>
                    </span>
                  </p>
                  <p className="phone">{get(item, 'mobile')}</p>
                  <p className="address-desc">{get(item, 'province')}</p>
                  <p className="address-desc">{get(item, 'address_detail')}</p>
                </div>
              );
            })}

            {/* address - add */}
            <div onClick={() => handleOpenAddressModalHelper({ setModalState })} className="address-add">
              <p className="add-text">
                <span className="add-icon">
                  <PlusOutlined />
                </span>
                <span className="content">新增收货地址</span>
              </p>
            </div>
          </div>
        </Spin>
      </div>

      <AddressModal model={clientAddressModalModel} defaultModelState={defaultClientAddressModalModelState} />
    </>
  );
};

export default OrderAddress;
