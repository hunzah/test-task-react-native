import React from 'react';
import {Image, Pressable, StyleSheet, View} from "react-native";
import {Images} from "../images/images";
import {TextBold, TextRegular} from "../../components/styles/text-style";
import {useAppSelector} from "../../store/hooks";
import {RootState} from "../../store/store";
import {yearMonthFormatDate} from "../../tools/tools";
import {styles} from "./styles";
import {NavigationProp} from "@react-navigation/native";


export const Gallery = ({navigation}) => {
    const camera = useAppSelector((state: RootState) => state.camera.camera)
    const abbreviation = useAppSelector((state: RootState) => state.camera.abbreviation)
    const date = useAppSelector((state: RootState) => state.camera.date)


    return (
        <View style={styles.root}>
            <Pressable style={styles.backBtn} onPress={() => navigation.replace('Main')}>
                <Image source={require('../../assets/icons/back-arrow.png')}/>
            </Pressable>
            <View style={styles.allText}>
                <TextBold>{camera}</TextBold>
                <TextRegular style={styles.text2}>{yearMonthFormatDate(date)}</TextRegular>
            </View>
            <Images date={date} abbreviation={abbreviation}/>
        </View>
    );
};


