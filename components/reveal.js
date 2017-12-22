// import React, { Component } from 'react'
// import { View, Text, AsyncStorage } from 'react-native'
// import { Button } from 'native-base'
// import { connect } from 'react-redux'
// import { reset, setBoard, setCount } from './store/store'

// class Reset extends Component {
//   constructor(props) {
//     super(props)
//     this.displayData = this.displayData.bind(this)
//   }

//   displayData = async () => {
//     try {
//       let moves_2X2 = await AsyncStorage.getItem('key_bestMoves_2x2')
//       let moves_4X4 = await AsyncStorage.getItem('key_bestMoves_4x4')
//       alert(moves_4X4)
//     } catch (error) {
//       alert(error)
//     }
//   }

//   render() {
//     return (
//       <View>
//         <Button
//           transparent
//           light
//           onPress={() => {
//             this.displayData()
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 16,
//               fontWeight: 'bold',
//               textAlign: 'center'
//             }}
//             key="moveCount"
//           >
//             Display Stats
//           </Text>
//         </Button>
//       </View>
//     )
//   }
// }

// const mapState = state => {
//   return {
//     dimensions: state.dimensions,
//     count: state.count
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     reset: () => dispatch(reset()),
//     setBoard: board => dispatch(setBoard(board)),
//     setCount: num => dispatch(setCount(num))
//   }
// }

// export default connect(mapState, mapDispatch)(Reset)
