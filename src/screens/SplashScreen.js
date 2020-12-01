import React, {Component} from 'react'
import { Image } from 'react-native'
import {UtilityThemeProvider, Box, Text } from 'react-native-design-utility'
import { images } from '../constants/images'
import OnboardingLogo from '../commons/OnboardingLogo'

export default class SplashScreen extends Component{

    componentDidMount(){
        this.checkAuth()
    }
    checkAuth = () =>{
        setTimeout(()=>{
             this.props.navigation.navigate('Auth')
        }, 2000)
    }
    render(){
        return(
            <UtilityThemeProvider>
                <Box f={1} center>
                   <OnboardingLogo /> 
                </Box>
            </UtilityThemeProvider>
        ) 
    }
}