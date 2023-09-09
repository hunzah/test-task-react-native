import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {CameraSelect} from '../../src/components/camera-select/Select';
import {DateSelect} from "../../src/components/choose-date/choose-date";

export const MainScreen = ({navigation}) => {

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Select Camera and Date</Text>
            <View style={styles.inputsAndBtn}>
                <View>
                    <Text style={styles.text}>Rover Camera</Text>
                    <CameraSelect/>
                </View>
                <View>
                    <Text style={styles.text}>Date</Text>
                    <DateSelect/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Explore" color={'#FFFFFF'} onPress={() => navigation.replace('Gallery')}/>
                </View>
            </View>
            <Image source={require('../../src/assets/images/main-back-image.png')} style={styles.image}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCCEBE',
        paddingTop: 42,
    },
    title: {
        fontFamily: 'Dosis-Regular',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 22,
    },
    image: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        bottom: 0,
        zIndex: -1,
    },
    inputsAndBtn: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 16,
        position: 'absolute',
        bottom: 300,
    },
    text: {
        fontFamily: 'Dosis-Regular',
        fontSize: 14,
        fontWeight: '400',
        letterSpacing: 0.28,
    },
    buttonContainer: {
        width: 327,
        height: 60,
        justifyContent: 'center',
        marginTop: 24,
        backgroundColor: '#BF2E0E',
        borderRadius: 10,
        shadowColor: 'rgba(191, 46, 14, 0.20)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 14,
        elevation: 4,
    },
});
