import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
const { height, width } = Dimensions.get('window');
const tHeight = height;
const tWidth = width;

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
    fontSize: (tHeight < 800) ? (tHeight - 100) / 20 : (tHeight - 50) / 20,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  }
});
const About = () => {

  return (
    <Image
      style={styles.image}
      source={require('../assets/Main-Background.png')}
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

export default About;
