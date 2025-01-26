import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import NameBar from "./NameBar";

const PlayerBox = ({ players, setPlayers }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {players.map((_, index) => (
                <View key={index}>
                    <NameBar
                        index={index}
                        players={players}
                        setPlayers={setPlayers}
                    />
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 24,

        minWidth: '90%',
        maxWidth: '90%',
        minHeight: 250,
        maxHeight: 250,
        borderRadius: 12,
        backgroundColor: "lightgrey",
    },
});

export default PlayerBox