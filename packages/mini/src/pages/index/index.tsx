import React, { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import './index.less';
import { RootState, Dispatch } from '../../store';
import { connect } from 'react-redux';

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

class Index extends Component<Props> {
  componentDidMount() {
    console.log('this.props', this.props);
  }

  render() {
    return (
      <View >
        <view style={{ width: 120 }}>
          <View><Text>Dolphins</Text></View>
          <View><Text>{this.props.dolphins}</Text></View>
          <Button onClick={this.props.incrementDolphins}>+1</Button>
          <Button onClick={this.props.incrementDolphinsAsync}>Async +1</Button>
        </view>
        <View style={{ width: 200 }}>
          <View><Text>Sharks</Text></View>
          <View><Text>{this.props.sharks}</Text></View>
          <Button onClick={this.props.incrementSharks}>+1</Button>
          <Button onClick={this.props.incrementSharksAsync}>Async +1</Button>
          <Button onClick={this.props.incrementSharksAsync2}>Async +2</Button>
        </View>
        <View>
          <Text>Using Rematch Models</Text>
        </View>
      </View>
    );
  }
}

export default connect(mapState, mapDispatch)(Index);
