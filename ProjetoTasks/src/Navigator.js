import React from 'react'
import { createSwitchNavigator, createDrawerNavigator } from 'react-navigation'
import Menu from './screen/Menu'
import Agenda from './screen/Agenda'
import Auth from './screen/Auth'
import commonStyles from './commonStyles'

const MenuRoutes = {
    Today:{
        name: 'Today',
        screen: props => 
            <Agenda title='Hoje' dayAhead={0} {...props} />,
        navigationOptions: {
            title: 'Hoje'
        }
    },
    Tomorrow:{
        name: 'Tomorrow',
        screen: props => 
            <Agenda title='Amanhã' dayAhead={1} {...props} />,
        navigationOptions:{
            title: 'Amanha'
        }
    },
    Week:{
        name: 'Week',
        screen: props => 
            <Agenda title='Semana' dayAhead={7} {...props} />,
        navigationOptions:{
            title: 'Semana'
        }
    },
    Month:{
        name: 'Month',
        screen: props => 
            <Agenda title='Mês' dayAhead={30} {...props} />,
        navigationOptions:{
            title: 'Mês'
        }
    }
}

const MenuConfig ={
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions:{
        labelStyle:{
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle:{
            color: '#080'
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
    Auth:{
        name: 'Auth',
        screen: Auth
    },
    Home:{
        name: 'Home',
        screen: MenuNavigator
    }
}

const MainNavigator = 
    createSwitchNavigator(
        MainRoutes, {initialRouteName: 'Auth'
    })

export default MainNavigator