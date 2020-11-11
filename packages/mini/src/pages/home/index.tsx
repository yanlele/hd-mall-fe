import React, { FC } from 'react';
import { Image, Swiper, SwiperItem, View } from '@tarojs/components';
import './style.less';
import image01 from '@src/static/img/01.jpg';
import image02 from '@src/static/img/02.jpg';
import image03 from '@src/static/img/03.jpg';

const Home: FC = () => {
  return (
    <View className="homePageContainer">
      <View className="headerBannerBackground" />

      <Swiper
        className="swiperContainer"
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
        skipHiddenItemLayout
      >
        <SwiperItem>
          <Image className="image" src={image01} />
        </SwiperItem>
        <SwiperItem>
          <Image className="image" src={image02} />
        </SwiperItem>
        <SwiperItem>
          <Image className="image" src={image03} />
        </SwiperItem>
      </Swiper>
    </View>
  );
};

export default Home;
