import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FavoriteButton } from "../components/favorite-button.js";
import { RatingImage }  from "../components/rating-image.js";

export default class Detail extends Component {

    static navigationOptions = ({ navigation }) => {
        const charityData = navigation.getParam('charityData');
    return {
      title: charityData.charityName,
    };
  };

    render() {
        const charityData = this.props.navigation.getParam('charityData');
        const favList = this.props.navigation.getParam('favList');
        console.log(charityData);
        return (
            <View style={styles.container}>
                <Text> Charity Name: {charityData.charityName} </Text>
                <Text> EIN: {charityData.ein} </Text>
                <Text> Charity Nav URL: {charityData.charityNavigatorURL} </Text>
                <Text> Category: {charityData.category.categoryName}</Text>
                <Text> Website URL: {charityData.websiteURL} </Text>
                <Text> Tagline: {charityData.tagLine}</Text>
                <Text> Mission: {charityData.mission}</Text>
                <FavoriteButton ein={charityData.ein} favoritesList={favList}/>
                <RatingImage currentRating={charityData.currentRating}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});