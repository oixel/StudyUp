import { StyleSheet, View, Button } from 'react-native'
import React from 'react'

const AddPlayerButton = ({ players, setPlayers }) => {
    const addPlayer = () => {
        setPlayers([...players, "New Player"]);
    }

    return (
        <View style={styles.addPlayerButton}>
            <Button
                onPress={() => addPlayer()}
                title="+ Add Player"
                accessibilityLabel="Add a new player to lobby."
                color='white'
            />
        </View>
    )
}

export default AddPlayerButton

const styles = StyleSheet.create({
    addPlayerButton: {
        minWidth: '90%',
        minHeight: 48,
        backgroundColor: "rgb(20, 27, 103)",
        justifyContent: 'center',
        borderRadius: 12
    },
})