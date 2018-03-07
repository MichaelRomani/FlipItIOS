import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'native-base';
import store, { setBoard, setDimensions } from '../components/store/store';
import Dimensions from 'Dimensions';
const { height, width } = Dimensions.get('window');
const tHeight = height;
const tWidth = width;
class Menu extends Component {

  render() {
    let styles = StyleSheet.create({
      container: {
        justifyContent: 'center'
      },
      text: {
        fontSize: (tHeight < 900) ? 22 : (tHeight - 250) / 45,
        fontWeight: '900',
        color: 'black',
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        paddingLeft: 65,
        paddingRight: 63,
        paddingTop: (tHeight < 900) ? 8 : (tHeight - 250) / 70,
        paddingBottom: (tHeight < 900) ? 8 : (tHeight - 250) / 70,
        borderColor: 'black',
        textAlign: 'center'
      },
      image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: tWidth,
        height: tHeight
      },
      button: {
        marginTop: (tHeight < 900) ? (tHeight - 205) / 169 : (tHeight - 250) / 26,
        marginBottom: (tHeight < 900) ? - (tHeight - 205) / 135 : 0,
      }
    });
    let buttonArr = [];
    for (let i = 2; i < 8; i++) {
      buttonArr.push(
        <View>
          <Button
          large
            transparent
            light
            style={styles.button}
            onPress={() => {
              store.dispatch(setBoard({ width: i, height: i }));
              store.dispatch(setDimensions({ width: i, height: i }));
              this.props.navigation.navigate('GameScreen');
            }}
          >
            <Text style={styles.text}>
              {i}X{i}
            </Text>
          </Button>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../images/pastel.jpg')}
        >
          {buttonArr.map(button => button)}
          <Text>{'\n'}</Text>
        </Image>
      </View>
    );
  }
}

export default Menu;
