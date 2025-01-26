import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button} from 'react-native';

import  { useFonts } from 'expo-font';

import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';




const WelcomeScreen = ( { setScreen }) => {
    const[focused, setFocused] = useState(-1);

    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
        'PixelGame': require('../../assets/fonts/PixelGame.otf'),
        'KarmaticArcade': require('../../assets/fonts/ka1.ttf')
    });


    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }
    
    return (
        <>
            <ImageBackground
                source={require('../../assets/images/FullStartScreen.png')}
                style={styles.backgroundImage}
                onTouchStart={() => setFocused(-1)}
            />

            <View style={styles.container}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.title2}>Study</Text>
                <Text style={styles.title2}>Up!</Text>
            </View>
        </>
    );
}
export default WelcomeScreen;

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
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});

