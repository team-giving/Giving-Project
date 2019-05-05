import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { FavoriteButton } from "./favorite-button.js";

export class SearchResultListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.textStyle}>{this.props.name}</Text>
        </TouchableOpacity>
        <FavoriteButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey"
  },
  textStyle: {
    textAlign: "left"
  }
});
