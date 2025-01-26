import React, { useState, useEffect, useRef } from 'react';
import { TextInput, View, StyleSheet, Keyboard, Image } from 'react-native';



const NameBar = ({ index, players, setPlayers, focused, setFocused }) => {
    const textInputRef = useRef(null);

    const [newUsername, setNewUsername] = useState(players[index].name);

    useEffect(() => {
        // Sets focus on newly created Name Bar
        if (focused == index) textInputRef.current?.focus();
    }, [focused]);

    const changeUsername = () => {
        if (newUsername) {
            let newPlayers = [...players];
            newPlayers[index].name = newUsername;
            setPlayers(newPlayers);
        }
        else {
            console.log("Not allowed")
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
            <View style={styles.smileyIconImage} onTouchStart={() => { console.log("Change profile icon WIP!") }}></View>

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