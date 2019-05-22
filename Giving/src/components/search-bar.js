import React from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import { PREV_SEARCHES_MAX_LENGTH } from "../constants.js"
import { Fonts } from "../constants.js";
import Icon from 'react-native-vector-icons/Ionicons';
const window = Dimensions.get('window');

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevSearches: []
        };
    }

    appendToPrevSearches(text) {
        if (!this.state.prevSearches.includes(text)) {
            let prevSearchesCopy = this.state.prevSearches.slice(0);
            if (prevSearchesCopy.length >= PREV_SEARCHES_MAX_LENGTH) {
                prevSearchesCopy.pop();
            }
            prevSearchesCopy.push(text);
            this.setState({ prevSearches: prevSearchesCopy });
        }
    }

    makeNewSearch(text) {
        if (text != null && text.length != 0) {
            this.props.onSearch(text);
            this.appendToPrevSearches(text);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <Icon style={styles.searchIcon} name="md-search" size={25} color="#2d2d2d" />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Charity name, keyword or EIN"
                        placeholderTextColor="#808080"
                        clearButtonMode="always"
                        returnKeyType='go'
                        onSubmitEditing={event =>
                            this.makeNewSearch(event.nativeEvent.text)
                        }
                        onChangeText={(text) => this.props.updateKeyword(text)}
                        defaultValue={this.props.currentSearch}
                        maxLength={25}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 40,
        width: window.width - 30,
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 5,
        justifyContent: "center",
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 30
    },
    textInput: {
        height: 40,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontFamily: Fonts.Metropolis,
        fontSize: 16
    },
    prevSearches: {
        color: "red"
    },
    searchIcon: {
        padding: 5,
        paddingStart: 10
    },
});
