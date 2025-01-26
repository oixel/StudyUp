import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Results = ({ screen, setScreen, results, setResults }) => {
    return (
        <View>
            <Text>Results</Text>
            <Button
                onPress={() => { setScreen(screen + 1) }}
                title="To Leaderboard =>"
                color='white'
            />
        </View>
    )
}

export default Results

const styles = StyleSheet.create({})