import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const StartButton = () => {
    return (
        <View style={styles.startButton}>
            <Button
                onPress={() => { console.log("Start studying WIP") }}
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