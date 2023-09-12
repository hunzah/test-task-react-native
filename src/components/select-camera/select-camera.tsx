import React, {useState} from 'react';
import {FlatList, Image, Modal, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {TextRegular} from "../styles/text/text-style";
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
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const dispatch: AppDispatch = useAppDispatch();
    const selectedCamera = useAppSelector(state => state.camera.camera as string);
    const setModalOpen = () => setModalVisible(true)
    const setModalClose = () => setModalVisible(false)

    const handleCameraSelect = (camera: string) => {
        setModalClose()
        dispatch(setSelectedCamera(camera));
    }

    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.select}
                onPress={setModalOpen}
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
                    onPress={setModalClose}
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


