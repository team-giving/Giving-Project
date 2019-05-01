import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Switch, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Slider from '@react-native-community/slider';
import { CATEGORIES, SCOPE_OPTIONS }  from '../constants.js'

export class FilterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        keyword: null,
        category: null,
        ein: null,
        minRating: null,
        pageSize: null,
        ratedOnly: false,
        scope: null,
        noGovSupport: false
      };
      this.submitSearch = this.submitSearch.bind(this);
    }


    submitSearch(){
        this.props.filteredSearch(this.state)
    }


  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.innerContainer}>
            <Text>Keyword:</Text>
            <TextInput style={styles.textInput}
            onChangeText={(keyword) => this.setState({keyword})}/>
        </View>

        <View style = {styles.innerContainer}>
            <Text>Category:</Text>
            <RNPickerSelect
            items = {CATEGORIES}
            onValueChange = {(category) => this.setState({category})}
            placeholder = {{label: 'Pick a category...', value: null, color: 'black'}}
            />
        </View>

        <View style = {styles.innerContainer}>
            <Text>EIN (Employer Identification Number):</Text>
            <TextInput style={styles.textInput}
            onChangeText={(ein) => this.setState({ein})}/>
        </View>

        <View style = {styles.sliderContainer}>
            <Text>Minimum Rating: {this.state.minRating}</Text>
            <Slider
            minimumValue= {0}
            maximumValue= {4}
            step= {1}
            onValueChange = {(minRating) => this.setState({minRating})}/>
        </View>

        <View style = {styles.sliderContainer}>
            <Text>Limit Results: {this.state.pageSize}</Text>
            <Slider
            minimumValue= {1}
            maximumValue= {50}
            step= {1}
            onValueChange = {(pageSize) => this.setState({pageSize})}/>
        </View>

        <View style = {styles.switchContainer}>
            <Text>Show Only Rated Charities:</Text>
            <Switch
            value = {this.state.ratedOnly}
            onValueChange = {(ratedOnly) => this.setState({ratedOnly})}/>
        </View>

        <View style = {styles.innerContainer}>
            <Text>Scope of Work:</Text>
            <RNPickerSelect
            items = {SCOPE_OPTIONS}
            onValueChange = {(scope) => this.setState({scope})}
            placeholder = {{label: 'Pick a scope...', value: null, color: 'black'}}
            />
        </View>

        <View style = {styles.switchContainer}>
            <Text>Receives No Gov't Support:</Text>
            <Switch
            value = {this.state.noGovSupport}
            onValueChange = {(noGovSupport) => this.setState({noGovSupport})}/>
        </View>

        <View style = {styles.innerContainer}>
            <Button title="SEARCH" onPress={this.submitSearch}/>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: .5,
    marginLeft: 10,
    marginRight: 10
  },
  innerContainer:{
      flex: 1,
      marginTop: 5,
      marginBottom: 5,
      borderWidth: .1
  },
  sliderContainer:{
      flex: 1,
      marginTop: 15,
      marginBottom: 10,
      borderWidth: .1
  },
  switchContainer:{
      flex: 1,
      marginTop: 15,
      marginBottom: 20,
      borderWidth: .1
  },
  textInput: {
      borderWidth: .5,
      borderColor: 'grey',
      height: 15,
      margin: 5
  },
});
