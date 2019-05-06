import React from "react";
import { Alert, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SERVER_URI } from "../constants.js"
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";


export class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);

    /* TODO: this is how you would make each favorite button render based
     *      on if the charity is already favorited. All that's needed is
     *      to get the list of favorited ein's from the database and pass it
     *      here as a prop. Also, all favorite buttons now have this.props.ein
    */
    let inFavoritedList = false;
    if (this.props.favoritesList.includes(this.props.ein)){
        inFavoritedList = true;
    }

    this.state = {
      favorited: inFavoritedList
    };
    this.renderButton = this.renderButton.bind(this);
  }

  _favorite = async () => {
    this.setState({ favorited: true });
    try {
      const userEmail = await AsyncStorage.getItem("@userEmail");
      const ein = this.props.ein;
      if (userEmail !== null) {
        // User Logged in
        axios.post(SERVER_URI + "/user/favorite", {
            userEmail: userEmail,
            ein: ein
          })
          .then(response => {
            alert(response.status);
          })
          .catch(error => {
            alert(error);
          });
      } else {
        // User Not logged in
        alert("Create account or log in");
      }
    } catch (error) {
      alert(error);
    }
  };

  _unfavorite = async () => {
    this.setState({ favorited: false });
    // TODO: FILL IN CODE TO UNFAVORITE CHARITIES
  };

  renderButton() {
    if (this.state.favorited) {
      return (
        <TouchableOpacity onPress={this._unfavorite}>
          <Icon name="md-heart" size={25} color="red" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={this._favorite}>
          <Icon name="md-heart-empty" size={25} />
        </TouchableOpacity>
      );
    }
  }

  render() {
    return <View>{this.renderButton()}</View>;
  }
}
