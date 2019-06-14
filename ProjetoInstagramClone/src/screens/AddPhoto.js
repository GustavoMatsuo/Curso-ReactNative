import React, { Component } from 'react'
import { View, Text, TouchableOpacity as TO, TextInput, Image, ScrollView, Alert, StyleSheet, Platform, Dimensions } from 'react-native'
import imagePicker from 'react-native-image-picker'

export default class AddPhoto extends Component {
    state = {
        image: null,
        comment: ''
    }

    pickImage = () => {
        imagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = () => {
        Alert.alert('Imagem adicionada !', this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TO onPress={this.pickImage} style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TO>
                    <TextInput placeholder='Algum comentário para a foto?'
                        style={styles.input} value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}/>
                    <TO onPress={this.save} style={styles.buttom}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TO>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
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
        width: '90%'
    }
})