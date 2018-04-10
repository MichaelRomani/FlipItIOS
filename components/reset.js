import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { styleReset } from './styleSheet'
import { reset, setBoard, setCount, setTime } from './store';
import { PropTypes } from 'prop-types'

const Reset = (props) => {
  const { resetBoard, dimensions } = props
  return (
    <View>
      <Button
        transparent
        light
        onPress={() => {
          resetBoard(props, dimensions.width, dimensions.height)
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

Reset.propTypes = {
  dimensions: PropTypes.object,
  reset: PropTypes.func,
  setBoard: PropTypes.func,
  setCount: PropTypes.func,
  setTime: PropTypes.func,
  resetBoard: PropTypes.func
}

const mapState = state => {
  return {
    dimensions: state.dimensions,
  };
};

const mapDispatch = dispatch => {
  return {
    reset: () => dispatch(reset()),
    setBoard: board => dispatch(setBoard(board)),
    setCount: num => dispatch(setCount(num)),
    setTime: time => dispatch(setTime(time)),
    resetBoard: (props, boardWidth, boardHeight) => {
      const { setTime, setBoard, setCount } = props
      setTime(Date.now());
      setBoard({
        width: boardWidth,
        height: boardHeight
      });
      setCount(0);
    }
  };
};

export default connect(mapState, mapDispatch)(Reset);
