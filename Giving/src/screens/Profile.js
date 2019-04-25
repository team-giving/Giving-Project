import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {
    signOut = async () => {
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Profile </Text>
                <Button
                    title="Sign Out"
                    onPress={this.signOut} />
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