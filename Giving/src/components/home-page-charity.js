import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { FavoriteButton } from "./favorite-button.js";
import { Fonts } from "../constants.js";

export class HomePageCharity extends React.Component {
    constructor(props) {
        super(props);
        this.onPressCharity = this.onPressCharity.bind(this);
    }

    onPressCharity() {
        this.props.onPressCharity(this.props.charityData.organization);
    }

    render() {
        const charityData = this.props.charityData.organization;
        const favList = this.props.favList
        const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#7f8c8d", "#f39c12", "#d35400"];

        if (charityData === undefined) {
            return null;
        }
        
        const backColor = charityData.cause.causeID ? colors[charityData.cause.causeID % colors.length] : colors[0];

        return (
            <TouchableOpacity
                style={[styles.touchable, { backgroundColor: backColor} ]}
                onPress={this.onPressCharity}>
                <Text style={styles.textStyle}>{charityData.charityName}</Text>
                <View style={styles.favButton}>
                    <FavoriteButton
                        ein={charityData.ein}
                        favoritesList={favList} />
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        width: 170,
        height: 100,
        borderRadius: 10,
        justifyContent: "space-between",
        margin: 5,
        padding: 5,
        backgroundColor: '#1578d0',
        flex: 1
    },
    textStyle: {
        fontSize: 14,
        textAlign: "center",
        fontFamily: Fonts.Metropolis,
        marginTop: 10,
        color: "white"
    },
    favButton: {
        alignSelf: "flex-end"
    }
});
