import React from 'react'
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'

const LoginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: Login
},{
    initialRouteName: 'Profile'
})

const MeuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={25} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'AddPhoto',
            tabBarIcon: ({ tintColor }) => 
                <Icon name='camera' size={25} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: LoginOrProfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => 
                <Icon name='user' size={25} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false
    }
}

const MenuNavigator = createBottomTabNavigator(MeuRoutes, MenuConfig)

export default MenuNavigator