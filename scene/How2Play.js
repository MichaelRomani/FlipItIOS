import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
const Dimensions = require('Dimensions');
let { height, width } = Dimensions.get('window');
let tHeight = height;
let tWidth = width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 50,
    paddingLeft: 50
  },
  text: {
    backgroundColor: '#6b92b9',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontSize: (tHeight < 800) ? (tHeight - 200) / 26 : (tHeight - 50) / 26,
  },
  title: {
    paddingTop: 10,
    backgroundColor: '#6b92b9',
    textAlign: 'center',
    color: 'black',
    fontSize: tHeight / 24,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  }
});
class Instructions extends Component {
  render() {
    return (
         <Image
         style={styles.image}
          source={require('../images/2590-Dark.jpg')}
        >
        <View style={styles.container}>
              <Text style={styles.title}>
                How to Play Flip Title
              </Text>
              <View >
              <Text style={styles.text}>
              {'\n'}
              Object of the game is to make it so that each tile of the game board is green.
              The tiles of the board can either be red or green.
              Each time you click on a tile it will flip the tile to the opposite color. In addition
              to flipping the tile to a new color it will also flip the neighboring tiles (excluding diagonally adjacent tiles).
              {'\n'}{'\n'}
              The number of moves and how long you take is being tracked, so do your best! Global
              ranking is to come, so start practicing.
              {'\n'}{'\n'}
              By the way: the tile images will change as holidays and the seasons change, so check out the new themes when they happen.
              {'\n'}
          </Text>
              </View>
              </View>
        </Image>
    );
  }
}

export default Instructions;
