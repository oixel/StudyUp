import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { useFonts } from 'expo-font';

import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';

const TaptheScreenToStart = ({ screen, setScreen }) => {
    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
        'PixelGame': require('../../assets/fonts/PixelGame.otf'),
    });

    return (
        <>
            <ImageBackground
                source={require('../../assets/images/plainBG.png')}
                style={styles.backgroundImage}
            />

            <View style={styles.container} onTouchStart={() => { setScreen(screen + 1); }}>
                <Text style={styles.title}>Tap the Screen to Start</Text>
            </View >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'PixelGame',
        fontSize: 70,
        textAlign: 'center',
        marginBottom: -25,
        transform: [{ rotate: '-90deg' }]
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});

export default TaptheScreenToStart;