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
import { styleGameStats } from './styleSheetScene'


const { height, width } = Dimensions.get('window')

export default class GameStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rerender: 0,
      displayStats: false,
      statArray: [
        <Row key={'array1'} style={styles.row}>
          <Col style={styles.colStyle}>
            <Text style={styles.text1}>G a m e - S t a t s</Text>
          </Col>
        </Row>,
        <Row key={'array2'} style={styles.mainRows}>
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
    const styles = styleGameStats(height, width)
    this.resetGameStats = this.resetGameStats.bind(this);
    this.limitPush = 0

  }

  componentDidMount = async () => {
    const styles = styleGameStats(height, width)
    try {
      for (let i = 2; i < 8; i++) {
        let moveStat = await AsyncStorage.getItem(`${i}`)
        let timeStat = await AsyncStorage.getItem(`${i}Time`)
        if (this.limitPush < 1) {
          this.setState({
            statArray: statArray.concat(
              [<View key={i}>
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
              </View>]
            )
          })
        }

        this.limitPush++
        this.setState({ displayStats: !this.state.displayStats })
      }
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
    const styles = styleGameStats(height, width)
    return (

      <Container style={styles.container}>
        <Image
          style={styles.mainImage}
          source={require('../assets/Main-Background.png')}
        >
          {this.state.rerender >= 0 ?
            <Content>
              {this.state.displayStats &&
                <Grid>{this.state.statArray.map(ele => ele)}</Grid>
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

