import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { PREV_SEARCHES_MAX_LENGTH } from "../constants.js"

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
          <TextInput
            style={styles.textInput}
            placeholder="Search for charities here!"
            clearButtonMode="always"
            onSubmitEditing={event =>
              this.makeNewSearch(event.nativeEvent.text)
            }
            onChangeText={(text) => this.props.updateKeyword(text)}
            defaultValue={this.props.currentSearch}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    width: "100%",
    padding: 3,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  searchBox: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 30,
    paddingLeft: 10,
    backgroundColor: "white"
  },
  textInput: {
    flex: 1,
    fontWeight: "bold"
  },
  prevSearches: {
    color: "red"
  }
});
