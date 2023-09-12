import React from 'react';
import {Image, Pressable, View} from "react-native";
import {TextBold, TextRegular} from "../../components/styles/text/text-style";
import {RouteProp, useNavigation} from "@react-navigation/native";
import {styles} from "./styles";

type ImageView = { route: RouteProp<{ ImageView: Params }, 'ImageView'> }
type Params = {
    id:number
    src:string
}

export const ImageView = ({route}: ImageView) => {
    const navigation: any = useNavigation()
    const {id, src} = route.params
    const titleText = 'Photo ID'
    const onPressHandler = () => navigation.navigate('Gallery')

    return (
        <View style={styles.root}>
            <Pressable style={styles.backBtn} onPress={onPressHandler}>
                <Image source={require('../../assets/icons/back-arrow-white.png')}/>
            </Pressable>
            <View>
                <TextRegular style={styles.text}>{titleText}</TextRegular>
                <TextBold style={styles.text}>{id.toString()}</TextBold>
            </View>
            <Pressable style={styles.uploadBtn}>
                <Image source={require('../../assets/icons/upload.png')}/>
            </Pressable>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: src}}/>
            </View>
        </View>
    );
};

