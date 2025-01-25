import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

import NameBar from "./NameBar";

const PlayerBox = ({ players, setPlayers }) => {
    useEffect(() => {
        if (players.length) console.log("New Player Added");
    }, [players])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {players.map((_, index) => (
                <View key={index}><NameBar players={players} setPlayers={setPlayers} index={index} /></View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 24,

        minWidth: '90%',
        minHeight: 250,
        maxHeight: 250,
        borderRadius: 12,
        backgroundColor: "lightgrey",
    },
});

export default PlayerBox