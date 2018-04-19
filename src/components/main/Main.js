import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Button, Input } from '../common';

const instructions = Platform.select({
  ios: 'Comig soon!',
  android: 'Coming soon!',
});


class Main extends Component {

  render() {
    const { containerStyle, welcomeStyle, instructionsStyle } = styles;

    return (
      <Card style={containerStyle}>
        <Text style={welcomeStyle}>
          Welcome to Kawa Demo!
        </Text>
        <Text style={instructionsStyle}>
          To get started, enter your name.
        </Text>
        <Text style={instructionsStyle}>
          {instructions}
        </Text>
        <CardSection>
          <Button onPress={() => Actions.main()}>
            Create My River
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => Actions.rivers()}>
            My Rivers
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => Actions.info()}>
            Help/Info
          </Button>
        </CardSection>
      </Card >
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeStyle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  instructionsStyle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Main