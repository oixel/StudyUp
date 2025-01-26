import React, { useState, useEffect, useRef } from 'react';
import { TextInput, View, StyleSheet, Image } from 'react-native';

const MAX_CHAR_COUNT = 10;

const NameBar = ({ index, players, setPlayers, focused, setFocused }) => {
    const textInputRef = useRef(null);

    const [newUsername, setNewUsername] = useState(players[index].name);

    // Ensures that currently typed, new username gets stored when a new text box gets clicked
    useEffect(() => {
        if (focused != index) {
            changeUsername();
        }
    }, [focused]);

    const changeUsername = () => {
        if (newUsername) {
            let newPlayers = [...players];
            newPlayers[index].name = newUsername;
            setPlayers(newPlayers);
        }
        else {
            setNewUsername(players[index].name);
            textInputRef.current.value = players[index].name;
        }
    }

    const deletePlayer = () => {
        let newPlayers = [...players];
        newPlayers.splice(index, 1);
        setPlayers(newPlayers);
    }

    return (
        <View
            style={[styles.container, (index % 2) ? styles.lightBackground : styles.darkBackground]} // add different emojis
        >
            <Image
                source={require('../../../assets/images/pinkSmileyIcon.png')} // add a smiley face icon
                style={styles.smileyIconImage}
            />
            <View style={styles.smileyIconImage}></View>

            <View style={styles.nameSection}>
                <TextInput
                    style={{ fontSize: 32, fontWeight: '400', paddingVertical: 12, fontFamily: "Handjet" }}
                    ref={textInputRef}
                    value={newUsername}
                    onChangeText={(text) => { if (text.length <= MAX_CHAR_COUNT) { setNewUsername(text) } }}
                    onSubmitEditing={changeUsername}
                    onTouchStart={() => { setFocused(index) }}
                >
                </TextInput>
            </View>
            <Image
                source={require('../../../assets/images/trashIcon.png')} // Adjust the path as needed
                style={styles.iconImage}
                onTouchStart={() => { deletePlayer() }}
            />

        </View >
    );
}

export default NameBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        paddingHorizontal: 8,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    iconImage: {
        width: 40,  // Adjust the width of the image
        height: 40, // Adjust the height of the image
        resizeMode: 'contain', // Ensure the image is contained within the box
        margin: 'auto'
    },

    smileyIconImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        margin: 'auto'
    },

    nameSection: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 5
    },

    lightBackground: {
        backgroundColor: "rgb(236, 200, 222)"
    },

    darkBackground: {
        backgroundColor: "rgb(142, 169, 209)",
    }
});