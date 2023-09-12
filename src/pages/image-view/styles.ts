import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    root: {
        position: "relative",
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        gap: 16,
        paddingTop: 42,
    },
    backBtn: {
        position: "absolute",
        width: 24,
        height: 24,
        top: 56,
        left: 16,
        margin: 5,

    },
    uploadBtn: {
        position: "absolute",
        width: 24,
        height: 24,
        top: 56,
        right: 16,
    },
    imgContainer: {
        width: '90%',
        height: '80%',
        borderRadius: 10
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    text: {
        color: 'white'
    }
});