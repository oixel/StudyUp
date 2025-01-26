import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import QuestionBar from "./QuestionBar";

const Results = ({ screen, setScreen, questionSet, results, setResults }) => {
    const resultEntries = Object.entries(results);
    console.log(resultEntries);

    return (
        <View>
            <Button
                onPress={() => { setResults({}); setScreen(screen + 1); }} // Wipe previous player's results and move to leaderboard
                title="To Leaderboard =>"
                color='white'
            />
        </View>
    )
}

export default Results

const styles = StyleSheet.create({})