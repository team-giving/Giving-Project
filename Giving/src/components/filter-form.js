import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Switch, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Slider from '@react-native-community/slider';
import { CATEGORIES_PICKER, SCOPE_PICKER, STATE_PICKER }  from '../constants.js'

export class FilterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        category: null,
        minRating: null,
        pageSize: null,
        ratedOnly: false,
        scope: null,
        noGovSupport: false,
        state: null,
        city: null,
        zip: null
      };
      this.submitSearch = this.submitSearch.bind(this);
      this.formIsEmpty = this.formIsEmpty.bind(this);
    }


    submitSearch(){
        if (!this.formIsEmpty()){
            this.props.filteredSearch(this.state);
        }
        else{
            Alert.alert("Search requires at least one parameter!");
        }
    }


    formIsEmpty(){
        if (this.props.keyword != ""){
            return false;
        }
        if (this.state.category != null){
            return false;
        }
        if (this.state.minRating != null && this.state.minRating != 0){
            return false;
        }
        if (this.state.pageSize != null){
            return false;
        }
        if (this.state.ratedOnly != false){
            return false;
        }
        if (this.state.scope != null){
            return false;
        }
        if (this.state.noGovSupport != false){
            return false;
        }
        if (this.state.state != null){
            return false;
        }
        if (this.state.city != null && this.state.city != ""){
            return false;
        }
        if (this.state.zip != null && this.state.zip != ""){
            return false;
        }
        return true;
    }


  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.innerContainer}>
            <Text>Category:</Text>
            <RNPickerSelect
            items = {CATEGORIES_PICKER}
            onValueChange = {(category) => this.setState({category})}
            placeholder = {{label: 'Pick a category...', value: null, color: 'black'}}
            />
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
            items = {SCOPE_PICKER}
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
            <Text>State:</Text>
            <RNPickerSelect
            items = {STATE_PICKER}
            onValueChange = {(state) => this.setState({state})}
            placeholder = {{label: 'Pick a state...', value: null, color: 'black'}}
            />
        </View>

        <View style = {styles.innerContainer}>
            <Text>City:</Text>
            <TextInput style={styles.textInput}
            onChangeText={(city) => this.setState({city})}
            clearButtonMode='always'
            textContentType='addressCity'/>
        </View>

        <View style = {styles.innerContainer}>
            <Text>Zip Code:</Text>
            <TextInput style={styles.textInput}
            onChangeText={(zip) => this.setState({zip})}
            clearButtonMode='always'
            textContentType='postalCode'/>
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
    borderBottomWidth: .5
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
  },
});
