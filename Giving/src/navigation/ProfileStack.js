import React from 'react'; 
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/Profile';
import DetailScreen from '../screens/Detail';

export default ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions:({navigation})=> {
            return {
                headerTitle: "Profile",
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
},
{
    defaultNavigationOptions: {
        gesturesEnabled: false,
        headerBackTitle: null,
        headerTintColor: '#2d2d2d'
    }
});