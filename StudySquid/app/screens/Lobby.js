import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import PlayerBox from "./lobby/PlayerBox";
import AddPlayerButton from "./lobby/AddPlayerButton";
import StartButton from "./lobby/StartButton";

import { useFonts } from 'expo-font';

import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';


const Lobby = ({ screen, setScreen, players, setPlayers }) => {
    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
        'PixelGame': require('../../assets/fonts/PixelGame.otf'),
    });

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Lobby</Text>
                <PlayerBox players={players} setPlayers={setPlayers} />
                <AddPlayerButton players={players} setPlayers={setPlayers} />
                <StartButton screen={screen} setScreen={setScreen} players={players} />
            </View>
        </>
    );
}

//just a comment
export default Lobby;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'PixelGame',
        fontSize: 100,
        marginBottom: -25,
    },
    backgroundImage: {
        position: 'absolute',
        width: "100%",
        height: "100%",
    }

});