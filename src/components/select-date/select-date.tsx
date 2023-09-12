import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RootState} from "../../store/store";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setDate} from "../../store/appReducer";
import {dayMonthFormatChanger} from "../../tools/tools";
import {styles} from "./styles";

export const SelectDate = () => {
    const dispatch = useAppDispatch();
    const date = useAppSelector((state: RootState) => new Date(state.camera.date));

    const dateHandler = (event, value) => {
        dispatch(setDate(dayMonthFormatChanger(value)));
    }

    return (
        <View style={styles.root}>
            <DateTimePicker
                themeVariant={'dark'}
                value={date}
                mode="date"
                textColor={'white'}
                onChange={dateHandler}
            />
            <Image source={require('../../assets/icons/calendar.png')}/>
        </View>

    );
};


