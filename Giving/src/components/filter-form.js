import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Switch, Button, Dimensions, TouchableOpacity, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Slider from '@react-native-community/slider';
import { Fonts, CATEGORIES_PICKER, SCOPE_PICKER, STATE_PICKER, CITY_PICKER } from '../constants.js'
import DialogInput from 'react-native-dialog-input';

const window = Dimensions.get('window');

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


    submitSearch() {
        if (!this.formIsEmpty()) {
            this.props.filteredSearch(this.state);
        }
        else {
            Alert.alert("Search requires at least one parameter!");
        }
    }


    formIsEmpty() {
        if (this.props.keyword != "") {
            return false;
        }
        if (this.state.category != null) {
            return false;
        }
        if (this.state.minRating != null && this.state.minRating != 0) {
            return false;
        }
        if (this.state.pageSize != null) {
            return false;
        }
        if (this.state.ratedOnly != false) {
            return false;
        }
        if (this.state.scope != null) {
            return false;
        }
        if (this.state.noGovSupport != false) {
            return false;
        }
        if (this.state.state != null) {
            return false;
        }
        if (this.state.city != null && this.state.city != "") {
            return false;
        }
        if (this.state.zip != null && this.state.zip != "") {
            return false;
        }
        return true;
    }

    render() {

        let textPadding = Platform.OS === 'ios' ? 0 : 8;
        let innerWeight = Platform.OS === 'ios' ? 3 : 16;

        if (Platform.OS === 'ios') {
            return (
                <View style={styles.container}>

                    <View style={[styles.sliderContainer, { paddingTop: 10 }]}>
                        <Text style={{ paddingLeft: textPadding, paddingBottom: 2 }}>Minimum Rating: {this.state.minRating}</Text>
                        <Slider
                            thumbTintColor="#1578d0"
                            minimumValue={0}
                            maximumValue={4}
                            step={1}
                            onValueChange={(minRating) => this.setState({ minRating })} />
                    </View>

                    <View style={styles.sliderContainer}>
                        <Text style={{ paddingLeft: textPadding, paddingBottom: 2 }}>Limit Results: {this.state.pageSize}</Text>
                        <Slider
                            thumbTintColor="#1578d0"
                            minimumValue={1}
                            maximumValue={50}
                            step={1}
                            onValueChange={(pageSize) => this.setState({ pageSize })} />
                    </View>

                    <View style={[styles.switchContainer, { marginTop: 10 }]}>
                        <Text style={{ paddingLeft: textPadding, marginRight: 10, paddingBottom: 2 }}>Show Only Rated Charities:</Text>
                        <Switch
                            thumbColor="#1578d0"
                            value={this.state.ratedOnly}
                            onValueChange={(ratedOnly) => this.setState({ ratedOnly })} />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={{ paddingLeft: textPadding, marginRight: 10, paddingBottom: 2 }}>Receives No Gov't Support:</Text>
                        <Switch
                            thumbColor="#1578d0"
                            value={this.state.noGovSupport}
                            onValueChange={(noGovSupport) => this.setState({ noGovSupport })} />
                    </View>

                    <View style={styles.innerContainer}>
                        <RNPickerSelect
                            items={CATEGORIES_PICKER}
                            onValueChange={(category) => this.setState({ category })}
                            placeholderTextColor='#1578d0'
                            placeholder={{ label: 'Pick a category...', value: null, color: 'black' }}
                        />
                    </View>

                    <View style={styles.innerContainer}>
                        <RNPickerSelect
                            items={SCOPE_PICKER}
                            onValueChange={(scope) => this.setState({ scope })}
                            placeholderTextColor='#1578d0'
                            placeholder={{ label: 'Pick a scope...', value: null, color: 'black' }}
                        />
                    </View>

                    <View style={styles.innerContainer}>
                        <RNPickerSelect
                            items={STATE_PICKER}
                            onValueChange={(state) => this.setState({ state })}
                            placeholderTextColor='#1578d0'
                            placeholder={{ label: 'Pick a state...', value: null, color: 'black' }}
                        />
                    </View>

                    <View style={styles.innerContainer}>
                        <RNPickerSelect
                            items={CITY_PICKER}
                            onValueChange={(city) => this.setState({ city })}
                            placeholderTextColor='#1578d0'
                            placeholder={{ label: 'Pick a city...', value: null, color: 'black' }}
                        />
                    </View>

                    {/*
                    <View style={styles.innerContainer}>
                        <TextInput style={styles.textInput}
                            onChangeText={(zip) => this.setState({ zip })}
                            clearButtonMode='always'
                            textContentType='postalCode'
                            placeholder="Enter ZIP code"
                            placeholderTextColor="#000000" />
                    </View>
                    */}

                    <View style={[styles.buttonContainer]}>
                        <TouchableOpacity
                            activeOpacity={.7}
                            style={[styles.buttonContainer, { backgroundColor: '#2d2d2d', marginLeft: -4 }]}
                            onPress={this.submitSearch}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );
        } else {
            return (
                <View style={styles.container}>

                    <View style={[styles.sliderContainer, { paddingTop: 10 }]}>
                        <Text style={{ paddingLeft: textPadding, paddingBottom: 2 }}>Minimum Rating: {this.state.minRating}</Text>
                        <Slider
                            thumbTintColor="#1578d0"
                            minimumValue={0}
                            maximumValue={4}
                            step={1}
                            onValueChange={(minRating) => this.setState({ minRating })} />
                    </View>

                    <View style={styles.sliderContainer}>
                        <Text style={{ paddingLeft: textPadding, paddingBottom: 2 }}>Limit Results: {this.state.pageSize}</Text>
                        <Slider
                            thumbTintColor="#1578d0"
                            minimumValue={1}
                            maximumValue={50}
                            step={1}
                            onValueChange={(pageSize) => this.setState({ pageSize })} />
                    </View>

                    <View style={[styles.switchContainer, { marginTop: 10 }]}>
                        <Text style={{ paddingLeft: textPadding, marginRight: 10, paddingBottom: 2 }}>Show Only Rated Charities:</Text>
                        <Switch
                            thumbColor="#1578d0"
                            value={this.state.ratedOnly}
                            onValueChange={(ratedOnly) => this.setState({ ratedOnly })} />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={{ paddingLeft: textPadding, marginRight: 10, paddingBottom: 2 }}>Receives No Gov't Support:</Text>
                        <Switch
                            thumbColor="#1578d0"
                            value={this.state.noGovSupport}
                            onValueChange={(noGovSupport) => this.setState({ noGovSupport })} />
                    </View>

                    <View style={[styles.innerContainer, { flex: innerWeight }]}>
                        <RNPickerSelect
                            items={CATEGORIES_PICKER}
                            onValueChange={(category) => this.setState({ category })}
                            placeholderTextColor='#1578d0'
                            placeholder={{ label: 'Pick a category...', value: null, color: 'black' }}
                        />
                        <RNPickerSelect
                            items={SCOPE_PICKER}
                            onValueChange={(scope) => this.setState({ scope })}
                            placeholderTextColor='#1578d0'
                            placeholder={{ label: 'Pick a scope...', value: null, color: 'black' }}
                        />
                        <RNPickerSelect
                            items={STATE_PICKER}
                            onValueChange={(state) => this.setState({ state })}
                            placeholderTextColor='#1578d0'
                            placeholder={{ label: 'Pick a state...', value: null, color: 'black' }}
                        />
                        <RNPickerSelect
                            items={CITY_PICKER}
                            onValueChange={(city) => this.setState({ city })}
                            placeholderTextColor='#1578d0'
                            placeholder={{ label: 'Pick a city...', value: null, color: 'black' }}
                        />
                    </View>

                    {/*
                    <View style={styles.innerContainer}>
                        <TextInput style={styles.textInput}
                            onChangeText={(zip) => this.setState({ zip })}
                            clearButtonMode='always'
                            textContentType='postalCode'
                            placeholder="Enter ZIP code"
                            placeholderTextColor="#000000" />
                    </View>
                    */}

                    <View style={[styles.buttonContainer]}>
                        <TouchableOpacity
                            activeOpacity={.7}
                            style={[styles.buttonContainer, { backgroundColor: '#2d2d2d', marginLeft: -4 }]}
                            onPress={this.submitSearch}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        marginBottom: 10,
        width: window.width - 30,
        marginLeft: 8,
        fontFamily: Fonts.Metropolis,
        alignItems: 'stretch',
        borderBottomWidth: 1,
        borderColor: '#2d2d2d'
    },
    innerContainer: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    sliderContainer: {
        flex: 1,
        marginLeft: 5,
        marginRight: 15,
        paddingTop: 20,
        paddingBottom: 20
    },
    switchContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#1578d0',
        borderRadius: 3,
        fontFamily: Fonts.Metropolis,
        height: 25,
    },
    buttonContainer: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
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
