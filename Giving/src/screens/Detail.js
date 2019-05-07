import React, { Component } from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { FavoriteButton } from "../components/favorite-button.js";
import { RatingImage } from "../components/rating-image.js";
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Detail extends Component {
    static navigationOptions = ({ navigation }) => {
        const charityData = navigation.getParam('charityData');
        return {
            title: charityData.charityName,
        };
    };
    donate = (link) => {
        Linking.openURL(link);
    }
    render() {
        const charityData = this.props.navigation.getParam('charityData');
        console.log(charityData);
        return (
            <View style={styles.container}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, flex: 0.8 }}> {charityData.charityName} </Text>
                    <FavoriteButton style={{ flex: 0.2, marginTop:20 }} ein={charityData.ein} favoritesList={[]} />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.donate(charityData.websiteURL)}>
                        <Text style={styles.buttonText}> Donate Now </Text>
                </TouchableOpacity>
                <RatingImage currentRating={charityData.currentRating} />
                {/* <Text style={styles.textContainer}> EIN: {charityData.ein} </Text> */}
                {/* <Text style={styles.textContainer}> Charity Nav URL: {charityData.charityNavigatorURL} </Text> */}
                <Text style={styles.textContainer}> {charityData.category.categoryName}</Text>
                {/* <Text style={styles.textContainer}> Website URL: {charityData.websiteURL} </Text> */}
                <Text style={styles.textContainer}> Tagline: {charityData.tagLine}</Text>
                <Text style={styles.textContainer}> Mission: {charityData.mission}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1578d0',
    },
    textContainer: {
        color: 'white',
        fontSize: 12,
        margin: 10
    },
    buttonContainer: {
        backgroundColor: '#1578d0',
        paddingVertical: 12,
        margin: 10,
        borderRadius: 30,
        // width: window.width - 30
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16
    }
});