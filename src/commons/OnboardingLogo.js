import React, { Component } from 'react';
import { Box , Text } from 'react-native-design-utility'
import { Image } from 'react-native'

import { images } from '../constants/images'

const OnboardingLogo = (props) =>{
    return(
        <Box center>
            <Box mb="sm">
                <Image 
                    style={{ 
                        width: 100,
                        height: 100
                    }}
                    source={images.logo}
                />
            </Box>
            <Box>
                <Text size="2xl" center>In 
                    <Text size="2xl" color="green">Store</Text>
                </Text>
            </Box>
            <Text size="sm">easy grocery shopping.</Text>
        </Box>
    )
}
export default OnboardingLogo;