import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Platform, Switch, TouchableOpacity, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from "react-native-vector-icons/Ionicons";
import { Fonts, SERVER_URI } from "../constants.js";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
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
            signOutText: "Log out",
            editDisabled: false,
            donationReminders: "Off",
            emailText: "You are not logged in",
            usernameText: "You are not logged in",
            passwordText: "You are not logged in"
        };

        this.getData();
    }

    signOut = async () => {
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }

    editEmail = () => {
        if (this.state.editDisabled) {
            Alert.alert("Edit Email", "You need to create an account first...");
        } else {
            // TODO: Open a dialog that takes in input
            Alert.alert("Edit Email", "Editing email is not supported yet create a new account for now");
        }
    }

    editUsername = () => {
        if (this.state.editDisabled) {
            Alert.alert("Edit Username", "You need to create an account first...")
        } else {
            // TODO: Open a dialog that takes in input
            Alert.alert("Edit Username", "Editing username is not supported yet create a new account for now");
        }
    }

    editPassword = () => {
        if (this.state.editDisabled) {
            Alert.alert("Edit Password", "You need to create an account first...")
        } else {
            // TODO: Open a dialog that takes in input
            Alert.alert("Edit Password", "Editing password is not supported yet create a new account for now");
        }
    }

    getData = async () => {
        try {
            const email = await AsyncStorage.getItem("@userEmail");
            if (email !== null) {
                this.setState({
                    emailText: email,
                    passwordText: '●●●●●●'
                })
                // User Logged in
                axios.post(SERVER_URI + "/user/getUsername", {
                    userEmail: email,
                })
                    .then(response => {
                        this.setState({ 
                            signOutText: "Log out", 
                            usernameText: response.headers.username 
                        });
                    })
                    .catch(error => {
                        alert(error);
                    });
            } else {
                this.setState({
                    signOutText: "Create an Account",
                    editDisabled: true
                });
            }
        } catch (error) {
            alert(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.boldDetailsText}>
                            Email
                        </Text>
                        <View style={styles.buttonLine}>
                            <Text style={styles.detailsText}>
                                {this.state.emailText}
                            </Text>
                            <TouchableOpacity style={styles.editButton} onPress={this.editEmail}>
                                <Icon name="md-create" size={15} color="#1578d0" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.boldDetailsText}>
                            Username
                        </Text>
                        <View style={styles.buttonLine}>
                            <Text style={styles.detailsText}>
                                {this.state.usernameText}
                            </Text>
                            <TouchableOpacity style={styles.editButton} onPress={this.editUsername}>
                                <Icon name="md-create" size={15} color="#1578d0" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.boldDetailsText}>
                            Password
                        </Text>
                        <View style={styles.buttonLine}>
                            <Text style={styles.detailsText}>
                                {this.state.passwordText}
                            </Text>
                            <TouchableOpacity style={styles.editButton} onPress={this.editPassword}>
                                <Icon name="md-create" size={15} color="#1578d0" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[styles.row, { borderBottomWidth: 0 }]}>
                    <View style={styles.textContainer}>
                        <Text style={styles.boldDetailsText}>
                            Donation Reminders
                        </Text>
                        <RadioForm
                            style={{paddingTop: 10}}
                            radio_props={[
                                { label: 'Off', value: 'Off' },
                                { label: 'Daily', value: 'Daily' },
                                { label: 'Monthly', value: 'Monthly' }
                            ]}
                            initial={0}
                            onPress={(value) => { this.setState({ donationReminders: value }) }}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer, { backgroundColor: '#2d2d2d' }]} // marginBottom: 10
                    onPress={this.signOut}
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10
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
    },
    row: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: window.width - 30,
        borderBottomWidth: 0.5,
        borderBottomColor: '#888888'
    },
    textContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: "left"
    },
    boldDetailsText: {
        color: '#2d2d2d',
        fontSize: 14,
        fontFamily: Fonts.MetropolisBold,
        textAlign: "left",
        marginTop: 10
    },
    detailsText: {
        color: '#2d2d2d',
        fontSize: 14,
        fontFamily: Fonts.Metropolis,
        textAlign: "left",
        marginTop: 5,
        marginBottom: 10
    },
    buttonLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        textAlign: "left",
        marginTop: 5,
    },
    editButton: {
        paddingTop: 4,
        marginLeft: 10
    },
});