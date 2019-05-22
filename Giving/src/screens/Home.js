import React, { Component } from "react";
import { Text, View, StyleSheet, Button, FlatList, Platform } from "react-native";
import { HomePageList } from "../components/home-page-list.js";
import { Fonts, SERVER_URI } from "../constants.js";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            favoriteList: []
        };
        this.fetchCharityLists = this.fetchCharityLists.bind(this);
        this.renderHomePageLists = this.renderHomePageLists.bind(this);
        this.fetchCharityLists();
        this._getFavoriteList();
    }

    static navigationOptions = Platform.OS === 'ios' ? {
        title: 'Home',
        headerTitleStyle: {
            fontFamily: Fonts.MetropolisBold,
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 5,
        }
    } :
        {
            title: 'Home',
            headerTitleStyle: {
                fontFamily: Fonts.MetropolisBold,
                fontWeight: '200',
                fontSize: 20,
                marginTop: 0,
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
                marginRight: 65
            }
        };

    _onPressCharity = charityData => {
        this.props.navigation.navigate("Detail", { charityData: charityData, favList: this.state.favoriteList });
    };

    _getFavoriteList = async () => {
        try {
            const mongoID = await AsyncStorage.getItem("@mongoID");
            const userEmail = await AsyncStorage.getItem("@userEmail");
            if (userEmail !== null) {
                // User Logged in
                axios.get(SERVER_URI + "/user/userFavorites/" + userEmail)
                    .then(response => {
                        this.setState({ favoriteList: response.data.favoriteList });
                    })
                    .catch(error => {
                        alert(error);
                    });
            }
        } catch (error) {
            alert(error);
        }
    };

    async fetchCharityLists() {
        try {
            let response = await fetch(SERVER_URI + "/home/lists", {
                method: "GET"
            });
            let json = await response.json();
            let data = json.data;
            console.log(data);
            this.setState({ listData: data });
        } catch (err) {
            console.log(err);
        }
    }

    renderHomePageLists(favList) {
        if (this.state.listData == []) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#1578d0" />
                </View>
            );
        } else {
            return (
                <FlatList
                    data={this.state.listData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <HomePageList
                            listData={item}
                            onPressCharity={this._onPressCharity}
                            key={item.listID}
                            favList={favList}
                        />
                    )}
                />
            );
        }
    }

    render() {
        const favList = this.state.favoriteList;
        return <View style={styles.container}>{this.renderHomePageLists(favList)}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    }
});
