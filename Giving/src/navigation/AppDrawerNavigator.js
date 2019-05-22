import React, { Component } from "react";
import { createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView, View, Image, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";

import AppStackNavigator from './AppStackNavigator';

import { Fonts, SERVER_URI } from "../constants.js";

class CustomDrawerComponent extends Component<*> {
    constructor(props) {
        super(props);

        this.state = {
            userName: "Giving User"
        };

        this.getData();
    }

    getData = async () => {
        try {
            const mongoID = await AsyncStorage.getItem("@mongoID");
            if (mongoID !== null) {
                // User Logged in
                axios.post(SERVER_URI + "/user/getUsername", {
                    mongoID: mongoID,
                })
                    .then(response => {
                        this.setState({ userName: response.headers.username });
                    })
                    .catch(error => {
                        alert(error);
                    });
            } else {
                Alert.alert(
                    "Don't miss out!",
                    "Many features will only work if you have an account",
                    [
                        { text: 'Make an account', onPress: () => this.props.navigation.navigate('AuthLoading') },
                        { text: 'Ask me again later', onPress: () => console.log('Ask me later pressed'),  style: 'cancel'}
                    ],
                    { cancelable: false }
                );
            }
        } catch (error) {
            alert(error);
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 150, alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("../assets/profile.jpeg")} style={{ height: 120, width: 120, borderRadius: 60 }} />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={{
                        margin: 5,
                        fontFamily: Fonts.Metropolis,
                        fontSize: 16,
                        color: '#2d2d2d'
                    }}
                    >
                        Hi {this.state.userName}!
                </Text>
                </View>
                <View style={{ height: 50, alignItems: "center" }}>
                    <Text style={{
                        margin: 5,
                        fontFamily: Fonts.Metropolis,
                        fontSize: 16,
                        color: '#2d2d2d'
                    }}
                    >
                        Version 0.1.2
                        </Text>
                </View>
                {/* <ScrollView>
                    <DrawerItems {...props} />
                </ScrollView> */}
            </SafeAreaView>
        );
    }

}

export default AppDrawerNavigator = createDrawerNavigator(
    {
        Giving: AppStackNavigator
    },
    {
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            labelStyle: {
                fontFamily: Fonts.Metropolis,
                fontSize: 15,
                marginLeft: 10,
            },
        }
    }
);
