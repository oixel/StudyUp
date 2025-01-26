import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DeviceMotion } from 'expo-sensors';

var phoneRotation = 0;
var passRotation = 40;
var correctRotation = 230;

const HeadsUp = ({ isActive }) => {
    rotation = { angle: 0 };

    DeviceMotion.setUpdateInterval(50);

    const [answered, setAnswered] = useState(false);
    const [rotationState, setRotationState] = useState("");

    if (isActive) {
        useEffect(() => {
            const subscription = DeviceMotion.addListener(({ rotation }) => {
                phoneRotation = Math.abs(rotation.gamma) * 90;

                let passed = phoneRotation < 50 && phoneRotation > 40;
                let correct = phoneRotation < 250 && phoneRotation > 210;


                if (passed) {
                    setRotationState("back");
                }
                else if (correct) {
                    setRotationState("forward");
                }
                else {
                    setRotationState("");
                }
            });

            return () => {
                DeviceMotion.removeAllListeners();
            }
        }, []);

        useEffect(() => {
            console.log(rotationState);
        }, [rotationState])


    }
    return (
        <View>
            <Text>HeadsUp</Text>
        </View>
    )
}

export default HeadsUp

const styles = StyleSheet.create({})