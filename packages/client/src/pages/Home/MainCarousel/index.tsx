import React, { FC } from 'react';
import { Carousel } from 'antd';
import styles from './style.less';

/**
 * 轮播图
 * @constructor
 */
const MainCarousel: FC = () => {
  return (
    <Carousel className={styles.contentStyle} autoplay>
      <div>
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4169903443,3117341515&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F0a3b452ac40364c9ae33724335e3fe42c40407e3.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616426997&t=62c7c2f0cec66a21be58ac9af5bfacaf"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-2806475328-2A182898B7D3F283E372DFD72DE1FCF5%2F0%3Ffmt%3Djpg%26size%3D65%26h%3D608%26w%3D900%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616427007&t=646ee2ea0cbd2de9eb4c03890920c680"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3587915247,1520765781&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
