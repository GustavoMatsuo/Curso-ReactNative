import React, {Component} from 'react'
import {Text, View, StyleSheet, Platform, Image} from 'react-native'
import Icon from '../assets/imgs/icon.png'

export default class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={Icon} style={styles.image} />
                    <Text style={styles.title}>Insta Clone</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title:{
        color: '#000',
        // O android procura pelo nome do arquivo e
        // o IOS procura pelo nome da fonte
        fontFamily: 'shelter'
    }
})