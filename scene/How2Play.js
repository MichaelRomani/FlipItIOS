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
        source={require('../assets/Main-Background.png')}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            How to Play Flip Title
              </Text>
          <View >
            <Text style={styles.text}>
              {'\n'}
              {/* '.........' */}
            </Text>
          </View>
        </View>
      </Image>
    );
  }
}

export default Instructions;
