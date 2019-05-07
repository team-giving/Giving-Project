import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Fonts } from "../constants.js";

export class QuickSearchButton extends React.Component {
    render() {
        const causeData = this.props.causeData;
        const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#7f8c8d", "#f39c12", "#d35400"];

        return (
            <TouchableOpacity
                style={[styles.touchable, { backgroundColor: colors[Math.floor(Math.random() * colors.length)] }]}
                onPress={() => this.props.onPress(causeData.causeID)}
            >
                <Text style={styles.textStyle}>{causeData.causeName}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        width: 170,
        height: 100,
        borderRadius: 10,
        justifyContent: "center",
        margin: 5,
        padding: 5
    },
    textStyle: {
        fontSize: 14,
        textAlign: "center",
        fontFamily: Fonts.Metropolis,
        color: "white"
    }
});
