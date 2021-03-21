import React, { FC } from 'react';
import { Layout } from 'antd';
import styles from './style.less';
import { MessageOutlined, QqOutlined, WechatOutlined, WeiboCircleOutlined } from '@ant-design/icons';

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

      <div className="content2">
        <div className="desc">了解商城 | 加入我们 | 联系我们 ｜ 问题反馈 | 经营许可证</div>
        <div className="desc icon-container">
          <WechatOutlined />
          <QqOutlined />
          <WeiboCircleOutlined />
        </div>
        <div className="right-desc">@2020 Daxiong Telecom Equipment reserved. 渝ICP16789043号 营业执照 法律声明</div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
