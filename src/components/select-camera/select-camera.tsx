import React, {useState} from 'react';
import {FlatList, Image, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {TextRegular} from "../styles/text-style";
import {setSelectedCamera} from "../../store/appReducer";
import {AppDispatch} from "../../store/store";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {styles} from "./styles";


const cameras: { camera: string }[] = [
    {camera: "Front Hazard Avoidance Camera"},
    {camera: "Rear Hazard Avoidance Camera"},
    {camera: "Mast Camera"},
    {camera: "Chemistry and Camera Complex"},
    {camera: "Mars Hand Lens Image"},
    {camera: "Mars Descent Imager"},
    {camera: "Navigation Camera"},
    {camera: "Panoramic Camera"},
    {camera: "Miniature Thermal Emission Spectrometer (Mini-TES)"},
];
export const CameraSelect = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch: AppDispatch = useAppDispatch();
    const selectedCamera = useAppSelector(state => state.camera.camera as string);
    const handleCameraSelect = (camera: string) => {
        setModalVisible(false)
        dispatch(setSelectedCamera(camera));
    }
    // const handleCameraSelect = (camera: string) => {
    //     setModalVisible(false)
    //     dispatch(setSelectedCamera(camera));
    // }

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


