import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Card, CardSection, Button, Input } from '../components/common';

const instructions = Platform.select({
  ios: 'Comig soon!',
  android: 'Coming soon!',
});

export default class App extends Component<{}> {

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
        <Input 
          label="Name"
          placeholder="John"
        />
        </CardSection>
        <CardSection>
        <Button>
          Enter
        </Button>
        </CardSection>
      </Card>
    );
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
