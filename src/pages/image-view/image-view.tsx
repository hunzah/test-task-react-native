import React, {useState} from 'react';
import {Alert, Image, Pressable, View} from "react-native";
import {TextBold, TextRegular} from "../../components/styles/text/text-style";
import {RouteProp, useNavigation} from "@react-navigation/native";
import {styles} from "./styles";
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';

type ImageView = { route: RouteProp<{ ImageView: Params }, 'ImageView'> }
type Params = {
    id: number
    src: string
}

export const ImageView = ({route}: ImageView) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const navigation: any = useNavigation()
    const {id, src} = route.params
    const titleText = 'Photo ID'


    const handleSaveImage = async () => {

        const {status} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        try {
            if (status === 'granted') {
                setIsDisabled(true)
                let uriString = src.toString();
                const localuri = await FileSystem.downloadAsync(uriString, FileSystem.documentDirectory + 'image.jpg');

                const asset = await MediaLibrary.createAssetAsync(localuri.uri);

                await MediaLibrary.createAlbumAsync("Downloads", asset);
                setTimeout(() => {
                    Alert.alert('Success', 'Image saved successfully');
                    setIsDisabled(false)
                }, 1000);

            }
        } catch (error) {
            Alert.alert('Error', 'Failed to save image');
        }
    };


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
            <Pressable style={[
                styles.uploadBtn,
                isDisabled && styles.disabledUploadBtn,
            ]} onPress={handleSaveImage} disabled={isDisabled}>
                <Image source={require('../../assets/icons/upload.png')}/>
            </Pressable>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: src}}/>
            </View>
        </View>
    );
};

