import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DeviceMotion } from 'expo-sensors';

var phoneRotation = 0;
var passRotation = 40;
var correctRotation = 230;

const passedRange = [40, 90];
const correctRange = [190, 250];

const HeadsUp = ({ isActive }) => {
    rotation = { angle: 0 };

    DeviceMotion.setUpdateInterval(50);

    const [vocab, setVocab] = useState("Cat");
    const [rotationState, setRotationState] = useState("");

    const isBetween = (value, minimum, maximum) => {
        return minimum <= value && value <= maximum;
    }

    if (isActive) {
        useEffect(() => {
            const subscription = DeviceMotion.addListener(({ rotation }) => {
                phoneRotation = Math.abs(rotation.gamma) * 90;

                const passed = isBetween(phoneRotation, passedRange[0], passedRange[1]);
                const correct = isBetween(phoneRotation, correctRange[0], correctRange[1]);


                if (passed) {
                    setRotationState("backward");
                }
                else if (correct) {
                    setRotationState("forward");
                }
                else {
                    setRotationState("");
                }
            });

            return () => {
                subscription.remove();
            }
        }, []);
    }

    let backgroundColor = "white";
    if (rotationState === "forward") backgroundColor = "green";
    else if (rotationState === "backward") backgroundColor = "red";

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.vocabText}>{vocab}</Text>
        </View>
    )
}

export default HeadsUp

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    vocabText: {
        transform: [{ rotate: '-90deg' }],
        fontSize: 120
    }
})