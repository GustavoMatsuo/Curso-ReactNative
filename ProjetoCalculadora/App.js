import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

const InitialState={
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0,
}

export default class App extends Component{
  state={ ...InitialState }

  addDigi = n =>{
    //Testa se tiver apenas o "0" no display ele receber "True" (na realidade 0 deixando de ser "false")
    //caso não seja "0" ele recebe "false" (ou melhor dizendo se mantendo com mesmo valor), para não limpar o display
    const clearDisplay = this.state.displayValue === '0'|| 
      this.state.clearDisplay

    //Evita que mais de um "." seja adicionado
    if(n == '.' && !clearDisplay && this.state.displayValue.includes('.')){
      return
    }

    //Testa se o clearDisplay for "0" o displayValue recebe "" limpando o display, caso não seja 
    //ele será "false" o display mantem o que esta nela para adicionar o proximo numero
    const currentValue = clearDisplay ? '' : this.state.displayValue

    //Adiciona um numero atras do outro
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false})

    if(n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }
  }
  clearMemory = () =>{
    //reseta o state
    this.setState({...InitialState})
  }
  setOperation = operation =>{
    //muda o current caso seja o primeiro numero que foi digitado
    if(this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true})
    }
    //fara a operação e setar o current, operation e etc
    else{
      //caso operation seja "=" ira tornar true
      const equals = operation === '='
      const values = [...this.state.values]

      try{
        //o eval faz a conta
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }
      catch(e){
        values[0] = this.state.values[0]
      }

      //limpa o value[1] para receber os proximos numeros
      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        //testa se for true ele limpa a variavel, caso contrario ele 
        //armazena para realizar a conta na proxima chamada
        operation: equals ? null : operation, 
        //testa se for true ele seta para o 0 para reiniciar toda operação,
        //caso contrario ele seta para recber o proximo numero para ralizar a operação 
        current: equals ? 0 : 1,
        //se for true ele não limpara o display, caso contrario ele limpara para 
        //receber o proximo numero para a operação
        clearDisplay: !equals,
        values,
      })
    }
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
