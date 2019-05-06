import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class Map extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});