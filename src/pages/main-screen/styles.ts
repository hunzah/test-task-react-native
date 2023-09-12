import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCCEBE',
        paddingTop: 42,
    },
    image: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        bottom: 0,
        zIndex: -1,
    },
    inputsAndBtn: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 16,
        position: 'absolute',
        bottom: 300,
    },
    text: {
        fontSize: 14,
        letterSpacing: 0.28,
    },
    buttonContainer: {
        width: 327,
        height: 60,
        justifyContent: 'center',
        marginTop: 24,
        backgroundColor: '#BF2E0E',
        borderRadius: 10,
        shadowColor: 'rgba(191, 46, 14, 0.20)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 14,
        elevation: 4,
    },
});