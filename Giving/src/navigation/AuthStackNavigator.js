import React from 'react';
import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/Welcome';
import EmailAuthScreen from '../screens/EmailAuth';
import SignUpScreen from '../screens/SignUp';



export default AuthStackNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,

    },
    EmailAuth: {
        screen: EmailAuthScreen
    },
    SignUp: {
        screen: SignUpScreen
    }
},
    {
        defaultNavigationOptions: {
            headerBackTitle: null,
            elevation: 0,
            headerStyle: { backgroundColor: '#fff', elevation: 0, borderBottomWidth: 0 },
            headerTintColor: '#2d2d2d',
        }
    });