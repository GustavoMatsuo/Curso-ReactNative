import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonStyles from './src/commonStyles'

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontFamily: CommonStyles.fontFamily,
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
});
