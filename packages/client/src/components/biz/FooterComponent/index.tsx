import React, { FC } from 'react';
import { Layout } from 'antd';
import styles from './style.less';
import { MessageOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const FooterComponent: FC = () => {
  // 图片url https://gitee.com/yanle-static/static/raw/master/hd-mall/1615735552006-footer-img1.png
  return (
    <Footer className={styles.footerContainer}>
      <div className="content">
        <img
          className="footer-image1"
          src="https://gitee.com/yanle-static/static/raw/master/hd-mall/1615735552006-footer-img1.png"
          alt="1"
        />

        <div className="content-right">
          <p>周一至周日 8:00 - 23:00</p>
          <p>240-3456-8888</p>
          <p className="connect">
            <span className="connect-left">
              <MessageOutlined />
            </span>
            <span>在线客服</span>
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
