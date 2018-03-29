import { StyleSheet } from 'react-native';

export const styleGameScreen = {
  color: 'black',
  opacity: 1,
  zIndex: 1
}

export const styleLevelSelector = (height, width) => {
  return StyleSheet.create({
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
}
