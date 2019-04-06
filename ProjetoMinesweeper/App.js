import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Params from './src/params'

import MineField from './src/components/MineField'
import {createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines} from './src/Logic'

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = ()=>{
    const rows = Params.getRowAmount()
    const columns = Params.getColumsAmount() 
    return Math.ceil(rows * columns * Params.difficultLevel)
  }

  createState = ()=>{
    const cols = Params.getColumsAmount()
    const rows = Params.getRowAmount()
    return{
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('You Lose !!!', 'Que burro ')
    }

    if(won){
      Alert.alert('You Win !!!', 'Você ganhou')
    }

    this.setState({board, lost, won})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.instructions}>Tamanho da grade: 
          {Params.getRowAmount()} X {Params.getColumsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField}/>
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
