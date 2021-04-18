import React, { FC } from 'react';
import { range, map } from 'lodash';
import styles from './style.less';
import { PlusOutlined } from '@ant-design/icons';
import AddressModal from '@src/components/biz/AddressModal';
import { useSetRecoilState } from 'recoil';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import { useUnmount } from 'ahooks';
import { defaultClientAddressModalModelState } from '@src/components/biz/AddressModal/model/consts';
import { handleOpenAddressModalHelper } from '@src/pages/Order/components/OrderAddress/helper';

const OrderAddress: FC = () => {
  const setModalState = useSetRecoilState(clientAddressModalModel);

  // 注销组件的时候， 清空数据
  useUnmount(() => {
    setModalState(defaultClientAddressModalModelState);
  });

  return (
    <>
      <div className={styles.orderAddressContainer}>
        <h3>收获地址</h3>
        <div className="address-list">
          {/* address - item */}
          {map(range(3), (item, index) => {
            return (
              <div key={index} className="address-item">
                <p className="info">
                  <span className="name">胡大胖 - {item}</span>
                  <span className="handle">
                    <a
                      onClick={() =>
                        handleOpenAddressModalHelper({
                          params: { title: '修改', type: 'edit', addressInfo: { address_name: `胡大胖 - ${item}` } },
                          setModalState,
                        })
                      }>
                      修改
                    </a>
                  </span>
                </p>
                <p className="phone">15213498872</p>
                <p className="address-desc">
                  说到缴罚了开始就拉开激动啊偶尔不见阿尔里看不见拉开东方既白奥地利飞机杯拉肯德基封闭欧文人
                </p>
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
      </div>

      <AddressModal model={clientAddressModalModel} defaultModelState={defaultClientAddressModalModelState} />
    </>
  );
};

export default OrderAddress;
