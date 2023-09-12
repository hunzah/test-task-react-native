import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TextBold, TextRegular, TextTini} from "../../components/styles/text-style";
import {styles} from "./styles";


export const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 2000);
    }, []);

    return (
        <View style={styles.root}>
            <View style={styles.allText}>
                <TextTini style={styles.textMain}>Mars</TextTini>
                <TextBold style={styles.textSecond}>by Curiosity</TextBold>
            </View>
            <Image source={require('../../assets/images/splash.png')} style={styles.image}/>
        </View>
    );
};

