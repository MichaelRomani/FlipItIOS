import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'native-base';
import { styleMenu } from './styleSheetScene'
import { PropTypes } from 'prop-types'
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
            onPress={() => props.navigation.navigate('GameStats')}
          >
            <Text style={styles.text}>Game Stats</Text>
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

GameMenu.PropTypes = {
  navigation: PropTypes.object
}

export default GameMenu;
