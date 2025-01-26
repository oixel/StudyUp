import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground,  TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import  { useFonts } from 'expo-font';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';


const setSelector = () => {
    const [focused, setFocused] = useState(-1);
    const navigation = useNavigation(); // Initialize navigation

    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Quicksand_400Regular,
        'Handjet': require('../../assets/fonts/Handjet.ttf'),
        'PixelGame': require('../../assets/fonts/PixelGame.otf'),
    });



    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
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
                    <TouchableOpacity key={index} onPress={() => { setScreen(screen + 1)}}>
                        <Text style={styles.text}>{set}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
            
        
    );
}

//just a comment
export default setSelector;

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