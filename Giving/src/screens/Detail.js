import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Detail extends Component {

    static navigationOptions = ({ navigation }) => {
        const charityData = navigation.getParam('charityData');
    return {
      title: charityData.charityName,
    };
  };

    render() {
        const charityData = this.props.navigation.getParam('charityData');
        return (
            <View style={styles.container}>
                <Text> {charityData.charityName} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
