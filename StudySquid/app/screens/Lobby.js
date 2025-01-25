import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlayerBox from "./lobby/PlayerBox";
import AddPlayerButton from "./lobby/AddPlayerButton";
import StartButton from "./lobby/StartButton";

const Lobby = ({ screen, setScreen }) => {
    const [players, setPlayers] = useState([]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lobby</Text>
            <PlayerBox players={players} setPlayers={setPlayers} />
            <AddPlayerButton players={players} setPlayers={setPlayers} />
            <StartButton screen={screen} setScreen={setScreen} />
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
        fontSize: 32
    }
});