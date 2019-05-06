import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { HomePageCharity } from "../components/home-page-charity.js";

export class HomePageList extends React.Component {
  render() {
    const listData = this.props.listData;
    if (listData === undefined){
        return null;
    }
    let charityKey = 0;
    return (
      <View>
        <Text>{listData.listName}</Text>
        <FlatList
          data={listData.groups[0].organizations}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <HomePageCharity
              charityData={item}
              onPressCharity={this.props.onPressCharity}
              key={charityKey++}
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
