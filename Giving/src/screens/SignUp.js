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
    TouchableOpacity
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Fonts } from "../constants.js";

const window = Dimensions.get('window');

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
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

    signUp = async () => {
        try {
            await AsyncStorage.setItem('@userToken', 'Shash');
            this.props.navigation.navigate('App');
        } catch (e) {
            alert(e);
        }
    }


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

                />

                <View style={{ height: 10 }} />

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer, { backgroundColor: '#1578d0' }]}
                    onPress={() => this.props.navigation.navigate('SignUp')}
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
                        onPress={() => alert("Not implemented yet")}
                    >
                        Terms of Service
                    </Text>
                    {" "}and{" "}
                    <Text
                        style={{
                            color: '#2d2d2d',
                            textDecorationLine: 'underline'
                        }}
                        onPress={() => alert("Not implemented yet")}
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