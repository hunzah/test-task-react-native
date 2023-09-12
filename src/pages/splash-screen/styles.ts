import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    root: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: '100%',

    },
    allText: {
        position: 'absolute',
        left: 20,
        top: '10%',
        zIndex: 1,
    },
    textMain: {
        color: 'white',
        textTransform: 'uppercase',
    },
    textSecond: {
        fontFamily: 'Dosis-Bold',
        color: 'white',
        paddingTop: 1,
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 0.48,
    },
});
