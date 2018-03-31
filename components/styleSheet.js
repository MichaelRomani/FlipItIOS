import { StyleSheet } from 'react-native';


export const styleGrid = (boardSquareSize, rowWidth, width, height) => {
  return StyleSheet.create({
    text: {
      marginLeft: 5
    },
    text2: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    },
    text3: {
      color: 'white',
      fontSize: 65,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    },
    text4: {
      fontSize: 5,
      marginBottom: 10
    },
    row: {
      height: boardSquareSize,
      width: rowWidth
    },
    backgroundGif: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height * 0.92
    },
    table: {
      marginBottom: 20
    }
  });
}

export const styleYouWon = (width, height) => {
  return StyleSheet.create({
    backgroundGif: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height * 0.92
    },
    text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 60,
      opacity: 1
    },
    text2: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      opacity: 1
    },
    box1: {
      borderWidth: 20,
      borderColor: 'white',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      opacity: 0.75
    },
    box2: {
      borderWidth: 5,
      borderColor: 'white',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 70,
      paddingBottom: 70
    }
  });
}

export const styleSquares = (size) => {
  return StyleSheet.create({
    imageStyleOff: {
      width: size - 3,
      height: size - 5,
      backgroundColor: 'white'
    },
    imageStyleOn: {
      width: size - 3,
      height: size - 5,
      backgroundColor: 'rgba(0,0,0,0.11)'
    }
  });
}

export const styleReset = {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'rgba(0,0,0,0)'
}

export const styleTimer = {
  fontSize: 40,
  backgroundColor: 'rgba(0,0,0,0)',
  color: 'white',
  borderWidth: 3,
  paddingLeft: 10,
  paddingRight: 10,
  borderColor: 'white'
}
