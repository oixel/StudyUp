import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuestionBar = (questionSet, question, result) => {
    console.log(question);
    console.log(result);

    return (
        <View style={styles.container}>
            <Text>{question}</Text>
        </View>
    )
}

export default QuestionBar

const styles = StyleSheet.create({
    container: {

    }
})