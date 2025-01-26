import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Keyboard } from 'react-native';

import { useFonts } from 'expo-font';

import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';

const LeaderBoard = ({ setScreen }) => {
    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
        'PixelGame': require('../../assets/fonts/PixelGame.otf'),
    });



    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }

    return (
        <>
            <ImageBackground
                source={require('../../assets/images/LeaderBoard.png')}
                style={styles.backgroundImage}
            />

            <View style={styles.container}>
                <Text style={styles.title}>LeaderBoard</Text>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0, // No expansion
        justifyContent: "flex-start", // Align content towards the top
        alignItems: "top", // Center horizontally
        marginTop: 10, // Push content down slightly from the top
    },
    title: {
        fontFamily: "PixelGame", // Use your font
        fontSize: 80, // Adjust font size to fit on one line
        textAlign: "center", // Center the text
        lineHeight: 80, // Add some spacing between lines (optional, if wrapping occurs)
        color: "#FFFFFF", // Adjust color if needed
        transform: [{ rotate: '-90deg' }]
    },
    backgroundImage: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
    },
});

export default LeaderBoard;