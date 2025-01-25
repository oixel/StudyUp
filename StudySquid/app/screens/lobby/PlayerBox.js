import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import NameBar from "./NameBar";

const PlayerBox = ({ players }) => {
    return (
        <ScrollView style={styles.container}>
            {players.map((player, index) => (
                <NameBar key={index} player={player} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: '90%',
        minHeight: 250,
        maxHeight: 250,
        borderRadius: 12,
        backgroundColor: "lightgrey",
    }
});

export default PlayerBox