import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

class SignIn extends Component {
    signIn = async() => {
        try {
            await AsyncStorage.setItem('@userToken', 'Shash');
            this.props.navigation.navigate('App');
        } catch (e) {
            alert(e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Complete Sign In"
                    onPress={this.signIn}
                />
            </View>
        );
    }
}
export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});