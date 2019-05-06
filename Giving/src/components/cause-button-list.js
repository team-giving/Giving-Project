import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { QuickSearchButton } from "../components/quick-search-button.js";

export class CauseButtonList extends React.Component {
 render() {
    const categoryData = this.props.categoryData;
    return (
        <View>
        <Text>{categoryData.categoryName}</Text>
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
  }
});
