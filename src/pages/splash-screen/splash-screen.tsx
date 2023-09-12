import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {styles} from "./styles";
import {GradientText} from "../../components/styles/gradient-text/gradient-text";
import {TextBold, TextTini} from "../../components/styles/text/text-style";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation";

type SplashScreen = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
}
const marsText = 'Mars'
const byCuriosityText = 'by Curiosity'
export const SplashScreen = ({navigation}: SplashScreen) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 2000);
    }, []);

    return (
        <View style={styles.root}>
            <View style={styles.allText}>
                <GradientText colors={['#FFF', '#3A1707']}>
                    <TextTini style={styles.textMain}>{marsText}</TextTini>
                </GradientText>
                <GradientText colors={['#FFF', '#3A1707']}>
                    <TextBold>{byCuriosityText}</TextBold>
                </GradientText>
            </View>
            <Image source={require('../../assets/images/splash.png')} style={styles.image}/>
        </View>
    );
};