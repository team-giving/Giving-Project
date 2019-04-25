import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default class Authentication extends Component {
    constructor() {
        super();
        this.loadApp();
    }
    
    loadApp = async() => {
        const userToken = await AsyncStorage.getItem('@userToken')
        this.props.navigation.navigate(userToken ? 'App': 'Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#1578d0" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
