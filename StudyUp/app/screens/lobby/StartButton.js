import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const StartButton = ({ screen, setScreen, players }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => { if (players.length > 1) setScreen(screen + 1) }}
        >
            <Text style={styles.buttonText}>Start Studying!</Text>
        </TouchableOpacity>
    )
}

export default StartButton

const styles = StyleSheet.create({
    button: {
        minWidth: '90%',
        minHeight: 48,
        backgroundColor: "#ffd1c3",
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: "Handjet",
        fontSize: 28,
        paddingTop: 0,
        fontWeight: '600',
        color: "#875b4d",
    }
})