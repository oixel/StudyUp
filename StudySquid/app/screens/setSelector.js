import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import  { useFonts } from 'expo-font';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';


const setSelector = ({ screen, setScreen, players, setPlayers }) => {
  

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
            <View style={styles.container}>
                <Text style={styles.title}>Select Study Set</Text>
            </View>
        
    );
}

//just a comment
export default setSelector;