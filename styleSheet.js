import { StyleSheet } from 'react-native';

export const styleApp = (height, width) => {
  return StyleSheet.create({
    container: {
      paddingLeft: 120,
      paddingRight: 120
    },
    button: {
      paddingBottom: 10,
      paddingTop: 10,
      backgroundColor: '#6b92b9'
    },
    background: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      flex: 1
    },
    image: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height
    },
    flipLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 160
    },
    text: {
      textAlign: 'center',
      color: 'white',
      fontSize: 37
    },
    title: {
      backgroundColor: '#6b92b9',
      textAlign: 'center',
      position: 'relative',
      bottom: '16%',
      color: 'white',
      fontSize: 45
    }
  })
}
