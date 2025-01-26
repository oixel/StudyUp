import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const AddPlayerButton = ({ players, setPlayers }) => {
    const addPlayer = () => {
        setPlayers(
            [...players,
            {
                name: `Player ${players.length + 1}`,
                id: (players.length) ? players[players.length - 1].id + 1 : 0,
                score: 0
            }
            ]);
    }

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => { addPlayer() }}>
            <Text style={styles.buttonText}>+ Add Player</Text>
        </TouchableOpacity>
    )
}

export default AddPlayerButton

const styles = StyleSheet.create({
    button: {
        minWidth: '90%',
        minHeight: 48,
        backgroundColor: "rgb(86, 162, 144)",
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: "Handjet",
        fontSize: 28,
        paddingTop: 0,
        fontWeight: '600',
        color: "rgb(33, 76, 66)",
    }
})