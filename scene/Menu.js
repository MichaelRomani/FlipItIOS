import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'native-base';
import { styleMenu } from './styleSheetScene'
const Dimensions = require('Dimensions');
const { height, width } = Dimensions.get('window');

export const GameMenu = (props) => {
  const styles = styleMenu(height, width)
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/Main-Background.png')}
      >
        <View>
          <Button
            large
            transparent
            light
            onPress={() => props.navigation.navigate('GameScreen')}
          >
            <Text style={styles.text}>Start</Text>
          </Button>
          <Button
            large
            transparent
            light
            onPress={() => props.navigation.navigate('LevelSelector')}
          >
            <Text style={styles.text}>Level Select</Text>
          </Button>
          <Button
            large
            transparent
            light
            onPress={() => props.navigation.navigate('How2Play')}
          >
            <Text style={styles.text}>How to Play</Text>
          </Button>
          <Button
            large
            transparent
            light
            onPress={() => props.navigation.navigate('GameStats')}
          >
            <Text style={styles.text}>Game Stats</Text>
          </Button>
          <Button
            large
            transparent
            light
            onPress={() => props.navigation.navigate('About')}
          >
            <Text style={styles.text}>About</Text>
          </Button>
          <Button
            large
            transparent
            light
            onPress={() => props.navigation.navigate('Test')}
            title="AsyncStorage Test"
          />
        </View>
      </Image>
    </View>
  );
}


export default GameMenu;
