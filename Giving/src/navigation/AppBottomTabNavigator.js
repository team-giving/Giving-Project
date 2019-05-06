import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import MapStack from './MapStack'
import ProfileStack from './ProfileStack'

export default AppBottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: ({ navigation }) => ({
                title: "Home",
                tabBarIcon: ({ tintColor, focused }) => <Icon name="md-home" size={25} color={tintColor} />
            })
        },
        Search:  {
            screen: SearchStack,
            navigationOptions: ({ navigation }) => ({
                title: "Search",
                tabBarIcon: ({ tintColor, focused }) => <Icon name="md-search" size={25} color={tintColor} />
            })
        },
        Map:  {
            screen: MapStack,
            navigationOptions: ({ navigation }) => ({
                title: "Local Charities",
                tabBarIcon: ({ tintColor, focused }) => <Icon name="md-pin" size={25} color={tintColor} />
            })
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: ({ navigation }) => ({
                title: "Profile",
                tabBarIcon: ({ tintColor, focused }) => <Icon name="md-person" size={25} color={tintColor} />
            })
        },
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                header: null,
                headerTitle: routeName
            };
        },
        tabBarOptions: {
            activeTintColor: '#1578d0',
            inactiveTintColor: 'gray',
        }
    }
);