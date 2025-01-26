import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'

import QuestionBar from "./QuestionBar";

const Results = ({ screen, setScreen, questionSet, results, setResults }) => {
    const resultEntries = Object.entries(results);
    console.log(resultEntries);

    return (
        <View>
            <Text style={styles.title}> Results! </Text>
            <TouchableOpacity style={styles.button} onPress={() => { setResults({}); setScreen(screen + 1); }}>
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