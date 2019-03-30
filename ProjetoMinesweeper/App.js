import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Params from './src/params'

import Field from './src/components/Field'

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.instructions}>Tamanho da grade: 
          {Params.getRowAmount()} X {Params.getColumsAmount()}</Text>
        <Field/>
        <Field opened />
        <Field opened nearMine={1}/>
        <Field opened nearMine={2}/>
        <Field opened nearMine={3}/>
        <Field opened nearMine={4}/>
        <Field opened nearMine={6}/>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
