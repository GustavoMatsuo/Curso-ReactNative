// import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import Agenda from './screen/Agenda'
import Auth from './screen/Auth'

const MainRoutes = {
    Auth:{
        name: 'Auth',
        screen: Auth
    },
    Home:{
        name: 'Home',
        screen: Agenda
    }
}

const MainNavigator = 
    createSwitchNavigator(
        MainRoutes, {initialRouteName: 'Auth'
    })

export default MainNavigator