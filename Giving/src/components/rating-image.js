import React from "react";
import { Alert, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export class RatingImage extends React.Component {
  renderImage() {
    if (this.props.currentRating === undefined) {
      return (
        <View style={styles.container}>
            <Text>No Rating</Text>
        </View>
      );
    }
    else if (this.props.currentRating.rating == 0) {
      return (
        <View style={styles.container}>
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
        </View>
      );
    }
    else if (this.props.currentRating.rating == 1) {
      return (
        <View style={styles.container}>
            <Icon name="md-star" size={25} color="#2d2d2d" />
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
        </View>
      );
    }
    else if (this.props.currentRating.rating == 2) {
      return (
        <View style={styles.container}>
            <Icon name="md-star" size={25} color="#2d2d2d" />
            <Icon name="md-star" size={25} color="#2d2d2d" />
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
        </View>
      );
    }
    else if (this.props.currentRating.rating == 3) {
      return (
        <View style={styles.container}>
            <Icon name="md-star" size={25} color="#2d2d2d" />
            <Icon name="md-star" size={25} color="#2d2d2d" />
            <Icon name="md-star" size={25} color="#2d2d2d" />
            <Icon name="md-star-outline" size={25} color="#2d2d2d" />
        </View>
      );
    }
    else if (this.props.currentRating.rating == 4) {
      return (
        <View style={styles.container}>
            <Icon name="md-star" size={25} color="#2d2d2d" />
            <Icon name="md-star" size={25} color="#2d2d2d" />
            <Icon name="md-star" size={25} color="#2d2d2d" />
            <Icon name="md-star" size={25} color="#2d2d2d" />
        </View>
      );
    }
  }

  render() {
    return <View style={{width: 110, height: 25}}>{this.renderImage()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row'
  }
});
