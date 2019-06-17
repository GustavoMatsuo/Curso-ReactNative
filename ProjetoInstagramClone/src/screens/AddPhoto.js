import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/post'
import { View, Text, TouchableOpacity as TO, TextInput, Image, ScrollView, Alert, StyleSheet, Platform, Dimensions } from 'react-native'
import imagePicker from 'react-native-image-picker'

const msg = 'Você precisa estar logado!'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: ''
    }

    pickImage = () => {
        if(!this.props.name){
            Alert.alert('Falha!', msg)
            return
        }

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
        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })

        this.setState({ image: null, comment: '' })
        this.props.navigation.navigate('Feed')
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
                        editable={this.props.name != null}
                        onChangeText={comment => this.setState({ comment })} />
                    <TO onPress={this.save} disabled={!this.props.name}
                        style={[styles.buttom, !this.props.name ? {backgroundColor:'#888'} : null]}>
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

const mapStateToProps = ({ user }) => {
    return {
        name: user.name,
        email: user.email
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)