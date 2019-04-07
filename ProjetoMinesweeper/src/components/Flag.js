import React from 'react'
import {View,StyleSheet} from 'react-native'

export default props =>{
    return(
        <View style={styles.container}>
            <View style={[styles.flagPole, props.bigger ? styles.flagPoleBig : null]}/>
            <View style={[styles.flag, props.bigger ? styles.flagBig : null]}/>
            <View style={[styles.base1, props.bigger ? styles.base1Big : null]}/>
            <View style={[styles.base2, props.bigger ? styles.base2Big : null]}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:2
    },
    flagPole:{
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9
    },
    flag:{
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor:'#f22',
        marginLeft:3
    },
    base1:{
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginTop: 10,
        marginLeft: 7
    },
    base2:{
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginTop: 12,
        marginLeft: 5
    },
    flagPoleBig:{
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    flagBig:{
        height:10,
        width: 14,
        marginLeft: 3,

    },
    base1Big:{
        height: 4,
        width: 12,
        marginTop: 24,
        marginLeft: 12,
    },
    base2Big:{
        height: 4,
        width: 20,
        marginTop: 27,
        marginLeft: 8,
    }
})