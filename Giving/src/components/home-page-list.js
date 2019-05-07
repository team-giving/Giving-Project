import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { HomePageCharity } from "../components/home-page-charity.js";
import { Fonts } from "../constants.js";

export class HomePageList extends React.Component {
    render() {
        const listData = this.props.listData;
        if (listData === undefined) {
            return null;
        }
        let charityKey = 0;
        return (
            <View style={styles.container}>
                <Text style={styles.categoryHeading}>{listData.listName}</Text>
                <FlatList
                    data={listData.groups[0].organizations}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <HomePageCharity
                            charityData={item}
                            onPressCharity={this.props.onPressCharity}
                            key={charityKey++}
                            favList={this.props.favList}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5
    },
    categoryHeading: {
        fontFamily: Fonts.MetropolisBold,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 10
    }
});
