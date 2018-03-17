import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button } from 'native-base';

const Dimensions = require('Dimensions');
let { height, width } = Dimensions.get('window');
let tHeight = height;
let tWidth = width;

class GameMenu extends Component {
  render() {
    const styles = StyleSheet.create({
      image: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: tWidth,
        height: tHeight
      },
      text: {
        color: 'white',
        fontSize: (tHeight < 900) ? 23 : (tHeight - 250) / 45,
        fontWeight: '900',
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        paddingLeft: 25,
        paddingRight: 23,
        paddingTop: 8,
        borderColor: 'white',
        width: 200,
        height: 40,
        textAlign: 'center'
      }
    });
    return (
      <View>
        <Image
          style={styles.image}
          source={require('../images/2590-Dark.jpg')}
        >
          <View>
            <Button
              large
              transparent
              light
              onPress={() => this.props.navigation.navigate('GameScreen')}
            >
              <Text style={styles.text}>Start</Text>
            </Button>
            <Button
              large
              transparent
              light
              onPress={() => this.props.navigation.navigate('LevelSelector')}
            >
              <Text style={styles.text}>Level Select</Text>
            </Button>
            <Button
              large
              transparent
              light
              onPress={() => this.props.navigation.navigate('How2Play')}
            >
              <Text style={styles.text}>How to Play</Text>
            </Button>
            <Button
              large
              transparent
              light
              onPress={() => this.props.navigation.navigate('GameStats')}
            >
              <Text style={styles.text}>Game Stats</Text>
            </Button>
            <Button
              large
              transparent
              light
              onPress={() => this.props.navigation.navigate('About')}
            >
              <Text style={styles.text}>About</Text>
            </Button>
            <Button
              large
              transparent
              light
              onPress={() => this.props.navigation.navigate('Test')}
              title="AsyncStorage Test"
            />
          </View>
        </Image>
      </View>
    );
  }
}

export default GameMenu;
