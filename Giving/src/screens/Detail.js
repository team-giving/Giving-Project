import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FavoriteButton } from "../components/favorite-button.js";

export default class Detail extends Component {

    static navigationOptions = ({ navigation }) => {
        const charityData = navigation.getParam('charityData');
    return {
      title: charityData.charityName,
    };
  };

    render() {
        const charityData = this.props.navigation.getParam('charityData');
        return (
            <View style={styles.container}>
                <Text> Charity Name: {charityData.charityName} </Text>
                <Text> EIN: {charityData.ein} </Text>
                <Text> Charity Nav URL: {charityData.charityNavigatorURL} </Text>
                <FavoriteButton ein={charityData.ein} favoritesList={[]}/>
            </View>
        )
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
