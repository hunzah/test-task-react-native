import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from "react-native";
import {useGetPhotosQuery} from "../../store/base-api";
import {TextRegular} from "../../components/styles/text/text-style";
import {NavigationProp, ParamListBase, useNavigation} from "@react-navigation/native";
import {styles} from "./styles";

type Images = {
    abbreviation: string
    date: string
}
const loadingText = 'Loading...'
const errorText = 'Error: Something went wrong.'
const NoPhotoFoundsText = 'No photos found. Please try to change camera or date'
export const Images = ({abbreviation, date}: Images) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation()
    const {data, error, isLoading} = useGetPhotosQuery({abbreviation: abbreviation, date: date});


    const onPressHandler = (id: number, src: string) => {
        navigation.navigate('ImageView', {id, src});
    };
    if (isLoading) {
        return <TextRegular>{loadingText}</TextRegular>;
    }

    if (error) {
        return <TextRegular>{errorText}</TextRegular>;
    }

    if (!data.photos[0]) {
        return <TextRegular>{NoPhotoFoundsText}</TextRegular>;
    }
    return (
        <View>
            <FlatList
                data={data.photos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => onPressHandler(item.id, item.img_src)}>
                            <Image style={styles.img} source={{uri: item.img_src}}/>
                        </TouchableOpacity>
                    )
                }}
                numColumns={3}
            />
        </View>
    );
}

