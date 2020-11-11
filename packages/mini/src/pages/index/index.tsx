import React, { FC } from 'react';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { navigateTo } from '@tarojs/taro';
import './style.less';

const Index: FC = () => {
  return (
    <View className="indexPageContainer">
      <AtButton
        className="navigateButton"
        size="small"
        onClick={() => navigateTo({
          url: '/pages/demo/index?name=yanle',
        })}
        type="primary"
      >
        Demo
      </AtButton>

      <AtButton
        className="navigateButton"
        size="small"
        onClick={() => navigateTo({
          url: '/pages/home/index',
        })}
      >
        Home
      </AtButton>
    </View>
  );
};

export default Index;
