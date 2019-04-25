/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import AppSwitchNavigator from './src/navigation/AppSwitchNavigator';

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component<*> {
    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }

    render() {
        return (
            <AppContainer />
        );
    }
}