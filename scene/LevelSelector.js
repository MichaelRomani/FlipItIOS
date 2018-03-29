import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import store, { setBoard, setDimensions } from '../components/store';
import Dimensions from 'Dimensions';
import { styleLevelSelector } from './styleSheetScene'
const { height, width } = Dimensions.get('window');

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [2, 3, 4, 5, 6, 7]
    }
  }

  render() {
    let styles = styleLevelSelector(height, width)

    return (
      <Image
        style={styles.image}
        source={require('../assets/Main-Background.png')}
      >
        {this.state.buttons.map(squares => {
          return (
            <View
              style={styles.container}
              key={squares}
            >
              <Button
                key={squares}
                large
                transparent
                light
                style={styles.button}
                onPress={() => {
                  store.dispatch(setBoard({ width: squares, height: squares }));
                  store.dispatch(setDimensions({ width: squares, height: squares }));
                  this.props.navigation.navigate('GameScreen');
                }}
              >
                <Text
                  style={styles.text}
                >
                  {squares}X{squares}
                </Text>
              </Button>
            </View>
          )
        })}
      </Image>
    );
  }
}

export default Menu;
