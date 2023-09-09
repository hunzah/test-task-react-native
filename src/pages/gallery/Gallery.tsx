import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Images} from "../../components/images/images";
import {TextBold, TextRegular} from "../../components/styles/text-style";

type Props = {
    camera: string
    date: string
}
export const Gallery = ({navigation}, {camera, date}: Props) => {


    return (
        <View style={styles.root}>
            <Pressable style={styles.backBtn} onPress={() => navigation.replace('Main')}>
                <Image source={require('../../assets/icons/back-arrow.png')}/>
            </Pressable>
            <View style={styles.allText}>
                <TextBold>Select Camera and Date</TextBold>
                <TextRegular style={styles.text2}>18 Oct, 2021</TextRegular>
            </View>
            <Images camera={camera} date={date}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        position: "relative",
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCCEBE',
        gap: 16,
        paddingTop: 42,
    },
    allText: {
        width: 263,
        height: 46,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: '600',
        lineHeight: 22,
        letterSpacing: 0

    },
    text2: {
        fontSize: 13,
        lineHeight: 22,
        letterSpacing: 0
    },
    backBtn: {
        position: "absolute",
        width: 24,
        height: 24,
        top: 56,
        left: 16,
    }
});
