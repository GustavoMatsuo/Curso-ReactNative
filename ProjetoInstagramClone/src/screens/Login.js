import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity as TO, StyleSheet} from 'react-native'

export default class Login extends Component{
    state={
        email: '',
        password: ''
    }  

    login = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={true} keyboardType='email-address'
                    value={this.state.email}/>
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TO onPress={this.login} style={styles.buttom}>
                    <Text styel={styles.buttomText}>Login</Text>
                </TO>
                <TO onPress={() => {}} style={styles.buttom}>
                    <Text styel={styles.buttomText}>Criar uma conta...</Text>
                </TO>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
})