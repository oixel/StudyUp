import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useFonts } from 'expo-font';

import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';

const Welcome = ({ screen, setScreen }) => {
    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
        'PixelGame': require('../../assets/fonts/PixelGame.otf'),
        'KarmaticArcade': require('../../assets/fonts/ka1.ttf')
    });

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.title2}>Study</Text>
                <Text style={styles.title2}>Up!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => { setScreen(screen + 1) }}>Start!</Text>
                </TouchableOpacity>
            </View >
        </>
    );
}
export default Welcome;


// styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'PixelGame',
        fontSize: 75,
        marginBottom: -15,
        color: "rgb(77, 91, 111)"
    },
    title2: {
        fontFamily: 'KarmaticArcade',
        fontSize: 65,
        marginBottom: 0,
        color: "rgb(77, 91, 111)",
        alignItems: 'center',
    },
    button: {
        marginTop: 35,
        width: 200,
        height: 55,
        borderColor: "rgb(77, 91, 111)",
        borderRadius: 25,
        borderWidth: 2,
        backgroundColor: "rgb(220, 187, 207)",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        marginTop: 4,
        fontFamily: 'PixelGame',
        color: "rgb(77, 91, 111)",
        fontSize: 50
    }
});
