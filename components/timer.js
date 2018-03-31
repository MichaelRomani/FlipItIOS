import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styleTimer } from './styleSheet'
import { setTime, completionTime } from './store';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.currentTime,
      gameTime: 0
    };
    this.tick = this.tick.bind(this);
  }

  componentWillMount() {
    setInterval(() => this.props.completionTime(this.state.gameTime), 1000);
    this.props.setTime(Date.now());
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentWillReceiveProps() {
    let elapsed = Math.round(this.state.seconds / 100);
    let seconds = (elapsed / 10).toFixed(1);
    const displaySeconds =
      Math.floor(seconds % 60) < 10
        ? '0'.concat(Math.floor(seconds) % 60)
        : Math.floor(seconds) % 60;
    const displayMinutes =
      Math.floor(seconds / 60).length > 1
        ? Math.floor(seconds / 60)
        : '0'.concat(Math.floor(seconds / 60));
    this.setState({ gameTime: displayMinutes + ':' + displaySeconds });
  }

  tick() {
    this.setState({ seconds: Date.now() - this.props.currentTime });
  }

  render() {
    return (
      <View>
        <Text style={styleTimer} >
          {this.state.gameTime}
        </Text>
      </View>
    );
  }
}

const mapState = state => {
  return {
    currentTime: state.currentTime,
    completedTime: state.completedTime
  };
};

const mapDispatch = dispatch => {
  return {
    setTime: time => dispatch(setTime(time)),
    completionTime: gameTime => dispatch(completionTime(gameTime))
  };
};

export default connect(mapState, mapDispatch)(Timer);
