import React, { FC, useState } from 'react';
import { Carousel } from 'antd';
import styles from './style.less';
import { useRequest, useUpdateEffect } from 'ahooks';
import { Link } from 'react-router-dom';
import { get, map } from 'lodash';
import { getBannerListRequest } from '@src/pages/Home/service';
import { BannerItem } from '@src/pages/Home/service/interface';

/**
 * 轮播图
 * @constructor
 */
const MainCarousel: FC = () => {
  const [list, setList] = useState<BannerItem[]>([]);
  const { data: res } = useRequest(getBannerListRequest);
  const bannerList = get(res, 'data', []);
  useUpdateEffect(() => {
    setList(bannerList);
  }, [bannerList]);

  return (
    <Carousel className={styles.contentStyle} autoplay>
      {map(list, item => (
        <div key={item.id}>
          {item.link ? (
            <Link to={item.link} target="_blank">
              <img src={item.url} alt={item.file_name} />
            </Link>
          ) : (
            <img src={item.url} alt={item.file_name} />
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
