import React from 'react'; 
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import AppBottomTabNavigator from './AppBottomTabNavigator';

export default AppStackNavigator = createStackNavigator(
    {
    AppBottomTabNavigator: AppBottomTabNavigator
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                headerLeft: 
                    <Icon 
                        style={{paddingLeft: 10}}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu" 
                        size={30} 
                    />
            };
        }
    }
);