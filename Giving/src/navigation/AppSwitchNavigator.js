import { createSwitchNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/Welcome';
import AppDrawerNavigator from './AppDrawerNavigator';

export default AppSwitchNavigator = createSwitchNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
    Dashboard: {
        screen: AppDrawerNavigator
    }
});