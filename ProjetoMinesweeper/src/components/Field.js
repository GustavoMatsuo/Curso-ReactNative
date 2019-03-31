import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import params from '../params'
import Mine from './Mine'

export default props => {
    const styleField = [styles.field]
    const {mined, opened, nearMine, exploded} = props
    
    //outros estilos
    if(opened)styleField.push(styles.opened)
    if(exploded)styleField.push(styles.exploded)
    if(styleField.length === 1)styleField.push(styles.regular)

    //Faz a verificação de qual cor será
    let color = null
    if(nearMine > 0){
        if(nearMine == 1) color='#2a28d7'
        if(nearMine == 2) color='#2b520f'
        if(nearMine >= 3 && nearMine < 6) color='#f9060a'
        if(nearMine >= 6) color='#f221a9'
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMine ? 
                <Text style={[styles.label, { color: color }]}>{nearMine}</Text>
                :
                false
            }
            {mined && opened ?
                <Mine/>
                :
                false
            }
        </View>
    )
}

const styles = StyleSheet.create({
    field:{
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular:{
        backgroundColor: "#999",
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened:{
       backgroundColor: '#999',
       borderColor: '#777',
       alignItems: 'center',
       justifyContent: 'center' 
    },
    label:{
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded:{
        backgroundColor: 'red',
        borderColor: 'red'
    }
})