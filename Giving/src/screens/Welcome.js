import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight, Image, SafeAreaView, Dimensions } from 'react-native';

import { Fonts } from "../constants.js";

const window = Dimensions.get('window');

export default class Welcome extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../assets/logo.png')} >
                    </Image>
                </View>

                <View style={styles.taglineContainer}>
                    <Text style={styles.tagline}>Charities made easy.</Text>
                </View>

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer, { backgroundColor: '#3C5A99' }]}
                    onPress={() => this.props.navigation.navigate('App')}
                >
                    <Text style={styles.buttonText}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('EmailAuth')}
                >
                    <Text style={styles.buttonText}>Continue with Email</Text>
                </TouchableOpacity>

                <Text style={{
                        margin: 5,
                        fontFamily: Fonts.MetropolisBold,
                        fontSize: 16,
                        color: '#2d2d2d'
                    }}
                    >
                        OR
                </Text>

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer, { backgroundColor: '#2d2d2d' }]} // marginBottom: 10
                    onPress={() => this.props.navigation.navigate('App')}
                >
                    <Text style={styles.buttonText}>Skip straight to Charities</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },
    logo: {
        width: 150,
        height: 150,
        margin: 125
    },
    tagline: {
        fontFamily: Fonts.MetropolisBold,
        fontSize: 30,
        color: '#2d2d2d'
    },
    taglineContainer: {
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
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