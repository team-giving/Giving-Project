import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Platform,
    SafeAreaView,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Alert
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Fonts } from "../constants.js";
import validator from 'validator';

const window = Dimensions.get('window');
const axios = require('axios');

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.submitData = this.submitData.bind(this);
    }

    static navigationOptions = Platform.OS === 'ios' ? {
        title: 'Create an Account',
        headerTitleStyle: {
            fontFamily: Fonts.MetropolisBold,
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 5,
        }
    } :
        {
            title: 'Continue with Email',
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

    state = {
        email: "",
        username: "",
        password: ""
    }

    handleChangeEmailField = text => {
        this.setState(() => {
            return {
                email: text
            }
        })
    }

    handleChangeUsernameField = text => {
        this.setState(() => {
            return {
                username: text
            }
        })
    }

    handleChangePasswordField = text => {
        this.setState(() => {
            return {
                password: text
            }
        })
    }

    submitData = () => {
        const usernamePattern = /^[0-9a-zA-Z]+$/;
        let { email, username, password } = this.state;
        email = email.toLowerCase();
        if (validator.isEmail(email) && username.length >= 6 && username.match(usernamePattern) && password.length >= 6) {
            axios
                .post('http://localhost:3000/user/register', {
                    email,
                    username,
                    password,
                })
                .then(response => {
                    if (response.status == 201) {
                        this.props.navigation.navigate('EmailAuth');
                    }
                })
                .catch((error) => {
                    Alert.alert("Error",  "That email and or username has been used to sign up before.");
                });
        } else {
            if (!validator.isEmail(email)) {
                Alert.alert('Invalid Email', 'Please enter a valid email address');
            } else if (username.length < 6) {
                Alert.alert('Invalid Username', 'Please enter a username with atleast 6 characters');
            } else if (!username.match(usernamePattern)) {
                Alert.alert('Invalid Username', 'Please enter only english alphanumeric characters');
            } else {
                Alert.alert('Invalid Password', 'Please enter a password with atleast 6 characters');
            }
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#808080"
                    style={[styles.input, { marginTop: 20 }]}
                    keyboardType='email-address'
                    returnKeyType='next'
                    autoCorrect={false}
                    onChangeText={this.handleChangeEmailField}
                    value={this.state.email}
                    onSubmitEditing={() => this.refs.txtUsername.focus()}
                    maxLength={25}
                />


                <TextInput
                    placeholder="Username"
                    placeholderTextColor="#808080"
                    style={styles.input}
                    returnKeyType='next'
                    autoCorrect={false}
                    onChangeText={this.handleChangeUsernameField}
                    value={this.state.username}
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                    ref={"txtUsername"}
                    maxLength={10}
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#808080"
                    style={styles.input}
                    returnKeyType='done'
                    secureTextEntry
                    autoCorrect={false}
                    onChangeText={this.handleChangePasswordField}
                    value={this.state.password}
                    ref={"txtPassword"}
                    maxLength={25}
                />

                <View style={{ height: 10 }} />

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer, { backgroundColor: '#1578d0' }]}
                    onPress={this.submitData}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={{ height: 10 }} />

                <Text style={{
                    margin: 5,
                    fontFamily: Fonts.Metropolis,
                    fontSize: 16,
                    color: '#2d2d2d'
                }}>
                    By signing up, I agreee to Giving's
                </Text>
                <Text style={{
                    margin: 5,
                    fontFamily: Fonts.Metropolis,
                    fontSize: 16,
                    color: '#2d2d2d'
                }}>
                    <Text
                        style={{
                            color: '#2d2d2d',
                            textDecorationLine: 'underline'
                        }}
                        onPress={() => Alert.alert("Terms of Service", "Not implemented yet")}
                    >
                        Terms of Service
                    </Text>
                    {" "}and{" "}
                    <Text
                        style={{
                            color: '#2d2d2d',
                            textDecorationLine: 'underline'
                        }}
                        onPress={() => Alert.alert("Privacy Policy", "Not implemented yet")}
                    >
                        Privacy Policy
                    </Text>
                </Text>
            </SafeAreaView>
        );
    }
}
export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        width: '90%',
        padding: 20
    },
    input: {
        height: 40,
        width: window.width - 30,
        backgroundColor: '#f1f1f1',
        borderRadius: 30,
        paddingHorizontal: 10,
        margin: 5,
        fontFamily: Fonts.Metropolis,
        fontSize: 16
    },
    buttonContainer: {
        backgroundColor: '#1578d0',
        paddingVertical: 12,
        margin: 5,
        borderRadius: 30,
        width: window.width - 30
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: Fonts.Metropolis,
        fontSize: 16
    }
});