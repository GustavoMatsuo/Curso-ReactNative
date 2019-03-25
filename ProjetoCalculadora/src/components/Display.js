import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    displayValue:{
        fontSize: 40,
        color: "#fff",
    }
})

export default props =>(
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
    </View>
)