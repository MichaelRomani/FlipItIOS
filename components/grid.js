import React, { Component } from 'react';
import { Image, View, Text, Animated } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import Squares from './squares';
import { connect } from 'react-redux';
import Reset from './reset';
import Timer from './timer';
import YouWon from './youWon'
import { setCount, reset } from './store';
import { styleGrid } from './styleSheet'
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      win: false,
      fadeAnim: new Animated.Value(1)
    };
  }

  componentDidMount() {
    this.props.setCount(0);
  }

  componentDidUpdate() {
    const { gridArray } = this.props;

    //Display of game stats triggered by solving puzzle
    if (gridArray.indexOf(true) === -1 && !this.state.win) {
      setTimeout(() => {
        this.setState({ win: true });
      }, 1100);
    }

    //Fade out animation triggered by solving puzzle
    if (this.props && gridArray.indexOf(true) === -1) {
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0,
          duration: 700,
        }
      ).start();
    }
  }

  componentWillUnmount() {
    this.props.reset();
  }


  render() {
    const { dimensions, count } = this.props;
    const boardSquareSize = width * 0.81 / dimensions.width;
    const gameBoardSquares = dimensions.width * dimensions.height;
    const rowWidth = dimensions.width * boardSquareSize + dimensions.width * 2;
    const styles = styleGrid(boardSquareSize, rowWidth, width, height);

    const tableData = [];
    let rowButtons = [];
    for (let i = 0; i < gameBoardSquares; i++) {
      rowButtons.push(<Squares sqNum={i} size={boardSquareSize} />);
      if ((i + 1) % dimensions.width === 0) {
        tableData.push(rowButtons);
        rowButtons = [];
      }
    }

    const { fadeAnim, win } = this.state;
    return (
      <View>
        {win ? (
          <YouWon />
        ) : (
            <Image
              style={styles.backgroundGif}
              source={require('../images/3201.jpg')}
            >
              <Animated.View style={{
                opacity: fadeAnim,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={styles.text2} key="moveCount">
                  Moves: {count}
                </Text>
                <Table
                  borderStyle={{
                    borderWidth: 0
                  }}
                  style={styles.table}
                >
                  <Rows
                    data={tableData}
                    style={styles.row}
                  />
                </Table>
                <Timer />
                <Reset />
              </Animated.View>
            </Image>
          )}
      </View>
    );
  }
}

const mapState = state => {
  return {
    gridArray: state.gridArray,
    dimensions: state.dimensions,
    count: state.count,
    completedTime: state.completedTime
  };
};

const mapDispatch = dispatch => {
  return {
    setCount: count => dispatch(setCount(count)),
    reset: () => dispatch(reset())
  };
};

export default connect(mapState, mapDispatch)(Grid);
