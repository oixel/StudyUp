import React, { useState, useEffect, useRef } from 'react';
import { TextInput, View, StyleSheet, Keyboard, Image } from 'react-native';

const NameBar = ({ index, players, setPlayers, focused, setFocused }) => {
    const textInputRef = useRef(null);

    const [newUsername, setNewUsername] = useState(players[index]);

    useEffect(() => {
        // Sets focus on newly created Name Bar
        if (focused == index) textInputRef.current?.focus();
    }, [focused]);

    const changeUsername = () => {
        if (newUsername) {
            let newPlayers = [...players];
            newPlayers[index] = newUsername;
            setPlayers(newPlayers);
        }
        else {
            setNewUsername(players[index]);
            textInputRef.current.value = players[index];
        }
    }

    const deletePlayer = () => {
        let newPlayers = [...players];
        newPlayers.splice(index, 1);
        setPlayers(newPlayers);
    }

    return (
        <View
            style={[styles.container, (index % 2) ? styles.lightBackground : styles.darkBackground]}
        >
            <View style={styles.iconSection} ></View>
            <View style={styles.nameSection}>
                <TextInput
                    style={{ fontSize: 24, fontWeight: '600', paddingVertical: 12 }}
                    ref={textInputRef}
                    onChangeText={(input) => { setNewUsername(input) }}
                    onSubmitEditing={() => { changeUsername(); }}
                >
                    {newUsername}
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

    iconSection: {
        height: 48,
        width: 48,
        marginVertical: 'auto',
        marginRight: 16,
        padding: 0,
        backgroundColor: 'blue',
        borderRadius: 24
    },
    iconImage: {
        width: 40,  // Adjust the width of the image
        height: 40, // Adjust the height of the image
        resizeMode: 'contain', // Ensure the image is contained within the box
        margin: 'auto'
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