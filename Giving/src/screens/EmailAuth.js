import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class EmailAuth extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Button
                    title="Sign In with Email"
                    onPress={() => this.props.navigation.navigate('SignIn')}
                />
                <Button
                    title="Sign Up with Email"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </View>
        );
    }
}
export default EmailAuth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});