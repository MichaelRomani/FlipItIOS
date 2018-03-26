import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Table,
  Rows
} from 'native-base'
import { View, StyleSheet, Image, AsyncStorage } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Dimensions from 'Dimensions'
const { height, width } = Dimensions.get('window')
const tHeight = height
const tWidth = width

export default class GameStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rerender: 0,
      displayStats: false
    }
    this.resetGameStats = this.resetGameStats.bind(this);
    this.limitPush = 0
    this.statArray = [
      <Row key={'array'} style={styles.row}>
        <Col style={styles.colStyle}>
          <Text style={styles.text1}>G a m e - S t a t s</Text>
        </Col>
      </Row>,
      <Row key={'array'} style={styles.mainRows}>
        <Col style={styles.colStyle}>
          <Text style={styles.textCenter}>Board</Text>
        </Col>
        <Col style={styles.colStyle}>
          <Text style={styles.textCenter}># Moves</Text>
        </Col>
        <Col style={styles.colStyle}>
          <Text style={styles.textCenter}>Time</Text>
        </Col>
      </Row>
    ]
  }

  componentWillMount = async () => {
    try {
      for (let i = 2; i < 8; i++) {
        let moveStat = await AsyncStorage.getItem(`${i}${i}`)
        let move_2Stat = await AsyncStorage.getItem(`${i}${i + 1}`)
        let timeStat = await AsyncStorage.getItem(`${i}${i}Time`)
        let time_2Stat = await AsyncStorage.getItem(`${i}${i + 1}Time`)
        if (this.limitPush < 1) {
          this.statArray.push(
            <View key={i}>
              <Row style={styles.mainRows}>
                <Col style={styles.colStyle}>
                  <Text style={styles.textCenter}>
                    {i}X{i}
                  </Text>
                </Col>
                <Col style={styles.colStyle}>
                  <Text style={styles.textCenter}>{moveStat || 'N/A'}</Text>
                </Col>
                <Col style={styles.colStyle}>
                  <Text style={styles.textCenter}>{timeStat || 'N/A'}</Text>
                </Col>
              </Row>
            </View>
          )
        }
      }
      this.limitPush++
      this.setState({ displayStats: !this.state.displayStats })
    } catch (error) {
      alert(error)
    }
  }

  resetGameStats = async () => {
    for (let i = 2; i < 8; i++) {
      await AsyncStorage.setItem(`${i}`, 'N/A');
      await AsyncStorage.setItem(`${i}Time`, 'N/A');
      this.setState({ rerender: this.state.rerender++ })
    }
  }

  render() {
    return (

      <Container style={styles.container}>
        <Image
          style={styles.mainImage}
          source={require('../assets/Main-Background.png')}
        >
          {this.state.rerender >= 0 ?
            <Content>
              {this.state.displayStats &&
                <Grid>{this.statArray.map(ele => ele)}</Grid>
              }
              <Button
                transparent
                light
                onPress={this.resetGameStats}>
                <Text style={styles.buttonText}>Reset Game Stats</Text>
              </Button>
            </Content>
            : null}
        </Image>
      </Container>

    )
  }
}

let styles = StyleSheet.create({
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
    width: tWidth,
    height: tHeight
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '900',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingLeft: 25,
    paddingRight: 23,
    paddingTop: (tHeight < 800) ? (tHeight - 200) / 26 : (tHeight - 50) / 26,
    paddingBottom: (tHeight < 800) ? (tHeight - 150) / 26 : (tHeight - 50) / 26,
    borderColor: 'black',
    width: (tHeight < 800) ? (tHeight - 200) / 2 : (tHeight) / 4,
    textAlign: 'center'
  }
})
