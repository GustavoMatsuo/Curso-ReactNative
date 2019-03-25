import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

export default class App extends Component{
  state={
    DisplayValue:'0',
  }

  addDigi = n =>{
    this.setState({DisplayValue:n})
  }
  clearMemory = () =>{
    this.setState({DisplayValue:"0"})
  }
  setOperation = operation =>{
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Display value={this.state.DisplayValue}/>
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
