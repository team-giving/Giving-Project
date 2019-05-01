import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { QuickSearchButton } from "../components/quick-search-button.js";

export class QuickSearchList extends React.Component {
 render() {
    return (
        <FlatList
          data={this.props.quickSearches}
          keyExtractor={item => item}
          numColumns="2"
          renderItem={({ item }) => (
            <QuickSearchButton
              keyword={item}
              onPress={this.props.onPress}
              key={item}
            />
          )}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
