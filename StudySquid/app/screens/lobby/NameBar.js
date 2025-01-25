import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NameBar = ({ player }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconSection}></View>
            <View style={styles.nameSection}><Text>{player}</Text></View>
            <View style={styles.iconSection}></View>
        </View>
    );
}

export default NameBar;

const styles = StyleSheet.create({
    container: {
        minWidth: '90%',
        minHeight: 64,
        borderRadius: 12,
        backgroundColor: "pink",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 3
    },

    iconSection: {
        minHeight: 64,
        minWidth: 64,
        backgroundColor: 'blue'
    },

    nameSection: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 5
    }
});