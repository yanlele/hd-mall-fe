import React, { FC, useEffect, useState } from 'react';
import { getCurrentInstance } from '@tarojs/taro';
import { Text, View, Swiper, SwiperItem } from '@tarojs/components';
import { DemoProps } from '@src/pages/demo/interface';
import { AtButton } from 'taro-ui';
import { connect } from 'react-redux';
import { demoMapDispatch, demoMapState } from '@src/pages/demo/connectData';
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
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
    </View>
  );
};

export default connect(demoMapState, demoMapDispatch)(Demo);
