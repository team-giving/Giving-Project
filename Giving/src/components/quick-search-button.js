import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export class QuickSearchButton extends React.Component {
  render() {
    const causeData = this.props.causeData;
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => this.props.onPress(causeData.causeID)}
      >
        <Text style={styles.textStyle}>{causeData.causeName}</Text>
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
    fontSize: 15,
    textAlign: "center"
  }
});
