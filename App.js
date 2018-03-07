import React, { Component } from 'react'
import {
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
import GameSettings from './scene/GameSettings'
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
      color: 0
    }
    this.play = this.play.bind(this)
  }
  static navigationOptions = {
    title: 'Home'
  }

  play() {
    this.props.navigation.navigate('Menu')
  }

  render() {
    return (
      <Provider store={store}>
        <Image
          style={styles.image}
          source={require('./images/pastel.jpg')}
        >
          <TouchableOpacity onPress={this.play}>
            <Image
              style={styles.flipLogo}
              source={require('./images/FLIPTILEcopy.png')}
            />
          </TouchableOpacity>
        </Image>
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
  GameSettings: {
    screen: GameSettings
  },
  About: {
    screen: About
  }
})


export default ModalStack
