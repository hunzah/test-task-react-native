import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    root: {
        position: "relative",
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCCEBE',
        gap: 16,
        paddingTop: 42,
    },
    allText: {
        width: 263,
        height: 46,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: '600',
        lineHeight: 22,
        letterSpacing: 0

    },
    text2: {
        fontSize: 13,
        lineHeight: 22,
        letterSpacing: 0
    },
    backBtn: {
        position: "absolute",
        margin: 5,
        top: 56,
        left: 16,
    }
});