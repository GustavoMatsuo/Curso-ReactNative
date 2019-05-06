import React, {Component} from 'react'
import {Text, View, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Platform} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'

import Icon from 'react-native-vector-icons/FontAwesome'
import todayImg from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'

import Task from '../components/Task'
import ActionButton from 'react-native-action-button'
import AddTask from './AddTask'

export default class Agenda extends Component {
    state ={
        tasks: [
            {id: Math.random(), desc: 'Comprar curso de react native', estimate: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir curso', estimate: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar curso de react native', estimate: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir curso', estimate: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar curso de react native', estimate: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir curso', estimate: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar curso de react native', estimate: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir curso', estimate: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar curso de react native', estimate: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir curso', estimate: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar curso de react native', estimate: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir curso', estimate: new Date(), doneAt: null},
        ],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false,
    }

    addTask = task => {
        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: task.desc,
            estimateAt: task.date,
            doneAt: null
        })
        this.setState({tasks, showAddTask: false}, 
            this.filterTasks)
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks }, this.filterTasks)
    }

    filterTasks = () => {
       let visibleTasks = null
        if(this.state.showDoneTasks){
           visibleTasks = [...this.state.tasks]
        } 
        else{
           const pending = task => task.doneAt === null
           visibleTasks = this.state.tasks.filter(pending)
        }
        this.setState({ visibleTasks })
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks : !this.state.showDoneTasks}, this.filterTasks)
    }

    componentDidMount = () => {
        this.filterTasks()
    }

    toggleTask = id => {      
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === id){
                task.doneAt = task.doneAt ? null : new Date()
            }
        })
        this.setState({tasks}, this.filterTasks)
    }

    render(){
        return(
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({showAddTask: false})}/>
                <ImageBackground source={todayImg} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks? 'eye' : 'eye-slash'} size={20} color={commonStyles.colors.Secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{moment().locale('pt-br').format('ddd, D [de] MMMM')}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.tasksContainer}>
                    <FlatList data={this.state.visibleTasks} 
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} toggleTask={this.onToggleTask } onDelete={this.deleteTask}/>} 
                    />
                </View>
                <ActionButton buttonColor={commonStyles.colors.today}
                    onPress={() => {this.setState({showAddTask: true})}}/>
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
    },
    iconBar:{
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})