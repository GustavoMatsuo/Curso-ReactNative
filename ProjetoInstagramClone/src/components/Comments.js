import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native'

export default class Comments extends Component{
    render(){
        let view = null
        if(this.props.comments){
            view = this.props.comments.map((item, index) => {
                return(
                    <View style={styles.containerComments} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comments}>{item.comment}</Text>
                    </View>
                )
            })
        }

        return(
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10
    },
    containerComments:{
        flexDirection: 'row',
        marginTop:5,
    },
    nickname:{
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment:{
        color: '#555'
    }
})