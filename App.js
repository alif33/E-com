import React, { Component } from 'react';
import {UtilityThemeProvider, Box, Text} from 'react-native-design-utility'
import Navigation from './src/screens/index'
import { ActivityIndicator } from 'react-native'
import { images } from './src/constants/images'
import { cacheImages } from './src/utils/cacheImages'
import { theme } from './src/constants/theme'

export default class HomeScreen extends Component{

  state={
    isReady: false
  }
componentDidMount(){
  this.cacheAssets()
}
cacheAssets = async ()=>{
  const imagesAssets = cacheImages(Object.values(images))
  await Promise.all([...imagesAssets]);
  this.setState({
    isReady: true
  })
}
  render(){
    if(!this.state.isReady) {
      return (
        <UtilityThemeProvider>
          <Box f={1} center bg="white">
            <ActivityIndicator size="large" />
          </Box>
        </UtilityThemeProvider>
      );
    }
    return (
      <UtilityThemeProvider theme={theme}>
        <Navigation />
      </UtilityThemeProvider>
    );
  }
}
