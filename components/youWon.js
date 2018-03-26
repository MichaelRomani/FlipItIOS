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
    try {
      const { moves, dimensions, completedTime } = this.props;
      console.log('here')
      for (let i = 2; i < 8; i++) {
        //Get current state for Moves
        let currentStatMoves = await AsyncStorage.getItem(`${i}${i}`)
        let currentStat_2Moves = await AsyncStorage.getItem(`${i}${i + 1}`)
        let currentStatTime = await AsyncStorage.getItem(`${i}${i}Time`)
        let currentStat_2Time = await AsyncStorage.getItem(`${i}${i + 1}Time`)
        //compare current vs incoming moves stat, save incoming if better performance than current
        if (
          dimensions.height === i &&
          dimensions.width === i &&
          (currentStatMoves > moves ||
            currentStatMoves === null ||
            currentStatMoves === 'N/A')
        ) {
          AsyncStorage.setItem(`${i}${i}`, moves.toString())
        }
        //compare current vs incoming moves stat, save incoming if better performance than current
        if (
          dimensions.height === i + 1 &&
          dimensions.width === i &&
          (currentStat_2Moves > moves ||
            currentStat_2Moves === null ||
            currentStatMoves === 'N/A')
        ) {
          AsyncStorage.setItem(`${i}${i + 1}`, moves.toString())
        }
        //compare current vs incoming time stat, save incoming if better performance than current
        if (
          dimensions.height === i &&
          dimensions.width === i &&
          (currentStatTime > gameTime ||
            currentStatTime === null ||
            currentStatMoves === 'N/A')
        ) {
          AsyncStorage.setItem(`${i}${i}Time`, gameTime.toString())
        }
        //compare current vs incoming time stat, save incoming if better performance than current
        if (
          dimensions.height === i + 1 &&
          dimensions.width === i &&
          (currentStat_2Time > gameTime ||
            currentStat_2Time === null ||
            currentStatMoves === 'N/A')
        ) {
          AsyncStorage.setItem(`${i}${i + 1}Time`, gameTime.toString())
        }
      }
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
