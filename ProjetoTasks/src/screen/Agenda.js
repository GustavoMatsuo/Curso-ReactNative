import React, {Component} from 'react'
import {Text, View, StyleSheet, ImageBackground} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImg from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'

export default class Agenda extends Component {
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={todayImg} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{moment().locale('pt-br').format('ddd, D [de] MMMM')}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.tasksContainer}>
                    <Task desc='Tarefa pendente' estimate={new Date()} doneAt={null} />
                    <Task desc='Tarefa concluida' estimate={new Date()} doneAt={new Date()} />

                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex: 3
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.Secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10
    },
    subTitle:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.Secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    tasksContainer:{
        flex: 7
    }
})