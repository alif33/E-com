import React from 'react'
import { Box, Text } from 'react-native-design-utility'
import { TouchableOpacity, Image } from 'react-native'
import { theme } from '../constants/theme';
import { images } from '../constants/images'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const bgColor = type => {
    console.log(type)
    switch (type) {
      case 'google':
        return theme.color.googleBlue;
      case 'facebook':
        return theme.color.facebookBlue;
      default:
        return 'blue';
    }
  };
const LoginButton = ({ children, type, onPress }) =>{

    return(
        <TouchableOpacity onPress = {onPress}> 
            <Box
                dir="row"
                align="center"
                shadow={1}
                bg={bgColor(type)}
                w="80%"
                self="center"
                p="2xs"
                radius="xs"
                mb="sm"
            >
                <Box mr="sm">
                    <Box bg="white" h={32} w={32} radius="xs" center style={{ position: 'relative'}}>
                        {type === 'google' && <Image style={{width: 20, height: 20}} source={images.googleColorIcon}/>}
                        {type === 'facebook' && <Image style={{width: 20, height: 20}} source={images.googleColorIcon}/>}
                        {/* {type === 'facebook' && (
                            <Icon 
                                name="facebook" 
                                size={30} 
                                color={theme.color.facebookBlue} 
                                style={{ position: 'absolute', right: 5, bottom: -3}}
                            />
                        )} */}
                    </Box>
                </Box>
                <Box>
                    <Text size="md" color="white">{children}</Text>
                </Box>
            </Box>
        </TouchableOpacity>
    )
}
export default LoginButton