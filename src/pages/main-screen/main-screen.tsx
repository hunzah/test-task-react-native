import React from 'react';
import {Button, Image, View} from 'react-native';
import {CameraSelect} from '../../components/select-camera/select-camera';
import {SelectDate} from "../../components/select-date/select-date";
import {TextBold, TextRegular} from "../../components/styles/text/text-style";
import {styles} from "./styles";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation";

type MainScreen = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Main'>;
}

const titleText = 'Select Camera and Date'
const roverCameraText = 'Rover Camera'
const dateText = 'Date'
export const MainScreen = ({navigation}:MainScreen) => {
    const onPressHandler = () => navigation.replace('Gallery')

    return (
        <View style={styles.root}>
            <TextBold>{titleText}</TextBold>
            <View style={styles.inputsAndBtn}>
                <View>
                    <TextRegular style={styles.text}>{roverCameraText}</TextRegular>
                    <CameraSelect/>
                </View>
                <View>
                    <TextRegular style={styles.text}>{dateText}</TextRegular>
                    <SelectDate/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Explore" color={'#FFFFFF'} onPress={onPressHandler}/>
                </View>
            </View>
            <Image source={require('../../assets/images/main-back-image.png')} style={styles.image}/>
        </View>
    );
};


