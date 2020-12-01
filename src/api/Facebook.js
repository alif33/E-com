import * as Facebook from 'expo-facebook'

const loginAsync = async ()=>{
    try {
        await Facebook.initializeAsync({
          appId: '831572457602009',
        });
        const {
          type,
          token
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile', 'email'],
        });
        if (type === 'success') {
            return Promise.resolve(token);
          // Get the user's name using Facebook's Graph API
        //   const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        //   Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
          return Promise.reject(error)
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
};

export const FacebookApi = {
    loginAsync
}