import { createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoading';
import AuthStackNavigator from './AuthStackNavigator';
import AppDrawerNavigator from './AppDrawerNavigator';

export default AppSwitchNavigator = createSwitchNavigator({
    AuthLoading: {
        screen: AuthLoadingScreen
    },
    Auth: {
        screen: AuthStackNavigator
    },
    App: {
        screen: AppDrawerNavigator
    }
});