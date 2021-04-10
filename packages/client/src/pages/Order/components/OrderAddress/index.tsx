import React, { FC } from 'react';
import { range, map, isEmpty } from 'lodash';
import styles from './style.less';
import { PlusOutlined } from '@ant-design/icons';
import AddressModal from '@src/components/biz/AddressModal';
import { useSetRecoilState } from 'recoil';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import { usePersistFn, useUnmount } from 'ahooks';
import produce from 'immer';
import { defaultClientAddressModalModelState } from '@src/components/biz/AddressModal/model/consts';
import { ClientAddressModalModelState } from '@src/components/biz/AddressModal/model/interface';

const OrderAddress: FC = () => {
  const setModalState = useSetRecoilState(clientAddressModalModel);

  // 打开模态框
  const handleOpenAddressModal = usePersistFn((params?: Partial<ClientAddressModalModelState>) => {
    if (isEmpty(params)) {
    }

    return setModalState(
      produce(draft => {
        draft.visible = true;
      }),
    );
  });

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
                    <a onClick={() => handleOpenAddressModal({ title: '修改' })}>修改</a>
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
          <div onClick={handleOpenAddressModal} className="address-add">
            <p className="add-text">
              <span className="add-icon">
                <PlusOutlined />
              </span>
              <span className="content">新增收货地址</span>
            </p>
          </div>
        </div>
      </div>

      <AddressModal />
    </>
  );
};

export default OrderAddress;
