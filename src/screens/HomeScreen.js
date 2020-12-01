import React, {Component} from 'react'
import {UtilityThemeProvider, Box, Text } from 'react-native-design-utility'

export default class HomeScreen extends Component{
    render(){
        return(
            <UtilityThemeProvider>
                <Box f={1} center>
                    <Text>Home Screen</Text>
                </Box>
            </UtilityThemeProvider>
        ) 
    }
}