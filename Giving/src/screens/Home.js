import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
    

    render() {
        return (
            <View style={styles.container}>
                <Text> Home </Text>
                <Button 
                    title="Go to Detail Screen" 
                    onPress={() => this.props.navigation.navigate('Detail')} />
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