import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { FavoriteButton } from "./favorite-button.js";

export class HomePageCharity extends React.Component {
  constructor(props) {
    super(props);
    this.onPressCharity = this.onPressCharity.bind(this);
  }

  onPressCharity() {
    this.props.onPressCharity(this.props.charityData.organization);
  }

  render() {
    const charityData = this.props.charityData.organization;
    if (charityData === undefined){
        return null;
    }
    return (
      <TouchableOpacity style={styles.touchable} onPress={this.onPressCharity}>
        <Text style={styles.textStyle}>{charityData.charityName}</Text>
        <FavoriteButton ein={charityData.ein} favoritesList={[]}/>
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
    justifyContent: "center",
    margin: 5,
    backgroundColor: "dodgerblue"
  },
  textStyle: {
    fontSize: 10,
    textAlign: "center"
  }
});
