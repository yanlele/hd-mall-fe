import React, { FC, useEffect, useState } from 'react';
import { getCurrentInstance } from '@tarojs/taro';
import { Text, View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { DemoProps } from '@src/pages/demo/interface';
import { AtButton } from 'taro-ui';
import { connect } from 'react-redux';
import { demoMapDispatch, demoMapState } from '@src/pages/demo/connectData';
import image01 from '@src/static/img/01.jpg';
import image02 from '@src/static/img/02.jpg';
import image03 from '@src/static/img/03.jpg';
import './style.less';

const Demo: FC<DemoProps> = props => {
  const [paramsName, setParamsName] = useState('');

  useEffect(() => {
    setParamsName(getCurrentInstance().router?.params.name as string);
  }, []);

  useEffect(() => {
    console.log('this.props', props);
  }, []);

  return (
    <View className="demoPageContainer">
      <view>
        <View>
          <Text className="at-article__h2">Dolphins</Text>
        </View>
        <View>
          <Text className="at-article__h3">{props.dolphins}</Text>
        </View>
        <View className="at-row at-row--wrap">
          <AtButton className="at-col-6" size="small" onClick={props.incrementDolphins}>+1</AtButton>
          <AtButton className="at-col-6" size="small" onClick={props.subtractDolphinsAction}>-1</AtButton>
          <AtButton className="at-col-6" size="small" onClick={props.incrementDolphinsAsync}>Async +1</AtButton>
          <AtButton className="at-col-6" size="small" onClick={props.subtractDolphinsAsync}>Async -1</AtButton>
        </View>
      </view>
      <View>
        <View>
          <Text className="at-article__h2">Sharks</Text>
        </View>
        <View>
          <Text className="at-article__h3">{props.sharks}</Text>
        </View>
        <View className="at-row">
          <AtButton className="at-col-4" size="small" onClick={props.incrementSharks}>+1</AtButton>
          <AtButton className="at-col-4" size="small" onClick={props.incrementSharksAsync}>Async +1</AtButton>
          <AtButton className="at-col-4" size="small" onClick={props.incrementSharksAsync2}>Async +2</AtButton>
        </View>
      </View>
      <View>
        <Text className="paramsName">{paramsName}</Text>
      </View>
      <View style={{ borderRadius: '35px' }}>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
          skipHiddenItemLayout
        >
          <SwiperItem>
            <View>
              <Image className="image" src={image01} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View>
              <Image className="image" src={image02} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View>
              <Image className="image" src={image03} />
            </View>
          </SwiperItem>
        </Swiper>
      </View>

      <View style={{ borderRadius: '35px' }}>
        <Image className="image" src={image01} />
      </View>
    </View>
  );
};

export default connect(demoMapState, demoMapDispatch)(Demo);
