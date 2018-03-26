import { StyleSheet } from 'react-native';


export const styleGrid = (boardSquareSize, rowWidth, width, height) => {
  return StyleSheet.create({
    text: {
      marginLeft: 5
    },
    row: {
      height: boardSquareSize,
      width: rowWidth
    },
    backgroundGif: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height
    },
    text3: {
      color: 'white',
      fontSize: 65,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    },
    text2: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    },
    text4: {
      fontSize: 5,
      marginBottom: 10
    },
    table: {
      marginBottom: 20
    },
  });
}

export const styleYouWon = (width, height) => {
  return StyleSheet.create({
    backgroundGif: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height
    },
    text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }
  });
}
