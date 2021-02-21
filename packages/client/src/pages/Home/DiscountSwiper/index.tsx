import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { range, map } from 'lodash';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import styles from './style.less';
import './min.css';

import React, { FC } from 'react';
import DiscountItem from '@src/pages/Home/DiscountItem';
import ProductCard from '@src/components/biz/ProductCard';

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
        <DiscountItem />

        <Swiper
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          navigation={{ nextEl: '.discount-category-button-next', prevEl: '.discount-category-button-prev' }}
          slidesPerView={4}
          spaceBetween={26}
          slidesPerGroup={4}
          loop
          loopFillGroupWithBlank
          onSwiper={swiper => console.log(swiper)}
          onChange={value => console.log('on change value: ', value)}
          className="swiper-wrapper">
          {map(range(1, 12), item => {
            return (
              <SwiperSlide key={item} className="swiper-slide">
                <ProductCard hasDiscount={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountSwiper;
