import React, { Component } from "react";
import {
    Alert,
    Button,
    StyleSheet,
    FlatList,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
    Platform,
    Dimensions,
    TouchableOpacity
} from "react-native";

import { FilterForm } from "../components/filter-form.js";
import { SearchBar } from "../components/search-bar.js";
import { QuickSearchList } from "../components/quick-search-list.js";
import { SearchResultListItem } from "../components/search-result-list-item.js";
import { Fonts, CATEGORIES, SERVER_URI, NO_RESULTS_RESPONSES } from "../constants.js";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

const window = Dimensions.get('window');

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSearch: "",
            results: [],
            favoriteList: [],
            showQuickButtons: true,
            searching: false,
            noResults: 0,
            showFilterMenu: false
        };
        this.searchCharities = this.searchCharities.bind(this);
        this.filteredSearch = this.filteredSearch.bind(this);
        this.searchByCause = this.searchByCause.bind(this);
        this.returnToSearchHome = this.returnToSearchHome.bind(this);
        this.openFilterMenu = this.openFilterMenu.bind(this);
        this.closeFilterMenu = this.closeFilterMenu.bind(this);
        this.renderFilterMenu = this.renderFilterMenu.bind(this);
        this.getNoResultsMessage = this.getNoResultsMessage.bind(this);
        this.renderResults = this.renderResults.bind(this);
        this._getFavoriteList();
    }

    static navigationOptions = Platform.OS === 'ios' ? {
        title: 'Search',
        headerTitleStyle: {
            fontFamily: Fonts.MetropolisBold,
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 5,
        }
    } :
        {
            title: 'Search',
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

    _updateKeyword = text => {
        this.setState({ currentSearch: text });
    };

    _onPressSearchResult = charityData => {
        this.props.navigation.navigate("Detail", { charityData: charityData, favList: this.state.favoriteList });
    };
  
    _getFavoriteList = async () => {
      try {
        const userEmail = await AsyncStorage.getItem("@userEmail");
        if (userEmail !== null) {
          // User Logged in
          axios.get(SERVER_URI + "/user/userFavorites/" + userEmail)
            .then(response => {
              this.setState({favoriteList: response.data.favoriteList});
            })
            .catch(error => {
              alert(error);
            });
        }
      } catch (error) {
        alert(error);
      }
    };

    async searchCharities(input) {
        this._getFavoriteList();
        this.setState({ currentSearch: input });
        if (!this.state.showFilterMenu) {
            this.setState({ searching: true, showQuickButtons: false });

            try {
                let response = await fetch(SERVER_URI + "/search/" + input, {
                    method: "GET"
                });
                let json = await response.json();
                let data = json.data;
                console.log(data);
                if (data === null) {
                    this.setState({ results: data, noResults: 1, searching: false });
                } else {
                    this.setState({ results: data, noResults: 0, searching: false });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    async filteredSearch(filters) {
        this._getFavoriteList();
        let keyword = this.state.currentSearch;
        filters.keyword = keyword;
        console.log(filters);
        this.setState({
            searching: true,
            showFilterMenu: false,
            showQuickButtons: false
        });

        try {
            let response = await fetch(SERVER_URI + "/search/filtered", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(filters)
            });
            let json = await response.json();
            let data = json.data;
            console.log(data);
            if (json.data === null) {
                this.setState({ results: json.data, noResults: 2, searching: false });
            } else {
                this.setState({ results: json.data, noResults: 0, searching: false });
            }
        } catch (err) {
            console.log(err);
        }
    }

    async searchByCause(causeID) {
        this._getFavoriteList();
        this.setState({
            searching: true,
            showFilterMenu: false,
            showQuickButtons: false
        });
        try {
            let response = await fetch(
                SERVER_URI + "/search/byCause/" + causeID.toString(),
                { method: "GET" }
            );
            let json = await response.json();
            let data = json.data;
            console.log(data);
            if (data === null) {
                this.setState({ results: data, noResults: 3, searching: false });
            } else {
                this.setState({ results: data, noResults: 0, searching: false });
            }
        } catch (err) {
            console.log(err);
        }
    }

    returnToSearchHome() {
        this.setState({
            currentSearch: "",
            results: [],
            showQuickButtons: true,
            searching: false,
            noResults: 0
        });
    }

    openFilterMenu() {
        this.setState({ showFilterMenu: true });
    }
    closeFilterMenu() {
        this.setState({ showFilterMenu: false });
    }

    renderFilterMenu() {
        if (this.state.showFilterMenu) {
            return (
                <View style={styles.filterFormBox}>
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={[styles.buttonContainer, { backgroundColor: '#2d2d2d' }]}
                        onPress={this.closeFilterMenu}
                    >
                        <Text style={styles.buttonText}>Close filter menu</Text>
                    </TouchableOpacity>
                    <FilterForm
                        filteredSearch={this.filteredSearch}
                        keyword={this.state.currentSearch}
                    />
                </View>
            );
        } else {
            return (
                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer, { backgroundColor: '#2d2d2d' }]}
                    onPress={this.openFilterMenu}
                >
                    <Text style={styles.buttonText}>Filtered search</Text>
                </TouchableOpacity>
            );
        }
    }

    getNoResultsMessage(noResultsCode) {
        if (noResultsCode == 1) {
            return (NO_RESULTS_RESPONSES.basic + this.state.currentSearch);
        }
        else if (noResultsCode == 2) {
            return NO_RESULTS_RESPONSES.filtered;
        }
        else if (noResultsCode == 3) {
            return NO_RESULTS_RESPONSES.cause;
        }
    }

    renderResults(favList) {
        if (this.state.showQuickButtons) {
            return (
                <View style={styles.container}>
                    <QuickSearchList
                        categories={CATEGORIES}
                        onPress={this.searchByCause}
                    />
                </View>
            );
        } else if (this.state.searching) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={[styles.buttonContainer, { backgroundColor: '#2d2d2d' }]}
                        onPress={this.returnToSearchHome}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="#1578d0" />
                    </View>
                </View>
            );
        } else if (this.state.noResults != 0) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={[styles.buttonContainer, { backgroundColor: '#2d2d2d' }]}
                        onPress={this.returnToSearchHome}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <Text>
                        {this.getNoResultsMessage(this.state.noResults)}
                    </Text>
                </View>
            );
        } else {
            console.log(this.state.results);
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={[styles.buttonContainer, { backgroundColor: '#2d2d2d' }]}
                        onPress={this.returnToSearchHome}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={this.state.results}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <SearchResultListItem
                                charityData={item}
                                onPress={() => this._onPressSearchResult(item)}
                                favList={favList}
                            />
                        )}
                    />
                </View>
            );
        }
    }

    render() {
        const favList = this.state.favList;
        console.log("SEARCH PAGE LIST:");
        console.log(favList);
        return (
            <View style={styles.container}>
                <SearchBar
                    onSearch={this.searchCharities}
                    currentSearch={this.state.currentSearch}
                    updateKeyword={this._updateKeyword}
                />
                {this.renderFilterMenu()}
                {this.renderResults(favList)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    filterFormBox: {
        flex: 5
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "rgba(247,247,247,1.0)"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
    buttonContainer: {
        backgroundColor: '#1578d0',
        paddingVertical: 12,
        margin: 5,
        borderRadius: 30,
        width: window.width - 30
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: Fonts.Metropolis,
        fontSize: 16
    }
});
