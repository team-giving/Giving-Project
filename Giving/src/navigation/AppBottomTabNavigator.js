import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import ProfileStack from './ProfileStack'

export default AppBottomTabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Search: SearchStack,
        Profile: ProfileStack
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                header: null,
                headerTitle: routeName
            };
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                switch (routeName) {
                    case 'Home':
                        return <Icon name="md-home" size={25} color={tintColor} />;
                        break;
                    case 'Search':
                        return <Icon name="md-search" size={25} color={tintColor} />;
                        break;
                    case 'Profile':
                        return <Icon name="md-person" size={25} color={tintColor} />;
                        break;
                    default:
                        break;
                } 
            },
        }),
        tabBarOptions: {
            activeTintColor: '#1578d0',
            inactiveTintColor: 'gray',
        }
    }
);