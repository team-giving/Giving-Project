import { createDrawerNavigator } from 'react-navigation';

import AppStackNavigator from './AppStackNavigator';

export default AppDrawerNavigator = createDrawerNavigator({
    Drawer: AppStackNavigator
});