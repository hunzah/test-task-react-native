import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image, Modal, FlatList, TouchableWithoutFeedback} from 'react-native';
import {TextRegular} from "../styles/text-style";


const cameras = [
    {camera: "Front Hazard Avoidance Camera"},
    {camera: "Rear Hazard Avoidance Camera"},
    {camera: "Mast Camera"},
    {camera: "Chemistry and Camera Complex"},
    {camera: "Mars Hand Lens Image"},
    {camera: "Mars Descent Imager"},
    {camera: "Navigation Camera"},
    {camera: "Panoramic Camera"},
    {camera: "Miniature Thermal Emission Spectrometer (Mini-TES)\t"},
];
export const CameraSelect = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCamera, setSelectedCamera] = useState<string>(cameras[0].camera);

    const handleCameraSelect = (el)=> {
        setSelectedCamera(el)
        setModalVisible(false)
    }

    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.select}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <TextRegular>{selectedCamera}</TextRegular>
                <Image
                    style={modalVisible && styles.rotatedIcon}
                    source={require('../../assets/icons/open-select-arrow.png')}
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
                                keyExtractor={(item) => item.camera}
                                showsVerticalScrollIndicator={false}
                                initialNumToRender={1}
                                renderItem={({item, index}) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.modalItem}
                                        onPress={() => handleCameraSelect(item.camera)}
                                    >
                                        <TextRegular>{item.camera}</TextRegular>
                                    </TouchableOpacity>
                                )}
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
    },
});
