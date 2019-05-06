import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { FavoriteButton } from "./favorite-button.js";
import { RatingImage } from "./rating-image.js"

export class SearchResultListItem extends React.Component {
  render() {
    const charityData = this.props.charityData;
    if (charityData === undefined){
        return null;
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.textStyle}>{charityData.charityName}</Text>
        </TouchableOpacity>
        <RatingImage currentRating={charityData.currentRating}/>
        <FavoriteButton ein={charityData.ein} favoritesList={[]}/>
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
