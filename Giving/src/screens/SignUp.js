import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import InputField from '../components/InputField';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    onPressLearnMore = () => {
        // alert(InputField.state.text)
        alert("mustafa is working on this");
    }

    render() {
        return (
            <View style={styles.container}>
                <InputField />
                <Button
                    onPress={this.onPressLearnMore}
                    title="Submit"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}
export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});