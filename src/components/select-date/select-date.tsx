import React from 'react';
import {Image, View} from 'react-native';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setDate} from "../../store/appReducer";
import {dayMonthFormatChanger} from "../../tools/tools";
import {styles} from "./styles";
import {getSelectedDate} from "../../store/memoizedSelectors";

export const SelectDate = () => {
    const dispatch = useAppDispatch();
    const date = useAppSelector(getSelectedDate);
    const dateHandler = (event: DateTimePickerEvent, value: Date) => {
        dispatch(setDate(dayMonthFormatChanger(value)));
    }

    return (
        <View style={styles.root}>
            <DateTimePicker
                themeVariant={'dark'}
                value={new Date(date)}
                mode="date"
                textColor={'white'}
                onChange={dateHandler}
            />
            <Image source={require('../../assets/icons/calendar.png')}/>
        </View>

    );
};


