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

class EmailAuth extends Component {

    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
    }

    static navigationOptions = Platform.OS === 'ios' ? {
        title: 'Continue with Email',
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

    signIn = async () => {
        let { email, password } = this.state;
        email = email.toLowerCase();
        if (validator.isEmail(email) && password.length >= 1) {
            axios
                .post('http://ec2-54-165-35-46.compute-1.amazonaws.com:3000/user/login', {
                    email,
                    username: 'giving_user',
                    password,
                })
                .then(response => {
                    if (response.status == 201) {
                        try {
                            const token = response.headers['x-auth'];
                            if (token) {
                                AsyncStorage.multiSet([['@userToken', token], ['@userEmail', email]])
                                    .then(() => {
                                        axios
                                            .get('http://ec2-54-165-35-46.compute-1.amazonaws.com:3000/private/private', {
                                                headers: {
                                                    'x-auth': token
                                                }
                                            })
                                            .then(response => {
                                                if (response.status == 200) {
                                                    AsyncStorage.setItem('@mongoID', response.data._id);
                                                    this.props.navigation.navigate('App');
                                                }
                                            })
                                            .catch((error) => {
                                                Alert.alert("Error Creating Account", "Please try again later");
                                                this.props.navigation.navigate('Auth');
                                            });
                                    })
                                    .catch(() => {
                                        Alert.alert("Error", "Error storing user credentials");
                                    });
                            }
                        } catch (errror) {
                            Alert.alert("Error", "Authentication Error");
                        }
                    }
                })
                .catch((error) => {
                    alert("Email or Password is incorrect");
                });
        } else {
            if (!validator.isEmail(email)) {
                Alert.alert('Invalid Email', 'Please enter a valid email address');
            } else {
                Alert.alert('Invalid Password', 'Please enter a password');
            }
        }
    }

    state = {
        email: "",
        password: ""
    }

    handleChangeEmailField = text => {
        this.setState(() => {
            return {
                email: text
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
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                    maxLength={25}
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

                <Text
                    style={{
                        margin: 5,
                        fontFamily: Fonts.Metropolis,
                        fontSize: 14,
                        textDecorationLine: 'underline',
                        color: '#2d2d2d',
                        textAlign: 'right'
                    }}
                    onPress={() => Alert.alert("Error", "Not implemented yet")}
                >
                    Forgot Password?
                    </Text>

                <View style={{ height: 10 }} />

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer, { backgroundColor: '#1578d0' }]}
                    onPress={this.signIn}
                >
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>

                <Text style={{
                    margin: 5,
                    fontFamily: Fonts.MetropolisBold,
                    fontSize: 16,
                    color: '#2d2d2d',
                }}>
                    OR
                </Text>

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer, { backgroundColor: '#2d2d2d' }]}
                    onPress={() => this.props.navigation.navigate('SignUp')}
                >
                    <Text style={styles.buttonText}>Create an account</Text>
                </TouchableOpacity>


            </SafeAreaView>
        );
    }
}
export default EmailAuth;

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
        padding: 20,
        // backgroundColor: 'red'
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
