import React from 'react';
import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/Welcome';
import EmailAuthScreen from '../screens/EmailAuth';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';

export default AuthStackNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
    EmailAuth : {
        screen: EmailAuthScreen
    },
    SignIn: {
        screen: SignInScreen
    },
    SignUp: {
        screen: SignUpScreen
    }
});