import React, { FC, useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import './index.less';
import { RootState, Dispatch } from '../../store';
import { connect } from 'react-redux';
import { AtButton } from 'taro-ui';
import { navigateTo } from '@tarojs/taro';

const mapState = (state: RootState) => ({
  dolphins: state.dolphins,
  sharks: state.sharks,
});

const mapDispatch = (dispatch: Dispatch) => ({
  incrementDolphins: () => dispatch.dolphins.increment(1),
  incrementDolphinsAsync: dispatch.dolphins.incrementAsync,
  incrementSharks: () => dispatch.sharks.increment(1),
  incrementSharksAsync: () => dispatch.sharks.incrementAsync(1),
  incrementSharksAsync2: () =>
    dispatch({ type: 'sharks/incrementAsync', payload: 2 }),
});

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps

const Index: FC<Props> = props => {

  useEffect(() => {
    console.log('this.props', props);
  }, []);

  return (
    <View className="indexPageContainer">
      <view>
        <View>
          <Text className="at-article__h2">Dolphins</Text>
        </View>
        <View>
          <Text className="at-article__h3">{props.dolphins}</Text>
        </View>
        <View className="at-row">
          <AtButton className="at-col-6" size="small" onClick={props.incrementDolphins}>+1</AtButton>
          <AtButton className="at-col-6" size="small" onClick={props.incrementDolphinsAsync}>Async +1</AtButton>
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

export default connect(mapState, mapDispatch)(Index);
