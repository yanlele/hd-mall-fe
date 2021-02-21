import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { range, map } from 'lodash';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import styles from './style.less';
import './min.css';

import React, { FC } from 'react';

SwiperCore.use([Navigation, Pagination]);

const DiscountSwiper: FC = () => {
  return (
    <div className={styles.swiperContainer}>
      <header className="header">
        <h2>闪电限购</h2>
        <nav className="nav">
          <div className="discount-category-button-prev">
            <LeftOutlined />
          </div>
          <div className="discount-category-button-next">
            <RightOutlined />
          </div>
        </nav>
      </header>

      <div className="discount-container">
        <div className="discount-item">
          <p>nihao </p>
          <p>helle</p>
          <p>12312</p>
        </div>

        <Swiper
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          navigation={{ nextEl: '.discount-category-button-next', prevEl: '.discount-category-button-prev' }}
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop
          loopFillGroupWithBlank
          onSwiper={swiper => console.log(swiper)}
          onChange={value => console.log('on change value: ', value)}
          className="swiper-wrapper">
          {map(range(1, 12), item => {
            return (
              <SwiperSlide key={item} className="swiper-slide">
                {`Slide ${item}`}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountSwiper;
