import React from 'react'; 
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import MapScreen from '../screens/Map';

export default MapStack = createStackNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions:({navigation})=> {
            return {
                title: "Local Charities",
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