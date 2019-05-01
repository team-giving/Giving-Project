/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);



// type Props = {};
// export default class App extends Component<Props> {
//   // click() {
//   //   fetch("http://localhost:8080/test", {
//   //     method: "GET"
//   //   })
//   //     .then(res => res.json())
//   //     .then(data => {
//   //       Alert.alert("-GET RESPONSE RECEIVED");
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     });
//   // }
//
//   render() {
//     return (
//       <View>
//         <Button title="Click Here Bro" />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });
