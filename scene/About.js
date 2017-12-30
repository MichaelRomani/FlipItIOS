import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

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
    fontSize: 25,
  },
  title: {
    paddingTop: 10,
    backgroundColor: '#6b92b9',
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  }
});
class About extends Component {
  render() {
    return (
         <Image
         style={styles.image}
          source={require('../images/backgroundSnow.png')}
        >
        <View style={styles.container}>
              <Text style={styles.title}>
              About Us
              </Text>
              <View >
              <Text style={styles.text}>
              {'\n'}
              This game was created by Andrew Ziegler and Mike Romani
          </Text>
              </View>
              </View>
        </Image>
    );
  }
}

export default About;
