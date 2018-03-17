import React, { Component } from 'react'
import {
  Animated,
  AppRegistry,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native'
import Expo from 'expo'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './components/store/store'
import Menu from './scene/Menu'
import GameScreen from './scene/GameScreen'
import LevelSelector from './scene/LevelSelector'
import How2Play from './scene/How2Play'
import About from './scene/About'
import GameStats from './scene/GameStats'
const Dimensions = require('Dimensions')
let { height, width } = Dimensions.get('window')
let tHeight = height
let tWidth = width
console.disableYellowBox = true


let styles = StyleSheet.create({
  container: {
    paddingLeft: 120,
    paddingRight: 120
  },
  button: {
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#6b92b9'
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flex: 1
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: tWidth,
    height: tHeight
  },
  flipLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 37
  },
  title: {
    backgroundColor: '#6b92b9',
    textAlign: 'center',
    position: 'relative',
    bottom: '16%',
    color: 'white',
    fontSize: 45
  }
})
class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 0,
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0,
    }
    this.play = this.play.bind(this)
  }

  static navigationOptions = {
    title: 'Home'
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
    let { fadeAnim } = this.state;
    return (
      <Provider store={store}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image
            style={styles.image}
            source={require('./images/2590-Dark.jpg')}
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
