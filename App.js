import React, { Component } from 'react'
import {
  Animated,
  TouchableOpacity,
  Image
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './components/store'
import Menu from './scene/Menu'
import GameScreen from './scene/GameScreen'
import LevelSelector from './scene/LevelSelector'
import GameStats from './scene/GameStats'
import { styleApp } from './styleSheet'
import { PropTypes } from 'prop-types'

const Dimensions = require('Dimensions')
const { height, width } = Dimensions.get('window')

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 0,
      fadeAnim: new Animated.Value(0),
    }
    this.play = this.play.bind(this)
  }

  static PropTypes = {
    navigation: PropTypes.object
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1500,
      }
    ).start();
  }

  play() {
    this.props.navigation.navigate('Menu')
  }

  render() {
    const styles = styleApp(height, width);
    let { fadeAnim } = this.state;
    return (
      <Provider store={store}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image
            style={styles.image}
            source={require('./assets/Main-Background.png')}
          >
            <TouchableOpacity onPress={this.play}>
              <Image
                style={styles.flipLogo}
                source={require('./images/FLIPTILEcopy.png')}
              />
            </TouchableOpacity>
          </Image>
        </Animated.View>
      </Provider>
    )
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Menu: {
    screen: Menu
  },
  GameScreen: {
    screen: GameScreen
  },
  LevelSelector: {
    screen: LevelSelector
  },
  GameStats: {
    screen: GameStats
  },
})

export default ModalStack
