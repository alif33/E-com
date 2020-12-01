import React, {Component} from 'react'
import { TouchableOpacity, Alert, Animated } from 'react-native'
import {UtilityThemeProvider, Box, Text } from 'react-native-design-utility'
import OnboardingLogo from '../commons/OnboardingLogo'
import LoginButton from '../commons/LoginButton'
import { FacebookApi } from '../api/Facebook'
import { GoogleApi } from '../api/Google'


const BoxAnimated = Animated.createAnimatedComponent(Box)

export default class LoginScreen extends Component{
    state={
        opacity: new Animated.Value(0),
        position: new Animated.Value(0)
    }
    componentDidMount() {
        Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();
        this.opacityAnim()
        this.positionAnim()
    }
    opacityAnim = () =>{
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200,
            delay: 100
        }).start()
    }
    positionAnim = () =>{
        Animated.timing(this.state.position, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start()
    }
    onGooglePress= async ()=>{

        try {
            const token = await GoogleApi.loginAsync()
            console.log('token :',token)            
        } catch (error) {
            console.log(error)
        }

        //ios: 1003931985722-7li4ao0vm4eba3gpl9qrnsfeukq14dsa.apps.googleusercontent.com
        //1003931985722-crlpc4mccv72ou16i8ag5t8sa3jhum7g.apps.googleusercontent.com
    };

    onFacebookPress= async ()=>{
        try {
            const token = await FacebookApi.loginAsync()
            console.log('token :',token)            
        } catch (error) {
            console.log(error)
        }
    };

    render(){
        const { opacity } = this.state
        const logotranslate = this.state.position.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0]
        })
        return(
            <UtilityThemeProvider>
                <Box f={1} center bg="white">
                    <BoxAnimated 
                        f={1}
                        style={{ 
                            transform: [
                                {
                                    translateY: logotranslate
                                }
                            ]
                        }}
                    >
                        <Box f={1} center>
                            <OnboardingLogo />
                        </Box>
                    </BoxAnimated>
                    <BoxAnimated f={0.9} w={1} style={{ opacity}}>
                        <LoginButton onPress={ this.onGooglePress } type="google">Continue with Google</LoginButton>
                        <LoginButton onPress={ this.onFacebookPress } type="facebook">Continue with Facebook</LoginButton>
                    </BoxAnimated>
                </Box>
            </UtilityThemeProvider>
        ) 
    }
}