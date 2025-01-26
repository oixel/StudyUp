import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlayerBox from "./lobby/PlayerBox";
import AddPlayerButton from "./lobby/AddPlayerButton";
import StartButton from "./lobby/StartButton";

import  { useFonts } from 'expo-font';

import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';

const Lobby = () => {
    const [players, setPlayers] = useState([]);


    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
    });



    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lobby</Text>
            <Text style={styles.test}>Font Test </Text>
            <Text style={styles.quicksand}>  Font Test 2 </Text>
            <PlayerBox players={players} setPlayers={setPlayers} />
            <AddPlayerButton players={players} setPlayers={setPlayers} />
            <StartButton />
        </View>
    );
}

export default Lobby;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Raleway_400Regular',

    },
    test: {
        fontFamily: 'Handjet',

    },

    quicksand: {
        fontFamily: 'Quicksand_400Regular',
    },

});