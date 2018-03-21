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
    //change bool to another name
    const { countNum, dimensions, iNum, bool } = this.props;
    this.props.setCount(countNum + 1);
    this.setBoard(dimensions, iNum, bool)
  }

  setBoard(dimensions, iNum, bool) {
    const totalSquares = dimensions.width * dimensions.height;
    let tempArr = bool.slice();
    tempArr.splice(iNum, 1, !bool[iNum]);
    if (iNum - 1 >= 0 && iNum % dimensions.width !== 0) tempArr.splice(iNum - 1, 1, !bool[iNum - 1]);
    if (iNum + 1 !== dimensions.width && (iNum + 1) % dimensions.width !== 0) tempArr.splice(iNum + 1, 1, !bool[iNum + 1]);
    if (iNum < totalSquares) {
      if (iNum - dimensions.width >= 0) tempArr.splice(iNum - dimensions.width, 1, !bool[iNum - dimensions.width]);
    }
    if (iNum < totalSquares) {
      if (iNum + dimensions.width < totalSquares) tempArr.splice(iNum + dimensions.width, 1, !bool[iNum + dimensions.width]);
    }
    this.props.newArray(tempArr);
  }

  render() {
    const { size } = this.props;
    const displayBool = !!this.props.bool[this.props.iNum];
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
    bool: state.bool,
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
