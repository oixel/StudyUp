import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const NameBar = ({ players, setPlayers, index }) => {
    const changeUsername = (newUsername) => {
        let newPlayers = [...players];
        newPlayers[index] = newUsername;
        setPlayers(newPlayers);
    }

    const deletePlayer = () => {
        let newPlayers = [...players];
        newPlayers.splice(index, 1);
        setPlayers(newPlayers);
    }

    return (
        <View style={[styles.container, (index % 2) ? styles.lightBackground : styles.darkBackground]} >
            <View style={styles.iconSection}></View>
            <View style={styles.nameSection}><TextInput onChangeText={newUsername => changeUsername(newUsername)}>{players[index]}</TextInput></View>
            <View style={styles.trashIcon} onTouchStart={() => { deletePlayer() }}></View>
        </View >
    );
}

export default NameBar;

const styles = StyleSheet.create({
    container: {
        minWidth: '90%',
        minHeight: 64,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    iconSection: {
        minHeight: 64,
        minWidth: 64,
    },

    trashIcon: {
        minHeight: 48,
        minWidth: 48,
        margin: 12,
        padding: 0,
        backgroundColor: 'red'
    },

    nameSection: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 5
    },

    lightBackground: {
        backgroundColor: 'lightgrey'
    },

    darkBackground: {
        backgroundColor: 'grey'
    }
});