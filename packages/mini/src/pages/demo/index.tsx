import React, { FC, useEffect, useState } from 'react';
import { getCurrentInstance } from '@tarojs/taro';
import { View } from '@tarojs/components';

const Demo: FC = () => {
  const [paramsName, setParamsName] = useState('');

  useEffect(() => {
    setParamsName(getCurrentInstance().router?.params.name as string);
  }, [])

  return (
    <View>
      我是demo - {paramsName}
    </View>
  );
};

export default Demo;
