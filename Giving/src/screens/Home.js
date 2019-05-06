import React, { Component } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { HomePageList } from "../components/home-page-list.js";
import { SERVER_URI } from "../constants.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
    this.fetchCharityLists = this.fetchCharityLists.bind(this);
    this.renderHomePageLists = this.renderHomePageLists.bind(this);
    this.fetchCharityLists();
  }

  _onPressCharity = charityData => {
    this.props.navigation.navigate("Detail", { charityData: charityData });
  };

  async fetchCharityLists() {
    try {
      let response = await fetch(SERVER_URI + "/home/lists", {
        method: "GET"
      });
      let json = await response.json();
      let data = json.data;
      console.log(data);
      this.setState({ listData: data });
    } catch (err) {
      console.log(err);
    }
  }

  renderHomePageLists() {
    if (this.state.listData == []) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#1578d0" />
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.state.listData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <HomePageList
              listData={item}
              onPressCharity={this._onPressCharity}
              key={item.listID}
            />
          )}
        />
      );
    }
  }

  render() {
    return <View style={styles.container}>{this.renderHomePageLists()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
