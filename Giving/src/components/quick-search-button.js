import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export class QuickSearchButton extends React.Component {
  render() {
    let keyword = this.props.keyword;
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => this.props.onPress(keyword)}
      >
        <Text style={styles.textStyle}>{keyword}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    width: 170,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    justifyContent: "center",
    margin: 5,
    backgroundColor: 'dodgerblue'
  },
  textStyle: {
    fontSize: 30,
    textAlign: "center"
  }
});
