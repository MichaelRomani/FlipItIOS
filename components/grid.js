import React, { Component } from 'react';
import { Image, View, StyleSheet, Text, Animated } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import Squares from './squares';
import { connect } from 'react-redux';
import Reset from './reset';
import Timer from './timer2';
import { setCount, reset } from './store/store';
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

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    const { dimensions, gridArray, count, completedTime } = this.props;
    const boardSquareSize = width * 0.81 / dimensions.width;
    const gameBoardSquares = dimensions.width * dimensions.height;

    let rowButtons = [];
    let tableData = [];
    for (let i = 0; i < gameBoardSquares; i++) {
      rowButtons.push(<Squares sqNum={i} size={boardSquareSize} />);
      if ((i + 1) % dimensions.width === 0) {
        tableData.push(rowButtons);
        rowButtons = [];
      }
    }
    const rowWidth = dimensions.width * boardSquareSize + dimensions.width * 2;
    const styles = StyleSheet.create({
      text: { marginLeft: 5 },
      row: { height: boardSquareSize, width: rowWidth },
      backgroundGif: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height
      },
      text3: {
        color: 'white',
        fontSize: 65,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
      },
      text2: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
      }
    });
    if (gridArray.indexOf(true) === -1) {
      setTimeout(() => {
        this.setState({ win: true });
      }, 1100);
    }
    if (this.props && gridArray.indexOf(true) === -1) {
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0,
          duration: 700,
        }
      ).start();
    }
    const { fadeAnim } = this.state;
    return (
      <View>
        {this.state.win ? (
          <Image
            style={styles.backgroundGif}
            source={require('../images/3201.jpg')}
          >
            <Text style={styles.text2}>Level Complete{'\n'}</Text>
            <Text style={styles.text2}>Total Moves: {count}{'\n'}</Text>
            <Text style={styles.text2}>Total Time: {completedTime}</Text>
          </Image>
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
                <Table borderStyle={{
                  borderWidth: 0,
                  borderColor: 'white'
                }}>
                  <Rows
                    data={tableData}
                    style={styles.row}
                  />
                </Table>
                <Text style={{ fontSize: 5 }}>{'\n'}</Text>
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
