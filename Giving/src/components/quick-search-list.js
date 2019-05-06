import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { CauseButtonList } from "../components/cause-button-list.js";

export class QuickSearchList extends React.Component {
 render() {
    return (
        <FlatList
          data={this.props.categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CauseButtonList
              categoryData={item}
              onPress={this.props.onPress}
              key={item.categoryID.toString()}
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
