import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

const InitialState={
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  value: [0,0],
  corrent: 0,
}

export default class App extends Component{
  state={ ...InitialState }

  addDigi = n =>{
    //Evita que mais de um "." seja adicionado
    if(n == '.' && this.state.displayValue.includes('.')){
      return
    }

    //Testa se tiver apenas o "0" no display ele receber "True" (na realidade 0 deixando de ser "false")
    //caso não seja "0" ele recebe "false" (ou melhor dizendo se mantendo com mesmo valor), para não limpar o display
    clearDisplay = this.state.displayValue === '0'|| 
      this.state.clearDisplay

    //Testa se o clearDisplay for "0" o displayValue recebe "" limpando o display, caso não seja 
    //ele será "false" o display mantem o que esta nela para adicionar o proximo numero
    const currentValue = clearDisplay ? '' : this.state.displayValue

    //Adiciona um numero atras do outro
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false})
  }
  clearMemory = () =>{
    //reseta o state
    this.setState({...InitialState})
  }
  setOperation = operation =>{
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label='ac' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={this.setOperation}/>
          <Button label='7' onClick={this.addDigi}/>
          <Button label='8' onClick={this.addDigi}/>
          <Button label='9' onClick={this.addDigi}/>
          <Button label='*' operation onClick={this.setOperation}/>
          <Button label='4' onClick={this.addDigi}/>
          <Button label='5' onClick={this.addDigi}/>
          <Button label='6' onClick={this.addDigi}/>
          <Button label='-' operation onClick={this.setOperation}/>
          <Button label='1' onClick={this.addDigi}/>
          <Button label='2' onClick={this.addDigi}/>
          <Button label='3' onClick={this.addDigi}/>
          <Button label="+" operation onClick={this.setOperation}/>
          <Button label='0' double onClick={this.addDigi}/>
          <Button label='.' onClick={this.addDigi}/>
          <Button label='=' operation onClick={this.setOperation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
