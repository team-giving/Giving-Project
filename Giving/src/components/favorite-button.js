import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

export class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false
    };
    this.favorite = this.favorite.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  favorite() {
    this.setState({ favorited: !this.state.favorited });
  }

  renderButton() {
    if (this.state.favorited) {
      return <TouchableOpacity style={styles.on} onPress={this.favorite} />;
    } else {
      return <TouchableOpacity style={styles.off} onPress={this.favorite} />;
    }
  }

  render() {
    return <View>{this.renderButton()}</View>;
  }
}

const styles = StyleSheet.create({
  on: {
    height: 10,
    width: 10,
    margin: 10,
    borderWidth: 0.2,
    backgroundColor: "blue"
  },
  off: {
    height: 10,
    width: 10,
    margin: 10,
    borderWidth: 0.2
  }
});
