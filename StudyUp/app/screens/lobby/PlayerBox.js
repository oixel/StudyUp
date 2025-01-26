import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

import NameBar from "./NameBar";

const PlayerBox = ({ players, setPlayers }) => {
    const [focused, setFocused] = useState(-1);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {players.map((_, index) => (
                <View key={index}>
                    <NameBar
                        index={index}
                        players={players}
                        setPlayers={setPlayers}
                        focused={focused}
                        setFocused={setFocused}
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
        borderRadius: 8,
        backgroundColor: "lightgrey",
        borderWidth: 3
    },
});

export default PlayerBox