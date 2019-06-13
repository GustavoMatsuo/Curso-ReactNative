import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Rafael Pereira',
                email: 'rafael@gmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickname: 'Thatiana Matsuo',
                        comment: 'Excelente foto!'
                    },
                    {
                        nickname: 'Rafael Pereira',
                        comment: 'Muito boa!'
                    }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Thatiana Matsuo',
                email: 'thati@gmail.com',
                image: require('../../assets/imgs/bw.jpg'),
                comments: []
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
})