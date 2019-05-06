import React from "react";
import { Alert, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export class RatingImage extends React.Component {
  renderImage() {
    if (this.props.currentRating === undefined) {
      return (
        <View style={styles.container}>
            <Text> No Rating </Text>
        </View>
      );
    }
    else if (this.props.currentRating.rating == 0) {
      return (
        <View style={styles.container}>
            <Icon name="md-star-outline" size={25}/>
            <Icon name="md-star-outline" size={25}/>
            <Icon name="md-star-outline" size={25}/>
            <Icon name="md-star-outline" size={25}/>
        </View>
      );
    }
    else if (this.props.currentRating.rating == 1) {
      return (
        <View style={styles.container}>
            <Icon name="md-star" size={25}/>
            <Icon name="md-star-outline" size={25}/>
            <Icon name="md-star-outline" size={25}/>
            <Icon name="md-star-outline" size={25}/>
        </View>
      );
    }
    else if (this.props.currentRating.rating == 2) {
      return (
        <View style={styles.container}>
            <Icon name="md-star" size={25}/>
            <Icon name="md-star" size={25}/>
            <Icon name="md-star-outline" size={25}/>
            <Icon name="md-star-outline" size={25}/>
        </View>
      );
    }
    else if (this.props.currentRating.rating == 3) {
      return (
        <View style={styles.container}>
            <Icon name="md-star" size={25}/>
            <Icon name="md-star" size={25}/>
            <Icon name="md-star" size={25}/>
            <Icon name="md-star-outline" size={25}/>
        </View>
      );
    }
    else if (this.props.currentRating.rating == 4) {
      return (
        <View style={styles.container}>
            <Icon name="md-star" size={25}/>
            <Icon name="md-star" size={25}/>
            <Icon name="md-star" size={25}/>
            <Icon name="md-star" size={25}/>
        </View>
      );
    }
  }

  render() {
    return <View>{this.renderImage()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row'
  }
});
