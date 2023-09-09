import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Images} from "../../components/images/images";

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
                <Text style={styles.title}>
                    Select Camera and Date
                </Text>
                <Text style={styles.text2}>18 Oct, 2021</Text>
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
        fontFamily: 'Dosis-Regular',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 22,
    },
    text2: {
        fontFamily: 'Dosis-Regular',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 22,
    },
    backBtn: {
        position: "absolute",
        width: 24,
        height: 24,
        top: 56,
        left: 16,
    }
});
