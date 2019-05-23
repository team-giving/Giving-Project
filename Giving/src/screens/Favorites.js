import React, { Component } from 'react';
import { Alert, Platform, Text, View, StyleSheet, Linking, SafeAreaView, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { FavoriteButton } from "../components/favorite-button.js";
import { RatingImage } from "../components/rating-image.js";
import { Fonts } from "../constants.js";

const window = Dimensions.get('window');

export default class Favorites extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.navigation.getParam('favList'));
    }

    static navigationOptions = Platform.OS === 'ios' ? {
        title: 'Your Favorite Charities',
        headerTitleStyle: {
            fontFamily: Fonts.MetropolisBold,
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 5,
        }
    } :
        {
            title: 'Your Favorite Charities',
            headerTitleStyle: {
                fontFamily: Fonts.MetropolisBold,
                fontWeight: '200',
                fontSize: 18,
                marginTop: 0,
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
                marginRight: 65
            }
        };

    openPage = (link) => {
        Linking.openURL(link);
    }

    donateNotSupported = (link) => {
        Alert.alert("In app donations not avaliable for this charity");
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text>Not implemented yet</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    headerText: {
        color: '#2d2d2d',
        fontWeight: 'bold',
        fontSize: 30,
        maxWidth: window.width - 50,
        marginEnd: 10,
        textAlign: 'left'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: window.width - 30
    },
    row: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: window.width - 30,
        marginLeft: 10,
        marginRight: 10
    },
    favoriteButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rating: {
        marginBottom: 3,
        alignSelf: 'center'
    },
    textContainer: {
        alignSelf: 'center',
    },
    tagLineTextContainer: {
        color: '#2d2d2d',
        fontSize: 20,
        fontFamily: Fonts.MetropolisItalic,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    detailsText: {
        color: '#2d2d2d',
        fontSize: 20,
        fontFamily: Fonts.Metropolis,
        margin: 5,
    },
    missionText: {
        color: '#2d2d2d',
        fontSize: 20,
        fontFamily: Fonts.Metropolis,
        margin: 5,
        textAlign: "center"
    },
    boldDetailsText: {
        color: '#2d2d2d',
        fontSize: 20,
        fontFamily: Fonts.MetropolisBold,
        margin: 5
    },
    buttonContainer: {
        backgroundColor: '#1578d0',
        paddingVertical: 12,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 30,
        width: window.width - 30
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: Fonts.Metropolis,
    }
});
