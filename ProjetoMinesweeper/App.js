import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Params from './src/params'

import MineField from './src/components/MineField'
import {createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, flagUsed} from './src/Logic'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'
import params from './src/params';

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
      lost: false,
      showLevelSelection: false
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
  
  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if(won){
      Alert.alert('You Win !!!', 'Você ganhou')
    }

    this.setState({board, won})
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }
  
  render() {
    return (
      <View style={styles.container}>
      <LevelSelection isVisible={this.state.showLevelSelection}
        onLevelSelected={this.onLevelSelected}
        onCancel={() => this.setState({ showLevelSelection: false})} />
        <Header 
          flagLeft={this.minesAmount()-flagUsed(this.state.board)} 
          onNewGame={()=> this.setState(this.createState())}
          onFlagPress={() => this.setState({showLevelSelection: true})}/>
        <View style={styles.board}>
          <MineField 
            board={this.state.board} 
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
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
