import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Platform, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Fonts, SERVER_URI } from "../constants.js";
import { NavigationEvents } from 'react-navigation';

export default class Map extends Component {

    constructor(props) {
        super(props);
        this.mapRef = null;
        this.state = {
            markers: [
            {
                title: 'Jewish Alliance of Greater Rhode Island',
                coordinates: {
                    latitude: 41.841993,
                    longitude: -71.3945496
                },
            },
            {
                title: 'Rhode Island Historical Society',
                coordinates: {
                    latitude: 41.82534,
                    longitude: -71.3978367
                },
            },
            ]
        }
    }

    static navigationOptions = Platform.OS === 'ios' ? {
        title: 'Local Charities',
        headerTitleStyle: {
            fontFamily: Fonts.MetropolisBold,
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 5,
        }
    } :
        {
            title: 'Local Charities',
            headerTitleStyle: {
                fontFamily: Fonts.MetropolisBold,
                fontWeight: '200',
                fontSize: 20,
                marginTop: 0,
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
                marginRight: 65
            }
        };


    componentDidMount() {
        if (Platform.OS === 'android') {
            this.getLocationAsync();
        }
        this.mapRef.fitToSuppliedMarkers(
            this.state.markers,
            false, // not animated
        );
    }

    getLocationAsync = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    alert("Searching for your local charities");
                } else {
                    alert("Your location is required for this feature, Unfortunately");
                }
            } catch (err) {
                console.warn(err)
            }
        }
    }

    setMarkerRef = (ref) => {
        this.marker = ref
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={this.getLocationAsync}
                />
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    showsUserLocation={true}
                    region={{
                        latitude: 41.8270702,
                        longitude: -71.3995896,
                        latitudeDelta: 0.035,
                        longitudeDelta: 0.0321,
                    }}
                    ref={(ref) => { this.mapRef = ref }}
                >
                    {this.state.markers.map((marker, idx) => (
                        <MapView.Marker
                            coordinate={marker.coordinates}
                            title={marker.title}
                            key={idx}
                            pinColor={idx == 0 ? "#1578d0" : "red"}
                        />
                    ))}
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
        backgroundColor: '#F5F5F5',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});