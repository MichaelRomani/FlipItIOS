import React, { Component } from 'react'
import {
  View,
  Text,
  AsyncStorage,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { styleYouWon } from './styleSheet'
import Dimensions from 'Dimensions';
const { height, width } = Dimensions.get('window');

let tHeight = height
let tWidth = width

class youWon extends Component {
  constructor(props) {
    super(props)
    this.seeStats = this.seeStats.bind(this)
  }

  componentDidMount() {
    this.seeStats()
  }

  seeStats = async () => {
    console.log('called')
    try {
      const { count, dimensions, completedTime } = this.props;
      const boardSize = dimensions.height.toString();
      console.log('boardsize', boardSize)
      await AsyncStorage.setItem(boardSize, count.toString())
      await AsyncStorage.setItem(`${boardSize}Time`, completedTime.toString())
      let currentStatMoves = await AsyncStorage.getItem(boardSize)
      let currentStatTime = await AsyncStorage.getItem(`${boardSize}Time`)
      console.log(currentStatMoves, 'asdfasfsaf')
      console.log(currentStatTime, 'currentstattime')
      //compare current vs incoming moves stat, save incoming if better performance than current
    } catch (error) { }
  }
  render() {
    const styles = styleYouWon(tWidth, tHeight)
    const { count, completedTime } = this.props;
    return (
      <View >
        <Image
          style={styles.backgroundGif}
          source={require('../images/3201.jpg')}
        >
          <Text style={styles.text}>Level Complete{'\n'}</Text>
          <Text style={styles.text}>Total Moves: {count}{'\n'}</Text>
          <Text style={styles.text}>Total Time: {completedTime}</Text>
        </Image>
      </View>
    )
  }
}

const mapstate = state => {
  return {
    moves: state.moves,
    dimensions: state.dimensions,

    count: state.count,
    completedTime: state.completedTime
  }
}

export default connect(mapstate)(youWon)
