import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Platform, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Fonts, SERVER_URI } from "../constants.js";
import axios from "axios";
const window = Dimensions.get('window');

export default class Profile extends Component {

    static navigationOptions = Platform.OS === 'ios' ? {
        title: 'Profile',
        headerTitleStyle: {
            fontFamily: Fonts.MetropolisBold,
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 5,
        }
    } :
        {
            title: 'Profile',
            headerTitleStyle: {
                fontFamily: Fonts.MetropolisBold,
                fontWeight: '200',
                fontSize: 20,
                marginTop: 0,
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
                marginRight: 65
            }
        };

    constructor(props) {
        super(props);

        this.state = {
            signOutText: "Log out"
        };

        this.getData();
    }

    signOut = async () => {
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }

    getData = async () => {
        try {
            const email = await AsyncStorage.getItem("@userEmail");
            if (email !== null) {
                // User Logged in
                axios.post(SERVER_URI + "/user/getUsername", {
                    userEmail: email,
                })
                    .then(response => {
                        this.setState({ signOutText: "Log out" });
                    })
                    .catch(error => {
                        alert(error);
                    });
            } else {
                this.setState({ signOutText: "Create an Account" });
            }
        } catch (error) {
            alert(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer, { backgroundColor: '#2d2d2d' }]} // marginBottom: 10
                    onPress={() => this.signOut()}
                >
                    <Text style={styles.buttonText}>
                        {this.state.signOutText}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    buttonContainer: {
        backgroundColor: '#1578d0',
        paddingVertical: 12,
        margin: 5,
        borderRadius: 30,
        width: window.width - 30,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: Fonts.Metropolis,
        fontSize: 16
    }
});