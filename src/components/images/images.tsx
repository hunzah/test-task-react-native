import React, {useEffect} from 'react';
import {Text, View} from "react-native";
import {getMarsPhotos} from "../../store/get-mars-photos";

type Props = {
    camera: string
    date: string
}
export const Images = ({camera, date}: Props) => {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await getMarsPhotos({camera, date});
    //             // Обработка полученных данных или установка данных в состояние
    //         } catch (error) {
    //             // Обработка ошибки, если необходимо
    //         }
    //     }
    // })

    return (
        <View>
            <Text>
                {`camera: ${camera}, date: ${camera}`}
            </Text>
        </View>
    );
};

