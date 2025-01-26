import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DeviceMotion } from 'expo-sensors';

var phoneRotation = 0;

const passedRange = [40, 90];
const correctRange = [190, 250];

const HeadsUp = ({ screen, setScreen, isActive, questionSet }) => {
    rotation = { angle: 0 };

    DeviceMotion.setUpdateInterval(50);

    const [rotationState, setRotationState] = useState("");  // Stores the orientation of phone ("forward", "backward", or empty)

    const [seenQuestions, setSeenQuestions] = useState([]);  // Stores the indexes of questions that have been previously seen to avoid repeating questions 

    const [question, setQuestion] = useState("");  // Holds the current question being presented on forehead

    // Return a boolean on whether the current value fits into the given range
    const isBetween = (value, minimum, maximum) => {
        return minimum <= value && value <= maximum;
    }

    if (isActive) {
        useEffect(() => {
            const subscription = DeviceMotion.addListener(({ rotation }) => {
                phoneRotation = Math.abs(rotation.gamma) * 90;

                const passed = isBetween(phoneRotation, passedRange[0], passedRange[1]);
                const correct = isBetween(phoneRotation, correctRange[0], correctRange[1]);

                // Set the rotation state based on whether the phone falls into the current range
                if (passed && rotationState != "backward") {
                    setRotationState("backward");
                }
                else if (correct && rotationState != "forward") {
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

    useEffect(() => {
        if (rotationState == "backward") {
            setQuestion("Pass");
        }
        else if (rotationState == "forward") {
            setQuestion("Correct!");
        }
        else {
            let index = -1;

            if (questionSet.length === seenQuestions.length) {
                console.log("Hit the end. Program moving to next screen");
                setSeenQuestions([]);
                setScreen(screen + 1);
                return;
            }
            else {
                while (true) {
                    index = Math.floor(Math.random() * questionSet.length);

                    if (!seenQuestions.includes(index)) {
                        setSeenQuestions([...seenQuestions, index])
                        break;
                    }
                }

                setQuestion(questionSet[index]["question"]);
            }
        }
    }, [rotationState]);

    let backgroundColor = "white";

    if (rotationState === "forward") {
        backgroundColor = "green";
    }
    else if (rotationState === "backward") {
        backgroundColor = "red";
    }

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.questionText}>{question}</Text>
        </View>
    )
}

export default HeadsUp

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 10000,
        height: 10000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '-90deg' }]

    },
    questionText: {
        fontSize: 120
    }
})