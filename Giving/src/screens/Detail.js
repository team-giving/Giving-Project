import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { FavoriteButton } from "../components/favorite-button.js";
import { Fonts } from "../constants.js";

export default class Detail extends Component {

    static navigationOptions = ({ navigation }) => {
        const charityData = navigation.getParam('charityData');
        const headerStyle = Platform.OS === 'ios' ? {
            fontFamily: Fonts.MetropolisBold,
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 5,
        } : {
            fontFamily: Fonts.MetropolisBold,
            fontWeight: '200',
            fontSize: 20,
            marginTop: 0,
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
            marginRight: 65
        };
        return {
            title: charityData.charityName,
            headerTitleStyle: headerStyle
        };
    };

    render() {
        const charityData = this.props.navigation.getParam('charityData');
        return (
            <View style={styles.container}>
                <Text> Charity Name: {charityData.charityName} </Text>
                <Text> EIN: {charityData.ein} </Text>
                <Text> Charity Nav URL: {charityData.charityNavigatorURL} </Text>
                <FavoriteButton ein={charityData.ein} favoritesList={[]} />
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
    }
});
