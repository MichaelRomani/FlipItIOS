import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { newArray, setCount, setWinner } from './store';
import { styleSquares } from './styleSheet'

const Buttons = props => {

  const displayBool = !!props.gridArray[props.sqNum];
  const { size } = props;
  const styles = styleSquares(size)

  return (
    <View>
      <TouchableHighlight onPress={() => props.toggleColor(props)}>
        <View
          style={displayBool ? styles.imageStyleOff : styles.imageStyleOn}
        />
      </TouchableHighlight>
    </View>
  );

}

const mapstate = state => {
  return {
    gridArray: state.gridArray,
    dimensions: state.dimensions,
    count: state.count
  };
};

const mapDispatch = dispatch => {
  return {
    newArray: array => dispatch(newArray(array)),
    setCount: num => dispatch(setCount(num)),
    setWinner: won => dispatch(setWinner(won)),
    toggleColor: (props) => {
      const { count, dimensions, sqNum, gridArray } = props;
      props.setCount(count + 1);
      props.setBoard(props, dimensions, sqNum, gridArray)
    },
    setBoard: (props, dimensions, sqNum, gridArray) => {
      const totalSquares = dimensions.width * dimensions.height;
      let tempArr = gridArray.slice();
      tempArr.splice(sqNum, 1, !gridArray[sqNum]);
      if (sqNum - 1 >= 0 && sqNum % dimensions.width !== 0) tempArr.splice(sqNum - 1, 1, !gridArray[sqNum - 1]);
      if (sqNum + 1 !== dimensions.width && (sqNum + 1) % dimensions.width !== 0) tempArr.splice(sqNum + 1, 1, !gridArray[sqNum + 1]);
      if (sqNum < totalSquares) {
        if (sqNum - dimensions.width >= 0) tempArr.splice(sqNum - dimensions.width, 1, !gridArray[sqNum - dimensions.width]);
      }
      if (sqNum < totalSquares) {
        if (sqNum + dimensions.width < totalSquares) tempArr.splice(sqNum + dimensions.width, 1, !gridArray[sqNum + dimensions.width]);
      }
      props.newArray(tempArr);
    }
  };
};

export default connect(mapstate, mapDispatch)(Buttons);
