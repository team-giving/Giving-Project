import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import FavoritesScreen from '../screens/Favorites';

export default HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions:({navigation})=> {
            return {
                headerTitle: "Home",
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
        screen: DetailScreen
    },
    Favorites: {
        screen: FavoritesScreen
    }
},
{
    defaultNavigationOptions: {
        gesturesEnabled: false,
        headerBackTitle: null,
        headerTintColor: '#2d2d2d'
    }
});
