import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity as TO } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

export default class Profile extends Component {
    logout = () => {
        this.props.navigation.navigate('Auth')
    }

    render () {
        const options = {email: 'rafael@gmail.com', secure: true}
        return(
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>Rafael de tals</Text>
                <Text style={styles.email}>rafael@gmail.com</Text>
                <TO onPress={this.logout} style={styles.buttom}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TO>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff'
    }
})