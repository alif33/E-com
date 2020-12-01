import * as Google from 'expo-google-app-auth';

const scopes = ['profile', 'email']

const loginAsync = async () =>{
    try {
        const result =  await Google.logInAsync({
            iosClientId: `1003931985722-7li4ao0vm4eba3gpl9qrnsfeukq14dsa.apps.googleusercontent.com`,
            androidClientId: `1003931985722-crlpc4mccv72ou16i8ag5t8sa3jhum7g.apps.googleusercontent.com`,
            scopes
          });
        if(result.type === 'success') {
            return Promise.resolve(result.accessToken)
        }
        return Promise.reject('No success')
    } catch (error) {
        return Promise.reject(error)
    }
}

export const GoogleApi = {
    loginAsync
}