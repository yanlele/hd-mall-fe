import React, { FC } from 'react';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { navigateTo } from '@tarojs/taro';
import './style.less';

const Index: FC = () => {
  return (
    <View className="indexPageContainer">
      <View className="navigateButton">
        <AtButton
          onClick={() => navigateTo({
            url: '/pages/demo/index?name=yanle',
          })}
          type="primary"
        >
          页面跳转
        </AtButton>
      </View>
    </View>
  );
};

export default Index;
