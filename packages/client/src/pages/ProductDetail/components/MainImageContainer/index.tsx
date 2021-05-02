import React, { FC, useEffect, useMemo, useState } from 'react';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { map, get } from 'lodash';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@src/style/swiper-min.css';
import styles from './style.less';
import { useRecoilValue } from 'recoil';
import getDetailInfoModel from '@src/pages/ProductDetail/model/getDetailInfoModel';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const MainImageContainer: FC = () => {
  const { detail } = useRecoilValue(getDetailInfoModel);
  const [mainImage, setMainImage] = useState('');
  useEffect(() => {
    setMainImage(get(detail, 'product_image_list.0.url'));
  }, [get(detail, 'product_image_list.0.url')]);

  const imageList = useMemo(() => map(get(detail, 'product_image_list'), item => get(item, 'url')), [
    get(detail, 'product_image_list'),
  ]);

  return (
    <div className={styles.mainImageContainer}>
      <div className="main-img">
        <img src={mainImage} alt="" />
      </div>
      <div className="img-list">
        <div className="image-prev">
          <LeftCircleOutlined />
        </div>
        <Swiper
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          navigation={{ nextEl: '.image-next', prevEl: '.image-prev' }}
          slidesPerView={5}
          spaceBetween={14}
          slidesPerGroup={5}
          loopFillGroupWithBlank
          onSwiper={swiper => console.log(swiper)}
          onChange={value => console.log('on change value: ', value)}
          className="swiper-wrapper">
          {map(imageList, (item, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <img onClick={() => setMainImage(item)} width={70} src={item} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="image-next">
          <RightCircleOutlined />
        </div>
      </div>
    </div>
  );
};

export default MainImageContainer;
