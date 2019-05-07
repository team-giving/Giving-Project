import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { QuickSearchButton } from "../components/quick-search-button.js";
import { Fonts } from "../constants.js";

export class CauseButtonList extends React.Component {
    render() {
        const categoryData = this.props.categoryData;
        return (
            <View>
                <Text style={styles.categoryHeading}>{categoryData.categoryName}</Text>
                <FlatList
                    data={categoryData.causes}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns="2"
                    renderItem={({ item }) => (
                        <QuickSearchButton
                            causeData={item}
                            onPress={this.props.onPress}
                            key={item.causeID.toString()}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    categoryHeading: {
        fontFamily: Fonts.MetropolisBold,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 10
    }
});
