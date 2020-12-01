import { createStackNavigator, 
        createSwitchNavigator, 
        createBottomTabNavigator,
        createTabNavigator} from 'react-navigation'
import React, { Component } from 'react'
import { NavigationService } from '../api/NavigationService'

const AuthNavigator = createStackNavigator(
    {
        Login: {
            getScreen: () => require('./LoginScreen').default
        }
    },
    {
        navigationOptions: {
            header: null
        }
    }
)

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            getScreen: () => require('./HomeScreen').default
        }
    }
)

const MainNavigator = createStackNavigator(
    {
        Tab: TabNavigator
    }
)

const AppNavigator = createSwitchNavigator({
        Splash: {
            getScreen: ()=> require('./SplashScreen').default
        },
        Auth: AuthNavigator,
        Main: MainNavigator  
    },
    {
        initialRouteName: 'Splash'
    }
)

export default class Navigation extends Component{
    render(){
        return (
            <AppNavigator ref={r=>NavigationService.setTopLevelNavigator} />
        )
    }
}