import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Grid from '../components/grid';
import store from '../components/store';
import { styleGameScreen } from './styleSheetScene'
import { Container, Content } from 'native-base';

const GameScreen = () => {
  return (
    <Provider store={store}>
      <Container>
        <Content>
          <View>
            <Grid style={styleGameScreen} />
          </View>
        </Content>
      </Container>
    </Provider>
  );
}

export default GameScreen;
