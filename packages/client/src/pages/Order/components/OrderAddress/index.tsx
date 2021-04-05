import React, { FC } from 'react';
import { range, map } from 'lodash';
import styles from './style.less';
import { PlusOutlined } from '@ant-design/icons';

const OrderAddress: FC = () => {
  return (
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
                    onClick={() => {
                      console.log('123123');
                    }}>
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
        <div className="address-add">
          <p className="add-text">
            <span className="add-icon">
              <PlusOutlined />
            </span>
            <span className="content">新增收货地址</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderAddress;
