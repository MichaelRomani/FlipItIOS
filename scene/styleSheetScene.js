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

export const styleMenu = (height, width) => {
  return StyleSheet.create({
    image: {
      flex: 1,
      position: 'absolute',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height
    },
    text: {
      color: 'white',
      fontSize: (height < 900) ? 23 : (height - 250) / 45,
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
}

export const styleGameStats = (height, width) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    row: {
      marginTop: 80,
      backgroundColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
      height: 50,
      marginLeft: 35,
      marginRight: 35
    },
    text1: {
      marginTop: 5,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 28,
      color: 'white'
    },
    mainRows: {
      marginTop: 8,
      backgroundColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
      borderColor: 'white',
      height: 30,
      marginLeft: 35,
      marginRight: 35
    },
    colStyle: { borderWidth: 1, borderColor: 'white', },
    textCenter: { textAlign: 'center', color: 'white' },
    mainImage: {
      width: width,
      height: height
    },
    buttonText: {
      fontSize: 24,
      fontWeight: '900',
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0)',
      paddingLeft: 25,
      paddingRight: 23,
      paddingTop: (height < 800) ? (height - 200) / 26 : (height - 50) / 26,
      paddingBottom: (height < 800) ? (height - 150) / 26 : (height - 50) / 26,
      borderColor: 'black',
      width: (height < 800) ? (height - 200) / 2 : (height) / 4,
      textAlign: 'center'
    }
  })
}
