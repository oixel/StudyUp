import { StyleSheet, View, Button } from 'react-native'
import React from 'react'

const StartButton = ({ screen, setScreen, players }) => {
    return (
        <View style={styles.startButton}>
            <Button
                onPress={() => { if (players.length > 1) setScreen(screen + 1) }}
                title="Start Studying!"
                accessibilityLabel="Start studying!"
                color='white'
            />
        </View>
    )
}

export default StartButton

const styles = StyleSheet.create({
    startButton: {
        minWidth: '90%',
        minHeight: 48,
        backgroundColor: '#eb5c52',
        justifyContent: 'center',
        borderRadius: 12
    },
})