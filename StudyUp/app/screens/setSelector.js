import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useFonts } from 'expo-font';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';

import questionData from '../../assets/data/questionSets';


const SetSelector = ({ screen, setScreen, setQuestionSet }) => {
    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
        'PixelGame': require('../../assets/fonts/PixelGame.otf'),
    });

    // Parse JSON question data from data files into array and move to next screen
    function loadQuestionSet(index) {
        setQuestionSet(questionData[index]);
        setScreen(screen + 1);
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Select Study Set!</Text>

                {/* Buttons for each study set */}
                {['Anatomy', 'Data Structure', 'Zoology', 'SWAMPHACK TRIVIA!'].map((set, index) => (
                    <TouchableOpacity index={index} key={index} onPress={() => { loadQuestionSet(index); }
                    }>
                        <Text style={styles.text}>{set}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.button} onPress={() => { setScreen(screen - 1) }}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>

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
        marginBottom: 25,
    },
    text: {
        paddingHorizontal: 8,
        borderWidth: 2,
        borderColor: '#20232a',
        borderRadius: 6,
        fontFamily: 'PixelGame',
        fontSize: 40,
        backgroundColor: '#F1EBB8',
        paddingTop: 5
    },
    backgroundImage: {
        position: 'absolute',
        width: "100%",
        height: "100%",
    },
    buttonText: {
        marginTop: 40,
        paddingTop: 4,
        paddingHorizontal: 8,
        borderWidth: 2,
        borderColor: '#20232a',
        borderRadius: 6,
        fontFamily: 'PixelGame',
        fontSize: 30,
        backgroundColor: '#ffdacc',

    }
});