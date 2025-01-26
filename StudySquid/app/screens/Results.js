import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const Results = ({ screen, setScreen, results, setResults }) => {
    return (
        <View>
            <Text style={styles.title}> Results! </Text>
            <TouchableOpacity style={styles.button} onPress={() => { setScreen(screen + 1) }}>
                <Text style={styles.buttonText}>Tap to view Leader Board!</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Results

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'PixelGame',
        fontSize: 100,
        
    },
    buttonText: {
        marginTop: 40,
        paddingTop: 4,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#20232a',
        borderRadius: 6,
        fontFamily: 'PixelGame',
        fontSize: 30,
        backgroundColor: '#ffdacc',

      }

})