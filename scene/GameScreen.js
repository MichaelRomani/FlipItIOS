import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Grid from '../components/grid';
import store from '../components/store/store';
import { Container, Content } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b92b9'
  },
  background: {
    opacity: 0.3,
    zIndex: 1,
    justifyContent: 'center',
    flex: 1
  },
  text: {
    color: 'black',
    opacity: 1,
    zIndex: 1
  },
  renderA: {},
  renderB: {}
});

export default class GameScreen extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Content>
            <View>
              <Grid style={styles.text} />
            </View>
          </Content>
        </Container>
      </Provider>
    );
  }
}
