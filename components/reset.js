import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { reset, setBoard, setCount, setTime } from './store/store';

const Reset = (props) => {

  return (
    <View>
      <Button
        transparent
        light
        onPress={() => {
          props.setTime(Date.now());
          props.setBoard({
            width: props.dimensions.width,
            height: props.dimensions.height
          });
          props.setCount(0);
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0)'
          }}
          key="moveCount"
        >
          Reset Board
          </Text>
      </Button>
    </View>
  );
}

const mapState = state => {
  return {
    dimensions: state.dimensions,
    count: state.count
  };
};

const mapDispatch = dispatch => {
  return {
    reset: () => dispatch(reset()),
    setBoard: board => dispatch(setBoard(board)),
    setCount: num => dispatch(setCount(num)),
    setTime: time => dispatch(setTime(time))
  };
};

export default connect(mapState, mapDispatch)(Reset);
