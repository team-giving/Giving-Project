import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

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
      if (prevSearchesCopy.length >= 10) {
        //make this limit an external variable
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
    backgroundColor: "blue",
    justifyContent: "center",
    marginTop: 35
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
