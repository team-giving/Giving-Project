// import React, { Component } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
//
// export default class Search extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text> Search </Text>
//                 <Button
//                     title="Go to Detail Screen"
//                     onPress={() => this.props.navigation.navigate('Detail')} />
//             </View>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     }
// });

//_____________________________________________________________________________

import React, { Component } from 'react';
import {
    Alert,
  Button,
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView
} from "react-native";

import { FilterForm } from "../components/filter-form.js";
import { SearchBar } from "../components/search-bar.js";
import { QuickSearchList } from "../components/quick-search-list.js";
import { SearchResultListItem } from "../components/search-result-list-item.js";
import { QUICK_SEARCH_OPTIONS } from "../constants.js";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: "",
      results: [],
      searching: false,
      noResults: false,
      showFilterMenu: false
    };
    this.searchCharities = this.searchCharities.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.returnToSearchHome = this.returnToSearchHome.bind(this);
    this.openFilterMenu = this.openFilterMenu.bind(this);
    this.closeFilterMenu = this.closeFilterMenu.bind(this);
    this.renderFilterMenu = this.renderFilterMenu.bind(this);
    this.filteredSearch = this.filteredSearch.bind(this);
  }

  searchCharities(input) {
    this.setState({
      currentSearch: input,
      searching: true,
      showFilterMenu: false
    });
    //fetch("http://ec2-54-165-35-46.compute-1.amazonaws.com:3000/search/" + input, {
    fetch("http://localhost:3000/search/" + input, {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => {
        console.log("-GET RESPONSE RECEIVED");
        if (json.data === null) {
          this.setState({ results: json.data, noResults: true });
        } else {
          this.setState({ results: json.data, noResults: false });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  filteredSearch(filters) {
      console.log(filters);
    this.setState({
      currentSearch: '',
      searching: true,
      showFilterMenu: false
    });
    //fetch("http://ec2-54-165-35-46.compute-1.amazonaws.com:3000/filteredSearch", {
    fetch("http://localhost:3000/filteredSearch", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(filters)
    })
      .then(res => res.json())
      .then(json => {
        console.log("-POST RESPONSE RECEIVED");
        if (json.data === null) {
          this.setState({ results: json.data, noResults: true });
        } else {
          this.setState({ results: json.data, noResults: false });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  returnToSearchHome() {
    this.setState({
      currentSearch: "",
      results: [],
      searching: false,
      noResults: false
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
          <Button title="close filter menu" onPress={this.closeFilterMenu} />
          <FilterForm filteredSearch={this.filteredSearch}/>
        </View>
      );
    } else {
      return (
        <View>
          <Button title="filtered search" onPress={this.openFilterMenu} />
        </View>
      );
    }
  }

  renderResults() {
    if (!this.state.searching) {
      return (
        <View style={styles.container}>
          <QuickSearchList
            quickSearches={QUICK_SEARCH_OPTIONS}
            onPress={this.searchCharities}
          />
        </View>
      );
    } else if (this.state.noResults) {
      return (
        <View style={styles.container}>
          <Button title="back" onPress={this.returnToSearchHome} />
          <Text>
            Sorry, we couldn't find any charities matching your search for '
            {this.state.currentSearch}'
          </Text>
        </View>
      );
    } else {
        console.log(this.state.results);
      return (
        <View style={styles.container}>
          <Button title="back" onPress={this.returnToSearchHome} />
          <FlatList
            data={this.state.results}
            keyExtractor={item => item.ein}
            renderItem={({ item }) => (
              <SearchResultListItem name={item.charityName} onPress={() => this.props.navigation.navigate('Detail', {
                  charityData: item
              })}/>
            )}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          onSearch={this.searchCharities}
          currentSearch={this.state.currentSearch}
        />
        {this.renderFilterMenu()}
        {this.renderResults()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  filterFormBox:{
    flex: 4
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
  }
});
