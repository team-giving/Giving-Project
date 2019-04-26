import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                <Text >
                    {"Email: "}
                </Text>
                <TextInput
                    style={styles.textBox}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default InputField;