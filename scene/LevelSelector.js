import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'native-base';
import store, { setBoard, setDimensions } from '../components/store';
import Dimensions from 'Dimensions';
const { height, width } = Dimensions.get('window');

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [2, 3, 4, 5, 6, 7]
    }
  }

  render() {
    let styles = StyleSheet.create({
      container: {
        justifyContent: 'center'
      },
      text: {
        fontSize: (height < 900) ? 22 : (height - 250) / 45,
        fontWeight: '900',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        paddingLeft: 65,
        paddingRight: 63,
        paddingTop: (height < 900) ? 8 : (height - 250) / 70,
        paddingBottom: (height < 900) ? 8 : (height - 250) / 70,
        borderColor: 'white',
        textAlign: 'center'
      },
      image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height
      },
      button: {
        marginTop: (height < 900) ? (height - 205) / 169 : (height - 250) / 26,
        marginBottom: (height < 900) ? - (height - 205) / 135 : 0,
      }
    });

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
        <Text>{'\n'}</Text>
      </Image>
    );
  }
}

export default Menu;
