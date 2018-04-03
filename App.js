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
import How2Play from './scene/How2Play'
import About from './scene/About'
import GameStats from './scene/GameStats'
import { styleApp } from './styleSheet'
const Dimensions = require('Dimensions')
const { height, width } = Dimensions.get('window')

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 0,
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0,
    }
    this.play = this.play.bind(this)
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();                        // Starts the animation
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
  How2Play: {
    screen: How2Play
  },
  GameStats: {
    screen: GameStats
  },
  About: {
    screen: About
  }
})

export default ModalStack

