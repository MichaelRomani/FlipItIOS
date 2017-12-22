// import React, { Component } from 'react'
// import { TouchableOpacity, View, Text, AsyncStorage } from 'react-native'

// class Test extends Component {
//   render() {
//     return (
//       <View>
//         <TouchableOpacity onPress={this.saveData}>
//           <Text>Click to save data </Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this.displayData}>
//           <Text>Click to get data </Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
//   saveData() {
//     let user = 'Andrew'
//     let time = '4 days, 18 hours, 39 minutes, 20 seconds'
//     let bestMoves = '4'
//     AsyncStorage.setItem('key_User', user)
//     AsyncStorage.setItem('key_time', time)
//     AsyncStorage.setItem('key_bestMoves', bestMoves)
//   }

//   displayData = async () => {
//     try {
//       let user = await AsyncStorage.getItem('key_User')
//       let time = await AsyncStorage.getItem('key_time')
//       let moves = await AsyncStorage.getItem('key_bestMoves')
//       alert('test: ' + user + ' has played for: ' + moves)
//     } catch (error) {
//       alert(error)
//     }
//   }
// }

// export default Test
