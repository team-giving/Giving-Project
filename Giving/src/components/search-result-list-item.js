import React from "react";
import {
    Alert,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { FavoriteButton } from "./favorite-button.js";
import { RatingImage } from "./rating-image.js"
import { Fonts } from "../constants.js";
const window = Dimensions.get('window');

export class SearchResultListItem extends React.Component {
    render() {
        const charityData = this.props.charityData;
        if (charityData === undefined) {
            return null;
        }

        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Text style={styles.textStyle}>{charityData.charityName}</Text>
                <View style={styles.buttonLine}>
                    <RatingImage currentRating={charityData.currentRating} />
                    <FavoriteButton ein={charityData.ein} favoritesList={[]} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
        width: window.width,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "stretch",
        borderBottomWidth: 1,
        borderBottomColor: "#bdc3c7"
    },
    textStyle: {
        fontSize: 14,
        fontFamily: Fonts.Metropolis,
        color: "#2d2d2d"
    },
    buttonLine: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
});
