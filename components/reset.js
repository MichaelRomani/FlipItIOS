import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { styleReset } from './styleSheet'
import { reset, setBoard, setCount, setTime } from './store';

const Reset = (props) => {

  return (
    <View>
      <Button
        transparent
        light
        onPress={() => {
          props.resetBoard(props, props.dimensions.width, props.dimensions.height)
        }}
      >
        <Text
          style={styleReset}
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
    setTime: time => dispatch(setTime(time)),
    resetBoard: (props, boardWidth, boardHeight) => {
      props.setTime(Date.now());
      props.setBoard({
        width: boardWidth,
        height: boardHeight
      });
      props.setCount(0);
    }
  };
};

export default connect(mapState, mapDispatch)(Reset);
