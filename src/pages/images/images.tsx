import React from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {useGetPhotosQuery} from "../../store/base-api";
import {TextRegular} from "../../components/styles/text-style";
import {useNavigation} from "@react-navigation/native";
import {styles} from "./styles";

type Props = {
    abbreviation: string
    date: string
}
export const Images = ({abbreviation, date}: Props) => {
    const navigation: any = useNavigation()
    const {data, error, isLoading} = useGetPhotosQuery({abbreviation: abbreviation, date: date});

    if (isLoading) {
        return <TextRegular>Loading...</TextRegular>;
    }

    if (error) {
        return <TextRegular>Error: Something went wrong.</TextRegular>;
    }

    if (!data.photos[0]) {
        return <TextRegular>No photos found. Please try to change camera or
            date</TextRegular>;
    }
    return (
        <View>
            <FlatList
                data={data.photos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ImageView', {id: item.id, src: item.img_src})}>
                            <Image style={styles.img} source={{uri: item.img_src}}/>
                        </TouchableOpacity>

                    )
                }}
                numColumns={3}
            />
        </View>
    );
}

