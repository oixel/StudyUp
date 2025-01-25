import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const AddPlayer = () => {
    return (
        <Button
            onPress={() => { console.log("Hey!") }}
            title="+ Add Player"
            color="#841584"
            accessibilityLabel="Add a new player to lobby."
        />
    )
}

export default AddPlayer

const styles = StyleSheet.create({
    container: {
        minWidth: '90%',
        minHeight: 48,
        borderRadius: 12,
        backgroundColor: 'grey',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusIcon: {
        minHeight: 48,
        minWidth: 48,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})