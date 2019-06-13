import React, { Component } from 'react';
import Header from './components/Header'
import { View, Text } from 'react-native'
import Post from './components/Post'

export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: 'Thatiana Matsuo',
        comment: 'Excelente foto!'
      },
      {
        nickname: 'Rafael Pereira',
        comment: 'Muito boa!'
      }
    ]
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments}/>
      </View>

    )
  }
}

