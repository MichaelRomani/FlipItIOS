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

class youWon extends Component {
  constructor(props) {
    super(props)
    this.seeStats = this.seeStats.bind(this)
  }

  componentDidMount() {
    this.seeStats()
  }

  seeStats = async () => {
    try {
      const { count, dimensions, completedTime } = this.props;
      const boardSize = dimensions.height.toString();
      const currentStatMoves = await AsyncStorage.getItem(boardSize)
      const currentStatTime = await AsyncStorage.getItem(`${boardSize}Time`)
      if (+currentStatMoves > count || currentStatMoves === 'N/A') await AsyncStorage.setItem(boardSize, count.toString())
      if (currentStatTime < completedTime || currentStatTime === 'N/A') await AsyncStorage.setItem(`${boardSize}Time`, completedTime.toString())
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const styles = styleYouWon(width, height)
    const { count, completedTime } = this.props;
    return (
      <View >
        <Image
          style={styles.backgroundGif}
          source={require('../images/3201.jpg')}
        >
          <View style={styles.box1}>
            <View style={styles.box2}>
              <Text style={styles.text}>Level Complete</Text>
              <Text style={styles.text}>Total Moves: {count}</Text>
              <Text style={styles.text2}>Total Time: {completedTime}</Text>
            </View>
          </View>
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
