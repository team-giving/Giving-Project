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

import AppSwitchNavigator from './src/navigation/AppSwitchNavigator';

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component<*> {
    render() {
        return (
            <AppContainer />
        );
    }
}
