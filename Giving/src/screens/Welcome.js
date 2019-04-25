import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Welcome </Text>
                <Button
                    title="Continue with Facebook"
                    onPress={() => this.props.navigation.navigate('App')}
                />
                <Button
                    title="Continue with Email"
                    onPress={() => this.props.navigation.navigate('EmailAuth')}
                />
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