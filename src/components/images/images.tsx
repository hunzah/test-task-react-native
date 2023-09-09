import React from 'react';
import {View, Image, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {useGetPhotosQuery} from "../../store/base-api";
import {TextBold, TextRegular} from "../styles/text-style";

type Props = {
    camera: string
    date: string
}
export const Images = ({camera, date}: Props) => {
    const {data, error, isLoading} = useGetPhotosQuery({camera: 'FHAZ', date: '2021-10-18'});

    if (isLoading) {
        return <TextRegular>Loading...</TextRegular>;
    }

    if (error) {
        return <TextRegular>Error: {error.message}</TextRegular>;
    }

    if (!data) {
        return <TextRegular>No data available</TextRegular>;
    }

    return (
        <FlatList
            // style={styles.root}
            data={data.photos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                !item.img_src ? (
                    <TextRegular key={item.id}>No photos found. Please try changing the camera or date</TextRegular>
                ) : (
                    <TouchableOpacity>
                        <Image style={styles.img} source={{uri: item.img_src}}/>
                    </TouchableOpacity>
                )
            )}
            numColumns={3}
        />
    );
}

const styles = StyleSheet.create({
    img: {
        margin: 8,
        width: 109,
        height: 109,
        borderRadius: 10,
    },
});