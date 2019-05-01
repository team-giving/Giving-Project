import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import { FavoriteButton } from "./favorite-button.js";

export class SearchResultListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    //Alert.alert(this.props.name);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPress}>
          <Text style={styles.textStyle}>{this.props.name}</Text>
        </TouchableHighlight>
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
