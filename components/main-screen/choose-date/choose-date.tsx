import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View,} from 'react-native';

export const DateSelect = ({selectedDate, onSelectDate}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleDateSelect = (date) => {
        onSelectDate(date);
        setModalVisible(false);
    };

    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.select}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={styles.text}>12.3.2023</Text>
                <Image source={require('./../../../assets/icons/calendar.png')}/>
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            {/*<DatePickerIOS*/}
                            {/*    style={styles.datePicker}*/}
                            {/*    date={new Date()} // Используйте выбранную дату*/}
                            {/*    mode="date"*/}
                            {/*    onDateChange={handleDateSelect}*/}
                            {/*/>*/}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        position: 'relative',
    },
    text: {
        fontFamily: 'Dosis-Regular',
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: 0.36,
        color: 'black',
    },
    select: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 327,
        height: 60,
        paddingRight: 12,
        paddingLeft: 16,
        borderRadius: 10,
        backgroundColor: 'rgba(236,228,222,0.71)',
        marginTop: 7,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 300,
        height: 400,
        borderRadius: 10,
        backgroundColor: '#DCCEBE',
        alignItems: 'center',
    },
    datePicker: {
        marginTop: 20,
    },
});