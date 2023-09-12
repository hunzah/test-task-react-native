import React from 'react';
import {Image, Pressable, StyleSheet, View} from "react-native";
import {TextBold, TextRegular} from "../../components/styles/text-style";
import {useNavigation} from "@react-navigation/native";
import RNFetchBlob from "rn-fetch-blob";
import {styles} from "./styles";

export const ImageView = ({route}: any) => {
    const navigation: any = useNavigation()
    const {id, src} = route.params

    return (
        <View style={styles.root}>
            <Pressable style={styles.backBtn} onPress={() => navigation.navigate('Gallery')}>
                <Image source={require('../../assets/icons/back-arrow-white.png')}/>
            </Pressable>
            <View>
                <TextRegular style={styles.text}>Photo ID</TextRegular>
                <TextBold style={styles.text}>{id.toString()}</TextBold>
            </View>
            <Pressable style={styles.uploadBtn} >
                <Image source={require('../../assets/icons/upload.png')}/>
            </Pressable>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: src}}/>
            </View>
        </View>
    );
};

