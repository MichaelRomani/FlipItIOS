import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { newArray, setCount, setWinner } from './store/store';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.toggleColor = this.toggleColor.bind(this);
    this.setBoard = this.setBoard.bind(this);
  }

  toggleColor() {
    const { count, dimensions, sqNum, gridArray } = this.props;
    this.props.setCount(count + 1);
    this.setBoard(dimensions, sqNum, gridArray)
  }

  setBoard(dimensions, sqNum, gridArray) {
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
    this.props.newArray(tempArr);
  }

  render() {
    const { size } = this.props;
    const displayBool = !!this.props.gridArray[this.props.sqNum];
    const styles = StyleSheet.create({
      imageStyleOff: {
        width: size - 3,
        height: size - 5,
        backgroundColor: 'white'
      },
      imageStyleOn: {
        width: size - 3,
        height: size - 5,
        backgroundColor: 'rgba(0,0,0,0.11)'
      }
    });
    return (
      <View>
        <TouchableHighlight onPress={this.toggleColor}>
          {displayBool ? (
            <View
              style={styles.imageStyleOff}
            />
          ) : (
              <View
                style={styles.imageStyleOn}
              />
            )}
        </TouchableHighlight>
      </View>
    );
  }
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
    setWinner: won => dispatch(setWinner(won))
  };
};

export default connect(mapstate, mapDispatch)(Buttons);
