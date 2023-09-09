import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


export const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 2000);
    }, []);

    return (
        <View style={styles.root}>
            <View style={styles.allText}>
                <Text style={styles.textMain}>Mars</Text>
                <Text style={styles.textSecond}>by Curiosity</Text>
            </View>
            <Image source={require('../../src/assets/images/splash.png')} style={styles.image}/>
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
        fontFamily: 'Dosis-Regular',
        fontStyle: 'normal',
        fontSize: 90,
        fontWeight: '300',
        letterSpacing: 1.8,
        textTransform: 'uppercase',
        color: 'white',
    },
    textSecond: {
        fontFamily: 'Dosis-Regular',
        fontStyle: 'normal',
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 0.48,
    },
});
