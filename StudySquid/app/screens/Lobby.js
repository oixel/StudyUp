import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlayerBox from "./lobby/PlayerBox";
import AddPlayer from "./lobby/AddPlayer";

const Lobby = () => {
    const [players, setPlayers] = useState(["Krithika", "Kriti", "Divyanshi", "Oixel"]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lobby</Text>
            <PlayerBox style={styles.playerBox} players={players} />
            <AddPlayer style={styles.addPlayer} />
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