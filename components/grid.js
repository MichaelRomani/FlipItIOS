import React, { Component } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import Buttons from './buttons';
import { connect } from 'react-redux';
import Reset from './reset';
import Timer from './timer2';
import YouWon from './youWon';
import { setCount, reset } from './store/store';
import Dimensions from 'Dimensions';
let { height, width } = Dimensions.get('window');
const tHeight = height;
const tWidth = width;

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      win: false
    };
    this.num = 0;
  }

  componentWillMount() {
    this.props.setCount({ count: 0 });
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    let width = this.props.dimensions && this.props.dimensions.width;
    let height = this.props.dimensions && this.props.dimensions.height;
    const gamePieceSize = tWidth * 0.81 / width;
    const num = width * height;
    let rowButtons = [];
    let tableData = [];
    for (let i = 0; i < num; i++) {
      rowButtons.push(<Buttons iNum={i} size={gamePieceSize} />);
      if ((i + 1) % width === 0) {
        tableData.push(rowButtons);
        rowButtons = [];
      }
    }
    const rowWidth = width * gamePieceSize + width * 2;
    const styles = StyleSheet.create({
      text: { marginLeft: 5 },
      row: { height: gamePieceSize, width: rowWidth },
      backgroundGif: {
        justifyContent: 'center',
        alignItems: 'center',
        width: tWidth,
        height: tHeight
      },
      text2: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
      }
    });
    if (this.props && this.props.bool.indexOf(true) === -1) {
      setTimeout(() => {
        this.setState({ win: true });
      }, 1000);
    }
    return (
      <View>
        {this.state.win ? (
          <View>
            <YouWon />
            <Reset />
          </View>
        ) : (
          <Image
            style={styles.backgroundGif}
            source={require('../images/pastel.jpg')}
          >
            <Text style={styles.text2} key="moveCount">
              Moves: {this.props.count.count}
            </Text>
            <Table borderStyle={{ borderWidth: 0, borderColor: 'white' }}>
              <Rows
                data={tableData}
                style={styles.row}
              />
            </Table>
            <Text style={{ fontSize: 5 }}>{'\n'}</Text>

            <Timer />
            <Reset />
          </Image>
        )}
      </View>
    );
  }
}

const mapState = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions,
    count: state.count,
    won: state.won
  };
};

const mapDispatch = dispatch => {
  return {
    setCount: count => dispatch(setCount(count)),
    reset: () => dispatch(reset())
  };
};

export default connect(mapState, mapDispatch)(Grid);
