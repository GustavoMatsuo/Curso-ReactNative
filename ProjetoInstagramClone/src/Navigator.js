import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'

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
        screen: Feed,
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