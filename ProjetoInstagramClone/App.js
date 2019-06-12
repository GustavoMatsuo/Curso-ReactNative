import React, {Component} from 'react';
import Header from './components/Header'
import {View, Text} from 'react-native'
import Post from './components/Post'

export default class App extends Component{
    render() {
      return (
        <View style={{flex: 1}}>
          <Header />
          <Post image={require('./assets/imgs/fence.jpg')} />
        </View>

      )
    }
}

