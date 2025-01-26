<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
=======
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
>>>>>>> c39febbf3644dc0e14b4b357a987653bf4b2c091

import PlayerBox from "./lobby/PlayerBox";
import AddPlayerButton from "./lobby/AddPlayerButton";
import StartButton from "./lobby/StartButton";

<<<<<<< HEAD
import  { useFonts } from 'expo-font';

import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';

const Lobby = () => {
    const [players, setPlayers] = useState([]);
=======
const Lobby = ({ screen, setScreen, players, setPlayers }) => {
    const [focused, setFocused] = useState(-1);
>>>>>>> c39febbf3644dc0e14b4b357a987653bf4b2c091


    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
    });



    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }


    return (
<<<<<<< HEAD
        <View style={styles.container}>
            <Text style={styles.title}>Lobby</Text>
            <Text style={styles.test}>Font Test </Text>
            <Text style={styles.quicksand}>  Font Test 2 </Text>
            <PlayerBox players={players} setPlayers={setPlayers} />
            <AddPlayerButton players={players} setPlayers={setPlayers} />
            <StartButton />
        </View>
=======
        <>
            <ImageBackground
                source={require('../../assets/images/FullStartScreen.png')}
                style={styles.backgroundImage}
                onTouchStart={() => setFocused(-1)}
            />

            <View style={styles.container}>
                <Text style={styles.title}>Lobby</Text>
                <PlayerBox players={players} setPlayers={setPlayers} focused={focused} setFocused={setFocused} />
                <AddPlayerButton players={players} setPlayers={setPlayers} />
                <StartButton screen={screen} setScreen={setScreen} players={players} />
            </View>
        </>
>>>>>>> c39febbf3644dc0e14b4b357a987653bf4b2c091
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
<<<<<<< HEAD
        fontFamily: 'Raleway_400Regular',

    },
    test: {
        fontFamily: 'Handjet',

    },

    quicksand: {
        fontFamily: 'Quicksand_400Regular',
    },
=======
        fontSize: 32
    },
    backgroundImage: {
        position: 'absolute',
        width: "100%",
        height: "100%",
    }
>>>>>>> c39febbf3644dc0e14b4b357a987653bf4b2c091

});