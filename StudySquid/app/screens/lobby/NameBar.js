import React, { useState, useEffect, useRef } from 'react';
import { TextInput, View, StyleSheet, Keyboard } from 'react-native';

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
            console.log("Not allowed")
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
            <View style={styles.iconSection} onTouchStart={() => { console.log("Change profile icon WIP!") }}></View>
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
            <View
                style={styles.trashIcon}
                onTouchStart={() => { deletePlayer() }}
            ></View>
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

    trashIcon: {
        minHeight: 32,
        minWidth: 32,
        marginVertical: 'auto',
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