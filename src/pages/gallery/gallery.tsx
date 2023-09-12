import React from 'react';
import {Image, Pressable, View} from "react-native";
import {Images} from "../images/images";
import {TextBold, TextRegular} from "../../components/styles/text/text-style";
import {useAppSelector} from "../../store/hooks";
import {RootState} from "../../store/store";
import {yearMonthFormatDate} from "../../tools/tools";
import {styles} from "./styles";
import {getSelectedDate} from "../../store/memoizedSelectors";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation";


type Gallery = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Gallery'>;
}
export const Gallery = ({navigation}: Gallery) => {
    const {camera, abbreviation} = useAppSelector((state: RootState) => state.camera)
    const date = useAppSelector(getSelectedDate);
    const onPressHandler = () => navigation.replace('Main')

    return (
        <View style={styles.root}>
            <Pressable style={styles.backBtn} onPress={onPressHandler}>
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


