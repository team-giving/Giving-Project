import React from 'react'; 
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import SearchScreen from '../screens/Search';
import DetailScreen from '../screens/Detail';

export default SearchStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions:({navigation})=> {
            return {
                headerTitle: "Search",
                headerLeft: 
                    <Icon 
                        style={{paddingLeft: 10}}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu" 
                        size={30} 
                    />
            };
        }
    },
    Detail: {
        screen: DetailScreen, 
        navigationOptions:({navigation})=> {
            return {
                headerTitle: "Charity Details"
            };
        }
    }
},
{
    defaultNavigationOptions: {
        gesturesEnabled: false
    }
});