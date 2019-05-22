import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, Linking, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, Platform, Share } from 'react-native';
import { FavoriteButton } from "../components/favorite-button.js";
import { RatingImage } from "../components/rating-image.js";
import { Fonts } from "../constants.js";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-community/async-storage';

const window = Dimensions.get('window');

export default class Detail extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = Platform.OS === 'ios' ? {
        title: 'Charity Details',
        headerTitleStyle: {
            fontFamily: Fonts.MetropolisBold,
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 5,
        }
    } :
        {
            title: 'Charity Details',
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

    openPage = (link) => {
        Linking.openURL(link);
    }

    donateNotSupported = (link) => {
        Alert.alert("In app donations not avaliable for this charity");
    }

    share = async () => {
        const charityData = this.props.navigation.getParam('charityData');
        let categoryName = "";
        if (charityData.category != undefined) {
            categoryName = charityData.category.categoryName;
        } else {
            categoryName = "No category..."
        }

        try {
            const result = await Share.share({
                message: `Check out this charity: ${categoryName}. I found it on this cool new app: https://givingapp.github.io/`
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }

    facebookShare = async () => {
        try {
            const facebookUser = await AsyncStorage.getItem("@facebookUser");
            if (facebookUser !== null) {
                const charityData = this.props.navigation.getParam('charityData');
                let categoryName = "";
                if (charityData.category != undefined) {
                    categoryName = charityData.category.categoryName;
                } else {
                    categoryName = "No category..."
                }

                try {
                    const result = await Share.share({
                        message: `Facebook check out this charity: ${categoryName}. I found it on this cool new app: https://givingapp.github.io/`
                    });

                    if (result.action === Share.sharedAction) {
                        if (result.activityType) {
                            // shared with activity type of result.activityType
                        } else {
                            // shared
                        }
                    } else if (result.action === Share.dismissedAction) {
                        // dismissed
                    }
                } catch (error) {
                    alert(error.message);
                }
            } else {
                Alert.alert("Facebook Account Required", "This feature requires signing up using a facebook account")
            }
        } catch (error) {
            alert(error);
        }
    }

    render() {
        const charityData = this.props.navigation.getParam('charityData');
        let categoryName = "";
        if (charityData.category != undefined) {
            categoryName = charityData.category.categoryName;
        } else {
            categoryName = "No category..."
        }

        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.header}>
                    <Text selectable={true} style={styles.headerText}>
                        {charityData.charityName}
                    </Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.boldDetailsText}>
                            Tagline
                            </Text>
                        <View style={styles.textContainer}>
                            <Text selectable={true} style={styles.tagLineTextContainer}>
                                {charityData.tagLine}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.boldDetailsText}>
                            Rating
                            </Text>
                        <View style={styles.rating}>
                            <RatingImage currentRating={charityData.currentRating} />
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.boldDetailsText}>
                            EIN
                            </Text>
                        <Text selectable={true} style={styles.detailsText}>
                            {charityData.ein}
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.boldDetailsText}>
                            Category
                            </Text>
                        <Text selectable={true} style={styles.detailsText}>
                            {categoryName}
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.buttonsContainer}>
                        <FavoriteButton
                            charityName={charityData.charityName}
                            ein={charityData.ein}
                            favoritesList={this.props.navigation.getParam('favList')}
                        />
                        <TouchableOpacity onPress={this.share}>
                            <Icon name="md-share" size={25} color="#1578d0" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 6 }} onPress={this.facebookShare}>
                            <Icon name="logo-facebook" size={25} color="#1578d0" />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer]}
                    onPress={() => this.openPage(charityData.websiteURL)}
                >
                    <Text style={styles.buttonText}>View charity website</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer]}
                    onPress={() => this.openPage(charityData.charityNavigatorURL)}
                >
                    <Text style={styles.buttonText}>View charity navigator page</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.buttonContainer]}
                    onPress={() => this.donateNotSupported()}
                >
                    <Text style={styles.buttonText}>Donate to this charity</Text>
                </TouchableOpacity>

                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.boldDetailsText}>
                            Mission
                            </Text>
                        <Text selectable={true} style={styles.detailsText}>
                            {charityData.mission.replace(/\<br\>/g, '').replace(/\. /g, '\.').replace(/\./g, '\. ')}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    headerText: {
        color: '#2d2d2d',
        fontWeight: 'bold',
        fontSize: 30,
        maxWidth: window.width - 30,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: window.width - 30,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        display: "flex",
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        width: window.width / 6,
        marginTop: 10
    },
    row: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: window.width - 30,
        marginLeft: 10,
        marginRight: 10
    },
    favoriteButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rating: {
        marginBottom: 3,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: "center"
    },
    textContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: "center"
    },
    tagLineTextContainer: {
        color: '#2d2d2d',
        fontSize: 14,
        fontFamily: Fonts.MetropolisItalic,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    detailsText: {
        color: '#2d2d2d',
        fontSize: 14,
        fontFamily: Fonts.Metropolis,
        margin: 5,
        textAlign: "center"
    },
    missionText: {
        color: '#2d2d2d',
        fontSize: 14,
        fontFamily: Fonts.Metropolis,
        margin: 5,
        textAlign: "center"
    },
    boldDetailsText: {
        color: '#2d2d2d',
        fontSize: 14,
        fontFamily: Fonts.MetropolisBold,
        textAlign: "center",
        marginTop: 10
    },
    buttonContainer: {
        backgroundColor: '#1578d0',
        paddingVertical: 12,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 30,
        width: window.width - 30
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: Fonts.Metropolis,
    }
});
