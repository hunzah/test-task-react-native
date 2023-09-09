import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TextBold, TextRegular, TextTini} from "../../components/styles/text-style";


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

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    allText: {
        backgroundColor: 'linear-gradient(180deg, #FFF 16.28%, #3A1707 185.27%)',
        position: 'absolute',
        left: 20,
        top: '10%',
        zIndex: 1,
    },
    textMain: {
        color:'white',
        textTransform: 'uppercase',
    },
    textSecond: {
        fontFamily: 'Dosis-Bold',
        color:'white',
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 0.48,
    },
});
