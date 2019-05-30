import React, {Components} from 'react'
import { StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity, Alert} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login.jpg'

export default class Auth extends Components{
    state ={ 
        stageNew: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    signinOrSignup = () => {
        if(this.state.stageNew){
            Alert.alert('Sucesso!', 'Criar conta')
        }
        else{
            Alert.alert('Sucesso!', 'Logar')
        }
    }

    render(){
        return (
            <ImageBackground 
                source={backgroundImage}
                style={styles.background}>
                
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Criar a sua conta' : 'Informe seus dados'}
                    </Text>
                    {this.state.stageNew && 
                        <TextInput 
                            placeholder='Nome'
                            style={styles.input}
                            value={this.state.name}
                            onChangeText={name => this.setState({name})} /> }
                    <TextInput 
                        placeholder='E-mail'
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})} />
                    <Textinput 
                        placeholder='Senha'
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})} />
                    {this.state.stageNew &&
                        <Textinput 
                            placeholder='Confirmação' 
                            style={styles.input} 
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({confirmPassword})} />}
                </View>

                <TouchableOpacity onPress={this.signinOrSignup}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Registrar' : 'Entrar'}
                        </Text>
                    </View>    
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{ padding: 10 }}
                    onPress={() => this.setState({stageNew: !this.state.stageNew})}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?!' : 'Ainda não possui conta?'}
                    </Text>
                </TouchableOpacity>  
                         
            </ImageBackground>
        )
    }
}