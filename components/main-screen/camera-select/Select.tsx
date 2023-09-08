import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image, Modal, FlatList, TouchableWithoutFeedback} from 'react-native';

export const CameraSelect = ({selectedCamera, onSelectCamera}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const cameras = [
        {label: "Камера 1"},
        {label: "Камера 2"},
        {label: "Камера 3"},
        {label: "Камера 4"},
        {label: "Камера 5"},
        {label: "Камера 6"},
        {label: "Камера 8"},
        {label: "Камера 9"},
        {label: "Камера 10"},
        {label: "Камера 11"},
        {label: "Камера 12"},
        {label: "Камера 13"},
        {label: "Камера 14"},
    ];

    const handleCameraSelect = (itemValue) => {
        onSelectCamera(itemValue);
        setModalVisible(false);
    };

    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.select}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={styles.text}>{selectedCamera}</Text>
                <Image
                    style={modalVisible && styles.rotatedIcon}
                    source={require('../../../assets/icons/open-select-arrow.png')}
                />
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
                            <FlatList
                                isTVSelectable={true}
                                data={cameras}
                                renderItem={({item}) => (
                                    <TouchableOpacity
                                        key={item.label}
                                        style={styles.modalItem}
                                        onPress={() => handleCameraSelect(item.label)}
                                    >
                                        <Text style={styles.text}>{item.label}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item) => item.label}
                                showsVerticalScrollIndicator={false}
                                initialNumToRender={1}

                            />
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
    rotatedIcon: {
        transform: [{rotate: '180deg'}],
    },
    modalBackground: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },

    modalContainer: {
        width: 300,
        height: 400,
        borderRadius: 10,
        backgroundColor: '#DCCEBE',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#DCCEBE',
        borderRadius: 10,
        padding: 16,
    },
    modalItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        fontFamily: 'Dosis-Regular',
        fontStyle: 'normal',
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: 0.36,
    },
});
