import React, {Component} from 'react'
import {Text, View, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Platform, AsyncStorage} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'

import todayImg from '../../assets/imgs/today.jpg'
import tomorrowImg from '../../assets/imgs/tomorrow.jpg'
import weekImg from '../../assets/imgs/week.jpg'
import monthImg from '../../assets/imgs/month.jpg'
import commonStyles from '../commonStyles'

import Task from '../components/Task'
import ActionButton from 'react-native-action-button'
import AddTask from './AddTask'
import { server, showError } from '../common'


export default class Agenda extends Component {
    state ={
        tasks: [],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false,
    }

    addTask = async task => {
        try{
            await axios.post(`${server}/tasks`, {
                desc: task.desc,
                estimateAt: task.date
            })
            this.setState({showAddTask: false}, this.loadTasks)
        }
        catch(err){
            showError(err)
        }
    }

    deleteTask = async id => {
        try{
            await axios.delete(`${server}/tasks/${id}`)
            await this.loadTasks
        }
        catch(err){
            showError(err)
        }
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
        AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks : !this.state.showDoneTasks}, this.filterTasks)
    }

    componentDidMount = async () => {
        this.loadTasks()
    }

    toggleTask = async id => {      
        try{
            await axios.put(`${server}/tasks/${id}/toggle`)
            await this.loadTasks()
        }
        catch(err){
            showError(err)
        }
    }

    loadTasks = async() => {
        try{
            const maxDate = moment()
                .add({days: this.props.dayAhead})
                .format('YYYY-MM-DD 23:59')
            const res = await axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({tasks: res.data}, this.filterTasks)
        }
        catch(err){
            showError(err)
        }
    }

    render(){
        let styleColor = null
        let image = null

        switch(this.props.dayAhead){
            case 0:
                styleColor = commonStyles.colors.today
                image = todayImg
                break
            case 1:
                styleColor = commonStyles.colors.tomorrow
                image = tomorrowImg
                break
            case 7:
                styleColor = commonStyles.colors.week
                image = weekImg
                break
            default:
                styleColor = commonStyles.colors.month
                image = monthImg
                break
            
        }

        return(
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({showAddTask: false})}/>
                <ImageBackground source={image} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='bars' size={20} color={commonStyles.colors.Secondary} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks? 'eye' : 'eye-slash'} size={20} color={commonStyles.colors.Secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subTitle}>{moment().locale('pt-br').format('ddd, D [de] MMMM')}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.tasksContainer}>
                    <FlatList data={this.state.visibleTasks} 
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} onToggleTask={this.toggleTask } onDelete={this.deleteTask}/>} 
                    />
                </View>
                <ActionButton buttonColor={styleColor}
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
        justifyContent: 'space-between'
    }
})