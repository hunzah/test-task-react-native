import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DateSelect = () => {
    const [date, setDate] = useState(new Date());

    return (
        <View style={styles.root}>
            <DateTimePicker
                themeVariant={'dark'}
                value={new Date()}
                mode="date"
                textColor={'white'}
            />
            <Image source={require('./../../../assets/icons/calendar.png')}/>
        </View>

    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 327,
        height: 60,
        paddingRight: 12,
        paddingLeft: 16,
        borderRadius: 10,
        backgroundColor: 'rgba(236,228,222,0.71)',
    },
});