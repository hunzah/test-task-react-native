import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {CameraSelect} from '../../components/select-camera/select-camera';
import {SelectDate} from "../../components/select-date/select-date";
import {TextBold, TextRegular} from "../../components/styles/text-style";
import {styles} from "./styles";

export const MainScreen = ({navigation}) => {

    return (
        <View style={styles.root}>
            <TextBold>Select Camera and Date</TextBold>
            <View style={styles.inputsAndBtn}>
                <View>
                    <TextRegular style={styles.text}>Rover Camera</TextRegular>
                    <CameraSelect/>
                </View>
                <View>
                    <TextRegular style={styles.text}>Date</TextRegular>
                    <SelectDate/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Explore" color={'#FFFFFF'} onPress={() => navigation.replace('Gallery')}/>
                </View>
            </View>
            <Image source={require('../../assets/images/main-back-image.png')} style={styles.image}/>
        </View>
    );
};


