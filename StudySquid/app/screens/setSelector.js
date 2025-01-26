import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import { useFonts } from 'expo-font';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';


const SetSelector = ({ screen, setScreen, questionSet, setQuestionSet }) => {
    const [focused, setFocused] = useState(-1);

    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
        'PixelGame': require('../../assets/fonts/PixelGame.otf'),
    });

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }

    // Parse JSON question data from data files into array
    const loadQuestionSet = (index) => {
        console.log("Loading question set", index);
        setScreen(screen + 1);
    }

    return (
        <>
            <ImageBackground
                source={require('../../assets/images/FullStartScreen.png')}
                style={styles.backgroundImage}
                onTouchStart={() => setFocused(-1)}
            />
            <View style={styles.container}>
                <Text style={styles.title}>Select Study Set!</Text>

                {/* Buttons for each study set */}
                {['SWAMPHACK TRIVIA!', 'Anatomy', 'Data Structure', 'Zoology'].map((set, index) => (
                    <TouchableOpacity index={index} key={index} onPress={() => { loadQuestionSet(index); }
                    }>
                        <Text style={styles.text}>{set}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>


    );
}

//just a comment
export default SetSelector;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        alignItems: 'center',
        fontFamily: 'PixelGame',
        fontSize: 50,
        marginBottom: 30,
    },
    text: {
        paddingHorizontal: 8,
        borderWidth: 2,
        borderColor: '#20232a',
        borderRadius: 6,
        fontFamily: 'PixelGame',
        fontSize: 30,
        backgroundColor: '#F1EBB8',
    },
    backgroundImage: {
        position: 'absolute',
        width: "100%",
        height: "100%",
    }

});