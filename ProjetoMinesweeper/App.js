import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Params from './src/params'

import MineField from './src/components/MineField'
import {createMinedBoard} from './src/Logic'

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = ()=>{
    const rows = Params.getRowAmount()
    const columns = Params.getColumsAmount() 
    return Math.ceil(rows*columns*Params.difficultLevel)
  }

  createState = ()=>{
    const cols = Params.getColumsAmount()
    const rows = Params.getRowAmount()
    return{
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.instructions}>Tamanho da grade: 
          {Params.getRowAmount()} X {Params.getColumsAmount()}</Text>
        
        <View style={styles.board}>
          {<MineField board={this.state.board}/>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center'
  },
  board:{
    alignItems: 'center',
    backgroundColor: '#eee'
  }
});
